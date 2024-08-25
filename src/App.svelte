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

  
  <style>
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
      filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
      color: #888;
    }
  </style>
  