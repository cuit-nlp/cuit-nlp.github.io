---
layout: doc
---
<script setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onMounted } from 'vue';
//解决“vitepress在编译的时候无法使用window，而gitalk是依赖window.document去加载节点的”：https://younglina.top/write/docs/vitepress-gitalk.html
onMounted(() => {
  if(typeof window !==undefined){
    var s_div = document.createElement('div');   // 创建节点
    s_div.setAttribute("id", "gitalk-page-container");   // 设置id
    document.querySelector('.content-container').appendChild(s_div);   // querySelector的节点可自己根据自己想加载的地方设置
    var gitalk = new Gitalk({
        clientID: '7749d053434322d1d0cd',          // 8d8e96********797026d3
        clientSecret: '57b0b1f14318e5e44a9b7cf74789163c60ce1a2c',  // secrets**********secrets
        repo: 'mygitalk',          // blogtalk
        owner: 'CodeDuang',   // WeiyiGeek
        admin: ['CodeDuang'], // ['WeiyiGeek']
        id: decodeURI(location.pathname),      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
    gitalk.render('gitalk-page-container')
  }
})
</script>
Address：Hangkonggang Campus (航空港校区)
No.24 Block 1, Xuefu Road, Shungliu District, Chengdu, China
(四川省成都市双流区学府路一段24号)

Email：`fengao@cuit.edu.cn`

![图片](/image/address.png)

<div id="gitalk"></div>


