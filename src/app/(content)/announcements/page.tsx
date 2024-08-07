import { Metadata } from "next";
import Link from "next/link";

import { getAnnouncementPosts } from "@/server/announcement";
import { CardPost } from "@/components/card-post";

export const metadata: Metadata = {
  title: "Pengumuman | PP Nurul Jadid Sejati",
};
export default function Page() {
  let allAnnouncements = getAnnouncementPosts();
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {allAnnouncements.map(({ metadata, slug }, idx) => (
        <Link key={idx} href={`/announcements/${slug}`}>
          <CardPost {...metadata} />
        </Link>
      ))}
    </section>
  );
}
