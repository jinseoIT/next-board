"use client"
import Button from "@/components/Atom/Button";
import ImageSelector from "@/components/Atom/ImageSelector";
import Input from "@/components/Atom/Input";
import TextArea from "@/components/Atom/TextArea";
import Header from "@/components/common/Header";

export default function newPostPage() {
  return (
    <>
      <Header/>
        <div className="flex flex-col gap-5 max-w-screen-md mx-auto pt-7">
          <h1 className="text-2xl">게시글 작성</h1>
          <ImageSelector/>
          <Input label="제목" placeholder="글 제목을 입력해주세요" name="title" />
          <TextArea label="내용" placeholder="글 내용을 입력해주세요" name="content" value=""/>
          <Button 
            content="등록하기" 
            onClick={() => console.log("등록하기")}
            className="w-full bg-slate-100 hover:bg-slate-200 py-4 px-4 ease-in duration-150 rounded-lg"
          />
        </div>
    </>
  )
}