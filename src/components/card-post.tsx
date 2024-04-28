import React from "react";
import { format } from "date-fns";
import { id as IDN } from "date-fns/locale";

import { BlurImage } from "@/components/blur-image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MDXMetadata } from "@/types/mdx";

export function CardPost({
  image,
  title,
  summary,
  authorAvatar,
  authorName,
  publishedAt,
}: MDXMetadata) {
  return (
    <Card className="overflow-hidden shadow-none">
      <div className="relative aspect-video w-full overflow-hidden">
        <BlurImage
          src={image}
          className="h-auto w-full object-cover"
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-display line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{summary}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Avatar className="mr-1 h-10 w-10">
          <AvatarImage src={authorAvatar} alt={authorName} />
          <AvatarFallback>
            {authorName.slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <CardDescription className="text-xs">
          Diterbitkan pada{" "}
          {format(new Date(publishedAt), "EEEE, dd MMMM yyyy", {
            locale: IDN,
          })}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
