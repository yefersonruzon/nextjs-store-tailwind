import Image from "next/image";
import offertImage from "$/stock1.jpg"

export default function Home() {

  return (
    <main className="mt-20 pb-72 min-h-screen">
        <section className="w-full flex flex-col items-center">
          <div className="flex w-[95%] h-64 rounded-md bg-gray-800 overflow-hidden">
            <Image src={offertImage} className="w-2/5 h-[150%] translate-y-[-2rem]" /> 
            <article className="py-10 px-5 text-white ">
              <span className="opacity-75">Offer</span>
              <h2 className="text-xl font-black  my-2">
                During our discount week, we are offering a 20% discount on all of our products.
              </h2>
              <button type="submit" className="min-w-fit py-2.5 mt-6 flex px-4 text-sm font-medium text-black bg-white rounded-lg  focus:outline-none ">
                  <a href="">Buy now</a>
                  <span className="sr-only">Buy</span>
              </button>
            </article>
          </div>
        </section>
        <section className=" py-24 h-auto w-full px-80 text-center flex flex-col items-center">

          <h2 className="text-2xl font-black">Contact us to learn more about our company and get customer support</h2>
          <p className="my-2 font-semibold text-gray-500">Customer service hours are from 8am to 10pm.</p>
          
          <form className="flex items-center w-3/5 my-2">   
              <label for="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="ri-chat-1-line text-gray-400"></i>
                  </div>
                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none" placeholder="Search branch name..." required />
              </div>
              <button type="submit" className="min-w-fit py-3 flex px-4 ml-2 text-sm font-medium text-white bg-gray-800 rounded-lg  focus:outline-none ">
                  <a href="">Contact now</a>
                  <span className="sr-only">Contact</span>
              </button>
          </form>
          <p className="my-2 w-3/6 font-semibold text-gray-500">If our customer service is not efficient you can send us directly to our <a href="" className="underline text-gray-800">e-mail address.</a></p>
        </section>
    </main>
  )
}
