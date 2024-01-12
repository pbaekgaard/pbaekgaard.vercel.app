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
		<h1 in:fade={{ duration: 2000, delay: 1500 }} class="">About</h1>
		<div class="card lg:card-side">
			<figure in:fly={{ duration: 1000, delay: 2000, y: 25 }}>
				<img src="/src/img/me.png" alt="me" class="mask mask-circle w-80 m-5" />
			</figure>
			<div class="card-body py-12">
				<div in:fly={{ duration: 1000, delay: 2500, x: 25 }} class="inline-block align-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 m-2 text-primary inline-block align-middle"
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
					<span class="align-middle inline-block">Denmark </span>
				</div>
				<div in:fly={{ duration: 1000, delay: 2500, x: 25 }} class="inline-block align-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 m-2 text-primary inline-block align-middle"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
						/>
					</svg>

					<span class="align-middle inline-block">9000 Aalborg</span>
				</div>
			</div>
		</div>
	</div>
{/key}
