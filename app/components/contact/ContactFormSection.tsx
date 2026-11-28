"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormData, ContactSocialItem } from "./contactFormData";

interface ContactFormSectionProps {
  onOpenEnquiry?: () => void;
}

function SocialIcon({ id }: { id: ContactSocialItem["id"] }) {
  switch (id) {
    case "whatsapp":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
        </svg>
      );
  }
}

export default function ContactFormSection({
  onOpenEnquiry,
}: ContactFormSectionProps) {
  const { formCard, admissionsBanner } = contactFormData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !course.trim()) {
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setCourse("");
      setMessage("");
    }, 4500);
  };

  return (
    <section
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
      data-purpose="contact-form-and-admissions"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24 space-y-16 sm:space-y-20">
        {/* Top 2-Column Inquiry Info + Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 min-[137.5rem]:gap-20 items-start">
          {/* Left Column: Info, Programs, Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Pill Badge */}
            <div>
              <motion.span
                whileHover={{ scale: 1.03 }}
                style={{ backgroundColor: "#eef2ff", color: "#253b97" }}
                className="inline-block px-4 py-1.5 rounded-full bg-[#eef2ff] text-[#253b97] text-[11px] font-bold uppercase tracking-wider"
              >
                {contactFormData.badgeText}
              </motion.span>
            </div>

            {/* Heading (without yellow underline) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0f172a] tracking-tight leading-[1.2]">
              {contactFormData.headingPrefix}{" "}
              <span className="text-[#253b97]">
                {contactFormData.headingHighlight}
              </span>{" "}
              {contactFormData.headingMiddle}
              <br />
              {contactFormData.headingLine2}
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-sm leading-[1.8] max-w-lg min-[137.5rem]:max-w-none">
              {contactFormData.description}
            </p>

            {/* Programs Offered For Inquiry */}
            <div className="pt-4 pb-5 border-y border-slate-100 space-y-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {contactFormData.programsLabel}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3.5">
                {contactFormData.programs.map((program, idx) => (
                  <motion.div
                    key={program}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + idx * 0.07 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-2.5 cursor-default"
                  >
                    <span
                      style={{ backgroundColor: "#10b981", color: "#ffffff" }}
                      className="w-4 h-4 rounded-full bg-[#10b981] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
                    >
                      ✓
                    </span>
                    <span className="text-xs font-semibold text-[#0f172a] leading-snug">
                      {program}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media Row */}
            <div className="space-y-3">
              <h3 className="text-xs sm:text-[13px] font-bold text-[#0f172a]">
                {contactFormData.socialHeading}
              </h3>

              <div className="flex items-center gap-3">
                {contactFormData.socials.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 380, damping: 16 }}
                    className="w-10 h-10 rounded-full bg-[#eef2ff] text-[#253b97] hover:bg-[#253b97] hover:text-white flex items-center justify-center transition-colors duration-200"
                  >
                    <SocialIcon id={social.id} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Send Us a Direct Message Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: "#ffffff" }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-[0_15px_45px_-10px_rgba(15,23,42,0.08)]"
          >
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0f172a]">
                {formCard.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {formCard.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    {formCard.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={formCard.namePlaceholder}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm text-[#0f172a] placeholder-slate-400 focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    {formCard.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={formCard.emailPlaceholder}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm text-[#0f172a] placeholder-slate-400 focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Course Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    {formCard.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={formCard.phonePlaceholder}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm text-[#0f172a] placeholder-slate-400 focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    {formCard.courseLabel}
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-xs sm:text-sm text-[#0f172a] focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all cursor-pointer"
                    >
                      <option value="" disabled>
                        {formCard.coursePlaceholder}
                      </option>
                      {formCard.courseOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 3: Message Textarea */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  {formCard.messageLabel}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={formCard.messagePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm text-[#0f172a] placeholder-slate-400 focus:border-[#253b97] focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-all resize-y"
                />
              </div>

              {/* Submit Action & Confidentiality Note */}
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ backgroundColor: "#253b97", color: "#ffffff" }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#253b97] hover:bg-[#1c2d73] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#253b97]/25 transition-colors cursor-pointer shrink-0"
                >
                  <span>{formCard.submitLabel}</span>
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </motion.button>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <svg
                    className="w-3.5 h-3.5 text-slate-400 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  <span>{formCard.confidentialityNote}</span>
                </div>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs font-semibold text-emerald-800 flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>{formCard.successMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Bottom Direct Admissions CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "linear-gradient(135deg, #253b97 0%, #1d2f7a 55%, #131f54 100%)",
            color: "#ffffff",
          }}
          className="relative rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-xl overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/[0.04]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Direct Admissions & Call Us */}
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <span
                style={{ color: "#fbbf24" }}
                className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#fbbf24] block"
              >
                {admissionsBanner.eyebrow}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight leading-tight text-white">
                {admissionsBanner.callLabel}{" "}
                <a
                  href={admissionsBanner.phoneHref}
                  style={{ color: "#fbbf24" }}
                  className="text-[#fbbf24] hover:underline"
                >
                  {admissionsBanner.phoneDisplay}
                </a>
              </h3>

              {/* <p className="text-xs text-slate-200/90 leading-relaxed max-w-md min-[137.5rem]:max-w-lg mx-auto lg:mx-0">
                {admissionsBanner.hoursNote}
              </p> */}

              <div className="pt-1">
                <motion.button
                  type="button"
                  onClick={onOpenEnquiry}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ backgroundColor: "#ffffff", color: "#1c2d73" }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#1c2d73] text-xs font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5 text-[#253b97] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 4a2 2 0 110 4 2 2 0 010-4zm4 10H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z" />
                  </svg>
                  <span>{admissionsBanner.ctaLabel}</span>
                </motion.button>
              </div>
            </div>

            {/* Center Column: Counselor Portrait + Available Now Pill */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative inline-flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full p-1.5 border border-white/25 bg-white/10 shadow-xl"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/50 bg-slate-800">
                    <Image
                      src={admissionsBanner.counselorImage.src}
                      alt={admissionsBanner.counselorImage.alt}
                      fill
                      sizes="192px"
                      className="object-cover object-center"
                    />
                  </div>
                </motion.div>

                {/* Green Available Now Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                  style={{ backgroundColor: "#10b981", color: "#ffffff" }}
                  className="-mt-3.5 relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#10b981] text-white text-[11px] font-bold shadow-md border border-white/30"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>{admissionsBanner.statusBadge}</span>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-4 min-[137.5rem]:justify-self-end space-y-2.5 text-center lg:text-left border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8">
              <p
                style={{ color: "#fbbf24" }}
                className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wide text-[#fbbf24] leading-snug"
              >
                {admissionsBanner.rightHeading}
              </p>

              <h4 className="text-base sm:text-lg font-extrabold text-white">
                {admissionsBanner.academyName}
              </h4>

              <p className="text-xs text-slate-200/90 leading-relaxed max-w-sm min-[137.5rem]:max-w-md mx-auto lg:mx-0">
                {admissionsBanner.rightDescription}
              </p>

              <div className="pt-1.5 space-y-1.5 text-xs sm:text-[13px] text-white">
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <svg
                    style={{ color: "#fbbf24" }}
                    className="w-3.5 h-3.5 text-[#fbbf24] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  <a
                    href={admissionsBanner.phoneHref}
                    className="font-bold hover:underline"
                  >
                    {admissionsBanner.phoneCompact}
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <svg
                    style={{ color: "#fbbf24" }}
                    className="w-3.5 h-3.5 text-[#fbbf24] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a
                    href={admissionsBanner.emailHref}
                    className="font-bold hover:underline"
                  >
                    {admissionsBanner.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

