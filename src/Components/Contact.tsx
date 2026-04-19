import { useState, useRef } from "react";
import FloatingInput from "./FloatingInput";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emptyForm: FormFields = { name: "", email: "", phone: "", message: "" };

const StatusChip = ({ label, delay }: { label: string; delay: string }) => (
  <div
    className="flex items-center gap-2 flex-1 px-3 py-2.5 rounded-xl bg-primaryColor/5 border border-primaryColor/20 text-textColor text-xs transition-all duration-150 hover:border-primaryColor/40 hover:bg-primaryColor/10"
    style={{ animationDelay: delay }}
  >
    <span className="w-2 h-2 rounded-full bg-primaryColor animate-pulse flex-shrink-0" />
    {label}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState<FormFields>(emptyForm);
  const [formError, setFormError] = useState<FormFields>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormError((prev) => ({ ...prev, [id]: validateForm(id, value) }));
  };

  const handleSubmit = async () => {
    const newErrors: FormFields = { ...emptyForm };
    let valid = true;

    for (const key in formData) {
      const error = validateForm(key, formData[key as keyof FormFields]);
      if (error) {
        newErrors[key as keyof FormFields] = error;
        valid = false;
      }
    }

    setFormError(newErrors);

    if (!valid) {
      toast.error("Please fix the errors before submitting.");
      // Shake animation on button
      btnRef.current?.classList.add("shake");
      setTimeout(() => btnRef.current?.classList.remove("shake"), 500);
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "portfolio"), formData);
      setSent(true);
      toast.success("Message sent! I'll get back to you soon.", { duration: 4000 });
      setFormData(emptyForm);
      setFormError(emptyForm);
      setTimeout(() => setSent(false), 3000);
    } catch {
      toast.error("Something went wrong. Please try again.", { duration: 4000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="px-16 mx-20 lg-mx:mx-0 md-mx:px-6 sm-mx:px-3 my-10 mb-28 font-mono"
    >
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        @keyframes popIn {
          0% { transform: scale(0.92); opacity: 0; }
          60% { transform: scale(1.03); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes checkPop {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          60% { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .shake { animation: shake 0.45s ease; }
        .pop-in { animation: popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .slide-up { animation: slideUp 0.2s ease forwards; }
        .check-pop { animation: checkPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .btn-send {
          position: relative;
          overflow: hidden;
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .btn-send:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(167, 139, 250, 0.35);
        }
        .btn-send:active:not(:disabled) {
          transform: translateY(1px);
          box-shadow: 0 2px 8px rgba(167, 139, 250, 0.2);
        }
        .btn-send::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        .btn-send:hover::after { opacity: 1; }
      `}</style>

      <h2 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-center text-white mb-12">
        <span className="text-headingColor">Contact</span>
      </h2>

      <div
        className="w-[65%] lg-mx:w-[80%] md-mx:w-full m-auto border border-primaryColor/30 rounded-3xl p-10 sm-mx:p-6 xs-mx:p-4 shadow-[0_0_24px_0_#A78BFA12]"
        style={{ animation: "slideUp 0.3s ease forwards" }}
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-primaryColor font-semibold text-xl sm-mx:text-xl mb-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Let's Connect
          </div>
          <p className="text-textColor text-sm leading-relaxed">
            Have a project in mind or just want to say hello? Fill out the form and I'll get back to you as soon as possible.
          </p>
        </div>

        <hr className="border-primaryColor/15 mb-8" />

        {/* Form Fields */}
        <div className="grid grid-cols-2 sm-mx:grid-cols-1 gap-6 mb-6">
          <FloatingInput
            id="name"
            name="Full Name"
            value={formData.name}
            handleChange={handleChange}
            error={formError.name}
          />
          <FloatingInput
            id="phone"
            name="Phone Number"
            value={formData.phone}
            handleChange={handleChange}
            error={formError.phone}
          />
        </div>

        <div className="mb-6">
          <FloatingInput
            id="email"
            name="Email Address"
            value={formData.email}
            handleChange={handleChange}
            error={formError.email}
          />
        </div>

        <div className="mb-2">
          <FloatingInput
            id="message"
            name="Message"
            value={formData.message}
            handleChange={handleChange}
            error={formError.message}
          />
        </div>

        <hr className="border-primaryColor/15 my-7" />

        {/* Submit Button */}
        <button
          ref={btnRef}
          onClick={handleSubmit}
          disabled={loading}
          className="btn-send w-full py-3 px-6 rounded-2xl font-bold text-bgColor bg-primaryColor disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
          style={{ backgroundColor: "#A78BFA" }}
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : sent ? (
            <span className="check-pop flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              Sent!
            </span>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>

        {/* Status Chips */}
        <div className="flex sm-mx:flex-col gap-3 mt-5">
          <StatusChip label="Usually replies within 24 hrs" delay="0ms" />
          <StatusChip label="Open to opportunities" delay="50ms" />
        </div>
      </div>
    </section>
  );
};

export default Contact;