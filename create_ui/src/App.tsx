import "./App.css";

function App() {
  return (
    <>
      {/* Navbar section */}
      <div className="flex justify-around items-center mb-16">
        <img src="/logo.svg"></img>
        <div className="ml-auto mr-36">
          <a className="mr-9 text-sm font-semibold" href="#">
            Tour Platform
          </a>
          <a className="mr-9 text-sm font-semibold" href="#">
            Pricing
          </a>
          <a className="mr-9 text-sm font-semibold" href="#">
            FAQ
          </a>
          <a className="mr-9 text-sm font-semibold" href="#">
            Company
          </a>
        </div>
        <button className="bg-purpleBtn p-3 px-4 text-white rounded-md">
          Sign in
        </button>
      </div>

      <div className="flex justify-center items-center flex-col">
        {/* Gradient powered by Ai block */}
        <div className="inline-block bg-gradient-to-br from-purple-600 to-red-600 p-[3px] rounded-lg mb-8">
          <div className="h-full w-full bg-white p-2 rounded-md">
            <div className="flex">
              <img src="/ai.svg" className="mr-4"></img>
              <h2 className="tracking-wider">
                AI-Powered Music Creation for All
              </h2>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-7xl font-semibold mb-12">
          Unleash Your Inner <span className="block">Musician</span>
        </h1>

        {/* Waitlist */}
        <div className="bg-[#242424] w-5/12 p-6 rounded-md py-9">
          <h3 className="text-white font-bold mb-2 text-xl">
            Join the waitlist
          </h3>
          <p className="text-white mb-3">
            Be the first to experience the future of music creation.
          </p>
          <div>
            <input
              className="p-1 mr-3 pr-12 rounded"
              placeholder="Enter your email"
            ></input>
            <button className="p-1 px-10 text-white bg-purpleBtn rounded">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Inspire Section */}
      <div className="flex mb-[-35rem]">
        <div className="mb-36 text-left flex flex-col justify-center items-start flex-1">
          <h2 className="text-5xl font-semibold mb-4">Inspire</h2>
          <p className="text-2xl mb-6">
            Hum, whistle, or play your musical idea
          </p>
          <button className="text-purpleBtn border-2 p-2 px-6 border-purpleBtn rounded-md">
            Take a tour of our platform
          </button>
        </div>

        <img src="/inspire.svg" className="flex-1 max-w-screen-md h-auto"></img>
      </div>

      {/* Create Section */}
      <div className="flex flex-row-reverse">
        <div className="mb-36 text-left flex flex-col justify-center items-start flex-1 mt-[20rem]">
          <h2 className="text-5xl font-semibold mb-4">Create</h2>
          <p className="text-2xl mb-6">
            Listen or download variations of your ideas as a full song
          </p>
          <button className="text-purpleBtn border-2 p-2 px-6 border-purpleBtn rounded-md">
            Have any questions?
          </button>
        </div>

        <img
          src="/create.svg"
          className="flex-1 max-w-screen-lg h-auto ml-[-150px]"
        ></img>
      </div>
    </>
  );
}

export default App;
