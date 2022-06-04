import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "posts");

export const getPostData = fileName => {
  const filePath = path.join(postDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const {data, content} = matter(fileContent);
};

export const getAllPost = () => {
  const postsFiles = fs.readdirSync(postDir);
};
