import AllPosts from "../../Components/posts/all-posts";
import {getAllPost} from "../../lib/posts-utils";
import Head from "next/head";

const AllPostPage = ({posts}) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all post related to programming"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export default AllPostPage;

export const getStaticProps = async ctx => {
  const allPosts = getAllPost();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
};
