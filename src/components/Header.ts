import Logo from "/icons/Logo.svg";

export default function renderHeader() {
    return `
        <nav class="bg-white/20 border-solid border-gray-200 z-10 w-full lg:fixed" id="topnav">
            <div class="mx-auto max-w-7xl lg:px-8">
                <div class="w-full flex flex-col lg:flex-row">
                    <div class="hidden w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200"
                        id="navbar">
                        <ul class="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
                            <li>
                                <a href="#" class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900">
                                    How to use?
                                </a>
                            </li>
                        </ul>

                        <a href="/">
                            <picture>
                                <img src="${Logo}" alt="logo" class="h-14 rounded-full w-auto" />
                            </picture>
                        </a>

                        <div class="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
                            <a href="/login"
                                class="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                                Login
                            </a>
                            <a href="/register"
                                class="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;
}