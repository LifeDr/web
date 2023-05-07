<script lang="ts">
import {closeModal} from "svelte-modals"
import {myItems$} from "../../state/store/myItems$"
import {dispatch} from "$lib/adorable"
import {_내_비교함에서_빼기_id, _내_비교함에서_빼기_name} from "../../state/actions"

// provided by <Modals />
export let isOpen: boolean = false

$: emptyArr = new Array(4 - [...$myItems$].length)

const 내_비교함에서_빼기 = (name: string) => dispatch(_내_비교함에서_빼기_name({name}))
</script>

{#if isOpen}
  <div role="dialog" class="modal">
    <div class="contents relative w(355) h(200) vbox gap(15)">
      <div class="bold">내 비교함</div>
      <div class="hbox gap(18)">
        {#each $myItems$ as item}
          <div class="vbox pack gap(10)">
            <div class="w(66) h(66) bg(#D9D9D9)">
              {#if item.imgUrl}
                <img class="w(66) h(66)" src={item.imgUrl} alt="" />
              {/if}
            </div>
            <button on:click={() => 내_비교함에서_빼기(item.name)}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.5" cy="8.5" r="8" stroke={"black"} />
                <path d="M4 9H13" stroke={"black"} stroke-linecap="round" />
              </svg>
            </button>
          </div>
        {/each}
        {#each emptyArr as _}
          <div class="vbox pack gap(10)">
            <div class="w(66) h(66) bg(#D9D9D9)" />
            <button>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.5" cy="8.5" r="8" stroke="rgba(0,0,0,0.3)" />
                <path d="M4 9H13" stroke="rgba(0,0,0,0.3)" stroke-linecap="round" />
              </svg>
            </button>
          </div>
        {/each}
      </div>
      <button class="button font(13)!">비교하기</button>
      <div class="absolute top(10) right(10)">
        <button on:click={closeModal}
          ><svg width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 16L8.50002 8.50004M8.50002 8.50004L16 1M8.50002 8.50004L1 1M8.50002 8.50004L16 16"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  /* allow click-through to backdrop */
  pointer-events: none;
}

.contents {
  min-width: 240px;
  border-radius: 3px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: auto;
}
</style>
