# component-project

## 封装业务组件库

### 一、button按钮组件封装

#### 1.1 button按钮介绍

![业务组件封装](README.assets/业务组件封装.png)

#### 1.2 button组件封装 - 定义主题色

`component/button/index.vue`

```vue
<template>
  <button class="yang-button yang-button-warning">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.yang-button{
  border-width : 1px;
  border-style: solid;
  border-color : #dcdfe6;
  height : 40px;
  padding : 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size : 14px;
  color: #606266;
  cursor: pointer;
}
.yang-button-primary{
  background-color:#409eff;
  border-color : #409eff;
  color : #fff;
}
.yang-button-success{
  background-color:#00d100;
  border-color : #00d100;
  color : #fff;
}
.yang-button-danger{
  background-color : #e6a23c;
  border-color : #e6a23c;
  color : #fff;
}
.yang-button-warning{
  background-color:#f56c6c;
  border-color : #f56c6c;
  color : #fff;
}
</style>

```



#### 1.3 button组件封装 - 定义边框、圆角、禁用效果

`component/button/index.vue`

```vue
// template
<button disabled class="yang-button yang-button-primary is-round">
   <slot></slot>
</button>

// css
.yang-button[disabled]{
  cursor: not-allowed;
  opacity: 0.5;
}
```

#### 1.4 button组件封装 - type属性生成主题按钮

`views/home/index.vue`

```vue
<template>
  <div class="home">
    <yangButton>默认按钮</yangButton>
    <yangButton type="primary">成功按钮</yangButton>
    <yangButton type="danger">危险按钮</yangButton>
    <yangButton type="warning">警告按钮</yangButton>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    yangButton: () => import('../components/button/index.vue')
  }
}
</script>

```

`component/button/index.vue`

```vue
<template>
  <button class="yang-button" :class="[theme]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'index',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    theme () {
      return this.type ? `yang-button-${this.type}` : ''
    }
  }
}
</script>
```

#### 1.5 button组件封装 - border属性、round属性、disabled属性

`views/home/index.vue`

```vue
<template>
  <div class="home">
    <yangButton>默认按钮</yangButton>
    <yangButton type="primary" round disabled>成功按钮</yangButton>
    <yangButton type="danger" round border disabled>危险按钮</yangButton>
    <yangButton type="warning" border>警告按钮</yangButton>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    yangButton: () => import('../components/button/index.vue')
  }
}
</script>

```

`component/button/index.vue`

```vue
<template>
  <button :disabled="disabled" class="yang-button" :class="[theme, isRound, isBorder]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'index',
  props: {
    type: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean
  },
  computed: {
    theme () {
      return this.type ? `yang-button-${this.type}` : ''
    },
    isRound () {
      return this.round ? 'is-round' : ''
    },
    isBorder () {
      return this.border ? 'is-border' : ''
    }
  }
}
```

#### 1.6 button组件封装 - size属性

`views/home/index.vue`

```vue
<template>
  <div class="home">
    <yangButton>默认按钮</yangButton>
    <yangButton size="medium" type="primary" round disabled>成功按钮</yangButton>
    <yangButton size="small" type="danger" round border disabled>危险按钮</yangButton>
    <yangButton size="mini" type="warning" border>警告按钮</yangButton>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    yangButton: () => import('../components/button/index.vue')
  }
}
</script>

```

`component/button/index.vue`

