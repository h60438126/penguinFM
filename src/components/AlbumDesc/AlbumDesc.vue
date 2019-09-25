<template>
  <div class="albumDesc" v-on:click="descActiveFun">
    <p class="desc" v-bind:class="{descActive:show}">{{ myAlbum.desc }}</p>
  </div>
</template>

<script>
export default {
  name: "albumDesc",
  props: {
    myAlbum: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      show:false
    }
  },
  methods:{
    descActiveFun(){
      this.show = !this.show
    }
  }
};
</script>

<style lang="scss" scoped>
.albumDesc {
  margin: 16px 20px 40px;

  .desc {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.4);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    &.descActive{
      display: block;
      white-space: normal;
    }
  }
}
</style>