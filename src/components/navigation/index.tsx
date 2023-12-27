import { useEffect, useState } from "react";

 
const Navigation = () => {
  const LINKS = ["Developers", "Blog", "Plugins", "Solutions", "Company", "Get started"]
  
  const [isAbove40, setIsAbove40] =useState(false)
console.log(isAbove40);
  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          setIsAbove40(true)
        } else {
          setIsAbove40(false)
        }
     })
      }
  }, [])
  return (
    <nav>
     <div className="flex gap-x-6 justify-center items-center max-w-fit mx-auto py-2 px-8 rounded-full" style={{
      border: isAbove40 ? "1px solid gray" : ""
    }}>
        {LINKS.map((l ,i) => (
          <p >
           {i < LINKS.length -1 &&l}  
            {isAbove40 && i === LINKS.length - 1 && <button className="bg-black rounded-full text-white py-1 px-3 ">{l}</button>  }
          </p>
      ))}
      </div>

        <button className="h-10 w-10 rounded-full bg-purple-700 p-10 transition-all hover:translate-y-[-10px]"> OK</button>
     
    </nav>
  )
}

export default Navigation