<template>
  <div class="app-header">
    <div
      @click="$store.commit('setShowSide', { val: true, comp: 'weather' })"
      class="header-webther fl d-flex-ver d-pointer"
    >

      <svg v-size="22" class="icon ml5" aria-hidden="true">
        <!-- <use :xlink:href="`#icon-${$weatherIcon[weatherData.now.cond_code]}`" /> -->
      </svg>
      <!-- <span class="wea">{{ weatherData.now.tmp }}</span> -->
<svg t="1680460396419" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1488" width="32" height="32"><path d="M390.190747 438.780395c-17.305131 0-31.335682 14.025435-31.335682 31.335682l0 30.571273c0 17.310248 14.030551 31.335682 31.335682 31.335682 17.305131 0 31.335682-14.025435 31.335682-31.335682l0-30.571273C421.526429 452.80583 407.495878 438.780395 390.190747 438.780395z" fill="#999999" p-id="1489"></path><path d="M634.768091 438.780395c-17.310248 0-31.335682 14.025435-31.335682 31.335682l0 30.571273c0 17.310248 14.025435 31.335682 31.335682 31.335682 17.310248 0 31.335682-14.025435 31.335682-31.335682l0-30.571273C666.103774 452.80583 652.078339 438.780395 634.768091 438.780395z" fill="#999999" p-id="1490"></path><path d="M589.758991 580.699662c-14.305821-9.435906-33.682124-5.426593-43.301202 8.783037-0.13303 0.193405-13.658068 19.819394-34.288944 19.819394-20.058848 0-32.534997-18.166755-33.381271-19.431561-9.195429-14.484899-28.377304-18.87079-42.969651-9.792017-14.703887 9.129938-19.21769 28.448936-10.083659 43.147706 11.246135 18.105357 42.113143 48.748261 86.433558 48.748261 44.106544 0 75.351152-30.407544 86.862323-48.380894C608.278787 609.149621 604.086301 590.125335 589.758991 580.699662z" fill="#999999" p-id="1491"></path><path d="M94.361111 553.964764c4.38589 2.111081 9.017374 3.110851 13.577227 3.110851 11.659551 0 22.854521-6.538927 28.255531-17.749246 25.067932-52.05354 61.937654-89.846284 96.221482-98.618065 11.210319-2.866281 19.921725-11.680017 22.670326-22.910802 28.291346-115.693975 116.831892-184.762027 236.840126-184.762027 85.312014 0 168.002318 51.05377 184.323029 113.796766 3.682879 14.158465 16.780175 24.276916 31.304983 23.430642 1.76418-0.051165 3.508917-0.081864 5.243421-0.081864 94.344738 0 158.475338 80.298837 173.387979 161.14719 3.14155 17.024745 19.533892 28.306696 36.497239 25.134447 17.024745-3.14155 28.275997-19.482727 25.134447-36.497239-21.788236-118.141724-111.827925-203.775057-218.750119-211.82336-34.039257-79.981612-131.188878-137.777947-237.140978-137.777947-142.659117 0-253.517971 82.155115-293.1629 215.699644-45.994544 19.044752-89.514733 64.763003-119.03507 126.068254C72.215742 527.72924 78.770018 546.456766 94.361111 553.964764z" fill="#999999" p-id="1492"></path><path d="M934.405449 598.593194c-16.963347-3.692089-33.610492 6.019087-37.303604 22.921036-22.002107 100.709703-104.738459 171.807994-196.726523 171.807994L279.952017 793.322224c-82.052784 0-151.375639-76.495208-151.375639-168.81994 0-17.310248-14.030551-29.837562-31.335682-29.837562s-31.335682 13.026688-31.335682 30.336936c0 126.292358 98.021477 230.991931 214.047004 230.991931L700.375322 855.993588c121.222899 0 229.714845-92.325755 257.94991-221.596957C962.018344 617.485473 951.308421 602.285283 934.405449 598.593194z" fill="#999999" p-id="1493"></path></svg>
      <em class="super">{{ airType }}</em>
    </div>
    <div class="header-setting fr">
     
      <d-icon
        icon="icon-setting"
        title="设置"
        @click="$store.commit('setShowSide', { val: true, comp: 'setting' })"
        class="icon-handle d-inline f24"
      ></d-icon>
      <d-icon
        icon="icon-add"
        title="添加网站"
        @click="$store.commit('setShowSide', { val: true, comp: 'add' })"
        class="icon-handle d-inline f24 ml10"
      ></d-icon>
    </div>
    <div id="aMap" class="d-hide"></div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    //这里存放数据
    return {
      weatherData: { now: {} },
      currentPosition: {}, //当前位置
      airType: "23°C",
      timer: null,
    };
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getCityLocal();
    this.timerGetCityLocal();

    // 定时获取天气
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    timerGetCityLocal() {
      this.timer = setInterval(() => {
        this.getCityLocal();
      }, 1000 * 60 * 60);
    },

    // 根据坐标获取城市编码
    getCityLocal() {
      this.$http
        .getCityLocal()
        .then((res) => {
          return res.data || {};
        })
        .then((res) => {
          this.currentPosition = res;
          this.getWeather(res.id);
        });
    },
    // 定时获取天气
    timerWeather() {
      this.timer = setInterval(() => {
        this.getWeather(this.currentPosition.cid);
      }, 5000);
    },
    // 获取天气
    getWeather(city) {
      this.$http.getWeather(city).then((res) => {
        if (res.status != "ok") return;
        this.weatherData = res || {};
        this.weatherData.location = this.currentPosition.name;
        this.moment(res.sun);
        this.$store.commit("setWeather", this.weatherData);
      });
    },
    // 判断白天晚上
    moment(sun) {
      let nowDate = dayjs().format("YYYY-MM-DD");
      let rise = new Date(`${nowDate} ${sun.rise}`).getTime(); //日出
      let set = new Date(`${nowDate} ${sun.set}`).getTime(); //日落

      let nowTamp = dayjs().valueOf();
      let moment = nowTamp > rise && nowTamp < set ? "d" : "n";

      // 如果当前时间大于日出时间 并且小于日落时间 那就是白天
      this.$store.commit("setMoment", moment);
    },
  },
  beforeCreate() { }, //生命周期 - 创建之前
  beforeMount() { }, //生命周期 - 挂载之前
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroyed() {
    this.timer = null;
    clearInterval(this.timer);
  },
};
</script>
<style lang='less' scoped>
//@import url();
.app-header {
  overflow: hidden;
  max-height: 64px;
  min-height: 50px;
  padding: 20px 50px;
  color: #fff;
  .header-webther {
    .super {
      // vertical-align: super;
      font-size: 12px;
      color: #ddd;
      margin-top: -3px;
    }
    .icon {
      color: #fff;
    }
    .wea {
      font-size: 20px;
      margin-left: 8px;
      margin-right: 6px;
    }
  }
}
.header-setting {
  .icon-handle {
    transition: 0.5s;
    cursor: pointer;
    opacity: 0.4;
    &:hover {
      transform: rotate(90deg);
      opacity: 0.9;
    }
  }
}
</style>
