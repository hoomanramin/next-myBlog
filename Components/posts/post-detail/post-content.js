import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const PostContent = () => {
  const dummy = {
    slug: "coding-event",
    title: "Coding Event",
    image: "coding-event.jpg",
    date: "2022-02-20",
    content: "# This is a first post",
  };
  const imagePath = `/images/posts/${dummy.slug}/${dummy.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={dummy.title} image={imagePath} />
      <ReactMarkdown>{dummy.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
