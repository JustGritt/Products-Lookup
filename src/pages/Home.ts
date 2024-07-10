import renderBackgroundTexture from "../components/BackgroundTexture.ts";
import Mockup from "/assets/Mockup@2x.png";
import Arrow from "/icons/Arrow.svg";

export default function renderHome() {
	return `
		<!-- Hero -->
		<section class="pt-8 lg:pt-32 bg-center bg-cover min-h-screen relative">
			${renderBackgroundTexture()}

			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
				<h1
					class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
					Create your
					<span class="text-indigo-600">Product Lookup</span>
				</h1>
				<p class="max-w-md mx-auto mt-8 text-center text-xl font-normal leading-7 text-gray-500 mb-9">
					Simple and easy to use tool to help you create your customized components.
				</p>
				<a href="/upload"
					class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500">
					Try it now
					<img src="${Arrow}" alt="Arrow" class="w-5 ml-2" />
				</a>
				<div class="flex justify-center ">
					<img src="${Mockup}" alt="Mockup" class="shadow-xl after:backdrop-blur-md" />
				</div>
			</div>
		</section>
	`;
}