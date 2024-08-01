<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
