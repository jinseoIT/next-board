import Image from "next/image";
import Link from "next/link";

interface Props {
  rightElements ?: React.ReactElement[];
}

function Header({rightElements}:Props) {
  return (
    <header className="flex justify-between w-full h-13 px-14 shadow bg-slate-50">
      <div>
        <Link href="/">
          <Image src={'/husky.png'} width={60} height={60} alt="허숙희 로고" blurDataURL="/husky.png" placeholder="blur" priority/>
        </Link>
      </div>
      {rightElements && 
        <div className="flex items-center">{rightElements}</div>
      }
    </header>
  )
}

export default Header;