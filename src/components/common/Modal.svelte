<script lang="ts">
  import { closeModal } from "svelte-modals";
  import { myItems$ } from "../../state/store/myItems$";
  import { dispatch } from "$lib/adorable";
  import { _내_비교함에서_빼기 } from "../../state/actions";

  // provided by <Modals />
  export let isOpen: boolean = false;

  const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

  const 내_비교함에서_빼기 = (id: number) =>
    dispatch(_내_비교함에서_빼기({ id }));
</script>

{#if isOpen}
  <div role="dialog" class="modal">
    <div class="contents relative w(355) h(200) vbox gap(15)">
      <div class="bold">내 비교함</div>
      <div class="hbox gap(18)">
        {#each list as item}
          <div class="vbox pack gap(10)">
            <div class="w(66) h(66) bg(#D9D9D9)">
              {#if $myItems$[item.id]}
                <img
                  class="w(66) h(66)"
                  src={$myItems$?.[item.id]?.imgUrl}
                  alt=""
                />
              {/if}
            </div>
            <button
              class:disabled={!$myItems$?.[item.id]}
              on:click={() => 내_비교함에서_빼기(item.id)}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.5"
                  cy="8.5"
                  r="8"
                  stroke={$myItems$?.[item.id] ? "black" : "rgba(0,0,0,0.3)"}
                />
                <path
                  d="M4 9H13"
                  stroke={$myItems$?.[item.id] ? "black" : "rgba(0,0,0,0.3)"}
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        {/each}
      </div>
      <button class="button font(13)!">비교하기</button>
      <div class="absolute top(10) right(10)">
        <button on:click={closeModal}
          ><svg
            width="15"
            height="15"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

  .disabled {
    cursor: not-allowed !important;
  }
</style>
