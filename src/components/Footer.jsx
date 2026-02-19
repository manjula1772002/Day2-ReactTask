const Footer = () => {
    return(
        <footer className="pt-3 mt-4 border-t-2 items-center">
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/manjula-ponnusamy-34575831b/"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full text-blue-700 border  border-green-800 hover:bg-gray-200 duration-200 cursor-pointer hover:ring-1 hover:-translate-y-2"
          >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="w-6 h-6 rounded"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
          </a>
          <a
            href="https://github.com/manjula1772002"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border  border-green-800 hover:bg-gray-200 duration-200 hover:ring-1 cursor-pointer hover:-translate-y-2"
          >
            <img src="/assets/git logo.png" alt="GitHub" className="w-5 h-5" />
          </a>
        </div>
        <div className="flex justify-center gap-2">
          <p className="text-xs md:text-sm text-black md:text-right text-center">
            © 2025 All rights reserved by
            <span className="text-green-700 font-bold">Manjula Ponnusamy</span>
          </p>
        </div>
      </footer>
    );
};
export default Footer;