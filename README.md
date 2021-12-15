# webpackLoaderPlugin
基于webpack5，在项目中开发的loader和plugin和写的一些demo

## loader
### 仿微信小程序
微信小程序一个page包含wxml、js、wxss，如果wxml不考虑原生的客户端组件，只使用vue的组件。一个page其实就是将代码拼装成一个sfc文件，然后交给vue-loader处理。
未完成，这里的loader不纯粹，实现的功能比较复杂，不适合放到这个项目。

vue loader 使用
```
import Vue from 'vue'
import Foo from './source.vue'

new Vue({
  el: '#app',
  render: h => h(Foo)
})
```

## plugin

### 常用api
