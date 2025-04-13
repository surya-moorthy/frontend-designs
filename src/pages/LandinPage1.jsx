export const LandingPage1 = () => {
    return (
      <div className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
        <div className="flex justify-between w-full px-10 pt-8 h-2/3">
          <div className="flex flex-col justify-center gap-4 max-w-lg ">
            <div className="text-6xl font-semibold">
              <h1>New Designs</h1>
              <h1>New inspirations</h1>
            </div>
            <p className="text-xl font-medium text-stone-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget diam.
            </p>
            <button className="bg-stone-950 hover:bg-stone-900 px-5 py-2 rounded-full w-fit">
              <p className="text-base text-stone-300">Explore</p>
            </button>
          </div>
  
          {/* Right Image Section */}
          <div className="relative w-1/2 flex items-center justify-center">
            <img
              src="Rectangle6.png"
              alt="rectangle 6"
              className="absolute z-10 w-52 top-6 left-32"
            />
            <img
              src="Rectangle7.png"
              alt="rectangle 7"
              className="absolute z-20 w-52 top-24 "
            />
          </div>
        </div>
  
        {/* Cards Section */}
        <div className="flex gap-6 bg-neutral-800 text-stone-300 px-8 py-4 rounded-2xl mt-4">
          {contents.map(({ title, description }, index) => (
            <CardComponent key={index} title={title} description={description} />
          ))}
        </div>
      </div>
    );
  };
  
  const contents = [
    {
      title: "Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  
  const CardComponent = (props) => {
    return (
      <div className="flex flex-col items-start gap-2 px-4 py-2 max-w-xs">
        <img width="24" height="24" src="Vector.svg" alt="icon" />
        <h4 className="text-lg font-semibold">{props.title}</h4>
        <p className="text-sm font-light">{props.description}</p>
      </div>
    );
  };
  