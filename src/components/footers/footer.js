import React from 'react'


const Footer = () => {
    return (
        <footer class="bg-gray-200 pt-10 sm:mt-10 pt-10">
    <div class="max-w-6xl m-auto flex flex-wrap justify-left text-black">
        {/* <!-- Col-1 --> */}
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12  bg-red-50">
            <div class="text-xs uppercase font-medium mb-6">
               Logo
            </div>
        </div>

        {/* <!-- Col-2 --> */}
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12  bg-yellow-50">
            {/* <!-- Col Title --> */}
            <div class="text-xs uppercase font-medium mb-6">
                À propos
            </div>

            {/* <!-- Links --> */}
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Utility-First
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Responsive Design
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Hover, Focus, & Other States
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Dark Mode
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Adding Base Styles
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Extracting Components
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Adding New Utilities
            </a>
        </div>

        {/* <!-- Col-3 --> */}
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12  bg-green-50">
            {/* <!-- Col Title --> */}
            <div class="text-xs uppercase font-medium mb-6">
                 Hébergeurs
            </div>

            {/* <!-- Links --> */}
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Configuration
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Theme Configuration
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Breakpoints
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Customizing Colors
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Customizing Spacing
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Configuring Variants
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Plugins
            </a>
        </div>

        {/* <!-- Col-3 --> */}
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12  bg-purple-50">
            {/* <!-- Col Title --> */}
            <div class="text-xs uppercase font-medium mb-6">
                Assistance
            </div>

            {/* <!-- Links --> */}
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                GitHub
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Discord
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                Twitter
            </a>
            <a href="#" class="my-3 block hover:text-gray-400 text-sm font-medium duration-400">
                YouTube
            </a>
        </div>
    </div>

    {/* <!-- Copyright Bar --> */}
    <div class="pt-2">
        <div class="flex pb-5 px-6 m-auto pt-5 
            bg-white text-sm 
            flex-col md:flex-row">
            <div class="mt-2">
            Mentions légales - réseaux sociaux.
            </div>

            {/* Social media icons  */}
            {/* <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-facebook-f"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-twitter-alt"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-youtube"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="#" class="w-6 mx-1">
                    <i class="uil uil-instagram"></i>
                </a>
            </div> */}
        </div>
    </div>
</footer>
    )
}

export default Footer
