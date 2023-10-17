"use clinet"

interface PostCardProps {
  id: string,
  title: string,
  contents: string,
  thumnailImage: string,
  createdAt: Date,
}
export function PostCard(post:PostCardProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={post.id}
        type="checkbox"
        className="cursor-pointer peer"
      />
    </li>
  )
}