```vue
<template>
  <button :disabled="disabled" class="yang-button" :class="[theme, isRound, isBorder, isSize]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'index',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean
  },
  computed: {
    theme () {
      return this.type ? `yang-button-${this.type}` : ''
    },
    isRound () {
      return this.round ? 'is-round' : ''
    },
    isBorder () {
      return this.border ? 'is-border' : ''
    },
    isSize () {
      return this.size ? `yang-button-${this.size}` : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.yang-button{
  border-width : 1px;
  border-style: solid;
  border-color : #dcdfe6;
  height : 40px;
  padding : 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size : 14px;
  color: #606266;
  cursor: pointer;

  +.yang-button{
    margin-left : 14px;
  }
}
.yang-button-medium{
  height : 38px;
}
.yang-button-small{
  padding: 0 15px;
  height: 32px;
  font-size: 12px;
}
.yang-button-mini{
  padding: 0 15px;
  height: 28px;
  font-size: 12px;
}
.yang-button[disabled]{
  cursor: not-allowed;
  opacity: 0.5;
}
.yang-button-primary{
  background-color:#409eff;
  border-color : #409eff;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color : #409eff;
  }
}
.yang-button-success{
  background-color:#00d100;
  border-color : #00d100;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color :#00d100;
  }
}
.yang-button-danger{
  background-color : #e6a23c;
  border-color : #e6a23c;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color : #e6a23c;
  }
}
.yang-button-warning{
  background-color:#f56c6c;
  border-color : #f56c6c;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color :#f56c6c;
  }
}

/**
 * 圆角
 */
.is-round{border-radius: 100px;}
</style>

```



#### 1.7 button组件封装 - min-width弹性宽度

`views/home/index.vue`

```vue
<template>
  <div class="home">
    <yangButton>默认按钮</yangButton>
    <yangButton size="medium" type="primary" round disabled >a</yangButton>
    <yangButton size="small" type="danger" round border disabled>危险按钮</yangButton>
    <yangButton size="mini" type="warning" border>警告按钮</yangButton>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    yangButton: () => import('../components/button/index.vue')
  }
}
</script>

```



`component/button/index.vue`

```vue
<template>
  <button :disabled="disabled" class="yang-button" :style="[minWidthCss]" :class="[theme, isRound, isBorder, isSize]">
    <slot></slot>
  </button>
</template>


props: {
    type: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '95px'
    },
    size: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean
  },
  
minWidthCss () {
  if (!this.minWidth) return ''
  return { 'min-width': this.minWidth }
}
```



#### 1.8 button组件封装 - icon图标

`views/home/index.vue`

```vue
<template>
  <div class="home">
    <yangButton>默认按钮</yangButton>
    <yangButton size="medium" type="primary" >成功按钮</yangButton>
    <yangButton type="danger" >危险按钮</yangButton>
    <yangButton type="warning" border>警告按钮</yangButton>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    yangButton: () => import('../components/button/index.vue')
  }
}
</script>

```

`component/button/index.vue`

```vue
<template>
  <button :disabled="disabled" class="yang-button" :style="[minWidthCss]" :class="[theme, isRound, isBorder, isSize]">
    <span>
      <i v-if="prefix" class="iconfont icon-prefix" :class="iconPrefix"></i>
        <slot></slot>
      <i v-if="suffix" class="iconfont icon-suffix" :class="iconSuffix"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'index',
  props: {
    type: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '95px'
    },
    size: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean
  },
  computed: {
    theme () {
      return this.type ? `yang-button-${this.type}` : ''
    },
    isRound () {
      return this.round ? 'is-round' : ''
    },
    isBorder () {
      return this.border ? 'is-border' : ''
    },
    isSize () {
      return this.size ? `yang-button-${this.size}` : ''
    },
    minWidthCss () {
      if (!this.minWidth) return ''
      return { 'min-width': this.minWidth }
    },
    iconPrefix () {
      return this.prefix ? `icon-${this.prefix}` : ''
    },
    iconSuffix () {
      return this.suffix ? `icon-${this.suffix}` : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.yang-button{
  border-width : 1px;
  border-style: solid;
  border-color : #dcdfe6;
  height : 40px;
  padding : 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size : 14px;
  color: #606266;
  cursor: pointer;

  + .yang-button{
    margin-left : 14px;
  }

  > span{
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-prefix { margin-right: 10px; }
  .icon-suffix { margin-left: 10px; }
}
.yang-button-medium{
  height : 38px;
}
.yang-button-small{
  padding: 0 15px;
  height: 32px;
  font-size: 12px;
}
.yang-button-mini{
  padding: 0 15px;
  height: 28px;
  font-size: 12px;
}
.yang-button[disabled]{
  cursor: not-allowed;
  opacity: 0.5;
}
.yang-button-primary{
  background-color:#409eff;
  border-color : #409eff;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color : #409eff;
  }
}
.yang-button-success{
  background-color:#00d100;
  border-color : #00d100;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color :#00d100;
  }
}
.yang-button-danger{
  background-color : #e6a23c;
  border-color : #e6a23c;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color : #e6a23c;
  }
}
.yang-button-warning{
  background-color:#f56c6c;
  border-color : #f56c6c;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color :#f56c6c;
  }
}

/**
 * 圆角
 */
.is-round{border-radius: 100px;}
</style>

```

