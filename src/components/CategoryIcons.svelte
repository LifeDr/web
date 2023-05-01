<script>
  import CategoryIconBlock from "./common/CategoryIconBlock.svelte";
</script>

<div class="w(100%) pack vbox gap(16)">
  <div class="w(80%) font(16) font-weight(700)">기관으로 검색하기</div>
  <div class="hbox gap(20)">
    <CategoryIconBlock imgUrl="eye.png" title="눈 건강" />
    <CategoryIconBlock imgUrl="intestine.png" title="장 건강" />
    <CategoryIconBlock imgUrl="liver.png" title="간 건강" />
  </div>

  <div class="hbox gap(20)">
    <CategoryIconBlock imgUrl="stomach.png" title="위 건강" />
    <CategoryIconBlock imgUrl="tooth.png" title="치아 건강" />
    <CategoryIconBlock imgUrl="womb.png" title="여성 건강" />
  </div>
</div>
