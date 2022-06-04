import PostsGrid from "../posts/posts-grid";
import classes from "./feature-post.module.css";
const FeaturePost = props => {
  return (
    <section className={classes.latest}>
      <h2>Featured</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturePost;
