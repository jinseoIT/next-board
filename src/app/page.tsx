import Header from '@/components/common/Header'
import Link from 'next/link'

export default function Home() {
  return (
   <>
    <Header rightElements={[
      <Link key="create-post" href="/newpost" className='font-medium'>글작성</Link>
    ]}/>
    <main></main>
   </>
  )
}
