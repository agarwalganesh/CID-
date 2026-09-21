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
const unverifiedBox = document.getElementById("cidAuthUnverified");
const resendButton = document.getElementById("cidAuthResend");
const checkStatusButton = document.getElementById("cidAuthCheckStatus");
const userBar = document.getElementById("cidAuthUser");
const userEmail = document.getElementById("cidAuthUserEmail");
const logoutButton = document.getElementById("cidAuthLogout");

const configReady = Object.values(firebaseConfig).every(value => value && !value.includes("REPLACE_ME"));
let auth;

const allActionButtons = [submitButton, signupButton, resetButton, resendButton, checkStatusButton];
let activeLoadingBtn = null;
let originalBtnText = "";

function setLoading(isLoading, targetBtn = null, text = "Loading...") {
  allActionButtons.forEach(btn => {
    if (btn) btn.disabled = isLoading;
  });
  if (emailInput) emailInput.disabled = isLoading;
  if (passwordInput) passwordInput.disabled = isLoading;

  if (isLoading && targetBtn) {
    activeLoadingBtn = targetBtn;
    originalBtnText = targetBtn.textContent;
    targetBtn.textContent = text;
  } else if (!isLoading && activeLoadingBtn) {
    activeLoadingBtn.textContent = originalBtnText;
    activeLoadingBtn = null;
  }
}

function normaliseEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isAllowedEmail(email) {
  const normalised = normaliseEmail(email);
  return normalised.length > allowedEmailDomain.length && normalised.endsWith(allowedEmailDomain.toLowerCase());
}

function setMessage(text, success = false) {
  if (!message) return;
  message.textContent = text;
  message.classList.toggle("success", success);
}

function lockDashboard() {
  if (gate) gate.hidden = false;
  if (userBar) userBar.hidden = true;
  document.body.classList.remove("cid-auth-unlocked");
  const dashboard = document.querySelector(".app");
  if (dashboard) {
    dashboard.setAttribute("aria-hidden", "true");
    dashboard.inert = true;
    dashboard.style.visibility = "hidden";
  }
}

function unlockDashboard(user) {
  if (gate) gate.hidden = true;
  if (userBar) userBar.hidden = false;
  if (unverifiedBox) unverifiedBox.hidden = true;
  if (userEmail) userEmail.textContent = user.email || "Signed in";
  document.body.classList.add("cid-auth-unlocked");
  const dashboard = document.querySelector(".app");
  if (dashboard) {
    dashboard.removeAttribute("aria-hidden");
    dashboard.inert = false;
    dashboard.style.visibility = "";
  }
}

function explainError(error) {
  if (!error) return "An unexpected error occurred. Try again.";
  const messages = {
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/user-not-found": "No account found with this email. Please check the address or create an account.",
    "auth/wrong-password": "Password is incorrect. Please try again or reset your password.",
    "auth/email-already-in-use": "This email already has an account. Sign in instead.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/missing-password": "Enter your password to continue.",
    "auth/missing-email": "Enter your @pw.live email address.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/too-many-requests": "Too many failed attempts. Please wait a few minutes and try again.",
    "auth/user-disabled": "This user account has been disabled. Contact your administrator.",
    "auth/operation-not-allowed": "Email/password accounts are not enabled in the Firebase Console.",
    "auth/network-request-failed": "Network error. Check your internet connection and try again.",
    "auth/invalid-action-code": "The verification link is invalid or has already been used.",
    "auth/expired-action-code": "The verification link has expired. Please request a new one."
  };
  return messages[error.code] || (error.message ? error.message.replace(/^Firebase:\s*/, "") : "Authentication failed. Try again.");
}

function validateInput(email, password, { requirePassword = true, isSignUp = false } = {}) {
  if (!email) {
    setMessage("Enter your @pw.live email address.");
    emailInput?.focus();
    return false;
  }
  if (!isAllowedEmail(email)) {
    setMessage("Access denied. Only official @pw.live email addresses are allowed.");
    emailInput?.focus();
    return false;
  }
  if (requirePassword) {
    if (!password) {
      setMessage(isSignUp ? "Create a password for your account (minimum 6 characters)." : "Enter your password.");
      passwordInput?.focus();
      return false;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      passwordInput?.focus();
      return false;
    }
  }
  return true;
}

