<script>
  import { items$ } from "../state/store";
  import MyItem from "./common/MyItem.svelte";
</script>

<div>
  <div class="hbox overflow(scroll) scroll">
    <div class="w(100) guide vbox text-align(center) font(11)">
      <div class="h(191)" />
      <div class="h(34) pack">등급</div>
      <div class="h(34) pack">기능성 인증</div>
      <div class="h(34) pack">HACCP인증</div>
      <div class="h(34) pack">GMP인증</div>
      <div class="h(34) pack">주요기능성</div>
      <div class="h(34) pack">보조기능성</div>
      <div class="h(34) pack">일일섭취량</div>
      <div class="h(168) pt(10)">유해성분함유</div>
    </div>
    {#each $items$ as { imgUrl, brand, name, grade, funcCert, HACCP, GMP, mainCert, subCert, daily, harmful }}
      <MyItem
        {imgUrl}
        {brand}
        {name}
        {grade}
        {funcCert}
        {HACCP}
        {GMP}
        {mainCert}
        {subCert}
        {daily}
        {harmful}
      />
    {/each}
  </div>
</div>

<style>
  .scroll::-webkit-scrollbar {
    display: none;
  }
  .scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
