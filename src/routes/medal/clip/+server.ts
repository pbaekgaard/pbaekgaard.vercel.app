import { json } from '@sveltejs/kit';
import { parse } from 'node-html-parser';
export async function POST({ request, cookies }) {
	const { url } = await request.json();
	const req = await fetch(url, { method: 'GET' })
		.then((response) => response.text())
		.then((html) => {
			const root = parse(html);
			return root.querySelector("meta[property='og:video:url']")['_attrs']['content'];
		});
	return json({ clipLink: req }, { status: 200 });
}
