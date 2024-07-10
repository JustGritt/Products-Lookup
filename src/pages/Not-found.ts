
import renderBackgroundTexture from "../components/BackgroundTexture.ts";
import Arrow from "/icons/Arrow.svg";

export default function renderNotFound() {
	return `
		<!-- Hero -->
		<section class="pt-8 lg:pt-32 bg-center bg-cover h-[70svh] relative grid place-items-center">

			${renderBackgroundTexture()}

			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
				<h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
					This page does not exist
				</h1>

				<p class="max-w-md mx-auto mt-8 text-center text-xl font-normal leading-7 text-gray-500 mb-9">Sorry, the page you are looking for does not exist.</p>

				<a href="/"
					class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500">
					<img src="${Arrow}" alt="Arrow" class="rotate-180 w-5 mr-2" />
					Go back to home
				</a>
			</div>
		</section>
	`;
}