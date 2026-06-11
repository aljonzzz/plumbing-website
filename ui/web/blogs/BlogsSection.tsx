import BlogCard from "./BlogCard";
import { blogs } from "./blogsData";

const BlogsSection = () => {
  return (
    <section className="pt-10 md:pt-15  pb-20 bg-base px-3 md:px-6">
      <div className="section-spacing ">

        <div className="text-center mb-8">
          <h2 className="heading-2 text-dark">
            Latest Plumbing Tips & Blogs
          </h2>

          <p className="text-muted mt-3 max-w-2xl mx-auto">
            Helpful guides, maintenance tips, and expert advice from PipeWise Plumbing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
