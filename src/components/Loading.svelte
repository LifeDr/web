<script>
  import { onMount } from "svelte";

  let isShow = false;
  let isShow2 = false;
  let isShow3 = false;
  let isShow4 = true;

  const init = () => {
    setTimeout(() => (isShow = true), 100);
    setTimeout(() => (isShow2 = true), 1100);
    setTimeout(() => (isShow3 = true), 2100);
    setTimeout(() => (isShow4 = false), 4000);
  };

  onMount(() => init());
</script>

{#if isShow4}
  <div class="layer pack fixed z(3)">
    <div class="w(100vw) h(100vh) layer bg(black)" />
    {#if isShow2}
      <img
        class="layer opacity(0)"
        class:isShow={isShow3}
        src="drlife_background.png"
        alt=""
      />
    {/if}

    <div class="w(100vw) h(100vh) layer pack vbox">
      <div class="scale(0.9) opacity(0)" class:isShow class:smaller={isShow3}>
        <img src="Dr.png" alt="" />
      </div>
      <div
        class="c(white) pack text-align(center) vbox gap(7) opacity(0)"
        class:isShow={isShow2}
      >
        <div>의사와 약사가 골라주는</div>
        <div>믿을 수 있는 헬스케어 셀렉션</div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .smaller {
    transform: scale(0.6);
    opacity: 1;
    transition: all ease-in-out 1.5s;
  }
  .isShow {
    opacity: 1;
    transition: all ease-in-out 1.5s;
  }
</style>
