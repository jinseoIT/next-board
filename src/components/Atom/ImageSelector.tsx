import Image from "next/image";
import { CiImageOn } from 'react-icons/ci';

interface ImageSelector {
  image?: string;
}

export default function ImageSelector ({image}: ImageSelector) {
  const containerStyle = 'w-full flex align-center justify-center border rounded-lg h-80 hover:bg-slate-100 ease-in duration-150 cursor-pointer'
  const imageStyle = `select-none rounded-lg w-full hover:opacity-80 ease-in duration-150`
  return (
    <div className={containerStyle}>
      {/* <Image src={GrImage} alt="thumnail image" className={imageStyle}/> */}
      <div className="flex items-center">
        <CiImageOn size={30}/>
      </div>
    </div>
  )
}