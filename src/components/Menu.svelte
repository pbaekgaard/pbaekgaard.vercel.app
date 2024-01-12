<script>
	import { fly, scale, fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	export let open;
</script>

{#if open}
	<div
		transition:fade={{ duration: 200 }}
		class="menu z-10 fixed h-screen w-screen flex justify-center items-center bg-base-200 bg-opacity-80"
	>
		{#each ['About', 'Experience', 'Work', 'Contact'] as link, i}
			<h1
				class="font-mono text-4xl transition-all duration-300 ease-in-out text-base-content text-opacity-70 hover:text-opacity-100"
			>
				<a
					transition:fly={{ y: -15, delay: 50 * i }}
					href={link.toLocaleLowerCase() == 'home' ? '/' : link.toLocaleLowerCase()}
					on:click={() => {
						open = false;
					}}
				>
					{link}
				</a>
			</h1>
		{/each}
	</div>

	<div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}
