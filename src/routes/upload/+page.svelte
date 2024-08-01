<script>
	import BackgroundTexture from "$components/BackgroundTexture.svelte";
	import UploadIcon from '$lib/icons/Upload.svg';
	import { onMount } from 'svelte';

	let imageUrl = '';
	let points = [];

	function handleFileChange(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				imageUrl = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	}

	function handleImageClick(event) {
		const rect = event.target.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		points = [...points, { x, y }];

		console.log(points);
	}
</script>

<svelte:head>
	<title>Upload a file</title>
	<meta name="description" content="Upload a file to create a new lookup" />
</svelte:head>

<section class="pt-8 lg:pt-32 bg-center bg-cover h-[70svh] relative">
	<BackgroundTexture />
</section>