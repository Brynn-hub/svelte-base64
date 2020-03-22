import App from './App.svelte';
import util from './util';

const app = new App({
	target: document.body,
	props: {
		imgSrc: ''
	}
});

export default app;