import Link from "next/link";
import Image from "next/image";

type BlogProps = {
  blog: {
    slug: string;
    title: string;
    desc: string;
    image: string;
    date: string;
  };
};

export default function BlogCard({ blog }: BlogProps) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div
        className="
          bg-card
          card
          overflow-hidden
          shadow-sm
          border
          border-gray-200
          cursor-pointer
          h-full
          flex
          flex-col
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        {/* Image */}
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <p className="text-sm text-muted mb-2">
            {blog.date}
          </p>

          <h3 className="heading-4 text-dark mb-2">
            {blog.title}
          </h3>

          <p className="text-muted  mb-4 flex-1">
            {blog.desc}
          </p>

<span className="text-accent font-semibold transition-all duration-200 hover:opacity-80 active:scale-95">
  Read More →
</span>
        </div>
      </div>
    </Link>
  );
}
