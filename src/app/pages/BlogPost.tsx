import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { getBlogPost } from "@/app/data/blogPosts";
import { PageHero } from "@/app/components/ui";

const categoryColors: Record<string, string> = {
  "Skin Cancer": "bg-red-50 text-red-600",
  "Aesthetic Medicine": "bg-purple-50 text-purple-600",
  "General Practice": "bg-blue-50 text-blue-600",
  Laser: "bg-[#EDF8FB] text-[#0A7E94]",
  Skincare: "bg-green-50 text-green-600",
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <PageHero
        image={post.image}
        tag={post.category.toUpperCase()}
        title={post.title}
        subtitle={post.excerpt}
      />

      <article className="section-py section-white">
        <div className="site-container-narrow">
          <Link to="/blog" className="link-arrow mb-8 inline-flex">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#5A7A8A] mb-8 font-sans">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${categoryColors[post.category] || "bg-[#EDF8FB] text-[#0A7E94]"}`}>
              {post.category}
            </span>
            <span>{post.author}</span>
            <span className="text-[#D0E8EE]">·</span>
            <span>{post.date}</span>
            <span className="text-[#D0E8EE]">·</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>

          <div className="image-frame aspect-[16/9] mb-10">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose-blog space-y-5">
            {post.body.map((para, i) => (
              <p key={i} className="body-text text-base leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[rgba(10,126,148,0.1)]">
            <Link to="/book" className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E] inline-flex">
              Book an Appointment
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