async function requireApprovedUser(user) {
  if (!user) {
    lockDashboard();
    if (unverifiedBox) unverifiedBox.hidden = true;
    return;
  }
  if (!isAllowedEmail(user.email)) {
    await signOut(auth);
    lockDashboard();
    if (unverifiedBox) unverifiedBox.hidden = true;
    setMessage("Access denied. Use your official @pw.live email address.");
    return;
  }
  if (!user.emailVerified) {
    lockDashboard();
    if (unverifiedBox) unverifiedBox.hidden = false;
    setMessage("Your email is not verified yet. Check your inbox (and spam) for the verification link, or use the buttons below.");
    return;
  }
  if (unverifiedBox) unverifiedBox.hidden = true;
  unlockDashboard(user);
}

if (!configReady) {
  lockDashboard();
  if (intro) intro.textContent = "Firebase is not configured yet. Add your Firebase Web App values in auth/firebase-config.js.";
  if (submitButton) submitButton.disabled = true;
  if (signupButton) signupButton.disabled = true;
  if (resetButton) resetButton.disabled = true;
  setMessage("Authentication setup required before the dashboard can be opened.");
} else {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  onAuthStateChanged(auth, requireApprovedUser);

  form?.addEventListener("submit", async event => {
    event.preventDefault();
    setMessage("");
    const email = normaliseEmail(emailInput.value);
    const password = passwordInput.value;
    if (!validateInput(email, password)) return;

    try {
      setLoading(true, submitButton, "Signing in...");
      const cred = await signInWithEmailAndPassword(auth, email, password);
      if (!cred.user.emailVerified) {
        if (unverifiedBox) unverifiedBox.hidden = false;
        setMessage("Your email is not verified yet. Check your inbox (and spam) or click Resend below.");
      }
    } catch (error) {
      setMessage(explainError(error));
    } finally {
      setLoading(false);
    }
  });

  signupButton?.addEventListener("click", async () => {
    setMessage("");
    const email = normaliseEmail(emailInput.value);
    const password = passwordInput.value;
    if (!validateInput(email, password, { requirePassword: true, isSignUp: true })) return;

    try {
      setLoading(true, signupButton, "Creating account...");
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      await signOut(auth);
      if (unverifiedBox) unverifiedBox.hidden = true;
      setMessage("Account created! A verification link has been sent to your email. Verify it, then sign in.", true);
    } catch (error) {
      setMessage(explainError(error));
    } finally {
      setLoading(false);
    }
  });

  resetButton?.addEventListener("click", async () => {
    setMessage("");
    const email = normaliseEmail(emailInput.value);
    if (!validateInput(email, null, { requirePassword: false })) return;

    try {
      setLoading(true, resetButton, "Sending reset link...");
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox (and spam folder).", true);
    } catch (error) {
      setMessage(explainError(error));
    } finally {
      setLoading(false);
    }
  });

  resendButton?.addEventListener("click", async () => {
    setMessage("");
    const user = auth.currentUser;
    if (!user) {
      setMessage("Please sign in first to resend the verification link.");
      return;
    }
    try {
      setLoading(true, resendButton, "Sending link...");
      await sendEmailVerification(user);
      setMessage("New verification link sent! Check your inbox (and spam folder).", true);
    } catch (error) {
      setMessage(explainError(error));
    } finally {
      setLoading(false);
    }
  });

  checkStatusButton?.addEventListener("click", async () => {
    setMessage("");
    const user = auth.currentUser;
    if (!user) {
      setMessage("Please sign in first.");
      return;
    }
    try {
      setLoading(true, checkStatusButton, "Checking status...");
      await user.reload();
      if (user.emailVerified) {
        setMessage("Email verified successfully! Welcome.", true);
        requireApprovedUser(user);
      } else {
        setMessage("Email is not verified yet. Please click the link received in your email, then click Check Status again.");
      }
    } catch (error) {
      setMessage(explainError(error));
    } finally {
      setLoading(false);
    }
  });

  logoutButton?.addEventListener("click", () => signOut(auth));
}
