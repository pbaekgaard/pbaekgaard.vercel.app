<script>
	import { fly, slide } from 'svelte/transition';
	import Mainlink from '/src/components/mainLink.svelte';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<div class="flex flex-col justify-center items-center h-full w-full">
		<div class="flex flex-col h-full w-3/4">
			<div class="basis-1/3 text-2xl prose">
				<h1
					class="p-0 m-0 -translate-x-5"
					in:fly={{ x: -50, duration: 2000, delay: 200, easing: quintInOut }}
					out:fly={{ x: 50, duration: 1000, easing: quintInOut }}
				>
					Peter
				</h1>
				<h1
					in:fly={{ x: 50, duration: 2000, delay: 400, easing: quintInOut }}
					out:fly={{ x: -50, duration: 1000, easing: quintInOut }}
					class="p-0 m-0 translate-x-5"
				>
					Bækgaard.
				</h1>
			</div>
			<div class="flex flex-col items-center">
				<div>
					<div
						in:fly={{ x: -100, duration: 2000, delay: 1600, easing: quintInOut }}
						out:fly={{ x: 100, duration: 1000, easing: quintInOut }}
					>
						<Mainlink prefix="1." title="About" />
					</div>
					<div
						in:fly={{ x: -100, duration: 2000, delay: 1800, easing: quintInOut }}
						out:fly={{ x: 100, duration: 1000, easing: quintInOut }}
					>
						<Mainlink prefix="2." title="Experience" />
					</div>
					<div
						in:fly={{ x: -100, duration: 2000, delay: 2000, easing: quintInOut }}
						out:fly={{ x: 100, duration: 1000, easing: quintInOut }}
					>
						<Mainlink prefix="3." title="Work" />
					</div>
					<div
						in:fly={{ x: -100, duration: 2000, delay: 2200, easing: quintInOut }}
						out:fly={{ x: 100, duration: 1000, easing: quintInOut }}
					>
						<Mainlink prefix="4." title="Contact" />
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
