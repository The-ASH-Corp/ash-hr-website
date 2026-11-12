export default function Footer() {
  return (
    <footer
      className="bg-executive-navy text-white pt-16 pb-12 border-t border-slate-800"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* About Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white leading-none">
                cba
                <span className="text-slate-400 text-base font-semibold">
                  academy
                </span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              <strong>CBA Academy</strong> is a career-focused professional
              training institute dedicated to building job-ready skills for
              today&apos;s competitive corporate world. We offer industry-relevant
              courses in <strong>Accounting</strong>,{" "}
              <strong>Office Administration</strong>,{" "}
              <strong>Human Resource Management</strong>, and{" "}
              <strong>English Communication</strong>, designed to transform
              students into confident professionals.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Our programs combine <strong>expert-led training</strong>,{" "}
              <strong>practical exposure</strong>, and{" "}
              <strong>internship support</strong>, ensuring every learner is
              prepared for real-world challenges.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                href="https://wa.me/919072801300"
                target="_blank"
                rel="noopener noreferrer"
              >
                WA
              </a>
              <a
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                href="#facebook"
              >
                FB
              </a>
              <a
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                href="#instagram"
              >
                IG
              </a>
              <a
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                href="#linkedin"
              >
                IN
              </a>
              <a
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                href="#youtube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Links: Our Course */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Course
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#courses"
                >
                  HR Course
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#courses"
                >
                  Office Administration
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#courses"
                >
                  Accounting Course
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#courses"
                >
                  Spoken English
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Terms &amp; Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Our Community */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Community
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Our Partners
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Suggestions
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#blogs">
                  Our Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Company Resources */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Our Partners
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Suggestions
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#blogs">
                  Our Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>Copyright © 2025 CBA Academy. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a className="hover:text-slate-400 transition-colors" href="#">
              Services
            </a>
            <a className="hover:text-slate-400 transition-colors" href="#">
              Help &amp; FAQs
            </a>
            <a className="hover:text-slate-400 transition-colors" href="#">
              Careers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

