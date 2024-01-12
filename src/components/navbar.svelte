<script>
	import ThemeSelect from '$lib/theme-select.svelte';
	import { fade, fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import Menu from '/src/components/Menu.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	let open;
</script>

{#key $page.url.pathname}
	<Menu bind:open />
	<div class="navbar">
		{#if $page.url.pathname !== '/'}
			<div class="navbar-start z-30">
				<label class="btn btn-circle bg-transparent hover:bg-base-200 border-none swap swap-rotate">
					<!-- this hidden checkbox controls the state -->
					<input type="checkbox" bind:checked={open} />

					<!-- hamburger icon -->
					<svg
						class="swap-off fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
						><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
					>

					<!-- close icon -->
					<svg
						class="swap-on fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
						><polygon
							points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
						/></svg
					>
				</label>
			</div>
			<div
				class="navbar-center prose z-30"
				in:fly={{ y: -50, duration: 1500, delay: 100, easing: quintInOut }}
			>
				<h2>
					<a class="no-underline italic prose" on:click={() => (open = false)} href="/"
						><h2
							class=" opacity-80 hover:opacity-100 transition-all duration-300 hover:text-secondary"
						>
							Peter Bækgaard
						</h2></a
					>
				</h2>
			</div>
		{:else}
			<div class="navbar-start" />
		{/if}
		<div class="navbar-end z-30">
			<ThemeSelect />
		</div>
	</div>
{/key}
