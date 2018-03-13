<template>
    <div fixed class="mint-tabbar">
       <slot></slot>
    </div>
</template>
<script>
import mTabbarItem from "./MTabberItem.vue";
export default {
  computed: {
    value() {
      return this.$route.matched[0].name;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>