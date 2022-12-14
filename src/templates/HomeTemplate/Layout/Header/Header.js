import React from 'react'

export default function Header(props) {
    return (
        <header class="p-4 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 bg-dark text-white fixed z-10 w-full">
            <div class="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2">
                    {/* logo */}
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt='cyber.vn'></img>
                    
                </a>
                <ul class="items-stretch hidden space-x-3 lg:flex">
                    <li class="flex">
                        <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white">Link</a>
                    </li>
                    <li class="flex">
                        <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white">Link</a>
                    </li>
                    <li class="flex">
                        <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white">Link</a>
                    </li>
                    <li class="flex">
                        <a rel="noopener noreferrer" href="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white">Link</a>
                    </li>
                </ul>
                <div class="items-center flex-shrink-0 hidden lg:flex">
                    <button class="self-center px-8 py-3 rounded">Sign in</button>
                    <button class="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button>
                </div>
                <button class="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-gray-100">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
