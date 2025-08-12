"use client";
import { useSession } from "next-auth/react";
import { MdPhotoSizeSelectActual } from "react-icons/md";
const PostInput = () => {
  const { data: session } = useSession();
  return session ? (
    <main className="my-2 flex flex-col gap-2 ">
      <div className=" flex gap-2 w-full divide-y divide-gray-700 border-b border-gray-400 py-2">
        <img src={session.user.image} alt="user img" className="w-11 h-11 rounded-full cursor-pointer hover:brightness-95" />
       <textarea name="postInput" id="postInput" placeholder="What's Hppening? " rows={2} className="bg-gray-100 p-1 w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700 rounded-md"></textarea>
      </div>
      <div className="flex justify-between">
        <MdPhotoSizeSelectActual className="h-10 w-11 p-2 text-gray-600 hover:text-gray-800 hover:cursor-pointer hover:bg-gray-100 rounded-full "/>
        <button  className="bg-green-600 text-white px-5 text-bold font-mono rounded-full hover:bg-green-500 hover:cursor-pointer shadow-md disabled:opacity-50 ">Post</button>
      </div>
    </main>
  ) : (
    <></>
  );
};

export default PostInput;
