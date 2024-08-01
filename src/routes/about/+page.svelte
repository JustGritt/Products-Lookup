<script>
	import BackgroundTexture from "$components/BackgroundTexture.svelte";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="pt-8 lg:pt-32 bg-center bg-cover relative h-[70svh]">
	<BackgroundTexture />

	<div class="mx-8 sm:mx-auto max-w-3xl px-4 sm:px-6 pt-8 pb-16 relative bg-white/80 rounded-xl shadow-2xl">
		<div class="mt-8 mx-4">
			<h1 class="font-bold text-gray-900 mb-4 md:text-xl">
				About this app
			</h1>

			<p class="text-gray-500">
				This is a demo app built with SvelteKit and TailwindCSS to help users to create a quick and easy lookup of their products. It is not ready for production yet but you can use it to create your own lookup.
			</p>
		</div>
	</div>
</section>