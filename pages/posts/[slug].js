import PostContent from "../../Components/posts/post-detail/post-content";
import {getPostData, getPostFiles} from "../../lib/posts-utils";
import Head from "next/head";

const SinglePostPage = ({post}) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticPaths = async () => {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map(slug => ({params: {slug: slug}})),
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const {slug} = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export default SinglePostPage;
