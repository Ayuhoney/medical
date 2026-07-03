import { Link } from "react-router";
import { ArrowRight, Clock } from "lucide-react";
import { IMAGES } from "../constants";
import { PageHero } from "../components/ui";

const posts = [
  {
    id: 1,
    category: "Skin Cancer",
    title: "Why Every Australian Should Get an Annual Skin Check",
    excerpt: "Australia has one of the highest rates of skin cancer in the world. Here's everything you need to know about why regular skin checks are essential, what to expect, and how MoleMax HD technology makes a difference.",
    image: IMAGES.heroSkinCancer,
    author: "Dr Heshan Dharmarama",
    date: "15 June 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Aesthetic Medicine",
    title: "The Difference Between Anti-Wrinkle Injections and Dermal Fillers",
    excerpt: "Many patients are unsure about the difference between these two popular treatments. Our aesthetic physician explains how each works, what to expect, and how to choose the right treatment for your goals.",
    image: IMAGES.heroAesthetic,
    author: "Dr Kishani Weerasena",
    date: "8 June 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "General Practice",
    title: "Understanding Your Chronic Disease Management Plan",
    excerpt: "If you live with a chronic condition such as diabetes, asthma, or heart disease, a GP Management Plan can help you get more from your healthcare. Here's how it works and what benefits are available.",
    image: IMAGES.heroGP,
    author: "Dr Heshan Dharmarama",
    date: "1 June 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "Laser",
    title: "Laser vs IPL: Which Treatment is Right for Your Skin?",
    excerpt: "Both laser and IPL (intense pulsed light) are used for skin rejuvenation and pigmentation, but they work differently and suit different skin types. Our team breaks down the key differences.",
    image: IMAGES.heroLaser,
    author: "Dr Kishani Weerasena",
    date: "22 May 2024",
    readTime: "5 min read",
  },
  {
    id: 5,
    category: "Skincare",
    title: "Building a Medical-Grade Skincare Routine for Australian Skin",
    excerpt: "The Australian sun is harsh on skin. Here's how to build a daily skincare routine using medical-grade products that will protect, repair, and maintain healthy skin all year round.",
    image: IMAGES.productSerums,
    author: "Dr Kishani Weerasena",
    date: "14 May 2024",
    readTime: "7 min read",
  },
  {
    id: 6,
    category: "Skin Cancer",
    title: "What is Photodynamic Therapy (PDT) and Is It Right for You?",
    excerpt: "Photodynamic therapy is a highly effective, non-surgical treatment for certain types of skin cancer and sun-damaged skin. Learn how it works, what to expect, and who is a good candidate.",
    image: IMAGES.aestheticFace,
    author: "Dr Heshan Dharmarama",
    date: "5 May 2024",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Skin Cancer": "bg-red-50 text-red-600",
  "Aesthetic Medicine": "bg-purple-50 text-purple-600",
  "General Practice": "bg-blue-50 text-blue-600",
  "Laser": "bg-[#EDF8FB] text-[#0A7E94]",
  "Skincare": "bg-green-50 text-green-600",
};

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHero image={IMAGES.clinicLobby} tag="BLOG" title="Health & Wellness Articles" subtitle="Expert insights from our medical team on skin health, aesthetics, and wellbeing." />

      <section className="section-py-sm section-white">
        <div className="site-container">
          <div className="mb-12 md:mb-14">
            <p className="eyebrow">FEATURED ARTICLE</p>
            <div className="group card-premium hover:-translate-y-1 grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-60 lg:h-auto overflow-hidden bg-[#EDF8FB]">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover image-hover min-h-[240px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
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
                <Link to="#" className="link-arrow">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {rest.map((post) => (
              <article key={post.id} className="group card-premium hover:-translate-y-1 flex flex-col">
                <div className="relative h-44 overflow-hidden bg-[#EDF8FB]">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover image-hover" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-sans ${categoryColors[post.category] || "bg-[#EDF8FB] text-[#0A7E94]"}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-[#0D1F2D] leading-snug mb-2.5 text-base">{post.title}</h3>
                  <p className="body-text-sm mb-4 flex-1">{post.excerpt.substring(0, 120)}...</p>
                  <div className="flex items-center gap-3 text-[10px] text-[#5A7A8A] mb-3 font-sans">
                    <span>{post.date}</span>
                    <span className="text-[#D0E8EE]">·</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  </div>
                  <Link to="#" className="link-arrow text-xs">
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
