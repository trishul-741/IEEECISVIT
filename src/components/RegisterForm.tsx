"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { UserPlus, CheckCircle, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/constants/config";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.fullName.trim()) e.fullName = "Full name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Invalid email address";
    if (!formData.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      e.phone = "Enter a valid 10-digit number";
    if (!formData.college.trim()) e.college = "College is required";
    if (!formData.department.trim()) e.department = "Department is required";
    if (!formData.year) e.year = "Year is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => { const u = { ...p }; delete u[field]; return u; });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-white border border-gray-100 p-10 text-center shadow-xl shadow-accent/5 max-w-lg mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-50"
        >
          <CheckCircle size={36} className="text-green-500" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-amber-400" />
            <h3 className="font-heading text-2xl font-bold text-text-primary">
              Welcome Aboard!
            </h3>
            <Sparkles size={16} className="text-amber-400" />
          </div>
          <p className="text-sm text-text-muted mb-6">
            Hi {formData.fullName}, your registration is complete!<br />
            You&apos;ll receive a confirmation email shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ fullName: "", email: "", phone: "", college: "", department: "", year: "" });
            }}
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover"
          >
            Register Another
          </button>
        </motion.div>
      </motion.div>
    );
  }

  const inputClass = (field: string) =>
    `w-full rounded-xl border bg-gray-50/50 px-4 py-3.5 text-sm text-text-primary placeholder-text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white ${
      errors[field] ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:border-accent"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="reg-name" className="block text-sm font-medium text-text-primary mb-2">Full Name</label>
          <input id="reg-name" type="text" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} className={inputClass("fullName")} placeholder="John Doe" />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="reg-email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
          <input id="reg-email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className={inputClass("email")} placeholder="john@example.com" />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="reg-phone" className="block text-sm font-medium text-text-primary mb-2">Phone</label>
          <input id="reg-phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className={inputClass("phone")} placeholder="9876543210" />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="reg-college" className="block text-sm font-medium text-text-primary mb-2">College</label>
          <input id="reg-college" type="text" value={formData.college} onChange={(e) => handleChange("college", e.target.value)} className={inputClass("college")} placeholder="University name" />
          {errors.college && <p className="mt-1.5 text-xs text-red-500">{errors.college}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="reg-dept" className="block text-sm font-medium text-text-primary mb-2">Department</label>
          <input id="reg-dept" type="text" value={formData.department} onChange={(e) => handleChange("department", e.target.value)} className={inputClass("department")} placeholder="Computer Science" />
          {errors.department && <p className="mt-1.5 text-xs text-red-500">{errors.department}</p>}
        </div>
        <div>
          <label htmlFor="reg-year" className="block text-sm font-medium text-text-primary mb-2">Year</label>
          <select id="reg-year" value={formData.year} onChange={(e) => handleChange("year", e.target.value)} className={inputClass("year")}>
            <option value="" disabled>Select</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="5th Year">5th Year</option>
          </select>
          {errors.year && <p className="mt-1.5 text-xs text-red-500">{errors.year}</p>}
        </div>
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/15 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/25 hover:scale-[1.01]"
      >
        <UserPlus size={15} />
        Join {SITE_CONFIG.name}
      </button>
    </form>
  );
}
