<script>
  import { reducer } from "../lib/adorable";

  const dif = reducer("hi", "dif$", (_dif$) => {});
</script>

<h1 class="pack">Welcome to SvelteKit {$dif}</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
