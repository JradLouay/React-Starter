import React from 'react'
// import logo from `${process.env.PUBLIC_URL}/assets/moienLogo.svg`;

const Header1 = () =>  (
<div class="relative bg-white">
  <div class="mx-auto px-4 sm:px-6 bg-blue-50">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 bg-red-50">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a>
          <span class="sr-only">Workflow</span>
          <img src={`https://s3.invisionapp-cdn.com/storage.invisionapp.com/screens/files/439063566.png?x-amz-meta-iv=1&response-cache-control=max-age%3D2419200&x-amz-meta-ck=4caf2222dfb8e8b08b05c17b28dabaf2&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1614556800&Signature=WHxXtkZBZuHW71kXM9sosD0H530%3D`} class="h-8 w-auto sm:h-10" alt="logo" />
        </a>
      </div>
      {/* <div class="-mr-2 -my-2 md:hidden">
        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div> */}
      <nav class="hidden md:flex space-x-10">
       
        {/* <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Pricing
        </a> */}
        {/* <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Docs
        </a> */}

      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0 ">
        <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </a>
        <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Sign up
        </a>
      </div>
    </div>
  </div>

  {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div class="pt-5 pb-6 px-5">
        <div class="flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
          </div>
          <div class="-mr-2">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              {/* <!-- Heroicon name: outline/x --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            
          </nav>
        </div>
      </div>
     </div>
  </div>
</div>)
export default Header1
