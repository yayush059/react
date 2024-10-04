import React from 'react'

const categoryItems = [
    {id:1,title:"Main Dish",des: "86 dishes", image: "/images/home/category/img1.png"},
    {id:2,title:"Break Fast",des: "12 break fast", image: "/images/home/category/img2.png"},
    {id:3,title:"Desesrt",des: "48 desert", image: "/images/home/category/img3.png"},
    {id:4,title:"Browse All",des: "255 Items", image: "/images/home/category/img4.png"}
]

function Categories() {
  return (  //ye neeche bg-white kiya hai kyuki pahle se dark tha ye 
    <div className='section-container py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h1 className='title'>Popular Catagories</h1>
        </div>
        {/* categories card*/}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 items-center mt-12 justify-around'>
            {
                categoryItems.map((item,i)=>(
                    <div key ={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                        <div className='items-center justify-center w-full flex mx-auto'>
                            <img src={item.image} alt="" className='bg-[#C1F1C6] rounded-full w-28 h-28 p-5'/>
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5>{item.title}</h5>
                            <p>{item.des}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories