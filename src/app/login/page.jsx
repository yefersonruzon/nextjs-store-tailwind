import React from "react";
import Logo from "./Logo.png";

export default function page() {
  return (
    <main className="bg-black overflow-hidden max-h-screen h-[calc(100dvh)] w-full text-white text-xl">
      <div className="w-full relative bg-[#25252535] h-full backdrop:blur-sm z-10">
        <div className=" w-full flex flex-col justify-center items-center">
          <header className="flex w-full items-center mt-16 justify-center  ">
            <img className="w-40" src={Logo} alt="Logo" />
          </header>
          <form action="#" className="mt-28 flex flex-col justify-center px-10">
            <h2 className=" text-xl">Login</h2>
            <div className="my-8">
              <label htmlFor="email" className="text-gray-300 text-base">
                email
              </label>
              <input
                type="text"
                placeholder="email@ejemplo.com"
                id="email"
                className="mt-2 px-4 text-sm py-4 rounded-md border-none bg-[#00000050] focus:outline-primary focus:outline-none backdrop:blur-sm w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-300 text-base">
                Contraseña
              </label>
              <input
                type="text"
                placeholder="min 6 caracteres"
                id="password"
                className="mt-2 px-4 text-sm py-4 rounded-md border-none bg-[#00000050] focus:outline-primary focus:outline-none backdrop:blur-sm w-full"
              />
            </div>
            <div className="flex w-full justify-between mt-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  class="accent-primary"
                  defaultChecked
                />
                <p className="text-xs ml-2">Mantener sesión</p>
              </div>
              <a href="#" className="text-xs text-primary">
                Forgot password?
              </a>
            </div>
            <button className="w-full bg-primary text-black py-3 mt-14 text-sm rounded-md">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <span className="pointer-events-none fixed top-0 w-full h-screen after:absolute   after:top-[-12%] after:w-full after:h-4/5 after:bg-radial-gradient-green before:absolute before:bottom-[-12%] before:w-full before:h-4/5 before:bg-radial-gradient-purple"></span>
    </main>
  );
}
