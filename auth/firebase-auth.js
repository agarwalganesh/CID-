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

// DOM Elements - Auth Gate
const gate = document.getElementById("cidAuthGate");
const form = document.getElementById("cidAuthForm");
const emailInput = document.getElementById("cidAuthEmail");
const passwordInput = document.getElementById("cidAuthPassword");
const passwordBlock = document.getElementById("cidPasswordFieldBlock");
const passwordLabel = document.getElementById("cidPasswordLabel");
const passwordHelp = document.getElementById("cidPasswordHelp");
const togglePasswordBtn = document.getElementById("cidTogglePassword");

const authTabs = document.getElementById("cidAuthTabs");
const tabSignIn = document.getElementById("cidTabSignIn");
const tabSignUp = document.getElementById("cidTabSignUp");
const heading = document.getElementById("cidAuthHeading");
const intro = document.getElementById("cidAuthIntro");
const forgotLink = document.getElementById("cidForgotLink");
const resetBackBlock = document.getElementById("cidResetBackBlock");
const backToSignInBtn = document.getElementById("cidBackToSignIn");

const submitButton = document.getElementById("cidAuthSubmit");
const submitBtnText = document.getElementById("cidSubmitBtnText");
const message = document.getElementById("cidAuthMessage");

const unverifiedBox = document.getElementById("cidAuthUnverified");
const resendButton = document.getElementById("cidAuthResend");
const checkStatusButton = document.getElementById("cidAuthCheckStatus");

// DOM Elements - Dashboard Header & User Info
const mainHeader = document.getElementById("cidMainHeader");
const headerEmail = document.getElementById("cidHeaderEmail");
const headerAvatar = document.getElementById("cidHeaderAvatar");
const headerLogoutBtn = document.getElementById("cidHeaderLogout");
const legacyUserBar = document.getElementById("cidAuthUser");
const legacyLogoutBtn = document.getElementById("cidAuthLogout");

const configReady = Object.values(firebaseConfig).every(value => value && !value.includes("REPLACE_ME"));
let auth;
let currentMode = "signin"; // 'signin' | 'signup' | 'reset'

// Keep track of current email for dynamic sidebars
window.cidCurrentUserEmail = "";

const MIN_PASSWORD_LENGTH = 6;

// -------------------------------------------------------------
// Helper: Normalise & Validate Email Domain
// -------------------------------------------------------------
function normaliseEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isAllowedEmail(email) {
  const normalised = normaliseEmail(email);
  return normalised.length > allowedEmailDomain.length && normalised.endsWith(allowedEmailDomain.toLowerCase());
}

// -------------------------------------------------------------
// Helper: Display Alert Message
// -------------------------------------------------------------
function setMessage(text, type = "error") {
  if (!message) return;
  if (!text) {
    message.textContent = "";
    message.className = "cid-auth-message";
    return;
  }
  message.textContent = text;
  message.className = `cid-auth-message show ${type}`;
}

// -------------------------------------------------------------
// Helper: Set Button & Form Loading State
// -------------------------------------------------------------
const allActionBtns = [submitButton, resendButton, checkStatusButton, tabSignIn, tabSignUp];
let activeLoadingTarget = null;
let originalTargetText = "";

function setLoading(isLoading, targetBtn = null, text = "Loading...") {
  allActionBtns.forEach(btn => {
    if (btn) btn.disabled = isLoading;
  });
  if (emailInput) emailInput.disabled = isLoading;
  if (passwordInput) passwordInput.disabled = isLoading;

  if (isLoading && targetBtn) {
    activeLoadingTarget = targetBtn;
    originalTargetText = targetBtn.innerText;
    if (submitBtnText && targetBtn === submitButton) {
      submitBtnText.textContent = text;
    } else {
      targetBtn.textContent = text;
    }
  } else if (!isLoading && activeLoadingTarget) {
    if (submitBtnText && activeLoadingTarget === submitButton) {
      submitBtnText.textContent = originalTargetText.replace("→", "").trim();
    } else if (activeLoadingTarget.firstChild && activeLoadingTarget.firstChild.nodeType === Node.TEXT_NODE) {
      activeLoadingTarget.firstChild.nodeValue = originalTargetText;
    } else {
      activeLoadingTarget.textContent = originalTargetText;
    }
    activeLoadingTarget = null;
  }
}

