<script>
	import { fade, fly } from 'svelte/transition';
	import Mainlink from '/src/components/mainLink.svelte';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { send, receive } from '/src/lib/crossfade.js';
	import { page } from '$app/stores';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#key $page.url.pathname}
	<div class="h-full prose lg:prose-2xl px-5">
		<h1 in:fade={{ duration: 1000, delay: 1000 }}>About</h1>
	</div>
{/key}
