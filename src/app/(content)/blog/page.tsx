import Link from "next/link";
import { format } from "date-fns";
import { id as IDN } from "date-fns/locale";

import { getBlogPosts } from "@/server/blog";
import BlurImage from "@/components/blur-image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  let allBlogs = getBlogPosts();
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {allBlogs.map(({ metadata, slug }, idx) => (
        <Link key={idx} href={`/blog/${slug}`}>
          <Card className="overflow-hidden shadow-none">
            <div className="relative aspect-video w-full overflow-hidden">
              <BlurImage
                src={metadata.image}
                className="h-auto w-full object-cover"
                alt={metadata.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-display line-clamp-2">
                {metadata.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {metadata.summary}
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <Avatar className="mr-1 h-10 w-10">
                <AvatarImage
                  src={metadata.authorAvatar}
                  alt={metadata.authorName}
                />
                <AvatarFallback>
                  {metadata.authorName.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardDescription className="text-xs">
                Diterbitkan pada{" "}
                {format(new Date(metadata.publishedAt), "EEEE, dd MMMM yyyy", {
                  locale: IDN,
                })}
              </CardDescription>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </section>
  );
}
