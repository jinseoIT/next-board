"use client"
import addPosts from "@/actions/add-posts";
import uploadImage from "@/actions/upload-image";
import Button from "@/components/Atom/Button";
import ImageSelector from "@/components/Atom/ImageSelector";
import Input from "@/components/Atom/Input";
import TextArea from "@/components/Atom/TextArea";
import Header from "@/components/common/Header";
import { useState } from "react";

export default function newPostPage() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const onSubmit = async() => {
    const res = await uploadImage(imageFile);
    if(!res.data && res.error.statusCode == 400){
      alert("업로드할 수 없는 이미지 입니다.");
      return;
    }
    const post = {
      title, 
      contents, 
      thumnailImage: `${process.env.NEXT_PUBLIC_IMAGE_URL}${imageFile.name}`}
    const result = await addPosts(post)
    // console.log("result ::", result);
  }
  return (
    <>
      <Header/>
        <div className="flex flex-col gap-5 max-w-screen-md mx-auto pt-7">
          <h1 className="text-2xl">게시글 작성</h1>
          <ImageSelector imageFile={imageFile} setImageFile={setImageFile}/>
          <Input label="제목" placeholder="글 제목을 입력해주세요" name="title" value={title} onChange={setTitle} />
          <TextArea label="내용" placeholder="글 내용을 입력해주세요" name="content" value={contents} onChange={setContents}/>
          <Button 
            content="등록하기" 
            onClick={onSubmit}
            className="w-full bg-slate-100 hover:bg-slate-200 py-4 px-4 ease-in duration-150 rounded-lg"
          />
        </div>
    </>
  )
}