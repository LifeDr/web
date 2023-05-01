<script>
  import CategoryIcons from "../components/CategoryIcons.svelte";
  import CategoryTexts from "../components/CategoryTexts.svelte";
  import Loading from "../components/Loading.svelte";
  import Search from "../components/Search.svelte";
</script>

<Loading />

<Search />

<div class="vbox gap(28)">
  <CategoryIcons />
  <CategoryTexts />
</div>
