import { Metadata } from "next";
import Link from "next/link";

import { getBlogPosts } from "@/server/blog";
import { CardPost } from "@/components/card-post";

export const metadata: Metadata = {
  title: "Blog | PP Nurul Jadid Sejati",
};
export default function Page() {
  let allBlogs = getBlogPosts();
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {allBlogs.map(({ metadata, slug }, idx) => (
        <Link key={idx} href={`/blogs/${slug}`}>
          <CardPost {...metadata} />
        </Link>
      ))}
    </section>
  );
}
