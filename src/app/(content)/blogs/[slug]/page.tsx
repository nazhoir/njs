import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { id as IDN } from "date-fns/locale";

import { getBlogPosts } from "@/server/blog";
import { BlurImage } from "@/components/blur-image";
import { CustomMDX } from "@/components/mdx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://njs.or.id/blogs/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <article className="mx-auto max-w-3xl">
      <div className="relative">
        <BlurImage
          alt="Featured Image"
          className="aspect-video w-full rounded-lg border object-cover"
          height={900}
          src={post.metadata.image}
          width={1600}
        />
      </div>

      <div className="prose-quoteless prose prose-zinc mt-8 max-w-none space-y-4">
        <h1>{post.metadata.title}</h1>

        <div className="not-prose flex flex-col-reverse md:flex-row md:items-center md:space-x-4">
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={post.metadata.authorAvatar}
                alt={post.metadata.authorName}
              />
              <AvatarFallback>
                {post.metadata.authorName.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm ">{post.metadata.authorName}</span>
          </div>
          <span className="mb-4 text-sm text-gray-500 dark:text-gray-400 md:mb-0">
            Diterbitkan pada{" "}
            {format(new Date(post.metadata.publishedAt), "EEEE, dd MMMM yyyy", {
              locale: IDN,
            })}
          </span>
        </div>
        <CustomMDX source={post.content} />
      </div>
    </article>
  );
}
