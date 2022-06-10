import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import {PrismLight as Highlighter} from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import Image from "next/image";

Highlighter.registerLanguage("js", js);
Highlighter.registerLanguage("css", css);

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
      const {language, children} = code;
      return (
        <Highlighter language={language} style={atomDark}>
          {children}
        </Highlighter>
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
