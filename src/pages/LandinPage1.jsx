export const LandingPage1 = () =>{
    return (
       <div className="flex flex-col justify-center items-center w-screen">
           <div className="flex justify-around w-full p-16">
                  <div className="m-24">
                        <div className="text-5xl font-semibold flex flex-col gap-2.5 m-auto">
                            <h1 >New Designs</h1>
                            <h1>New inspirations</h1>
                        </div>
                        <div className="py-4">
                            <div className="text-md font-semibold font-poppins text-stone-500 w-sm">
                                 Lorem ipsum dolor sit amet, consectetur 
                                 adipiscing elit. Faucibus in libero risus semper
                                 habitant arcu eget. Et integer facilisi eget diam.
                            </div>
                            <button className="bg-stone-950 hover:bg-stone-900 px-6 py-2 rounded-full">
                                   <p className="text-xl text-stone-300 font-poppins">Explore</p>
                            </button>
                        </div>
                  </div>
                  <div className="flex size-9/12">
                       <img src="Rectangle6.png" alt="rectangle 6" className="relative z-10 top-[25px] left-[100px]"/>  
                       <img src="Rectangle7.png" alt="rectangle 7" className="relative z-20 top-[150px]"/>  
                  </div>
           </div>
           <div className="flex flex-row bg-neutral-800 text-stone-300 mx-80 rounded-3xl"> 
                 {contents.map(({title,description}) => {
                    return <CardComponent title={title} description={description}/>
                 })}
           </div>
       </div>      
     )
}

const contents = [
    {
        "title" : "Title 1",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        "title" : "Title 2",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        "title" : "Title 3",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
]

const CardComponent = (props) => {
     return (
        <div className="flex flex-col gap-2 px-8 py-6">
              <img width="24" height="24" src="Vector.svg" alt="cloud--v1" />
              <h4 className="text-2xl font-semibold">{props.title}</h4>
              <p className=" font-thin">{props.description}</p>
        </div>
     )
}