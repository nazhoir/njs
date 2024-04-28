import path from "path";

import { getMDXData } from "./mdx";

export function getAnnouncementPosts() {
  return getMDXData(path.join(process.cwd(), "content", "announcement"));
}
