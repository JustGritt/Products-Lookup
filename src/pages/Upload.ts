import UploadIcon from "/icons/Upload.svg";

export default function renderUpload() {
	return `
		<!-- Hero -->
		<section class="pt-8 lg:pt-32 bg-center bg-cover h-[70svh] relative">

			<!-- Background -->
			<div
				class="absolute top-48 right-16 inset-x-0 ml-auto h-80 max-w-lg bg-gradient-to-tr from-orange-200 via-pink-200 to-violet-300 blur-[118px]">
			</div>
			<div
				class="absolute bottom-32 left-6 inset-x-0 h-80 max-w-lg bg-gradient-to-tr from-violet-200 via-red-200 to-yellow-300 blur-[118px]">
			</div>
			<!-- End -->

			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center h-full">
				<div class="flex items-center justify-center w-full h-full">
					<label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50/50 dark:hover:bg-gray-800/50 dark:bg-gray-700/50 hover:bg-gray-100/50 dark:border-gray-600/50 dark:hover:border-gray-500/50">
						<div class="flex flex-col items-center justify-center pt-5 pb-6">
							<img src="${UploadIcon}" alt="Upload Icon" class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
							<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
						</div>
						<input id="dropzone-file" type="file" class="hidden" />
					</label>
				</div>
			</div>
		</section>
	`;
}
