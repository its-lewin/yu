<template>
  <div class="grid grid-cols-6 gap-6">
    <div class="mt-72 ml-4">
      <UVerticalNavigation :links="links" :ui="ui" />
    </div>
    <div class="col-span-5">
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
    class:
      "cursor-default text-xs mt-8 hover:before:bg-transparent text-gray-900 hover:text-gray-900 dark:hover:text-gray-400 dark:hover:before:bg-transparent",
  },
  {
    label: "",
    avatar: {
      src: "/logos/instagram.svg",
      ui: {
        rounded: "rounded-sm",
      },
    },
    to: "https://www.instagram.com/yuchen_o/",
    target: "_blank",
    class:
      "opacity-60 hover:opacity-100 hover:before:bg-transparent dark:filter dark:invert dark:hover:before:bg-transparent",
  },
];
</script>
