<script>
  import CategoryTextBlock from "./common/CategoryTextBlock.svelte";

  const 일상_고민 = [
    "다이어트",
    "피부미용",
    "근육성장",
    "면역력 저하",
    "정신/수면",
    "관절건강",
    "붓기제거",
    "임신/출산",
  ];
</script>

<div class="w(100%) pack vbox gap(16)">
  <div class="w(80%) font(16) font-weight(700)">일상고민으로 검색하기</div>
  <div class="vbox gap(10)">
    <div class="hbox gap(20)">
      <CategoryTextBlock title={일상_고민[0]} />
      <CategoryTextBlock title={일상_고민[1]} />
    </div>
    <div class="hbox gap(20)">
      <CategoryTextBlock title={일상_고민[2]} />
      <CategoryTextBlock title={일상_고민[3]} />
    </div>
    <div class="hbox gap(20)">
      <CategoryTextBlock title={일상_고민[4]} />
      <CategoryTextBlock title={일상_고민[5]} />
    </div>
    <div class="hbox gap(20)">
      <CategoryTextBlock title={일상_고민[6]} />
      <CategoryTextBlock title={일상_고민[7]} />
    </div>
  </div>
</div>
