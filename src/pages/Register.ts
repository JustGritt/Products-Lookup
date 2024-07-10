import renderBackgroundTexture from "../components/BackgroundTexture.ts";

export default function renderRegister() {
return `

    <!-- Hero -->
    <section class="pt-8 lg:pt-32 bg-center bg-cover relative h-[70svh]">
        ${renderBackgroundTexture()}

        <div class="mx-auto max-w-lg px-4 sm:px-6 pt-8 pb-16 relative text-center bg-white/80 rounded-xl shadow-2xl">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-md text-left font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required
                                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-md text-left font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-md text-left font-medium leading-6 text-gray-900">
                            Confirm password
                        </label>
                        <div class="mt-2">
                            <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign up
                        </button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Already a member?
                    <a href="/login" class="block mt-2 font-semibold leading-6 text-indigo-700 hover:text-indigo-600">
                        Sign in now
                    </a>
                </p>
            </div>
        </div>
    </section>


`;
}