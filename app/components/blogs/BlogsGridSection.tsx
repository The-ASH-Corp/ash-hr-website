"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { blogsData, BlogPostItem } from "./blogsData";

interface BlogsGridSectionProps {
  selectedArticle: BlogPostItem | null;
  onSelectArticle: (article: BlogPostItem | null) => void;
  onOpenEnquiry?: () => void;
}

export default function BlogsGridSection({
  selectedArticle,
  onSelectArticle,
  onOpenEnquiry,
}: BlogsGridSectionProps) {
  const { categories, posts, featuredPost, sidebar } = blogsData;
  const [activeCategory, setActiveCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubmitted, setNewsletterSubmitted] =
    useState<boolean>(false);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All Articles" || post.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSubmitted(false), 5000);
  };

  const handleTrendingClick = (topicId: string) => {
    const allArticles = [featuredPost, ...posts];
    const found = allArticles.find((item) => item.id === topicId);
    if (found) {
      onSelectArticle(found);
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setActiveCategory("All Articles");
  };

  return (
    <section
      style={{ backgroundColor: "#f8fafc" }}
      className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc]"
      data-purpose="blogs-grid-section"
    >
      <div className="w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1760px] min-[137.5rem]:max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 min-[137.5rem]:px-16 min-[160rem]:px-24">
        {/* Top Filter & Search Bar */}
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/80 shadow-[0_6px_25px_rgba(15,23,42,0.03)] mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        >
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#253b97] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-[#e8edff] hover:text-[#253b97]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={sidebar.searchPlaceholder}
              className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] pl-10 pr-9 py-2.5 text-sm sm:text-base text-[#0f172a] placeholder-slate-400 focus:border-[#253b97] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#253b97]/15 transition-colors"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Main 12-Column Layout: Left 8 Cols Articles Grid + Right 4 Cols Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 8 Columns: Blog Articles Grid */}
          <div className="lg:col-span-8">
            {filteredPosts.length === 0 ? (
              <div
                style={{ backgroundColor: "#ffffff" }}
                className="rounded-3xl p-10 text-center bg-white border border-slate-200/80"
              >
                <div className="text-lg font-extrabold text-[#0f172a] mb-2">
                  No matching articles found
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-5">
                  Try clearing your search filter or selecting another category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("All Articles");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#253b97] text-white text-xs font-bold hover:bg-[#1c2d73] transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.06,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -4,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                        delay: 0,
                      },
                    }}
                    style={{ backgroundColor: "#ffffff" }}
                    className="group rounded-3xl bg-white border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)] hover:border-[#253b97]/35 hover:shadow-[0_14px_35px_rgba(37,59,151,0.08)] overflow-hidden flex flex-col justify-between transition-colors"
                  >
                    <div>
                      {/* Image Header */}
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={post.imageSrc}
                          alt={post.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-transparent to-transparent" />

                        <div className="absolute top-3.5 left-3.5">
                          <span
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#253b97",
                            }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 text-[#253b97] text-xs 2xl:text-sm font-extrabold uppercase tracking-wider shadow-sm"
                          >
                            {post.category}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3.5">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#0f172a]/75 backdrop-blur-sm text-white text-xs font-semibold">
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6">
                        <div className="text-xs 2xl:text-sm font-semibold text-slate-400 mb-2">
                          {post.date}
                        </div>

                        <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl min-[137.5rem]:text-3xl font-bold text-[#0f172a] group-hover:text-[#253b97] leading-snug mb-2.5 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl min-[137.5rem]:text-2xl text-slate-600 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 shrink-0">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            sizes="36px"
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm sm:text-base 2xl:text-lg font-bold text-[#0f172a] truncate">
                            {post.author.name}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-500 truncate">
                            {post.author.role}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectArticle(post)}
                        className="inline-flex items-center gap-1 text-sm sm:text-base lg:text-lg 2xl:text-xl font-bold text-[#253b97] hover:text-[#1c2d73] shrink-0 cursor-pointer"
                      >
                        <span>Read</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>

          {/* Right 4 Columns: Editorial Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 1: Trending Career Reads */}
            <div
              style={{ backgroundColor: "#ffffff" }}
              className="rounded-3xl p-6 bg-white border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#253b97]" />
                <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold uppercase tracking-wider text-[#0f172a]">
                  {sidebar.trendingTitle}
                </h3>
              </div>

              <div className="space-y-3.5">
                {sidebar.trendingTopics.map((topic, index) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleTrendingClick(topic.id)}
                    className="w-full text-left p-3.5 rounded-2xl bg-[#f8fafc] hover:bg-[#eff4ff] border border-slate-200/70 hover:border-[#253b97]/30 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#253b97] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                        0{index + 1}
                      </span>
                      <div>
                        <div className="text-sm sm:text-base lg:text-lg 2xl:text-xl font-bold text-[#0f172a] group-hover:text-[#253b97] leading-snug mb-1 transition-colors">
                          {topic.title}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-400">
                          {topic.category} • {topic.readTime}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card 2: Popular Topics & Portals */}
            <div
              style={{ backgroundColor: "#ffffff" }}
              className="rounded-3xl p-6 bg-white border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)]"
            >
              <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold uppercase tracking-wider text-[#0f172a] mb-4">
                {sidebar.tagsTitle}
              </h3>

              <div className="flex flex-wrap gap-2">
                {sidebar.popularTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="px-3.5 py-2 rounded-xl bg-[#f8fafc] hover:bg-[#253b97] text-slate-700 hover:text-white border border-slate-200/80 hover:border-[#253b97] text-xs sm:text-sm 2xl:text-base font-bold transition-colors cursor-pointer"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Card 3: Newsletter / Free Career Resource */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #253b97 0%, #1c2d73 60%, #131f54 100%)",
                color: "#ffffff",
              }}
              className="rounded-3xl p-6 text-white shadow-lg"
            >
              <div className="text-xs 2xl:text-sm font-extrabold uppercase tracking-wider text-[#ffca28] mb-1.5">
                {sidebar.newsletterCard.eyebrow}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold text-white leading-snug mb-2">
                {sidebar.newsletterCard.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-blue-100/85 leading-relaxed mb-4">
                {sidebar.newsletterCard.description}
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={sidebar.newsletterCard.placeholder}
                  className="w-full rounded-xl bg-white/12 border border-white/25 px-3.5 py-2.5 text-sm sm:text-base text-white placeholder-blue-200/70 focus:outline-none focus:border-[#ffca28]"
                />
                <button
                  type="submit"
                  style={{ backgroundColor: "#ffca28", color: "#0f172a" }}
                  className="w-full py-3 rounded-xl bg-[#ffca28] hover:bg-[#f5b800] text-[#0f172a] text-xs sm:text-sm 2xl:text-base font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {sidebar.newsletterCard.buttonLabel}
                </button>
              </form>

              {newsletterSubmitted && (
                <div className="mt-3 rounded-xl bg-emerald-500/20 border border-emerald-300/30 px-3 py-2 text-xs sm:text-sm font-semibold text-emerald-100">
                  {sidebar.newsletterCard.successMessage}
                </div>
              )}
            </div>

            {/* Card 4: Explore Flagship Diploma Programs */}
            <div
              style={{ backgroundColor: "#ffffff" }}
              className="rounded-3xl p-6 bg-white border border-slate-200/80 shadow-[0_8px_30px_rgb(15,23,42,0.03)]"
            >
              <div className="text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#253b97] mb-1">
                {sidebar.programsCard.eyebrow}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold text-[#0f172a] mb-4">
                {sidebar.programsCard.title}
              </h3>

              <div className="space-y-3 mb-5">
                {sidebar.programsCard.programs.map((prog) => (
                  <Link
                    key={prog.name}
                    href={prog.href}
                    className="block p-3.5 rounded-2xl bg-[#f8fafc] hover:bg-[#eff4ff] border border-slate-200/80 hover:border-[#253b97]/30 transition-colors"
                  >
                    <div className="text-sm sm:text-base lg:text-lg 2xl:text-xl font-bold text-[#0f172a] mb-0.5">
                      {prog.name}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#253b97]">
                      {prog.duration}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="/course"
                  style={{ backgroundColor: "#253b97", color: "#ffffff" }}
                  className="w-full py-3 px-4 rounded-xl bg-[#253b97] hover:bg-[#1c2d73] text-white text-center text-xs sm:text-sm 2xl:text-base font-bold transition-colors"
                >
                  {sidebar.programsCard.ctaLabel}
                </Link>
                {onOpenEnquiry && (
                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="w-full py-3 px-4 rounded-xl bg-[#eff4ff] hover:bg-[#dfe8ff] text-[#253b97] text-center text-xs sm:text-sm 2xl:text-base font-bold transition-colors cursor-pointer"
                  >
                    Speak with Career Counselor
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Full Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onSelectArticle(null)}
            className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: "#ffffff" }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl"
            >
              {/* Modal Image Header */}
              <div className="relative h-56 sm:h-64 w-full">
                <Image
                  src={selectedArticle.imageSrc}
                  alt={selectedArticle.imageAlt}
                  fill
                  sizes="768px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/35 to-transparent" />

                <button
                  type="button"
                  onClick={() => onSelectArticle(null)}
                  aria-label="Close article"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#0f172a] flex items-center justify-center font-bold shadow-md cursor-pointer"
                >
                  ✕
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-[#ffca28] text-[#0f172a] font-extrabold uppercase tracking-wider text-[10.5px]">
                      {selectedArticle.category}
                    </span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-extrabold leading-snug">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-5">
                {/* Author Row */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                      <Image
                        src={selectedArticle.author.avatar}
                        alt={selectedArticle.author.name}
                        fill
                        sizes="40px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#0f172a]">
                        {selectedArticle.author.name}
                      </div>
                      <div className="text-[11px] font-semibold text-[#253b97]">
                        {selectedArticle.author.role}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/course"
                    className="text-xs font-bold text-[#253b97] hover:underline"
                  >
                    View Related Course →
                  </Link>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 text-xs sm:text-[14px] text-slate-600 leading-[1.75]">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div
                  style={{ backgroundColor: "#f8fafc" }}
                  className="rounded-2xl p-5 bg-[#f8fafc] border border-slate-200/80"
                >
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#253b97] mb-3">
                    KEY PRACTICAL TAKEAWAYS
                  </div>
                  <ul className="space-y-2">
                    {selectedArticle.keyTakeaways.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-[1.55]"
                      >
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#e8edff] text-[#253b97] flex items-center justify-center text-[10px] font-extrabold shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectArticle(null);
                      onOpenEnquiry?.();
                    }}
                    style={{ backgroundColor: "#253b97", color: "#ffffff" }}
                    className="px-6 py-3 rounded-xl bg-[#253b97] hover:bg-[#1c2d73] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Book Free Counseling Session
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectArticle(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

