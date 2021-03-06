# React-elm
用React做的仿外卖饿了么app，路由，添加购物车，mobx状态管理

# 前言
初学React时曾在网上搜索React的实战项目源码，无奈大部分都是简单的demo，对于深究React没有太大的帮助，剩下的一些大部分都是像音乐
播放器之类的展示型项目，交互没有预期那么复杂。但我们实际在工作中，经常会遇到有购物车的项目，这类项目因为涉及到money，
所以对逻辑严谨度要求高，页面之间交互复杂，又会伴随着登录、注册、用户信息等等，常常会让我们很头疼。看到网上有好多人用vue写
的外卖类App，没有人用、react写，那我就另类一回，用React写一个，觉得好的可以借鉴，绝得不好的，不喜勿喷。谢谢。

为啥是饿了么，而不是百度，美团？原因很简单，三个外卖大佬里，饿了么的色调和布局是最漂亮的，逻辑也比较复杂。

那么为什么选择React,而不是vue，网上不是老有人说如果你这几个框架都不是很了解，那么就学React，当然自己也跟vue做了比较，在
实际开发中，React还是比较简单的，前提是读懂文档。

## 技术栈
React + mobx + React-router + webpack + ES6/7 + flex

## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，node 7 是先行版，有可能会出问题，建议使用 node 6 稳定版

```
git clone 地址  

cd elm

yarn install

yarn start(默认自动在浏览器3000端口打开)

```
# 说明
>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
>  如有问题可以联系我 qq：1041129848，或者您发现问题并有非常好的解决方案，欢迎交流。

# 总结
1.移动端使用rem单位布局，熟练运用flex弹性盒布局方式实现移动端的适配。
2.一般涉及到money的网页逻辑都比较复杂，尤其像饿了么这样一个开放的平台，商家和食品种类繁多，页面与页面之间交互复杂，
在写到 购物车 和 下单 功能时众多的数据和逻辑一度让人很头疼，又没有设计和接口api文档，只能一步步摸索。最终是能做到添加购
物车的功能。