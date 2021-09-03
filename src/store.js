import { writable } from "svelte/store";

export const items = writable(
	JSON.parse(window.localStorage.getItem("items")) || []
);

items.subscribe((items) => (localStorage.items = JSON.stringify(items)));
