interface Props {
  blog: {
    content: string;
  };
}

const BlogContent = ({ blog }: Props) => {
  return (
    <div className="mt-5">
      <div className="section-spacing mx-auto">
        <div className="bg-card card p-4  shadow-sm">
          <div className=" mx-auto">
            <div className="body text-muted whitespace-pre-line leading-8">
              {blog.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
