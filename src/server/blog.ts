import path from "path";

import { getMDXData } from "./mdx";

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content", "blog"));
}
