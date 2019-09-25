<template>
  <div class="program">
    <div class="loadingBox" v-show="loadShow">
      <span class="loading"></span>
    </div>
    <ul>
      <li
        class="programList"
        v-for="(item, index) in showListData"
        v-bind:key="index"
      >
        <div class="iconBox">
          <span class="icon"></span>
        </div>
        <div class="programContent">
          <h2 class="programName">{{ item.name }}</h2>
          <div class="programOthers">
            <div>播放：<span></span></div>
            <div>时长：<span></span></div>
            <!-- <span>更新：<span>{{|getTemplateDate}}</span></div> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { getTemplateDate } from "../js/time";
export default {
  name: "program",
  props: ["showList", "showListId"],
  data() {
    return {
      showListData: [],
      loadShow: true
    };
  },
  methods: {
    async getSkipShow(id) {
      try {
        let res = await this.$http(
          `/?type=skip_show&id=${this.showListId}&shows=${id}`
        );
        this.showListData.push(res.data.data.showList[id].show);
        // console.log(this.showListData);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.showList.forEach(item => {
      this.getSkipShow(item);
    });
  },
  beforeCreate() {
    this.loadShow = !this.loadShow;
  }
};
</script>

<style lang="scss" scoped>
.program {
  position: relative;
  padding: 0 20px;

  li {
    display: flex;
    margin: 12px 0;
  }

  .iconBox {
    flex: 0 0 32px;
    margin-right: 6px;
    width: 32px;

    .icon {
      display: inline-block;
      width: 32px;
      height: 32px;
      margin-top: 5px;

      @include bg-img("/image/function", 32px 32px);
    }
  }

  .programContent {
    flex: 1;
    overflow: hidden;

    .programName {
      margin-bottom: 4px;
      line-height: 22px;
      font-weight: 500;
      font-size: 4.27vw;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .programOthers {
      div {
        display: inline-block;
        padding-right: 0.08rem;
        margin-right: 0.08rem;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  .loadingBox {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    .loading {
      position: absolute;
      width: 200px;
      height: 150px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 20px;

      @include bg-img-gif("/image/loading", 200px 150px);
    }
  }
}
</style>