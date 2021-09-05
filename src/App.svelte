<script>
	import {v4 as uuidv4} from 'uuid'
	import { items } from "./store";
	import ItemsList from './components/ItemsList.svelte'
	let newTodo = ""
	function addTodo() {
		items.update(items => [...items, {
			title: newTodo,
			id: uuidv4(),
			done: false
		}])
		newTodo = ''
	}

	
</script>

<svelte:head>
	<title>Todo app</title>
</svelte:head>

<main>
	<form on:submit|preventDefault={addTodo}  action="">
	<label for="todo">
		todos
	</label>
	<input bind:value={newTodo} type="text" id="todo">
	<button>add todo</button>
	</form>
	<ItemsList />
</main>

