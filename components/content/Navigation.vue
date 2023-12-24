<template>
  <div class="lg:hidden my-4">
    <UDropdown
      :items="items"
      :popper="{ placement: 'bottom-start' }"
      class="float-right mr-4"
    >
      <UButton
        color="white"
        label="Menu"
        trailing-icon="i-heroicons-chevron-down-20-solid"
      />
    </UDropdown>
  </div>

  <div class="grid grid-cols-6 gap-6">
    <div class="hidden lg:inline-block mt-72 ml-4">
      <UVerticalNavigation :links="links" :ui="ui" />
    </div>
    <div class="col-span-6 lg:col-span-5">
      <slot />
    </div>
  </div>
</template>

<script setup>
const ui = {
  size: "text-lg",
};

const links = [
  {
    label: "Yu Chen Hsu",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "© " + new Date().getFullYear().toString(),
    class: "pointer-events-none text-xs mt-8",
  },
  {
    label: "Instagram",
    avatar: {
      src: "/logos/instagram.svg",
      ui: {
        rounded: "rounded-sm",
      },
      class: "dark:filter dark:invert",
    },
    to: "https://www.instagram.com/yuchen_o/",
    target: "_blank",
    labelClass: "opacity-100",
    class:
      "opacity-80 hover:opacity-100 text-xs hover:before:bg-transparent dark:hover:before:bg-transparent",
  },
];

const items = [];
items.push([links[0]]);
items.push([links[1]]);
items.push([links[3]]);
</script>
