<script>
	import { goto } from '$app/navigation';
	let container;
	let isLoading = false;
	let inputValue = '';
	async function DownloadMP4(url, clipName) {
		const downloadUrl = 'https://corsproxy.org/?' + encodeURIComponent(url);
		var scr = document.createElement('script');
		scr.innerHTML = `
		var dlButton = document.createElement('Button');
		dlButton.innerHTML = 'Download Medal Clip';
		dlButton.className = 'btn btn-outline btn-accent';
		dlButton.addEventListener('click', buttonDownload);
		dlButtonContainer = document.getElementById('downloadButtonContainer');
		dlButtonContainer.appendChild(dlButton);
		async function buttonDownload() {
			fetch('${downloadUrl}').then(res => res.blob()).then(blob => {var url = window.URL.createObjectURL(blob); var a = document.createElement('a'); a.href = url; a.download = '${clipName}'; document.body.appendChild(a); a.click(); a.remove();});
		}
		`;
		container.appendChild(scr);
		isLoading = false;
	}

	async function gotoDownload(event) {
		var downloadButtonContainer = document.getElementById('downloadButtonContainer');
		downloadButtonContainer.innerHTML = '';
		isLoading = true;
		const url = event.target.value + '?mobilebypass=true';
		const response = await fetch('/medal/clip', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const { clipLink, clipName } = await response.json();
		if (clipLink) {
			DownloadMP4(clipLink, clipName);
		}
	}

	function onEnter(event) {
		if (event.key === 'Enter') {
			gotoDownload(event);
		}
	}
</script>

<div class="flex justify-center w-full h-1/2 flex-col items-center">
	<div class="flex flex-row w-full justify-center">
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
			bind:value={inputValue}
		/>
	</div>
	<div bind:this={container} id="downloadButtonContainer" class="py-5">
		{#if isLoading == true}
			<span class="loading loading-spinner text-accent" />{:else}{/if}
	</div>
	<ul class="italic text-gray-400 pt-5">
		<li>1. Copy Medal.tv Share link</li>
		<li>2. Paste link here</li>
		<li>3. Right click video and Save Video As</li>
	</ul>
</div>
