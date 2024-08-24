export default function ArtIsNotAThing() {
    return (
      <div className="flex min-h-screen bg-black text-white mt-60">
        {/* Left Section */}
        <div className="w-1/4 flex flex-col justify-start py-8 pl-8 space-y-4">
          <h1 className="text-5xl font-extrabold">
            Art is not a thing, it is a way.
          </h1>
          <p className="text-[18px] pt-3 text-white text-opacity-70 font-extralight">
            Join us for an unforgettable<br />
            celebration of boundless<br />
            creativity
          </p>
          <button className="mt-4 pt-7 text-[13px] text-sm text-white self-start underline underline-offset-8">
          LET'S EXPLORE →
        </button>
        </div>
  
        {/* Center Image */}
        <div className="w-1/2 flex items-center justify-center relative">
        <img
          src="/Img/image10.png"
          alt="Statue"
          className="object-contain w-[80%] h-[95%]"
        />
      </div>
  
        {/* Right Section */}
        <div className="w-1/4 flex flex-col justify-start py-10 pr-8 space-y-8">
        {[
          {
            number: '01.',
            text: 'Immerse yourself in a tapestry of<br />enlightening workshops hosted by<br />industry luminaries.',
          },
          {
            number: '02.',
            text: 'Unleash Your Potential<br/> Through Thrilling Competitive Events!',
          },
          {
            number: '03.',
            text: 'Showcase Your Skills and Win Big in<br/> Our Prestigious and Thrilling <br/>Challenges and Contests!',
          },
        ].map(({ number, text }, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-col">
              <h2 className="text-red-500 text-3xl mr-4">{number}</h2>
            </div>
            <hr className="mt-2 border-t-2 border-white opacity-20" />
            <p dangerouslySetInnerHTML={{ __html: text }} className="text-[15px] pt-3 text-white text-opacity-70 font-extralight"/>
          </div>
        ))}
      </div>
      </div>
    );
  }
  