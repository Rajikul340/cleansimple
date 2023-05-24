const AboutSection = () => {
  return (
    <main>
      <h1 className="font-bold md:text-4xl text-2xl text-center capitalize my-5">
        
      </h1>
      <section className="  ">
        <div className="md:flex md:flex-row-reverse gap-3">
          <div className=" md:w-1/2">
            <img src="https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Fwelcoming-new-employee.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.9487&fp-y=0.5075&h=415&q=88&w=622&s=2d9cfaf118caa6d6e4219be4cedab700" />
          </div>
          <div className="md:w-1/2">
            <h4 className="text-blue-400  my-4 font-bold text-xl capitalize">
              clean simple 
            </h4>
            <div className="flex gap-3 mt-5   ">
                <img className="w-10 h-10" src="https://attitudematterz.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-06-28-at-1.11.36-PM-modified.png" alt="logo"/>
               <h2 className="text-2xl font-semibold capitalize" >details about Attitude matterZ !</h2>
            </div>
            <p className="py-3">
              Certainly! Tech companies are organizations that primarily focus
              on developing and providing technological products, services, or
              solutions. These companies operate in various sectors of the
              technology industry, including software development, hardware
              manufacturing, telecommunications, e-commerce, artificial
              intelligence, cloud computing, and more. They play a crucial role
              in driving innovation and shaping the digital landscape. Tech
              companies can vary in size and scope, ranging from small startups
              to multinational corporations. Some of the most well-known tech
              companies include: Apple Inc.: A multinational company known for
              its consumer electronics, software, and services, including the
              iPhone, Mac computers, and the App Store. Microsoft Corporation: A
              global technology company offering a wide range of products and
              services, such as the Windows operating system, Microsoft Office
              Suite, Azure cloud computing platform, and Xbox gaming consoles.
              Google (Alphabet Inc.): A company known for its internet-related
              services and products, including the Google search engine, Gmail,
              Google Maps, Android operating system, and Google Cloud Platform.
              Amazon.com, Inc.: An e-commerce and cloud computing giant,
              recognized for its online marketplace, Amazon Prime, Amazon Web
              Services (AWS), and Kind
            </p>
            <button className="btn bg-black">Get Started</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
