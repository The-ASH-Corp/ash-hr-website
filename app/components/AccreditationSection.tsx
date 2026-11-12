"use client";

interface AccreditationSectionProps {
  onOpenEnquiry?: () => void;
}

export default function AccreditationSection({
  onOpenEnquiry,
}: AccreditationSectionProps) {
  return (
    <section
      className="py-20 bg-white"
      data-purpose="accreditation-pillars"
      id="courses"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
              We Are Providing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              10+ <span className="text-primary">International</span> Accreditation
              &amp; Certification
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong>CBA Academy</strong>, students are awarded several
              certifications that are recognized both nationally and
              internationally to gain valuable skills and qualifications.
            </p>
          </div>
        </div>

        {/* 4 Core Offerings Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-card-soft transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Case Study Based Learning
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct access for learners to work on real-time industry case
                studies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
              Practical Rigor <span className="ml-1.5">→</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-card-soft transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Practical Work Experience
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipping the learners to work independently with practical
                experience.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
              Hands-on Projects <span className="ml-1.5">→</span>
            </div>
          </div>

          {/* Card 3 (Clean accent styling) */}
          <div className="bg-primary text-white p-6 rounded-xl shadow-md hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/15 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                100% Placement Assistance
              </h3>
              <p className="text-xs text-indigo-100/90 leading-relaxed">
                Exclusive lifetime access to the Hire platform and top hiring
                partners.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center text-xs font-semibold text-amber-300 group-hover:translate-x-0.5 transition-transform">
              Career Guarantee <span className="ml-1.5">→</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-card-soft transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  ></path>
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Free Company Internship
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our Free Company Internship program lets you gain real-world
                experience at no cost.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
              Corporate Stint <span className="ml-1.5">→</span>
            </div>
          </div>
        </div>

        {/* Action Footer for section */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-sm text-slate-600">
            More than 10k+ happy Students rely on us
          </span>
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold text-white bg-primary hover:bg-primary-dark transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
          >
            More Courses
          </button>
        </div>
      </div>
    </section>
  );
}

