<template>
     <transition name="slide-fade">
     <router-view/>
   </transition>
</template>

<style scoped>


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.6, 0.9, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>


