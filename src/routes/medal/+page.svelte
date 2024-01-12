<script>
	import { goto } from '$app/navigation';
	const url =
		'https://medal.tv/games/csgo/clips/1eaSPSaFyROqlg/d1337spERrC3?invite=cr-MSxuVngsNzAxNjA0Mzcs?mobilebypass=true';
	let output = '';
	async function gotoDownload(event) {
		const url = event.target.value;
		const response = await fetch('/medal/clip', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { clipLink } = await response.json();
		if (clipLink) {
			goto(clipLink);
		}
	}

	function onEnter(event) {
		if (event.key === 'Enter') {
			gotoDownload(event);
		}
	}
</script>

<div class="flex justify-center w-full h-1/2 flex-col items-center">
	<input
		type="text"
		id="urlinput"
		placeholder="ENTER MEDAL.TV SHARE URL"
		class="input input-bordered input-lg input-accent h-20 w-4/6 max-w-6xl border-2 rounded-md placeholder:text-center"
		on:paste={async (event) => {
			await setTimeout(() => {
				gotoDownload(event);
			}, 10);
		}}
		on:keyup={(event) => {
			onEnter(event);
		}}
	/>
	<ul class="italic text-gray-400 pt-5">
		<li>1. Copy Medal.tv Share link</li>
		<li>2. Paste link here</li>
		<li>3. Right click video and Save Video As</li>
	</ul>
</div>
