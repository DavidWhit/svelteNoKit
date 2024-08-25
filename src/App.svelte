<script>
  import "./app.css";
  import counterState from './store.svelte.js'
  import Other from './SomeOther.svelte'
</script>

<!-- Try out snippets -->
{#snippet t(prop)}
  <div>{prop}</div>
{/snippet}

  <main>
    <button onclick={counterState.increment }>Increment</button> 
    <Other />
    <p>The state of things: {counterState.count}</p>
    {@render t("it's not jsx but it'll work")}
  </main>


  