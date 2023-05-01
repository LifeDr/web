<script lang="ts">
  type NavIconName = "home" | "search" | "content" | "my";
  export let name: NavIconName = "home";
</script>

<div class="vbox gap(7) pack">
  <div class="w(30) h(30)">
    {#if name === "home"}
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 31 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 31H7.44444C3.88527 31 1 27.8985 1 24.0727V13.1753C1 10.753 2.17709 8.50656 4.10427 7.25106L12.1598 2.00309C14.2129 0.665636 16.7871 0.665636 18.8402 2.00309L26.8957 7.25106C28.8229 8.50656 30 10.753 30 13.1753V24.0727C30 27.8985 27.1147 31 23.5556 31H20.3333M10.6667 31V24.0727C10.6667 21.2032 12.8306 18.8772 15.5 18.8772C18.1695 18.8772 20.3333 21.2032 20.3333 24.0727V31M10.6667 31H20.3333"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {:else if name === "search"}
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5 23.5L31 31"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 13.8571C1 20.9579 6.75634 26.7143 13.8571 26.7143C17.4136 26.7143 20.6331 25.2702 22.9606 22.9364C25.2803 20.6108 26.7143 17.4014 26.7143 13.8571C26.7143 6.75634 20.9579 1 13.8571 1C6.75634 1 1 6.75634 1 13.8571Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {:else if name === "content"}
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.6667 1H4.33333C2.49238 1 1 2.49238 1 4.33333V27.6667C1 29.5077 2.49238 31 4.33333 31H27.6667C29.5077 31 31 29.5077 31 27.6667V4.33333C31 2.49238 29.5077 1 27.6667 1Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.66675 16H24.3334"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.66675 24.3335H17.6667"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {:else if name === "my"}
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 31V29.125C1 21.8763 6.87627 16 14.125 16C21.3737 16 27.25 21.8763 27.25 29.125V31"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.125 16C18.2671 16 21.625 12.6421 21.625 8.5C21.625 4.35786 18.2671 1 14.125 1C9.98286 1 6.625 4.35786 6.625 8.5C6.625 12.6421 9.98286 16 14.125 16Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {/if}
  </div>
  <div class="font(11)">{name.toUpperCase()}</div>
</div>
