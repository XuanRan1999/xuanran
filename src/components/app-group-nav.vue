<template>
<div >

  <el-carousel indicator-position="outside"
  :autoplay='false'
  :arrow="'never'"
  class="box"
  >
    <el-carousel-item v-for="item in 2" :key="item">
<div class="box1" v-if="item==1">

    <ul>
      <draggable
     
      v-model="list"
      tag="ul"
    
      > <li  v-for="(item, index) in list" :key="item.id"
      :ref="index"
      :class="{shake:Doudong}"

      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
     
  
    


      >{{ item.age }}</li>
    </draggable>
     
    </ul>
    

</div>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components:{
    draggable
  },
data() {
  return {
   list:[{
    name: 'list',
    age:'1',
      ref:'https://world.taobao.com/',
      icon:'iconfont icon-taobao'
    },  
    {
      name: 'list',
      age:'2',
      ref:'https://world.taobao.com/',
      icon:'iconfont icon-taobao'
    },
    {
      
      name: 'list',
      age:'3',
      ref:'https://world.taobao.com/',
      icon:'iconfont icon-taobao'

    },
 
  ],
  Doudong:false,
  timer: null,
  }
},

methods: {
/*  onTouchEnd事件是一个触摸事件，
用于检测用户在移动设备上停止触摸屏幕的时候触发的事件。
当用户停止在屏幕上拖动手指，或者单击某个元素后，
onTouchEnd事件将被触发。通常，开发人员可以利用这个事件来执行一些与用户交互相关的操作，
例如保存用户的输入或者触发特定的UI动画效果。*/
  onTouchStart(index){

this.timer=setTimeout(()=>{
this.Doudong=true
console.log('长点击模式');

},1000) 
this.Doudong=false
},
onTouchEnd() {
  console.log('移开事件');
      if (this.timer !== null) { //如果定时器还在
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    // onLongClick() {
    //   console.log('长点击');
    // },
}}


</script>

<style scoped>

  .el-carousel__item ul li {
    text-align: center;
   float: left;
    font-size: 32px;
    width: 100px;
  margin-bottom: 10px;
  padding: 10px 20px;
    color: chocolate;
    

   
  }
  .el-carousel__item ul{
    float: left;
    width: 100%;
    
 
  }
  .el-carousel__item:nth-child(2n) {
   
  }
  
  .el-carousel__item:nth-child(2n+1) {
  
  }
.box{

margin: 10px auto;
width: 1000px;

background-color:rgba(255,255,255,0.0);
    
   
  }
  .box1{
    padding: 10px 20px;
    height: 100%;
    width: 550px;
    margin: 0 auto;
  }

  .el-carousel__item ul li:hover {
background-color: rgba(1,1,1,0.3);
  }
 
  .shake {
    z-index: 11;
  
    animation: shake .5s;
  }

  
  
  @keyframes shake {
    0% { transform: rotate(0); }
    20% { transform: rotate(10deg); }
    40% { transform: rotate(-10deg); }
    60% { transform: rotate(10deg); }
    80% { transform: rotate(-10deg); }
    100% { transform: rotate(0); }
  }
</style> 