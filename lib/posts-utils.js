import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "posts");

export const getPostFiles = () => {
  return fs.readdirSync(postDir);
};

export const getPostData = fileIdentifier => {
  const postSlug = fileIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const {data, content} = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPost = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getFeaturedPost = () => {
  const allPost = getAllPost();
  const featuredPosts = allPost.filter(post => post.isFeatured);
  return featuredPosts;
};
