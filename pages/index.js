import FeaturePost from "../Components/home-page/feature-post";
import Hero from "../Components/home-page/hero";
import {getFeaturedPost} from "../lib/posts-utils";
import Head from "next/head";

const HomePage = ({posts}) => {
  return (
    <>
      <Head>
        <title>Welcome To My Blog</title>
        <meta name="description" content="I post about programing" />
      </Head>
      <Hero />
      <FeaturePost posts={posts} />
    </>
  );
};

export default HomePage;

export const getStaticProps = async ctx => {
  const FeaturedPost = getFeaturedPost();
  return {
    props: {
      posts: FeaturedPost,
    },
    revalidate: 600,
  };
};
