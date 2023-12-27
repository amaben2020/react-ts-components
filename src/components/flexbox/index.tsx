
const Flexbox = () => {
  return (
    <div className="flex">
      <div>
        Flex basis
        <div className="flex-1 bg-black text-white">Flexbox</div>
      <div className="flex-3 bg-red-500">Flexbox</div>
      <div className="flex-1 bg-gray-700 text-white">Flexbox</div>
      </div>


      <div className="border w-full p-10">
        <p>Flex grow for cards</p>
        <div className="flex justify-between">
          <div className=" bg-black text-white max-w-[400px] flex flex-col">
          <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900" alt="" />
            <p className="text-2xl text-start p-5 flex-1 border">To Kill a mockingbird</p>

            <time className="text-start mt-2"> 19,32</time>
             </div>
             <div className=" bg-black text-white max-w-[400px]">
            <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900" alt="" />
            <p className="text-2xl text-start p-5">To Kill a mockingbird and some people? J.D Salinger says a huge hi to y'all</p>

            <time className="text-start mt-2"> 19,32</time>
             </div>
</div>
     
        <div className="flex w-[1000px] flex-wrap">
          FLEX CARDS :

          <div className="hover:flex-1 flex-1 transition-all duration-300 bg-green-700 p-5 rounded-2xl ">$1222</div>
          <div className="hover:flex-1 flex-2 transition-all duration-300 bg-orange-700 p-5 rounded-2xl ">$1212</div>
          <div className="hover:flex-1 flex-1 transition-all duration-300 bg-red-700 p-5 rounded-2xl ">$9212</div>
          <div className="flex-shrink transition-all duration-300 bg-yellow-700 p-5 rounded-2xl ">$2323</div>
        </div>

        <div className="flex">
  <div className="flex-grow w-16 h-16">
     This item will grow or shrink as needed 
  </div>
  <div className="flex-shrink w-64 h-16">
     This item will shrink 
  </div>
  <div className="flex-grow w-16 h-16">
     This item will grow or shrink as needed 
  </div>
</div>
    
      </div>



     
    </div>
  )
}

export default Flexbox