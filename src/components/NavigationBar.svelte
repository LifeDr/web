<script>
  import NavIcon from "./common/NavIcon.svelte";
</script>

<div
  class="w(100%) bg(#F8F8F8) h(90) fixed bottom(0) hbox space-around p(0/40/0/40) font(12)"
>
  <NavIcon name="home" />
  <NavIcon name="search" />
  <NavIcon name="content" />
  <NavIcon name="my" on:click={() => (location.pathname = "/my")} />
</div>
