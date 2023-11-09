function Donate() {
  return (
    <>
      <div className="cta-clip -mt-20"></div>
      <section className="call-to-action bg-purple-progress pt-64 pb-10">
        <div className="container mx-auto">
          <div className="w-full text-center">
            <h1 className="text-5xl text-white font-semibold">
              Our Shelters are full!
            </h1>
            <h3 className="text-2xl text-white font-semibold">
              Helps pets get out.
            </h3>
            <button className="inline-block bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 mt-8 text-lg rounded-full">
              Donate
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donate;
