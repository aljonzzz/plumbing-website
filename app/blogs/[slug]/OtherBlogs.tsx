import Link from "next/link";

interface Props {
  blogs: {
    slug: string;
    title: string;
    desc: string;
    image: string;
  }[];
}

const OtherBlogs = ({ blogs }: Props) => {
  return (
    <div className="mt-16">
      <h2 className="heading-2 mb-6 text-dark">
        Other Blogs
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((item) => (
          <Link
            key={item.slug}
            href={`/blogs/${item.slug}`}
            className="
              bg-card
              rounded-xl
              overflow-hidden
              group
              hover:shadow-md
              transition
            "
          >
            <div className="h-60 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-300
                  md:group-hover:scale-105
                "
              />
            </div>

            <div className="p-4">
              <h3 className="heading-3 font-semibold text-dark">
                {item.title}
              </h3>

              <p className="text-muted mt-2">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
