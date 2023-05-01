<script>
  import "adorable-css";
  import "../styles/reset.css";
  import "../styles/global.css";
  import NavigationBar from "../components/NavigationBar.svelte";
  import Loading from "../components/Loading.svelte";
</script>

<Loading />

<slot />

<NavigationBar />
