import PostInput from "@/components/PostInput"

const page = () => {
  return (
    <div className="max-w-xl mx-auto border-r border-l min-h-screen px-2 border-gray-400">
      <div className="px-1 py-2 sticky top-0 z-50 bg-white border-b ">
        <h1 className="font-bold sm:text-xl ">Home</h1>
      </div>
      <PostInput />
    </div>
  )
}

export default page
