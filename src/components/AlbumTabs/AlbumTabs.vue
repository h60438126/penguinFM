<template>
  <div class="albumTabs border-1px">
    <router-link to="/details" tag="div">详情</router-link>
    <router-link to="/" tag="div">节目</router-link>
    <router-link to="/comment" tag="div">评论</router-link>
  </div>
</template>

<script>
export default {
  name: "albumTabs"
};
</script>

<style lang="scss" scoped>
.albumTabs {
  display: flex;
  margin: 0 20px;
  height: 40px;

  div {
    flex: 1;
    text-align: center;
    line-height: 40px;

    &.active-class {
      color: $theme-gold;
      border-bottom: 2px solid $theme-gold;
    }
  }

  @include border($theme-gold);
}
</style>