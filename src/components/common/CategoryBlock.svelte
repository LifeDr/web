<script>
  export let imgUrl = "";
  export let title = "";
</script>

<div class="b(1/solid/#DADADA) w(85) h(85) r(10) pack vbox gap(3) pointer">
  <img class="w(50) h(50)" src={imgUrl} alt={title} />
  <div class="font(11)">{title}</div>
</div>
