import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <section className="flex mx-20px items-center gap-5 pt-7.5">
        <div>
          <img
            src="/assets/profile.jpg"
            alt="profile"
            className="w-[380px] ml-4 rounded-full outline outline-2 outline-green-600"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl">
            Hi, I am{" "}
            <span className=" block text-green-700 m-0 font-medium">
              Manjula Ponnusamy
            </span>
          </h1>
          <h3>Full Stack Engineer - Intern</h3>
          <p className="text-gray-500">
            I build clean and responsive websites using HTML, CSS, Bootstrap,
            Tailwind CSS and basic JavaScript.
          </p>
          
          {/* <div className="space-y-6">
          <h2 className="text-xl font-bold text-center text-green-800">Technical Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="./assets/html5 logo.svg" className="w-12 h-12" />
              <p className="text-sm font-medium">HTML5</p>
            </div>
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="./assets/css logo.svg" className="w-12 h-12" />
              <p className="text-sm font-medium">CSS3</p>
            </div>
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="./assets/tailwind css.svg" className="w-12 h-12" />
              <p className="text-sm font-medium">Tailwind CSS</p>
            </div>
            <div
              className="bg-gray-100 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="./assets/bootstrap-logo.png" className="w-12 h-12" />
              <p className="text-sm font-medium">Bootstrap</p>
            </div>
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="./assets/figma.png" className="w-12 h-12" />
              <p className="text-sm font-medium">Figma</p>
            </div>
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="./assets/git logo.png" className="w-12 h-12" />
              <p className="text-sm font-medium">Git</p>
            </div>
          </div>
        </div> */}
        <Skills/>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default App;
