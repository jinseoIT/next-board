import { convertDate } from "@/utils/convertDate";
import Image from "next/image";

export interface PostCardProps {
  id: string,
  title: string,
  contents: string,
  thumnail_image: string,
  created_at: Date,
  user_id: string
}
export function PostCard({post}:{post :PostCardProps}) {
  return (
    <div className="cursor-pointer flex w-full flex-row gap-3 select-none">
      <div className="bg-origin-border flex-none">
        <Image 
          src={post.thumnail_image} 
          alt={post.title} 
          className="rounded-lg" 
          width={96} 
          height={96}
          objectFit="cover"
          />
      </div>
      <div className="grow w-full min-w-0 flex flex-col gap-1 p-1">
        <div className="text-md break-all font-bold line-clamp-1">{post.title}</div>
        <div className="text-sm break-all text-gray-600 line-clamp-2">{post.contents}</div>
        <div className="text-xs text-gray-600 line-clamp-2">
          {convertDate(post.created_at)}
        </div>
      </div>
    </div>
  )
}