// -------------------------------------------------------------
// Mode Switcher (Sign In vs Create Account vs Reset Password)
// -------------------------------------------------------------
function setMode(mode) {
  currentMode = mode;
  setMessage("");
  if (unverifiedBox) unverifiedBox.hidden = true;

  if (mode === "signin") {
    tabSignIn?.classList.add("active");
    tabSignUp?.classList.remove("active");
    if (authTabs) authTabs.style.display = "flex";
    if (heading) heading.textContent = "Welcome Back";
    if (intro) intro.innerHTML = "Sign in with your official <strong>@pw.live</strong> email to access dashboard intelligence.";
    if (passwordBlock) passwordBlock.style.display = "block";
    if (forgotLink) forgotLink.style.display = "inline";
    if (passwordLabel) passwordLabel.textContent = "Password";
    if (passwordHelp) passwordHelp.textContent = "Minimum 6 characters";
    if (submitBtnText) submitBtnText.textContent = "Sign In to Workspace";
    if (resetBackBlock) resetBackBlock.style.display = "none";
  } else if (mode === "signup") {
    tabSignIn?.classList.remove("active");
    tabSignUp?.classList.add("active");
    if (authTabs) authTabs.style.display = "flex";
    if (heading) heading.textContent = "Create PW Account";
    if (intro) intro.innerHTML = "Set up your counsellor workspace account with your <strong>@pw.live</strong> email.";
    if (passwordBlock) passwordBlock.style.display = "block";
    if (forgotLink) forgotLink.style.display = "none";
    if (passwordLabel) passwordLabel.textContent = "Create Password";
    if (passwordHelp) passwordHelp.textContent = "Must be at least 6 characters";
    if (submitBtnText) submitBtnText.textContent = "Create Account & Send Verification";
    if (resetBackBlock) resetBackBlock.style.display = "none";
  } else if (mode === "reset") {
    tabSignIn?.classList.remove("active");
    tabSignUp?.classList.remove("active");
    if (authTabs) authTabs.style.display = "none";
    if (heading) heading.textContent = "Reset Password";
    if (intro) intro.innerHTML = "Enter your <strong>@pw.live</strong> email and we will send you a password reset link.";
    if (passwordBlock) passwordBlock.style.display = "none";
    if (submitBtnText) submitBtnText.textContent = "Send Password Reset Link";
    if (resetBackBlock) resetBackBlock.style.display = "block";
  }
}

// -------------------------------------------------------------
// Password Toggle (Show / Hide Password)
// -------------------------------------------------------------
togglePasswordBtn?.addEventListener("click", () => {
  if (!passwordInput) return;
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordBtn.title = isPassword ? "Hide password" : "View password";

  const eyeOpen = togglePasswordBtn.querySelector(".eye-open");
  const eyeClosed = togglePasswordBtn.querySelector(".eye-closed");
  if (eyeOpen) eyeOpen.style.display = isPassword ? "none" : "block";
  if (eyeClosed) eyeClosed.style.display = isPassword ? "block" : "none";
  passwordInput.focus();
});

// Tab & Navigation Click Handlers
tabSignIn?.addEventListener("click", () => setMode("signin"));
tabSignUp?.addEventListener("click", () => setMode("signup"));
forgotLink?.addEventListener("click", e => {
  e.preventDefault();
  setMode("reset");
});
backToSignInBtn?.addEventListener("click", () => setMode("signin"));

