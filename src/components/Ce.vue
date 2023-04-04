<template>
    <div class="box">
        <el-menu 
        class="el-menu-vertical-demo"
         @open="handleOpen"
          @close="handleClose" 
          :collapse="isCollapse"
        >
           
            
               
             
             
             
        <el-menu-item index="2">
          <i class="el-icon-s-custom"></i>
         
         
        </el-menu-item>
              
              
         
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
             
            </el-menu-item>
            <el-menu-item index="3" @click=" mydrawer">
              <i class="el-icon-document"></i>
             
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
       
            </el-menu-item>
          </el-menu>
          
    </div>
</template>
  <style scoped>
.box{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 9999999;
  background-color:rgba(1,1,1,0);
}
.el-menu-vertical-demo{
  border: none;
  height: 100%;
background-color:rgba(1,1,1,0.3);
}

el-menu-item:hover  {
  background-color:rgba(12,63,26,0.5)
}

  </style>
  
  <script>
    export default {
      name:'Ce',
      data() {
        return {
          isCollapse: true
        };
      },
      methods: {
        mydrawer(){
console.log(this.$bus);
this.$bus.$emit('drawer', 1);
  },



        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>