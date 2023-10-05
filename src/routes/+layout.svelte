<script>
	import '../app.postcss';
	import Navbar from '/src/components/navbar.svelte';
</script>

<main class="h-screen w-screen overflow-hidden">
	<Navbar />
	<div class="mx-24 my-16">
		<slot class="" />
	</div>
</main>
