<script>
  import CategoryIcons from "../components/CategoryIcons.svelte";
  import CategoryTexts from "../components/CategoryTexts.svelte";
  import Loading from "../components/Loading.svelte";
  import NextBtn from "../components/NextBtn.svelte";
  import Search from "../components/Search.svelte";
</script>

<Loading />

<Search />

<div class="vbox gap(28) pb(48)">
  <CategoryIcons />
  <CategoryTexts />
</div>

<NextBtn />

<div class="h(150)" />
