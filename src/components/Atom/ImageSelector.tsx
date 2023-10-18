import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { CiImageOn } from 'react-icons/ci';

interface ImageSelector {
  image?: string;
  imageFile?: string | null;
  setImageFile : Dispatch<SetStateAction<null>>;
}

const containerStyle = 'w-full flex align-center justify-center border rounded-lg h-80 hover:bg-slate-100 ease-in duration-150 cursor-pointer'
const imageStyle = `select-none rounded-lg w-full hover:opacity-80 ease-in duration-150`

export default function ImageSelector ({imageFile, setImageFile}: ImageSelector) {
  const [imageBase64, setImageBase64] = useState("");
  const fileRef = useRef(null);

  const onChangeImage = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const {result} = reader
      if (result) {
        setImageBase64(result.toString());
      }
    }
    const targetFile = e.target.files[0];
    if(targetFile) {
      reader.readAsDataURL(targetFile);
      setImageFile(targetFile);
    }
  }
  
  const onClickImage = () => {
    fileRef.current.click();
  }
  return (
    <div className={containerStyle} onClick={onClickImage}>
      {/* <Image src={GrImage} alt="thumnail image" className={imageStyle}/> */}
      {imageBase64 
        ? <img src={imageBase64} alt="preview" className={imageStyle}/>
        :  <div className="flex items-center"><CiImageOn size={30}/></div>
      }
      <input 
        ref={fileRef}
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif, image/webp"
        name="imageFile"
        id="imageFile"
        onChange={onChangeImage}
        className="invisible absolute"
      />
    </div>
  )
}