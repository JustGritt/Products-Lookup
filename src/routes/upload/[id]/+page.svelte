<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let id = '';

	onMount(() => {
		const unsubscribe = page.subscribe((value) => {
			id = value.params.id;
		});

		return unsubscribe;
	});
</script>

<h1>{id}</h1>