function App() {
  return (
    <div
      className="w-full h-full bg-[url('/spiderman-bg-phone.png')] pc:bg-[url('/spiderman-bg.png')] bg-black bg-no-repeat bg-cover 
      px-[32px] py-[48px] md:px-[60px] md:py-[56px] pc:px-[120px] pc:py-[75px]
     text-white font-courier-new"
    >
      <div className="w-full h-full relative">
        <div className="absolute h-fit md:max-w-[60%] top-0 left-0 md:top-auto md:bottom-0 md:left-0 pc:max-w-[600px]">
          <h1 className="font-impact text-[100px] leading-[120px] md:text-[120px] md:leading-[144px] pc:text-[200px] pc:leading-[240px]">
            Big Impact
          </h1>
          <p className="text-[29px]">Thats what you want, right?</p>
        </div>
        <div className="w-fit flex gap-6 flex-col absolute bottom-0 right-0 pc:max-w-[450px]">
          <h2 className="font-impact text-[100px] hidden lg:block">
            So, call me
          </h2>
          <p className="text-[29px] mb-6 hidden lg:block">
            Just call me anytime, and I’ll be around to get you. Rembember, I’m{" "}
            <strong>The Wolf.</strong>
          </p>
          <div className="flex gap-8 flex-col lg:flex-row">
            <img
              className="icon"
              src="/icons/facebook.png"
              alt="facebook icon"
            />
            <img
              className="icon"
              src="/icons/instagram.png"
              alt="instagram icon"
            />
            <img className="icon" src="/icons/twitter.png" alt="twitter icon" />
            <img
              className="icon"
              src="/icons/whatsapp.png"
              alt="whatsapp icon"
            />
          </div>
        </div>
        <div className="absolute h-fit left-0 bottom-0 flex flex-col gap-6 w-auto max-w-[200px] md:left-auto md:top-0 md:right-0 md:flex-row md:max-w-[60%]">
          <div className="w-full border-2 border-white rounded-[24px] relative pc:w-[300px]">
            <img className="rounded-[24px]" src="/card1.png" alt="card 1" />
            <p className="font-impact text-[21px] absolute bottom-4 left-8">
              Works
            </p>
          </div>
          <div className="w-full border-2 border-white rounded-[24px] relative pc:w-[300px]">
            <img className="rounded-[24px]" src="/card2.png" alt="card 2" />
            <p className="font-impact text-[21px] absolute bottom-4 left-8">
              Know me
            </p>
          </div>
        </div>
        <p className="absolute hidden md:block top-0 left-0 text-[29px]">
          Mr. Wolf
        </p>
      </div>
    </div>
  );
}

export default App;
