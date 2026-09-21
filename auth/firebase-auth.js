import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { firebaseConfig, allowedEmailDomain } from "./firebase-config.js";

const gate = document.getElementById("cidAuthGate");
const form = document.getElementById("cidAuthForm");
const emailInput = document.getElementById("cidAuthEmail");
const passwordInput = document.getElementById("cidAuthPassword");
const message = document.getElementById("cidAuthMessage");
const intro = document.getElementById("cidAuthIntro");
const submitButton = document.getElementById("cidAuthSubmit");
const signupButton = document.getElementById("cidAuthSignup");
const resetButton = document.getElementById("cidAuthReset");
const userBar = document.getElementById("cidAuthUser");
const userEmail = document.getElementById("cidAuthUserEmail");
const logoutButton = document.getElementById("cidAuthLogout");

const configReady = Object.values(firebaseConfig).every(value => value && !value.includes("REPLACE_ME"));
let auth;

function normaliseEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isAllowedEmail(email) {
  const normalised = normaliseEmail(email);
  return normalised.length > allowedEmailDomain.length && normalised.endsWith(allowedEmailDomain.toLowerCase());
}

function setMessage(text, success = false) {
  message.textContent = text;
  message.classList.toggle("success", success);
}

function lockDashboard() {
  gate.hidden = false;
  userBar.hidden = true;
  const dashboard = document.querySelector(".app");
  dashboard.setAttribute("aria-hidden", "true");
  dashboard.inert = true;
}

function unlockDashboard(user) {
  gate.hidden = true;
  userBar.hidden = false;
  userEmail.textContent = user.email || "Signed in";
  const dashboard = document.querySelector(".app");
  dashboard.removeAttribute("aria-hidden");
  dashboard.inert = false;
}

function explainError(error) {
  const messages = {
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/email-already-in-use": "This email already has an account. Sign in instead.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/too-many-requests": "Too many attempts. Try again later.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/network-request-failed": "Network error. Check your connection and try again."
  };
  return messages[error.code] || "Authentication failed. Check your Firebase settings and try again.";
}

async function requireApprovedUser(user) {
  if (!user) {
    lockDashboard();
    return;
  }
  if (!user.emailVerified) {
    lockDashboard();
    setMessage("Verify your email first. A verification link has been sent.");
    return;
  }
  if (!isAllowedEmail(user.email)) {
    await signOut(auth);
    lockDashboard();
    setMessage("Access denied. Use your @pw.live email address.");
    return;
  }
  unlockDashboard(user);
}

if (!configReady) {
  lockDashboard();
  intro.textContent = "Firebase is not configured yet. Add your Firebase Web App values in auth/firebase-config.js.";
  submitButton.disabled = true;
  signupButton.disabled = true;
  resetButton.disabled = true;
  setMessage("Authentication setup required before the dashboard can be opened.");
} else {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  onAuthStateChanged(auth, requireApprovedUser);

  form.addEventListener("submit", async event => {
    event.preventDefault();
    setMessage("");
    const email = normaliseEmail(emailInput.value);
    if (!isAllowedEmail(email)) {
      setMessage("Access denied. Sign in only with an @pw.live email address.");
      emailInput.focus();
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, passwordInput.value);
    } catch (error) {
      setMessage(explainError(error));
    }
  });

  signupButton.addEventListener("click", async () => {
    setMessage("");
    const email = normaliseEmail(emailInput.value);
    if (!isAllowedEmail(email)) {
      setMessage("Access denied. Accounts can only be created with an @pw.live email address.");
      emailInput.focus();
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, passwordInput.value);
      await sendEmailVerification(userCredential.user);
      await signOut(auth);
      setMessage("Account created. Verify your email, then sign in.", true);
    } catch (error) {
      setMessage(explainError(error));
    }
  });

  resetButton.addEventListener("click", async () => {
    setMessage("");
    const email = normaliseEmail(emailInput.value);
    if (!email) {
      setMessage("Enter your @pw.live email first.");
      emailInput.focus();
      return;
    }
    if (!isAllowedEmail(email)) {
      setMessage("Access denied. Password reset is only available for @pw.live accounts.");
      emailInput.focus();
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent.", true);
    } catch (error) {
      setMessage(explainError(error));
    }
  });

  logoutButton.addEventListener("click", () => signOut(auth));
}
