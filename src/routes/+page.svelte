<script>
  let isShow = false;
  let isShow2 = false;
  let isShow3 = false;

  setTimeout(() => (isShow = true), 100);
  setTimeout(() => (isShow2 = true), 1100);
  setTimeout(() => (isShow3 = true), 2100);
</script>

<div class="layer pack relative">
  <div class="w(100vw) h(100vh) layer bg(black)" />
  <img
    class="layer opacity(0)"
    class:isShow={isShow3}
    src="drlife_background.png"
    alt=""
  />

  <div class="w(100vw) h(100vh) layer pack vbox gap(20)">
    <div class="scale(1.5) opacity(0)" class:isShow class:origin={isShow3}>
      <img src="Dr.svg" alt="" />
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

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .origin {
    transform: scale(1);
    opacity: 1;
    transition: all ease-in-out 1.5s;
  }
  .isShow {
    opacity: 1;
    transition: all ease-in-out 1.5s;
  }
</style>
