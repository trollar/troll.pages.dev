import adapter from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				"script-src": ["self"],
			},
		},
	},
	hot: {
		preserveLocalState: true
	},
}

export default config
