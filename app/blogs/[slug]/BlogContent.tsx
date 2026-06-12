interface Props {
  blog: {
    content: string;
  };
}

const BlogContent = ({ blog }: Props) => {
  return (
    <div className="mt-5">
      <div className="section-spacing mx-auto">
        <div className=" ">
          <div className=" mx-auto">
            <div className=" text-muted body whitespace-pre-line leading-6">
              {blog.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
