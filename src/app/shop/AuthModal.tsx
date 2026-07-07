import { useEffect, useState } from "react";
import { Eye, EyeOff, Lock, Mail, ShieldCheck, User, X } from "lucide-react";
import { LogoMarkIcon } from "@/app/components/Logo";
import { lockBodyScroll, unlockBodyScroll, useShop } from "./ShopContext";

type Mode = "login" | "signup";

function GoogleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.3 5.3C41.4 34.9 44 30 44 24c0-1.3-.1-2.6-.4-3.9z"/>
    </svg>
  );
}

export function AuthModal() {
  const { authOpen, closeAuth, login, checkoutPending } = useShop();
  const [mode, setMode] = useState<Mode>("signup");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAuth();
    window.addEventListener("keydown", onKey);
    lockBodyScroll();
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockBodyScroll();
    };
  }, [authOpen, closeAuth]);

  useEffect(() => {
    if (authOpen) setError("");
  }, [authOpen, mode]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (mode === "signup" && !firstName.trim()) {
      setError("Please enter your first name.");
      return;
    }
    const name = mode === "signup" ? `${firstName.trim()} ${lastName.trim()}`.trim() : email.split("@")[0];
    login({ name, email: email.trim() });
  };

  const googleAuth = () => {
    login({ name: "Google User", email: "user@gmail.com" });
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 ${authOpen ? "" : "pointer-events-none"}`} aria-hidden={!authOpen}>
      {/* Backdrop */}
      <div
        onClick={closeAuth}
        className={`absolute inset-0 bg-[#0D1F2D]/55 transition-opacity duration-[350ms] ease-out ${authOpen ? "opacity-100" : "opacity-0"}`}
      />

      {/* Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        className={`relative w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden will-change-transform transition-all duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
          authOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.97]"
        }`}
      >
        {/* Decorative header */}
        <div className="relative bg-gradient-to-br from-[#0A7E94] to-[#065A6B] px-8 pt-8 pb-6 text-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
          />
          <button
            type="button"
            onClick={closeAuth}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={16} />
          </button>
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-3 border border-white/15">
              <LogoMarkIcon size={30} />
            </div>
            <h2 id="auth-title" className="font-serif text-white text-2xl">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-white/60 text-[12px] font-sans mt-1">
              {checkoutPending ? "Sign in to complete your order" : "Beach Road Surgery & Skin Clinic Store"}
            </p>
          </div>
        </div>

        <div className="px-8 py-7">
          {/* Mode toggle */}
          <div className="flex rounded-full bg-[#F4F8FA] p-1 mb-6">
            {(["signup", "login"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`flex-1 h-9 rounded-full text-[12px] font-semibold font-sans transition-all duration-300 ${
                  mode === m ? "bg-white text-[#0A7E94] shadow-sm" : "text-[#5C7A8A] hover:text-[#0A7E94]"
                }`}
              >
                {m === "signup" ? "Sign Up" : "Login"}
              </button>
            ))}
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={googleAuth}
            className="w-full h-11 rounded-full border border-[rgba(10,126,148,0.18)] bg-white hover:bg-[#F9FCFD] hover:border-[rgba(10,126,148,0.35)] flex items-center justify-center gap-2.5 text-[#2A4A5A] text-[13px] font-semibold font-sans transition-all duration-200"
          >
            <GoogleIcon /> Connect with Google
          </button>

          <div className="flex items-center gap-3 my-5">
            <span className="flex-1 h-px bg-[rgba(10,126,148,0.1)]" />
            <span className="text-[#9AB0BA] text-[10px] uppercase tracking-[0.18em] font-sans">or</span>
            <span className="flex-1 h-px bg-[rgba(10,126,148,0.1)]" />
          </div>

          <form onSubmit={submit} className="space-y-3.5">
            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: firstName, set: setFirstName, ph: "First name" },
                  { v: lastName, set: setLastName, ph: "Last name" },
                ].map(({ v, set, ph }) => (
                  <div key={ph} className="relative">
                    <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9AB0BA]" />
                    <input
                      type="text"
                      value={v}
                      onChange={(e) => set(e.target.value)}
                      placeholder={ph}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-[rgba(10,126,148,0.15)] bg-[#FBFDFE] text-[13px] font-sans focus:outline-none focus:border-[#0A7E94] focus:bg-white transition-colors"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="relative">
              <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9AB0BA]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-[rgba(10,126,148,0.15)] bg-[#FBFDFE] text-[13px] font-sans focus:outline-none focus:border-[#0A7E94] focus:bg-white transition-colors"
              />
            </div>
            <div className="relative">
              <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9AB0BA]" />
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full h-11 pl-10 pr-11 rounded-xl border border-[rgba(10,126,148,0.15)] bg-[#FBFDFE] text-[13px] font-sans focus:outline-none focus:border-[#0A7E94] focus:bg-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                aria-label={showPw ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9AB0BA] hover:text-[#0A7E94] transition-colors"
              >
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            {error && <p className="text-red-500 text-[11.5px] font-sans px-1">{error}</p>}

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-[#0A7E94] hover:bg-[#086B7E] text-white text-[13px] font-semibold font-sans transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-[#0A7E94]/25 mt-1"
            >
              {mode === "signup" ? "Create Account" : "Sign In"}
            </button>
          </form>

          <p className="text-center text-[#9AB0BA] text-[10.5px] font-sans mt-5 flex items-center justify-center gap-1.5">
            <ShieldCheck size={12} className="text-[#0A7E94]" />
            By continuing, you agree to our Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
