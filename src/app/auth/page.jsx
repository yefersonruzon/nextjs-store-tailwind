import React from 'react'

export default function page() {
  return (
    <div class="flex w-screen overflow-hidden flex-wrap text-slate-800">
  <div class="flex w-full flex-col md:w-1/2">
    <div class="flex justify-center pt-12 md:justify-start md:pl-12">
      <a href="#" class="text-2xl font-bold text-blue-600"> Wobble . </a>
    </div>
    <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
      <p class="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
        Welcome back <br />
        to <span class="text-blue-600">Wobble</span>
      </p>
      <p class="mt-6 text-center font-medium md:text-left">Sign in to your account below.</p>

      <form class="flex flex-col items-stretch pt-3 md:pt-8">
        <div class="flex flex-col pt-4">
          <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input type="email" id="login-email" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
          </div>
        </div>
        <div class="mb-4 flex flex-col pt-4">
          <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
            <input type="password" id="login-password" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
          </div>
        </div>
        <a href="#" class="mb-6 text-center text-sm font-medium text-gray-600 md:text-left">Forgot password?</a>
        <button type="submit" class="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">Sign in</button>
      </form>
      <div class="py-12">
        <p class="text-gray-600">
          Don't have an account?
          <a href="#" class="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4">Sign up for free.</a>
        </p>
      </div>
    </div>
  </div>
  <div class="relative hidden h-screen select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2">
    <div class="py-16 px-8 text-white xl:w-[40rem]">
      <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">New Feature</span>
      <p class="my-6 text-3xl font-semibold leading-10">Create animations with <span class="abg-white whitespace-nowrap py-2 text-cyan-300">drag and drop</span>.</p>
      <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt necessitatibus nostrum repellendus ab totam.</p>
      <a href="#" class="font-semibold tracking-wide text-white underline underline-offset-4">Learn More</a>
    </div>
    {/* <img class="ml-8 w-11/12 max-w-lg rounded-lg object-cover" src="/images/aaFKzowNcgxqSdxMw11na.png" /> */}
  </div>
</div>

  )
}
