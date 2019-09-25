<template>
  <div id="app">
    <AlbumHeader v-bind:myAlbum="myAlbum" />
    <AlbumDesc v-bind:myAlbum="myAlbum" />
    <AlbumTabs />
    <router-view v-bind:showList="showList" v-bind:showListId="showListId" />
  </div>
</template>
<script>
import AlbumHeader from "./components/AlbumHeader/AlbumHeader";
import AlbumDesc from "./components/AlbumDesc/AlbumDesc";
import AlbumTabs from "./components/AlbumTabs/AlbumTabs";
export default {
  name: "app",
  data() {
    return {
      myAlbum: {},
      showList: [],
      showListId: ""
    };
  },
  components: {
    AlbumHeader,
    AlbumDesc,
    AlbumTabs
  },
  methods: {
    async getRequestData(id) {
      try {
        let res = await this.$http(`/?type=album&id=${id}`);
        res = res.data.data.albumInfoList;
        this.myAlbum = res.filter(item => {
          return item.album.albumID == "rd001BbMyn30Z9IH";
        });
        this.myAlbum = this.myAlbum[0].album;
        // console.log(this.myAlbum);
      } catch (error) {
        console.log(error);
      }
    },
    async getShowList(id) {
      try {
        let res = await this.$http(`/?type=show&id=${id}`);
        this.showList = res.data;
        this.showListId = id;
        // console.log(this.showList)
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
      this.getRequestData("38979");
      this.getShowList("rd001BbMyn30Z9IH");
  }
};
</script>

<style lang="scss">
</style>
