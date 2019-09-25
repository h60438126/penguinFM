<template>
  <div class="albumHeader">
    <div class="tools">
      <span class="collection"></span>
      <span class="download"></span>
    </div>
    <div class="title">{{myAlbum.name}}</div>
    <div class="detail">
      <div class="detail_cover" >
        <img v-bind:src="myAlbum.share.cover" alt="封面" />
      </div>
      <div class="detail_info">
        <h3 class="info_title">主播：{{myAlbum.owner.nickname}}</h3>
        <div class="info_others">
            <div class="others_left">播放</div>
            <div class="others_right">更新</div>
        </div>
        <div class="info_op">
            <button v-for="(cate,index) in myAlbum.vecCate" v-bind:key="index">{{cate.categoryName}}</button>
        </div>
      </div>
    </div>
    <div class="bg-header">
      <img v-bind:src="myAlbum.share.cover" alt="背景图">
    </div>
  </div>
</template>

<script>
export default {
  name: "albumHeader",
  props: {
    myAlbum: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.albumHeader {
  position: relative;
  height: 210px;
  padding: 19px 20px 30px;
  background-color: rgba(7, 17, 27, 0.5);

  .tools {
    height: 22px;
    span {
      display: inline-block;
      width: 22px;
      height: 22px;
      margin-left: 20px;
    }
    .collection {
      @include bg-img("/image/collection", 22px 22px);
      float: right;
    }
    .download {
      @include bg-img("/image/download", 22px 22px);
      float: right;
    }
  }

  .title{
      margin-top: 5px;
      margin-bottom: 5px;
      height: 25px;
      line-height: 25px;
      font-size: 4.5vw;
      color: $theme-white;
  }

  .detail{
      display: flex;
      height: 105px;

      .detail_cover{
          flex: 0 0 105px;
          width: 105px;
          margin-right: 20px;

          img{
              width: 100%;
              height: 100%;
          }
      }

      .detail_info{
          flex: 1;
          padding: 5px 0;

          .info_title{
              margin-bottom: 9px;
              line-height: 18px;
              color: $theme-white;
          }

          .info_others{
              display: flex;
              div{
                  flex: 1;
                  margin-bottom: 22px;
                  color: rgba(255, 255, 255, 0.6);
                  font-size: 13px;
              }
          }

          .info_op{
              button{
                  margin-right: 12px;
                  width: 72px;
                  height: 25px;
                  background-color: $theme-white;
                  outline: none;
                  border: 0;
                  border-radius: 25px;

                  &:last-child{
                      margin-right: 0;
                  }
              }
          }
      }
  }

  .bg-header{
    position: absolute;
    left: 0;
    top:0;
    width:100%;
    height: 100%;
    z-index: -1;
    filter: blur(20px);
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>