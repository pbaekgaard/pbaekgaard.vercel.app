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
	<div class="h-full prose lg:prose-2xl">
		<h1 in:fade={{ duration: 2000, delay: 1500 }}>About</h1>
		<div class="card lg:card-side">
			<figure><img src="/src/img/me.png" alt="me" class="mask mask-circle w-80 m-5" /></figure>
			<div class="card-body">
				<div class="inline-block align-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 m-2 text-green-400 inline-block align-middle"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
						/>
					</svg>
					<span class="align-middle inline-block"> 9000 Aalborg, Denmark </span>
				</div>
			</div>
		</div>
	</div>
{/key}
