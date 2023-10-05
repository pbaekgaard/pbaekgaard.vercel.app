<script>
	export let prefix;
	export let title;
	import { send, receive } from '/src/lib/crossfade.js';
</script>

<div class="prose lg:prose-xl prose-h2:mt-2 prose-h2:mb-2">
	<span
		class="group p-0 m-0 text-base-content hover:text-base-content transition-all ease-in-out duration-300"
	>
		<a class="no-underline text-inherit p-0 m-0" href="/{title.toLowerCase()}">
			<h2 class="italic text-inherit border-inherit text-3xl">
				<span
					class=" opacity-25 group-hover:opacity-100 transition-all duration-300 ease-in-out text-inherit text-4xl text-left font-mono p-0 m-0"
					>{prefix}</span
				>
				<span
					class="text-base-content border-inherit font-mono p-0 m-0 inline-block group-hover:translate-x-3 transition-all ease-in-out duration-300"
					>{title}</span
				>
			</h2>
		</a>
	</span>
</div>