#### 1.9 button组件封装 - 块级元素

`views/home/index.vue`

```vue
<template>
  <div class="home">
    <yangButton block>默认按钮</yangButton>
    <yangButton size="medium" type="primary" block >成功按钮</yangButton>
    <yangButton type="danger" block>危险按钮</yangButton>
    <yangButton type="warning" border block>警告按钮</yangButton>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    yangButton: () => import('../components/button/index.vue')
  }
}
</script>

```

`component/button/index.vue`

```vue
<template>
  <button :disabled="disabled" class="yang-button" :style="[minWidthCss]" :class="[theme, isRound, isBorder, isSize, blockCss]">
    <span>
      <i v-if="prefix" class="iconfont icon-prefix" :class="iconPrefix"></i>
        <slot></slot>
      <i v-if="suffix" class="iconfont icon-suffix" :class="iconSuffix"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'index',
  props: {
    type: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '95px'
    },
    size: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    block: Boolean
  },
  computed: {
    theme () {
      return this.type ? `yang-button-${this.type}` : ''
    },
    isRound () {
      return this.round ? 'is-round' : ''
    },
    isBorder () {
      return this.border ? 'is-border' : ''
    },
    isSize () {
      return this.size ? `yang-button-${this.size}` : ''
    },
    minWidthCss () {
      if (!this.minWidth) return ''
      return { 'min-width': this.minWidth }
    },
    iconPrefix () {
      return this.prefix ? `icon-${this.prefix}` : ''
    },
    iconSuffix () {
      return this.suffix ? `icon-${this.suffix}` : ''
    },
    blockCss () {
      return this.block ? 'yang-button-block' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.yang-button{
  border-width : 1px;
  border-style: solid;
  border-color : #dcdfe6;
  height : 40px;
  padding : 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size : 14px;
  color: #606266;
  cursor: pointer;

  + .yang-button{
    margin-left : 14px;
    margin-bottom: 10px;
  }

  > span{
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-prefix { margin-right: 10px; }
  .icon-suffix { margin-left: 10px; }
}
.yang-button-medium{
  height : 38px;
}
.yang-button-small{
  padding: 0 15px;
  height: 32px;
  font-size: 12px;
}
.yang-button-mini{
  padding: 0 15px;
  height: 28px;
  font-size: 12px;
}
.yang-button[disabled]{
  cursor: not-allowed;
  opacity: 0.5;
}
.yang-button-primary{
  background-color:#409eff;
  border-color : #409eff;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color : #409eff;
  }
}
.yang-button-success{
  background-color:#00d100;
  border-color : #00d100;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color :#00d100;
  }
}
.yang-button-danger{
  background-color : #e6a23c;
  border-color : #e6a23c;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color : #e6a23c;
  }
}
.yang-button-warning{
  background-color:#f56c6c;
  border-color : #f56c6c;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color :#f56c6c;
  }
}

/*** 圆角 */
.is-round{border-radius: 100px;}
/**块级按钮*/
.yang-button-block{
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
}

</style>

```

#### 1.10 button组件封装 - loading加载

