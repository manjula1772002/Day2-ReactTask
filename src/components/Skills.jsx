const Skills = () => {

    return( <div className="space-y-6">
          <h2 className="text-xl font-bold text-center text-green-800">Technical Skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="/assets/html5 logo.svg" className="w-12 h-12" />
              <p className="text-sm font-medium">HTML5</p>
            </div>
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="/assets/css logo.svg" className="w-12 h-12" />
              <p className="text-sm font-medium">CSS3</p>
            </div>
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="/assets/tailwind css.svg" className="w-12 h-12" />
              <p className="text-sm font-medium">Tailwind CSS</p>
            </div>
            <div
              className="bg-gray-100 flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="/assets/bootstrap-logo.png" className="w-12 h-12" />
              <p className="text-sm font-medium">Bootstrap</p>
            </div>
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="/assets/figma.png" className="w-12 h-12" />
              <p className="text-sm font-medium">Figma</p>
            </div>
            <div
              className="flex flex-col items-center gap-2 border-2 border-transparent hover:border-green-700 p-2 cursor-pointer rounded-2xl"
            >
              <img src="/assets/git logo.png" className="w-12 h-12" />
              <p className="text-sm font-medium">Git</p>
            </div>
          </div>
        </div>);
};

export default Skills;