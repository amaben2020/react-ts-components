import { twMerge } from "tailwind-merge"
import { DUMMY_POSTS } from "./data"

const Posts = () => {

  return (
    <div>
      <h1> Posts </h1>  
      <div className=" p-3 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {DUMMY_POSTS.map(post => (
            <a href={post.slug} className={twMerge("relative flex flex-column overflow-hidden mx-auto py-4", post.author.first_name.includes("Benneth") ? "border-gray-200 border-2" : "")}>
              <img src={post.image} alt="" className="rounded-lg max-w-[300px] max-h-[250px] flex-1" />
              <div className="absolute top-1/2 left-[45%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <h2 className="font-lg text-white"> {post.title}</h2>   


              </div>
        </a>
      ))}
      </div>
    </div>
  )
}

export default Posts