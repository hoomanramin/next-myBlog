import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import {Prism as Highlighter} from "react-syntax-highlighter";
import {twilight} from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

const PostContent = ({post}) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    code(code) {
      const {language} = code;
      return (
        <Highlighter
          language={language}
          children={code.children}
          style={twilight}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
