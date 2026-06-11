import { notFound } from "next/navigation";
import Nav from "@/ui/web/navbar/Nav";
import Footer from "@/ui/web/footer/Footer";
import { blogs } from "@/ui/web/blogs/blogsData";

import BlogHero from "./BlogHero";
import BlogContent from "./BlogContent";
import OtherBlogs from "./OtherBlogs";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const otherBlogs = blogs.filter((b) => b.slug !== slug);

  return (
    <>
      <Nav />

      <main className="pt-10 md:pt-15  pb-20  px-3 md:px-6">
        <div className="section-spacing">

          <BlogHero blog={blog} />

          <BlogContent blog={blog} />

          <OtherBlogs blogs={otherBlogs} />

        </div>
      </main>

      <Footer />
    </>
  );
}
