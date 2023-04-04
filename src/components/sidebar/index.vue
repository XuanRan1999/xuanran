
<template>
  <el-drawer
  title="我是标题"
  :visible.sync="showSidebar"
  :with-header="false">
  11111111111111111111111111111111111111111111111111
  <button>
    11
  </button>
</el-drawer>
</template>

<script>

const setting = () => import("@/components/sidebar/setting");


export default {
  title: "设置",
  name: "sidebar",
  props: {},
  components: {  },
  data() {

    return {
      showSidebar:false,
     
    };
  },
 
  created() {},
 

  mounted() {
this.$bus.$on('drawer',(a)=>{
if(a==1){
 this.showSidebar==false?  this.showSidebar=true: this.showSidebar=false;
}
})


  },
  computed: {
  
    sideComp() {
      return this.$store.state.sideComp || "";
    },
  },
  watch: {
    "$store.state.editType": {
      handler(val) {
        this.title.add = val == "add" ? "新增" : "编辑";
      },
    },
  },
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='less' scoped>
.app-sidebar-box{


}
.app-sidebar-cover {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255,255, .1);
 
}
.app-sidebar-content {
  background-color: rgba(255,255,255);
  box-shadow: 10px 10px 20px 20px rgba(0, 0, 0, .5);

  position: absolute;
  transition: transform 0.2s;
  z-index: 100;
  transform: translateZ(0);
  transform: translateX(100%);
  top: 0;
  bottom: 0;
  right: 0;
  width: 400px;
  &.active {
    transform: translateX(0);
  }
  .app-sidebar-main {
    overflow-y: auto;
    padding-top: 60px;
    background-color: var(--background-info);
    height: 100%;
    width: 100%;
  }
}
.sidebar-title {
  position: absolute;
  z-index: 2001;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1e1e1e;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  line-height: 60px;
  // color: rgba(var(--main-color), 1);
  color: #fff;
  font-size: 24px;
  padding: 0 20px;
}
.sidebar-close {
  display: inline-block;
  transition: 0.2s;
  &:hover {
    transform: rotate(90deg);
  }
}
@media screen and (max-width: 641px) {
  .app-sidebar-content {
    width: 80%;
  }
}
</style>