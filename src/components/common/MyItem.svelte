<script lang="ts">
import {openModal} from "svelte-modals"
import Modal from "./Modal.svelte"
import {dispatch} from "$lib/adorable"
import {_내_비교함에_담기, _내_비교함에서_빼기_name} from "../../state/actions"

export let imgUrl: string = ""
export let brand: string = ""
export let name: string = ""
export let grade: string = ""
export let funcCert: boolean = false
export let HACCP: boolean = false
export let GMP: boolean = false
export let mainCert: string = ""
export let subCert: string = ""
export let daily: string = ""
export let harmful: string = ""

const 내_보관함_담기 = () => {
  dispatch(_내_비교함에_담기({imgUrl, brand, name, grade, funcCert, HACCP, GMP, mainCert, subCert, daily, harmful}))
  openModal(Modal)
}

const 비교함에서_빼기 = () => {
  dispatch(_내_비교함에서_빼기_name({name}))
  openModal(Modal)
}
</script>

<div class="w(140) guide text-align(center) font(11)">
  <div class="h(191) vbox gap(8) pack">
    <div><img class="w(86) h(86)" src={imgUrl} alt="" /></div>
    <div>{brand}</div>
    <div class="bold font(16)">{name}</div>
  </div>
  <div class="h(34) pack bg(#F0EFEF)">
    <div class="w(16) h(16) r(50%) b(1/#000) pack">
      {#if grade}
        <div class="w(18) h(18) r(50%) bg(#86C285) pack font(10) c(#fff) bold">
          {grade}
        </div>
      {/if}
    </div>
  </div>
  <div class="h(34) pack">
    <div class="w(16) h(16) r(50%) b(1/#000) pack">
      {#if funcCert}
        <div class="w(18) h(18) r(50%) bg(#86C285) pack font(10) c(#fff) bold" />
      {/if}
    </div>
  </div>
  <div class="h(34) pack bg(#F0EFEF)">
    <div class="w(16) h(16) r(50%) b(1/#000) pack">
      {#if HACCP}
        <div class="w(18) h(18) r(50%) bg(#86C285) pack font(10) c(#fff) bold" />
      {/if}
    </div>
  </div>
  <div class="h(34) pack">
    <div class="w(16) h(16) r(50%) b(1/#000) pack">
      {#if GMP}
        <div class="w(18) h(18) r(50%) bg(#86C285) pack font(10) c(#fff) bold" />
      {/if}
    </div>
  </div>
  <div class="h(34) pack bg(#F0EFEF)">{mainCert}</div>
  <div class="h(34) pack">{subCert}</div>
  <div class="h(34) pack bg(#F0EFEF)">{daily}</div>
  <div class="h(168) pt(10) vbox gap(30)">
    <div>{harmful}</div>
    <div>
      <button class="button mb(10)" on:click={내_보관함_담기}>내 보관함 담기</button>
      <button class="button" on:click={비교함에서_빼기}>비교함에서 빼기</button>
    </div>
    <div />
  </div>
</div>
