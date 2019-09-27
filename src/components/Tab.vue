<template>
  <div class="tab">
          <!--tab写法1-->
    <!-- <ul class="tab-title">
            <li @click="cur=0" :class="{active:cur==0}">标题一</li>
            <li @click="cur=1" :class="{active:cur==1}">标题二</li>
            <li @click="cur=2" :class="{active:cur==2}">标题三</li>
            <li @click="cur=3" :class="{active:cur==3}">标题四</li>
        </ul>
        <div class="tab-content">
            <div v-show="cur==0">内容一</div>
            <div v-show="cur==1">内容二</div>
            <div v-show="cur==2">内容三</div>
            <div v-show="cur==3">内容四</div>
        </div> -->
         <!-- 推荐这种写法2-->
    <ul class="tab-title">
        <li v-for="(item,index) in tabTitle"
            :key="index"
            @mouseover="tabCur(index)"
            :class="{active:iscur===index}">{{item.title}}</li>
    </ul>
    <div class="tab-content">
        <div v-for="(item,index) in tabMain"
             :key="index"
             v-show="iscur===index">{{item.content}}</div>
    </div>

  </div>
</template>

<script>
  export default{
    name:'Tab',
    data(){
      return {
        tabTitle:[
            {title:"标题一"},
            {title:"标题二"},
            {title:"标题三"},
            {title:"标题四"}
        ],
        tabMain: [
            {content:"内容一"},
            {content:"内容二"},
            {content:"内容三"},
            {content:"内容四"}
        ],
        iscur:0 //默认选中第一个tab
      }
    },
    methods:{
      tabCur:function(index){
        this.iscur = index;
      }
    }
  }
</script>

<style type="text/css">
   .tab{
      width: 600px;
      height: 400px;
      margin: 0 auto;
      border: 1px solid #ccc;
   }
    .tab ul li {
           height: 30px;
           line-height: 30px;
           list-style-type: none;
   }

    .tab-title{
            width: 100%;
            padding: 0;
            margin: 0;
     }
    .tab-title li{
            float: left;
            width: 25%;
            padding: 10px 0;
            text-align: center;
            background-color:#f4f4f4;
            cursor: pointer;
        }
     /* 点击对应的标题添加对应的背景颜色 */
     .tab-title .active{
            background-color: #09f;
            color: #fff;
        }
      .tab-content div{
            float: left;
            width: 25%;
            line-height: 100px;
            text-align: center;
        }
    </style>
