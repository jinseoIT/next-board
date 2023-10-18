import getPosts from '@/actions/get-posts';
import Header from '@/components/common/Header'
import { PostCard, PostCardProps } from '@/components/PostCard';
import Link from 'next/link'

const getDate = async () =>  {
  const posts = await getPosts()
  return posts;
}

export default async function Home() {
  const posts = await getDate();
  
  return (
   <>
    <Header rightElements={[
      <Link key="create-post" href="/newpost" className='font-medium'>글작성</Link>
    ]}/>
    <main className="max-w-3xl mx-auto px-2 w-full mb-5 flex flex-col gap-3 mt-4">
    {posts?.map((post: PostCardProps) => (
        <>
          {/* <Link href={`/todos/${post.id}`} key={post.id}> */}
            <PostCard post={post} key={post.id}/>
          {/* </Link> */}
        </>
      ))}
    </main>
   </>
  )
}
