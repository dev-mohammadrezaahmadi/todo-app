<script>
    import { items } from '../store'
    function removeTodo(id) {
		items.update(items => items.filter(item => item.id !== id))
	}
</script>

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
		<li class="done">{item.title}</li>
        <button on:click={() => removeTodo(item.id)}>remove</button>
        <input bind:checked={item.done} type="checkbox">
	{/if}
	{/each}
</ul>

<style>
    .done {
        text-decoration: line-through;
    }
</style>