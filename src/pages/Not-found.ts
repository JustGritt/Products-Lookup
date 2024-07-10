export default function renderNotFound() {
	return `
		<!-- Hero -->
		<section class="pt-8 lg:pt-32 bg-center bg-cover min-h-screen relative">

			<!-- Background -->
			<div
				class="absolute top-48 right-16 inset-x-0 ml-auto h-80 max-w-lg bg-gradient-to-tr from-orange-200 via-pink-200 to-violet-300 blur-[118px]">
			</div>
			<div
				class="absolute bottom-32 left-6 inset-x-0 h-80 max-w-lg bg-gradient-to-tr from-violet-200 via-red-200 to-yellow-300 blur-[118px]">
			</div>
			<!-- End -->

			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
				<h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
					This page does not exist
				</h1>

				<p class="max-w-md mx-auto mt-8 text-center text-xl font-normal leading-7 text-gray-500 mb-9">Sorry, the page you are looking for does not exist.</p>

				<a href="/"
					class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
						class="rotate-180 w-5 ml-2">
						<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
					Go back to home

				</a>
			</div>
		</section>
	`;
}