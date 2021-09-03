<script>
	import {v4 as uuidv4} from 'uuid'
	import { items } from "./store";
	let newTodo = ""
	function addTodo() {
		items.update(items => [...items, {
			title: newTodo,
			id: uuidv4(),
			done: false
		}])
		newTodo = ''
	}
	function removeTodo(id) {
		items.update(items => items.filter(item => item.id !== id))
	}
</script>

<svelte:head>
	<title>Todo app</title>
</svelte:head>

<main>
	<form on:submit|preventDefault={addTodo}  action="">
	<label for="todo">
		todo
	</label>
	<input bind:value={newTodo} type="text" id="todo">
	<button>add todo</button>
</form>
<ul>
	<h2>undone</h2>
	{#each $items as item (item.id)}
	{#if item.done === false}
		
	<li>{item.title}</li>
	<button on:click={() => removeTodo(item.id)}>remove</button>
	<input bind:checked={item.done} type="checkbox">
	{/if}
	{/each}
</ul>
<ul>
	<h2>done</h2>
	{#each $items as item (item.id)}
	{#if item.done === true}
		
	<li class={item.done && 'done'}>{item.title}</li>
	<button on:click={() => removeTodo(item.id)}>remove</button>
	<input bind:checked={item.done} type="checkbox">
	{/if}
	{/each}
</ul>
</main>

<style>
	.done {
		text-decoration: line-through;
	}
</style>