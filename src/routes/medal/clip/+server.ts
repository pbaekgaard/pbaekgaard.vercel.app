import { json } from '@sveltejs/kit';
import { parse } from 'node-html-parser';
export async function POST({ request, cookies }) {
	const { url } = await request.json();
	const req = await fetch(url, { method: 'GET' })
		.then((response) => response.text())
		.then((html) => {
			const root = parse(html);
			let clip = root.querySelector("meta[property='og:video:url']")['_attrs']['content'];
			let clipName = root.querySelector("meta[property='og:title']")['_attrs']['content'];
			clipName = clipName.substring(0, clipName.length - 24);
			clipName = clipName + '.mp4';
			return {
				clipUrl: clip,
				clipName: clipName
			};
		});
	const reqUrl = await fetch(req.clipUrl).then((res) => res.url);
	return json({ clipLink: reqUrl, clipName: req.clipName }, { status: 200 });
}
