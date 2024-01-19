import { SecondaryWrapper } from "@/wrappers/SecondaryWrapper";

const Contact = () => {
  return (
    <SecondaryWrapper>
      <div className="h-full w-full flex flex-col gap-10 py-10 px-10 justify-center m-auto text-start">
        <h1 className="text-white text-6xl font-mono relative">Contact Me</h1>
        <form>
          <div className="mb-5 w-1/2">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="font-mono block w-full h-50 p-4 text-white text-xl border border-white border-2 placeholder:text-xl focus:border-4 rounded-lg bg-white bg-opacity-10 outline-none"
            ></input>
          </div>
          <div className="mb-5 w-1/2">
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="font-mono block w-full h-50 p-4 text-white text-xl border border-white border-2 placeholder:text-xl focus:border-4 rounded-lg bg-white bg-opacity-10 outline-none"
            ></input>
          </div>
          <div className="mb-5 w-1/2">
            <textarea
              id="name"
              placeholder="Message"
              className="font-mono block w-full h-50 p-4 text-white text-xl border border-white border-2 placeholder:text-xl focus:border-4 rounded-lg bg-white bg-opacity-10 outline-none"
            ></textarea>
          </div>
          <button className="font-mono bg-transparent border-2 hover:bg-white text-xl text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-lg inline-flex">
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="ml-3 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </SecondaryWrapper>
  );
};

export default Contact;