`views/home/index.vue`

```vue
<template>
  <div class="home">
    <yangButton >默认按钮</yangButton>
    <yangButton disabled :loading="flag" @click="handleSubmit" size="medium" type="primary"  >成功按钮</yangButton>
    <yangButton type="danger" >危险按钮</yangButton>
    <yangButton type="warning" >警告按钮</yangButton>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      flag: false
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue')
  },
  methods: {
    handleSubmit () {
      this.flag = true
      setTimeout(() => {
        console.log('123')
        this.flag = false
      }, 3000)
    }
  }
}
</script>

```

`component/button/index.vue`

```vue
<template>
  <button @click="change" :disabled="disabled || loading " class="yang-button" :style="[minWidthCss]" :class="[theme, isRound, isBorder, isSize, blockCss]">
    <span>
      <i v-if="loading"  class="iconfont icon-prefix icon-loading"></i>
      <i v-if="prefix" class="iconfont icon-prefix" :class="iconPrefix"></i>
        <slot></slot>
      <i v-if="suffix" class="iconfont icon-suffix" :class="iconSuffix"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'index',
  props: {
    type: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '95px'
    },
    size: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    block: Boolean,
    loading: Boolean
  },
  computed: {
    theme () {
      return this.type ? `yang-button-${this.type}` : ''
    },
    isRound () {
      return this.round ? 'is-round' : ''
    },
    isBorder () {
      return this.border ? 'is-border' : ''
    },
    isSize () {
      return this.size ? `yang-button-${this.size}` : ''
    },
    minWidthCss () {
      if (!this.minWidth) return ''
      return { 'min-width': this.minWidth }
    },
    iconPrefix () {
      return this.prefix ? `icon-${this.prefix}` : ''
    },
    iconSuffix () {
      return this.suffix ? `icon-${this.suffix}` : ''
    },
    blockCss () {
      return this.block ? 'yang-button-block' : ''
    }
  },
  methods: {
    change () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.yang-button{
  border-width : 1px;
  border-style: solid;
  border-color : #dcdfe6;
  height : 40px;
  padding : 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size : 14px;
  color: #606266;
  cursor: pointer;

  + .yang-button{
    margin-left : 14px;
    margin-bottom: 10px;
  }

  > span{
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon-prefix { margin-right: 10px; }
  .icon-suffix { margin-left: 10px; }
}
.yang-button-medium{
  height : 38px;
}
.yang-button-small{
  padding: 0 15px;
  height: 32px;
  font-size: 12px;
}
.yang-button-mini{
  padding: 0 15px;
  height: 28px;
  font-size: 12px;
}
.yang-button[disabled]{
  cursor: not-allowed;
  opacity: 0.5;
}
.yang-button-primary{
  background-color:#409eff;
  border-color : #409eff;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color : #409eff;
  }
}
.yang-button-success{
  background-color:#00d100;
  border-color : #00d100;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color :#00d100;
  }
}
.yang-button-danger{
  background-color : #e6a23c;
  border-color : #e6a23c;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color : #e6a23c;
  }
}
.yang-button-warning{
  background-color:#f56c6c;
  border-color : #f56c6c;
  color : #fff;
  &.is-border{
    background-color: transparent;
    color :#f56c6c;
  }
}

/*** 圆角 */
.is-round{border-radius: 100px;}
/**块级按钮*/
.yang-button-block{
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
}
/**loading动画加载*/
.icon-loading{
  animation: loading 2s infinite linear;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

```



#### 1.11 button组件封装 - 自定义主题颜色

1. 在styles文件内定义全局scss配置文件
2. 在内部定义的变量可以覆盖组件内相同名称的变量
3. 在vue.config.js内进行配置,进行scss配置文件的全局加载

`vue.config.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/18 11:17
 */
module.exports = {
  devServer: {
    port: 9999
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import './src/styles/scssconfig.scss';"
      }
    }
  }
}
```

