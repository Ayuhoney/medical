import { Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";
import { IMAGES } from "@/app/constants";
import { blogPosts } from "@/app/data/blogPosts";
import { PageHero } from "@/app/components/ui";

const categoryColors: Record<string, string> = {
  "Skin Cancer": "bg-red-50 text-red-600",
  "Aesthetic Medicine": "bg-purple-50 text-purple-600",
  "General Practice": "bg-blue-50 text-blue-600",
  "Laser": "bg-[#EDF8FB] text-[#0A7E94]",
  "Skincare": "bg-green-50 text-green-600",
};

export default function Blog() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <PageHero image={IMAGES.clinicLobby} tag="BLOG" title="Health & Wellness Articles" subtitle="Expert insights from our medical team on skin health, aesthetics, and wellbeing." />

      <section className="section-py-sm section-white">
        <div className="site-container">
          <div className="mb-12 md:mb-14">
            <p className="eyebrow">FEATURED ARTICLE</p>
            <div className="group card-premium hover:-translate-y-1 blog-featured-card">
              <div className="blog-featured-media">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover image-hover min-h-[220px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6 lg:p-8 lg:pl-4 flex flex-col justify-center">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-3 w-fit font-sans ${categoryColors[featured.category] || "bg-[#EDF8FB] text-[#0A7E94]"}`}>
                  {featured.category}
                </span>
                <h2 className="font-serif text-[#0D1F2D] leading-snug mb-3" style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)" }}>
                  {featured.title}
                </h2>
                <p className="body-text-sm mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-[#5A7A8A] mb-5 font-sans">
                  <span>{featured.author}</span>
                  <span className="text-[#D0E8EE]">·</span>
                  <span>{featured.date}</span>
                  <span className="text-[#D0E8EE]">·</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                </div>
                <Link to={`/blog/${featured.slug}`} className="link-arrow">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-[1100px] mx-auto">
            {rest.map((post) => (
              <article key={post.slug} className="group card-premium hover:-translate-y-1 flex flex-col">
                <div className="blog-post-media">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover image-hover" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-sans ${categoryColors[post.category] || "bg-[#EDF8FB] text-[#0A7E94]"}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="blog-post-body">
                  <h3 className="font-serif text-[#0D1F2D] leading-snug mb-2.5 text-base">{post.title}</h3>
                  <p className="body-text-sm mb-4 flex-1">{post.excerpt.substring(0, 120)}...</p>
                  <div className="flex items-center gap-3 text-[10px] text-[#5A7A8A] mb-3 font-sans">
                    <span>{post.date}</span>
                    <span className="text-[#D0E8EE]">·</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="link-arrow text-xs">
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
