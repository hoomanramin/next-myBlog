import PostsGrid from "../posts/posts-grid";
import classes from "./feature-post.module.css";
const FeaturePost = ({posts}) => {
  return (
    <section className={classes.latest}>
      <h2>Featured</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturePost;
