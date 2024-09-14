function App() {
  return (
    <div className="w-full h-full bg-[url('/spiderman-bg.png')] bg-no-repeat bg-cover px-[120px] py-[75px] text-white font-courier-new">
      <div className="w-full h-full relative">
        {/* 1º div */}
        <p className="text-[21px]">Mr. Wolf</p>
        {/* 2º div */}
        <div className="absolute left-0 bottom-0 max-w-[600px]">
          <h1 className="font-impact text-[200px] leading-[240px]">
            Big Impact
          </h1>
          <p className="text-[29px]">Thats what you want, right?</p>
        </div>
        {/* 3º div */}
        <div className="absolute right-0 bottom-0 max-w-[450px]">
          <h2 className="font-impact text-[100px]">So, call me</h2>
          <p className="text-[29px] mb-6">
            Just call me anytime, and I’ll be around to get you. Rembember, I’m{" "}
            <strong>The Wolf</strong>
          </p>
          <div className="flex gap-8">
            <img src="/icons/facebook.png" alt="facebook icon" />
            <img src="/icons/instagram.png" alt="instagram icon" />
            <img src="/icons/twitter.png" alt="twitter icon" />
            <img src="/icons/whatsapp.png" alt="whatsapp icon" />
          </div>
        </div>
        {/* 4º div */}
        <div className="absolute right-0 top-0 flex gap-6">
          <div className="w-[300px] border-2 border-white rounded-[24px] relative">
            <img className="rounded-[24px]" src="/card1.png" alt="card 1" />
            <p className="font-impact text-[21px] absolute bottom-4 left-8">
              Works
            </p>
          </div>
          <div className="w-[300px] border-2 border-white rounded-[24px] relative">
            <img className="rounded-[24px]" src="/card2.png" alt="card 2" />
            <p className="font-impact text-[21px] absolute bottom-4 left-8">
              Know me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