// -------------------------------------------------------------
// Human-Friendly Firebase Error Translator
// -------------------------------------------------------------
function explainError(error) {
  if (!error) return "An unexpected error occurred. Please try again.";
  const messages = {
    "auth/invalid-credential": "Email or password is incorrect. Please check your credentials.",
    "auth/user-not-found": "No account found with this email. Please check your email or create an account.",
    "auth/wrong-password": "Password is incorrect. Please try again or click 'Forgot password'.",
    "auth/email-already-in-use": "This email already has an account. Please sign in instead.",
    "auth/weak-password": "Password must be at least 6 characters long.",
    "auth/missing-password": "Please enter your password to continue.",
    "auth/missing-email": "Please enter your @pw.live email address.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/too-many-requests": "Too many failed attempts. Please wait a few minutes and try again.",
    "auth/user-disabled": "This user account has been disabled. Please contact your PW administrator.",
    "auth/operation-not-allowed": "Email/password authentication is not enabled in Firebase Console.",
    "auth/network-request-failed": "Network connection error. Check your internet connection and try again.",
    "auth/invalid-action-code": "The verification link is invalid or has already been used.",
    "auth/expired-action-code": "The verification link has expired. Please request a new one below."
  };
  return messages[error.code] || (error.message ? error.message.replace(/^Firebase:\s*/, "") : "Authentication failed. Check your connection and try again.");
}

// -------------------------------------------------------------
// Client-Side Input Validation
// -------------------------------------------------------------
function validateInput(email, password, { requirePassword = true, isSignUp = false } = {}) {
  if (!email) {
    setMessage("Enter your @pw.live email address.", "error");
    emailInput?.focus();
    return false;
  }
  if (!isAllowedEmail(email)) {
    setMessage("Access denied. Sign in only with your official @pw.live email.", "error");
    emailInput?.focus();
    return false;
  }
  if (requirePassword) {
    if (!password) {
      setMessage(isSignUp ? "Create a password for your account (minimum 6 characters)." : "Enter your password.", "error");
      passwordInput?.focus();
      return false;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      setMessage("Password must be at least " + MIN_PASSWORD_LENGTH + " characters long.", "error");
      passwordInput?.focus();
      return false;
    }
  }
  return true;
}

// -------------------------------------------------------------
// Update Profile Info Everywhere in UI
// -------------------------------------------------------------
function updateUserInfo(email) {
  const safeEmail = email || "Signed in";
  window.cidCurrentUserEmail = safeEmail;
  const initial = (safeEmail.charAt(0) || "P").toUpperCase();

  if (headerEmail) headerEmail.textContent = safeEmail;
  if (headerAvatar) headerAvatar.textContent = initial;

  const topbarEmail = document.getElementById("topbarUserEmail");
  const topbarAvatar = document.getElementById("topbarUserAvatar");
  if (topbarEmail) topbarEmail.textContent = safeEmail;
  if (topbarAvatar) topbarAvatar.textContent = initial;

  const sidebarEmail = document.getElementById("cidSidebarEmail");
  const sidebarAvatar = document.getElementById("cidSidebarAvatar");
  if (sidebarEmail) sidebarEmail.textContent = safeEmail;
  if (sidebarAvatar) sidebarAvatar.textContent = initial;

  const legacyEmail = document.getElementById("cidAuthUserEmail");
  if (legacyEmail) legacyEmail.textContent = safeEmail;
}

// -------------------------------------------------------------
// Lock / Unlock Dashboard
// -------------------------------------------------------------
function lockDashboard() {
  if (gate) gate.hidden = false;
  if (legacyUserBar) legacyUserBar.hidden = true;
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
  if (legacyUserBar) legacyUserBar.hidden = false;
  if (unverifiedBox) unverifiedBox.hidden = true;

  updateUserInfo(user.email);
  document.body.classList.add("cid-auth-unlocked");

  const dashboard = document.querySelector(".app");
  if (dashboard) {
    dashboard.removeAttribute("aria-hidden");
    dashboard.inert = false;
    dashboard.style.visibility = "";
  }
}

// -------------------------------------------------------------
// User Approval & Email Verification Gate
// -------------------------------------------------------------
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
    setMessage("Access denied. Use your official @pw.live email address.", "error");
    return;
  }
  if (!user.emailVerified) {
    lockDashboard();
    if (unverifiedBox) unverifiedBox.hidden = false;
    setMessage("Your email is not verified yet. We sent a verification link to your inbox. Please verify before opening the dashboard.", "info");
    return;
  }
  if (unverifiedBox) unverifiedBox.hidden = true;
  unlockDashboard(user);
}

