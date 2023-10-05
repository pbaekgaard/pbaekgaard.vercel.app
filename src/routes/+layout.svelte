<script>
	import '../app.postcss';
	import Navbar from '/src/components/navbar.svelte';
</script>

<main class="h-screen w-screen overflow-hidden">
	<Navbar />
	<slot class="" />
</main>
