
<template>
<div>

<van-tabs>
  <van-tab v-for="(n,index) in tabBtnList" :key ="index" :title=" n ">

  </van-tab>
</van-tabs>


<van-tabbar v-model="active">
  <van-tabbar-item badge="3">
    <span>比心</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item> <van-tabbar-item icon="setting-o">娱乐</van-tabbar-item>
  <van-tabbar-item icon="search">广场</van-tabbar-item>
  <van-tabbar-item icon="setting-o">聊天</van-tabbar-item>
  <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
</van-tabbar>


<div>
<p class="van_cell">在线接单</p>
</div>


<div>
  <img src="../assets/头像1.png"
  class="img_class">
</div>

<div>
<p class="van_cell">在线接单</p>
</div>


<div>
  <img src="../assets/2.png"
  class="img_class">
</div>

<div>
<p class="van_cell">在线接单</p>
</div>
<div>
  <img src="../assets/2.png"
  class="img_class">
</div>

</div>
</template>



<script>

export default {
  data() {
    return {
      active: 0,
      
      tabBtnList:['来连麦','推荐','王者荣耀','和平精英'] ,
      value:'simple',
      good_icon:[
        {
          imgurl:require('../assets/2.png'),
          good_txt:'头像1'
        },{
          imgurl:require('../assets/头像1.png'),
          good_txt:'头像2'
        }
         
      ],
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },


};

</script>
<style scoped>
 .index_header{
   width:3.5rem;border:0;
   margin:.1rem 0 0 .1rem;
   padding:0;
}
  .custom-title {
    margin-right: 4px;
    height:10rem;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 100px;
    height: 5rem;
    line-height: inherit;
  }
  .van_cell{
    margin-top: 100px;
    height:50px;
    font-size:20px;
    text-align: center;
    
  
  }
  .van_cell2{
    margin-top:200px;
  }
  .img_class{
    width:40px;
    height: 40px;
    float: left;
    
   
  }


</style>