// -------------------------------------------------------------
// Global Logout Handler
// -------------------------------------------------------------
window.cidPerformLogout = async function() {
  if (auth) {
    try {
      await signOut(auth);
      setMode("signin");
      if (emailInput) emailInput.value = "";
      if (passwordInput) passwordInput.value = "";
      setMessage("You have been signed out successfully.", "info");
    } catch (err) {
      console.error("Logout error:", err);
      setMessage("Failed to log out cleanly. Please reload the page.", "error");
    }
  }
};

// -------------------------------------------------------------
// Initialize Firebase & Bind Handlers
// -------------------------------------------------------------
if (!configReady) {
  lockDashboard();
  if (intro) intro.textContent = "Firebase is not configured yet. Add your Firebase Web App values in auth/firebase-config.js.";
  if (submitButton) submitButton.disabled = true;
  setMessage("Authentication setup required before the dashboard can be opened.", "error");
} else {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  onAuthStateChanged(auth, requireApprovedUser);

  // Form submission (handles Sign In, Sign Up, or Password Reset)
  form?.addEventListener("submit", async event => {
    event.preventDefault();
    setMessage("");
    const email = normaliseEmail(emailInput.value);
    const password = passwordInput.value;

    if (currentMode === "signin") {
      if (!validateInput(email, password, { requirePassword: true })) return;
      try {
        setLoading(true, submitButton, "Signing in...");
        const cred = await signInWithEmailAndPassword(auth, email, password);
        if (!cred.user.emailVerified) {
          if (unverifiedBox) unverifiedBox.hidden = false;
          setMessage("Your email is not verified yet. Check your inbox (and spam) or click Resend below.", "info");
        }
      } catch (err) {
        setMessage(explainError(err), "error");
      } finally {
        setLoading(false);
      }
    } else if (currentMode === "signup") {
      if (!validateInput(email, password, { requirePassword: true, isSignUp: true })) return;
      try {
        setLoading(true, submitButton, "Creating account...");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        await signOut(auth);
        setMode("signin");
        setMessage("Account created! A verification link has been sent to your @pw.live inbox. Please verify before signing in.", "success");
      } catch (err) {
        setMessage(explainError(err), "error");
      } finally {
        setLoading(false);
      }
    } else if (currentMode === "reset") {
      if (!validateInput(email, null, { requirePassword: false })) return;
      try {
        setLoading(true, submitButton, "Sending reset link...");
        await sendPasswordResetEmail(auth, email);
        setMessage("Password reset email sent! Check your inbox (and spam folder).", "success");
      } catch (err) {
        setMessage(explainError(err), "error");
      } finally {
        setLoading(false);
      }
    }
  });

  // Resend verification link
  resendButton?.addEventListener("click", async () => {
    setMessage("");
    const user = auth.currentUser;
    if (!user) {
      setMessage("Please sign in first to resend the verification link.", "info");
      return;
    }
    try {
      setLoading(true, resendButton, "Sending link...");
      await sendEmailVerification(user);
      setMessage("New verification link sent! Check your inbox (and spam folder).", "success");
    } catch (err) {
      setMessage(explainError(err), "error");
    } finally {
      setLoading(false);
    }
  });

  // Check verification status
  checkStatusButton?.addEventListener("click", async () => {
    setMessage("");
    const user = auth.currentUser;
    if (!user) {
      setMessage("Please sign in first.", "info");
      return;
    }
    try {
      setLoading(true, checkStatusButton, "Checking status...");
      await user.reload();
      if (user.emailVerified) {
        setMessage("Email verified successfully! Welcome.", "success");
        requireApprovedUser(user);
      } else {
        setMessage("Email is not verified yet. Please click the link in your email, then check status again.", "info");
      }
    } catch (err) {
      setMessage(explainError(err), "error");
    } finally {
      setLoading(false);
    }
  });

  // Logout Click Listeners
  headerLogoutBtn?.addEventListener("click", () => window.cidPerformLogout());
  legacyLogoutBtn?.addEventListener("click", () => window.cidPerformLogout());
}
