import Image from "next/image";

interface Props {
  blog: {
    title: string;
    image: string;
    date: string;
    desc: string;
  };
}

const BlogHero = ({ blog }: Props) => {
  return (
    <div>




      <div className="relative             w-full
            h-[350px]
            md:h-[600px] overflow-hidden rounded-xl bg-card ">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-muted mb-2 mt-5 ">{blog.date}</p>

      <h1 className="heading-1 text-dark heading-2">
        {blog.title}
      </h1>

      <p className="text-muted mt-3 max-w-3xl">
        {blog.desc}
      </p>
    </div>
  );
};

export default BlogHero;
