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





### 二、table组件封装

#### 2.1 table组件封装 - 初始table组件

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>

```

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table></yang-table>
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
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {

  }
}
</script>

```

**实现效果:**

![image-20220718224722766](README.assets/image-20220718224722766.png)

#### 2.2 table组件封装 - 定义数据配置表头

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table :column="column"></yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' }
      ]
    }
  },
  components: {
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {

  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-for="item in column" :key="item.prop" :prop="item.prop" :label="item.label"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    column: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '女'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: '男'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: '女'
      }]
    }
  }
}
</script>

<style scoped>

</style>

```

**实现效果:**

![image-20220718225258336](README.assets/image-20220718225258336.png)

#### 2.3 table组件封装 - 复选框、索引、宽度属性配置

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table :column="column" checkbox index></yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '日期', prop: 'date', width: 500 },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' }
      ]
    }
  },
  components: {
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {

  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <el-table-column v-for="item in column" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '女'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: '男'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: '女'
      }]
    }
  }
}
</script>

<style scoped>

</style>

```

**实现效果:**

![image-20220718230841467](README.assets/image-20220718230841467.png)

#### 2.4 table组件封装 - 自定义渲染文本

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table :column="column" checkbox index></yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        {
          label: 'URL地址',
          type: 'function',
          prop: 'date',
          callback: (data) => {
            return `<a href="https://www.baidu.com">${data.name}</a>`
          }
        },
        // { label: '日期', prop: 'date', width: 500 },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' }
      ]
    }
  },
  components: {
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {

  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item) in column">
        <el-table-column v-if="item.type === 'function'" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row)"></div>
          </template>
        </el-table-column>
        <el-table-column v-else  :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金<div>234234</div>沙江路 1518 弄',
        sex: '男'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '女'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: '男'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: '女'
      }]
    }
  }
}
</script>

<style scoped>

</style>

```

**实现效果:**

![image-20220718233949136](README.assets/image-20220718233949136.png)

#### 2.5 table组件封装 - 插槽渲染组件

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table :column="column" checkbox index>
      <template v-slot:operation>
        <el-button type="primary">编辑</el-button>
        <yang-button type="danger">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        {
          label: 'URL地址',
          type: 'function',
          prop: 'date',
          callback: (data) => {
            return `<a href="https://www.baidu.com">${data.name}</a>`
          }
        },
        // { label: '日期', prop: 'date', width: 500 },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' },
        { label: '操作', prop: 'operation', type: 'slot', slot_name: 'operation' }
      ]
    }
  },
  components: {
    yangTable: () => import('../components/table/index.vue'),
    yangButton: () => import('../components/button/index.vue')
  },
  methods: {

  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item) in column">
        <el-table-column v-if="item.type === 'function'" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else  :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金<div>234234</div>沙江路 1518 弄',
        sex: '男'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '女'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: '男'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: '女'
      }]
    }
  }
}
</script>

<style scoped>

</style>

```

**实现效果:**

![image-20220718235009666](README.assets/image-20220718235009666.png)

#### 2.6 table组件封装 - 作用域插槽传输数据

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table :column="column" index checkbox>
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        {
          label: '标题',
          prop: 'title',
          type: 'function',
          callback: (row) => {
            if (row.id === 1) {
              return `<a href="https://www.baidu.com">${row.title}</a>`
            }
            return `<span>${row.title}</span>`
          }
        },
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ]
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean
  },
  data () {
    return {
      tableData: [{
        id: 1,
        title: '这是一段标题1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市<b>普陀</b><div>123456</div>区金沙江路 1518 弄',
        sex: '男'
      }, {
        id: 2,
        title: '这是一段标题2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '女'
      }, {
        title: '这是一段标题3',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: '女'
      }, {
        title: '这是一段标题4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: '男'
      }]
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.7 table组件封装 - axios请求数据

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getTableList()
  },
  methods: {
    async getTableList () {
      const response = await this.$axios({
        url: '/name/',
        method: 'GET'
      })
      this.tableData = response.data.data
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.8 table组件封装 - 配置url请求地址

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table :column="column" index checkbox url="/name/" method="GET">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ]
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getTableList()
  },
  methods: {
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const response = await this.$axios({
          url: this.url,
          method: this.method
        })
        this.tableData = response.data.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.9 table组件封装 - 渲染第二个接口数据

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table :column="column" index checkbox url="/name/" method="GET">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>

    <yang-table :column="column_1" index checkbox url="/fruit/" method="GET">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      column_1: [
        { label: '姓名', prop: 'name' },
        { label: '类型', prop: 'type' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ]
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    }
  }
}
</script>

```



#### 2.10 table组件封装 - 接口传参

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getTableList()
  },
  methods: {
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          console.log('123')
          console.log(this.params)
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        this.tableData = response.data.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.11 table组件封装 - 初始化请求和手动请求

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table ref="tabledemo"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  mounted () {
    // this.$refs.table.initRequestList()
    setTimeout(() => {
      console.log(this.$refs.tabledemo.initRequestList())
    }, 1000)
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          console.log('123')
          console.log(this.params)
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        this.tableData = response.data.data
      } catch (e) {
        console.log(e)
      }
    },
    initRequestList () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.12 table组件封装 - onload数据回调

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table init-request  @onLoad="onLoad"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        this.tableData = response.data.data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.13 table组件封装 - 格式化数据后渲染列表

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table init-request :format="formatData" @onLoad="onLoad"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '创建时间', prop: 'create_date' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    },
    formatData (data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.14 table组件封装 - 列表头渲染

`views/home.vue`

```vue
<template>
  <div class="home">
    <yang-table init-request :format="formatData" @onLoad="onLoad"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '创建时间', prop: 'create_date' },
        { 
          label: '操作', 
          type: 'slot', 
          slot_name: 'operation', 
          prop: 'operation',
          render_header : (h, {column, $index}) => {
            return (
            	<el-input value="111" />
            )
          }
        }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    },
    formatData (data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column :render-header="item.render_header" v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column :render-header="item.render_header" v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column :render-header="item.render_header" v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### 

#### 2.14 table组件封装 - 获取checkbox数据

`views/home.vue`

```vue
<template>
  <div class="home">
    <el-button @click="getCheckList">数据测试</el-button>	
    <yang-table init-request :check-list.sync="check_list"  @onLoad="onLoad"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '创建时间', prop: 'create_date' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      },
      check_list : []
    }
  },
  watch : {
    check_list : {
      handler(value){
        console.log(value)
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    getCheckList(){
      console.log(this.check_list)
    },
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    },
    formatData (data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    	@selection-change="handleSelectionChange" 
    >
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    checkList : {
      type : Array,
      default : () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    // 复选框回调
    handleSelectionChange(val){
      console.log(val)
      this.$emit("update:checkList", val)
    },
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.15 table组件封装 - sorttable排序

`views/home.vue`

```vue
<template>
  <div class="home">
    <el-button @click="getCheckList">数据测试</el-button>	
    <yang-table init-request :check-list.sync="check_list"  @onLoad="onLoad"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name', sort : true },
        { label: '性别', prop: 'gender', sort : true },
        { label: '创建时间', prop: 'create_date' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      },
      check_list : []
    }
  },
  watch : {
    check_list : {
      handler(value){
        console.log(value)
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    getCheckList(){
      console.log(this.check_list)
    },
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    },
    formatData (data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    	@selection-change="handleSelectionChange" 
    >
      <el-table-column  v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template  v-for="(item,index) in column">
        <el-table-column :sortable="item.sort" v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column  :sortable="item.sort" v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column :sortable="item.sort" v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    checkList : {
      type : Array,
      default : () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    // 复选框回调
    handleSelectionChange(val){
      console.log(val)
      this.$emit("update:checkList", val)
    },
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.16 table组件封装 - 远程排序sortBy属性

`views/home.vue`

```vue
<template>
  <div class="home">
    <el-button @click="getCheckList">数据测试</el-button>	
    <yang-table init-request :check-list.sync="check_list"  @onLoad="onLoad"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name', sort : "custorm", sort_by : "aaa" },
        { label: '性别', prop: 'gender', sort :  "custorm"  },
        { label: '创建时间', prop: 'create_date' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      },
      check_list : []
    }
  },
  watch : {
    check_list : {
      handler(value){
        console.log(value)
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    getCheckList(){
      console.log(this.check_list)
    },
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    },
    formatData (data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}
</script>

```

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    	@selection-change="handleSelectionChange" 
      @sort-change="sortChange"   
    >
      <el-table-column  v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template  v-for="(item,index) in column">
        <el-table-column :sort-by="item.sort_by" :sortable="item.sort" v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'yangTable',
  props: {
    checkList : {
      type : Array,
      default : () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    // 远程排序
    sortChange({column, prop, order}){
      console.log(column)
      const sort_by = column.sortBy
      console.log(sort_by, order)
    },
    // 复选框回调
    handleSelectionChange(val){
      console.log(val)
      this.$emit("update:checkList", val)
    },
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.17 table组件封装 - 动态组件

1. 在components文件夹内创建control文件夹
2. 在control文件夹内创建function文件夹
3. 在function文件夹内创建index.vue文件
4. 在control文件夹内创建text文件夹
5. 在text文件夹内创建index.vue文件
6. 在control文件夹内创建image文件夹
7. 在image文件夹内创建index.vue文件

`components/control/function/index.vue`

```vue
<template>
	<div>function</div>
</template>
```

`components/control/text/index.vue`

```vue
<template>
	<div>text</div>
</template>
```

`components/control/image/index.vue`

```vue
<template>
	<div>image</div>
</template>
```





`views/home.vue`

```vue
<template>
  <div class="home">
    <el-button @click="getCheckList">数据测试</el-button>	
    <yang-table init-request :check-list.sync="check_list"  @onLoad="onLoad"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name', sort : "custorm", sort_by : "aaa" },
        { 
          label: '性别', 
          prop: 'gender', 
          sort :  "custom",
          type : 'function',
          callback : ()=>{
            return 11
          }
        },
        { label: '创建时间', prop: 'create_date' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      },
      check_list : []
    }
  },
  watch : {
    check_list : {
      handler(value){
        console.log(value)
      }
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    getCheckList(){
      console.log(this.check_list)
    },
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    },
    formatData (data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}
</script>
```



#### 2.18 table组件封装 - 动态组件之读取文件

自动化的规则, 通过type属性自动读取目录组件

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    	@selection-change="handleSelectionChange" 
      @sort-change="sortChange"   
    >
      <el-table-column  v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template  v-for="(item,index) in column">
        <el-table-column :sort-by="item.sort_by" :sortable="item.sort" v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
const files = require.context("../control", true, /\index.vue$/)
console.log(files)
export default {
  name: 'yangTable',
  props: {
    checkList : {
      type : Array,
      default : () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    // 远程排序
    sortChange({column, prop, order}){
      console.log(column)
      const sort_by = column.sortBy
      console.log(sort_by, order)
    },
    // 复选框回调
    handleSelectionChange(val){
      console.log(val)
      this.$emit("update:checkList", val)
    },
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```





#### 2.19 table组件封装 - 动态组件之映射组件

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    	@selection-change="handleSelectionChange" 
      @sort-change="sortChange"   
    >
      <el-table-column  v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template  v-for="(item,index) in column">
        <el-table-column :sort-by="item.sort_by" :sortable="item.sort" v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
const files = require.context("../control", true, /\index.vue$/)
console.log(files)
files.keys().forEach(item=>{
  const key = item.split("/")
  const name = key[1]
  const component = files(item).default
  console.log(component)
})  
export default {
  name: 'yangTable',
  props: {
    checkList : {
      type : Array,
      default : () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    // 远程排序
    sortChange({column, prop, order}){
      console.log(column)
      const sort_by = column.sortBy
      console.log(sort_by, order)
    },
    // 复选框回调
    handleSelectionChange(val){
      console.log(val)
      this.$emit("update:checkList", val)
    },
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```





#### 2.20 table组件封装 -动态组件之组件生成

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    	@selection-change="handleSelectionChange" 
      @sort-change="sortChange"   
    >
      <el-table-column  v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template  v-for="(item,index) in column">
        <el-table-column :sort-by="item.sort_by" :sortable="item.sort" v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
const mpodules = {}
const files = require.context("../control", true, /\index.vue$/)
console.log(files)
const files = require.context("../control", true, /\index.vue$/)
console.log(files)
files.keys().forEach(item=>{
  const key = item.split("/")
  const name = key[1]
  const component = files(item).default
  console.log(component)
  
  // 组件集成
  modules[`com-${name}`] = component
})  
export default {
  name: 'yangTable',
  components: {
    // 'com-function' : () => import("../control/function"),
    // 'com-image' : () => import("../control/image"),
    ...modules
  },
  props: {
    checkList : {
      type : Array,
      default : () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    // 远程排序
    sortChange({column, prop, order}){
      console.log(column)
      const sort_by = column.sortBy
      console.log(sort_by, order)
    },
    // 复选框回调
    handleSelectionChange(val){
      console.log(val)
      this.$emit("update:checkList", val)
    },
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### 2.21 table组件封装 - 动态组件之文本渲染

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    	@selection-change="handleSelectionChange" 
      @sort-change="sortChange"   
    >
      <el-table-column  v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template  v-for="(item,index) in column">
        <el-table-column :sort-by="item.sort_by" :sortable="item.sort"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <component :data="scope.row" :config="item" :prop="item.prop" :is="!item.type ? 'com-text' : `com-${item.type}`">
            <!-- <div v-html="item.callback && item.callback(scope.row,index)"></div> -->
          </template>
        </el-table-column>
       <!-- <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-if="item.type === 'slot'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column :sort-by="item.sort_by"  :sortable="item.sort" v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
			-->
      </template>
    </el-table>
  </div>
</template>

<script>
const mpodules = {}
const files = require.context("../control", true, /\index.vue$/)
console.log(files)
const files = require.context("../control", true, /\index.vue$/)
console.log(files)
files.keys().forEach(item=>{
  const key = item.split("/")
  const name = key[1]
  const component = files(item).default
  console.log(component)
  
  // 组件集成
  modules[`com-${name}`] = component
})  
export default {
  name: 'yangTable',
  components: {
    // 'com-function' : () => import("../control/function"),
    // 'com-image' : () => import("../control/image"),
    ...modules
  },
  props: {
    checkList : {
      type : Array,
      default : () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    // 远程排序
    sortChange({column, prop, order}){
      console.log(column)
      const sort_by = column.sortBy
      console.log(sort_by, order)
    },
    // 复选框回调
    handleSelectionChange(val){
      console.log(val)
      this.$emit("update:checkList", val)
    },
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```



#### ![image-20220720095603390](README.assets/image-20220720095603390.png)

#### 2.22 table组件封装 - 动态组件之function类型渲染

![image-20220720095810458](README.assets/image-20220720095810458.png)

#### 2.23 table组件封装 - 完结

`components/table/index.vue`

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    	@selection-change="handleSelectionChange" 
      @sort-change="sortChange"   
    >
      <el-table-column  v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <el-table-column v-for="(item,index) in column" :sort-by="item.sort_by" :sortable="item.sort"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <slot v-if="item.type === 'slot'" :name="item.slot_name" :data="scope.row"></slot>
            <component v-else :data="scope.row" :config="item" :prop="item.prop" :is="!item.type ? 'com-text' : `com-${item.type}`">
          </template>
       </el-table-column>
       
    </el-table>
  </div>
</template>

<script>
const mpodules = {}
const files = require.context("../control", true, /\index.vue$/)
console.log(files)
const files = require.context("../control", true, /\index.vue$/)
console.log(files)
files.keys().forEach(item=>{
  const key = item.split("/")
  const name = key[1]
  const component = files(item).default
  console.log(component)
  
  // 组件集成
  modules[`com-${name}`] = component
})  
export default {
  name: 'yangTable',
  components: {
    // 'com-function' : () => import("../control/function"),
    // 'com-image' : () => import("../control/image"),
    ...modules
  },
  props: {
    checkList : {
      type : Array,
      default : () => []
    },
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.initRequest && this.getTableList()
  },
  methods: {
    // 远程排序
    sortChange({column, prop, order}){
      console.log(column)
      const sort_by = column.sortBy
      console.log(sort_by, order)
    },
    // 复选框回调
    handleSelectionChange(val){
      console.log(val)
      this.$emit("update:checkList", val)
    },
    async getTableList () {
      if (!this.url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }
        if (this.data) {
          requestData.data = this.data
        }

        if (this.params) {
          requestData.params = this.params
        }
        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.tableData = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    handleRequest () {
      this.getTableList()
    }
  }
}
</script>

<style scoped>

</style>

```





### 三、form组件封装

#### 3.1 form组件封装 - 了解基本元素,渲染基础表单

`components/form/index.vue`

```vue
<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>

```

#### 3.2 form组件封装 - 定义item渲染表单项

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          type: 'input',
          label: '活动名称'
        },
        {
          type: 'select',
          label: '活动区域'
        }
      ]
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```

`components/form/index.vue`

```vue
<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item v-for="item in formItem" :key="item.label" :label="item.label">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    item: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      formItem: [],
      form: {
        name: ''
      }
    }
  },
  methods: {

  },
  beforeMount () {
    this.formItem = this.item
  }
}
</script>

<style scoped>

</style>

```

#### 3.3 form组件封装 - 字段绑定

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          type: 'input',
          prop: 'name',
          label: '姓名'
        },
        {
          type: 'select',
          prop: 'gender',
          label: '性别'
        }
      ],
      formField: {
        name: '',
        gender: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```

`components/form/index.vue`

```vue
<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="80px">
      <template v-for="item in formItem">
        <el-form-item v-if="item.type === 'input'" :key="item.label" :label="item.label">
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item v-if="item.type === 'select'" :key="item.label" :label="item.label">
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      formItem: [],
      form: {
        name: ''
      }
    }
  },
  methods: {

  },
  beforeMount () {
    this.formItem = this.item
  }
}
</script>

<style scoped>

</style>

```



#### 3.4 form组件封装 - 了解校验规则



#### 3.5 form组件封装 - 传统方式绑定校验规则

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :rules="formRules"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          type: 'input',
          prop: 'name',
          label: '姓名'
        },
        {
          type: 'select',
          prop: 'gender',
          label: '性别'
        }
      ],
      formField: {
        name: '',
        gender: ''
      },
      formRules: {
        name: [
          {
            required: true,
            message: '必填'
          }
        ],
        gender: [
          {
            required: true,
            message: '必填'
          }
        ]
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```

`components/form/index.vue`

```vue
<template>
  <div class="form-container">
    <el-form :model="field" ref="form" :rules="rules" label-width="80px">
      <template v-for="item in formItem">
        <el-form-item v-if="item.type === 'input'" :key="item.label" :label="item.label" :prop="item.prop">
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item v-if="item.type === 'select'" :key="item.label" :label="item.label" :prop="item.prop">
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      formItem: [],
      form: {
        name: ''
      }
    }
  },
  methods: {

  },
  beforeMount () {
    this.formItem = this.item
  }
}
</script>

<style scoped>

</style>

```



#### 3.6 form组件封装 - form-item对象配置校验规则

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" ></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          type: 'input',
          prop: 'name',
          label: '姓名',
          rules: [
            {
              required: true,
              message: '必填'
            }
          ]
        },
        {
          type: 'select',
          prop: 'gender',
          label: '性别',
          rules: [
            {
              required: true,
              message: '必填'
            }
          ]
        }
      ],
      formField: {
        name: '',
        gender: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```

`components/form/index.vue`

```vue
<template>
  <div class="form-container">
    <el-form :model="field" ref="form"  label-width="80px">
      <template v-for="item in formItem">
        <el-form-item
          v-if="item.type === 'input'"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item
          v-if="item.type === 'select'"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      formItem: [],
      form: {
        name: ''
      }
    }
  },
  methods: {

  },
  beforeMount () {
    this.formItem = this.item
  }
}
</script>

<style scoped>

</style>

```



#### 3.7 form组件封装 - 自定义required属性, 生成必填校验

`components/form/createRules.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/21 09:26
 */

const createRules = (data) => {
  data.forEach(item => {
    const rulesArray = []
    if (item.required) {
      const rule = { required: true, message: '必填' }
      rulesArray.push(rule)
    }
    item.rules = rulesArray
  })

  return data
}

export default createRules

```

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" ></yang-form>
  </div>
</template>

<script>

export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          type: 'input',
          prop: 'name',
          label: '姓名',
          required: true
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
        },
        {
          type: 'select',
          prop: 'gender',
          label: '性别',
          required: true
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
        },
        {
          type: 'input',
          prop: 'sex',
          label: '年龄',
          required: true
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
        }
      ],
      formField: {
        name: '',
        gender: '',
        age: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```

`components/form/index.vue`

```vue
<template>
  <div class="form-container">
    <el-form :model="field" ref="form"  label-width="80px">
      <template v-for="item in formItem">
        <el-form-item
          v-if="item.type === 'input'"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item
          v-if="item.type === 'select'"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
import createRules from './createRules'
export default {
  name: 'index',
  props: {
    item: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      formItem: [],
      form: {
        name: ''
      }
    }
  },
  methods: {

  },
  beforeMount () {
    this.formItem = createRules(this.item)
  }
}
</script>

<style scoped>

</style>

```



#### 3.8 form组件封装 - message手动生成和自动生成

`components/form/createRules.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/21 09:26
 */

const createRules = (data) => {
  data.forEach(item => {
    const rulesArray = []
    if (item.required) {
      const rule = { required: true, message: item.message || createMessage(item) }
      rulesArray.push(rule)
    }
    item.rules = rulesArray
  })
  return data
}

const createMessage = (data) => {
  let msg = ''
  switch (data.type) {
    case 'input' :
      msg = '请输入'
      break
    case 'select' :
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}

export default createRules

```

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" ></yang-form>
  </div>
</template>

<script>

export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          type: 'input',
          prop: 'name',
          label: '姓名',
          required: true
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
        },
        {
          type: 'select',
          prop: 'gender',
          label: '性别',
          required: true
          // message: '请输入姓名'
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
        },
        {
          type: 'input',
          prop: 'sex',
          label: '年龄',
          required: true
          // message: '请输入年龄'
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
        }
      ],
      formField: {
        name: '',
        gender: '',
        age: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```

#### 3.9 form组件封装 - 添加新的校验规则

`components/form/createRules.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/21 09:26
 */

const createRules = (data) => {
  data.forEach(item => {
    let rulesArray = []
    if (item.required) {
      const rule = { required: true, message: item.message || createMessage(item) }
      rulesArray.push(rule)
    }

    // 判断是否有额外的校验规则
    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rulesArray = rulesArray.concat(item.rules)
    }

    item.rules = rulesArray
  })
  return data
}

const createMessage = (data) => {
  let msg = ''
  switch (data.type) {
    case 'input' :
      msg = '请输入'
      break
    case 'select' :
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}

export default createRules


```

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" ></yang-form>
  </div>
</template>

<script>

export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          type: 'input',
          prop: 'name',
          label: '姓名',
          required: true,
          rules: [
            { min: 3, max: 10, message: '请输入3~10个字符', trigger: 'blur' }
          ]
        },
        {
          type: 'select',
          prop: 'gender',
          label: '性别',
          required: true
        },
        {
          type: 'input',
          prop: 'sex',
          label: '年龄',
          required: true
        }
      ],
      formField: {
        name: '',
        gender: '',
        age: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>


```

#### 

#### 3.10 form组件封装 - 自定义校验规则

`components/form/createRules.js`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" ></yang-form>
  </div>
</template>

<script>

export default {
  name: 'Form',
  data () {
    const validateName = (rules, value, callback) => {
      if (value && value !== '10') {
        callback(new Error('请输入10'))
      } else {
        callback()
      }
    }
    return {
      formItem: [
        {
          type: 'input',
          prop: 'name',
          label: '姓名',
          required: true,
          rules: [
            { min: 3, max: 10, message: '请输入3~10个字符', trigger: 'blur' },
            { validator: validateName, trigger: 'blurt' }
          ]
        },
        {
          type: 'select',
          prop: 'gender',
          label: '性别',
          required: true
        },
        {
          type: 'input',
          prop: 'sex',
          label: '年龄',
          required: true
        }
      ],
      formField: {
        name: '',
        gender: '',
        age: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```



#### 3.11 form组件封装 - 配置phone手机号、密码、邮箱校验规则

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          valueType: 'password',
          prop: 'password',
          required: true
        },
        {
          label: '邮箱',
          type: 'input',
          valueType: 'email',
          prop: 'email',
          required: true
        },
        {
          label: '年龄',
          type: 'select',
          prop: 'age',
          required: true
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```



`components/form/createRules.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/21 11:18
 */

const createRules = (data) => {
  data.forEach(item => {
    let rulesArray = []
    if (item.required) {
      const rules = { required: true, message: item.message || createMessage(item) }
      rulesArray.push(rules)
    }

    // 校验手机号
    if (item.valueType && item.valueType === 'phone') {
      const regPhone = /^1[3456789]\d{9}$/
      const validatePhone = (rule, value, callback) => {
        if (value && regPhone.test(value)) {
          callback()
        } else {
          callback(new Error('请输入合法的手机号码'))
        }
      }
      const rule = { validator: validatePhone, trigger: 'change' }
      rulesArray.push(rule)
    }

    // 校验密码
    if (item.valueType && item.valueType === 'password') {
      const resPass = /^[a-zA-Z0-9]{6,18}$/

      const validatePass = (rule, value, callback) => {
        return resPass.test(value)
      }

      const rule = { validator: validatePass, trigger: 'change' }
      rulesArray.push(rule)
    }

    // 校验邮箱
    if (item.valueType && item.valueType === 'email') {
      const regEmail = /1/

      const validateEmail = (rule, value, callback) => {
        if (regEmail.test(value)) {
          callback()
        } else {
          callback(new Error('请输入合法的邮箱地址'))
        }
      }

      const rule = { validator: validateEmail, trigger: 'change' }
      rulesArray.push(rule)
    }

    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rulesArray = rulesArray.concat(item.rules)
    }
    item.rules = rulesArray
  })
  return data
}

const createMessage = (data) => {
  let msg = ''
  switch (data.type) {
    case 'input' :
      msg = '请输入'
      break
    case 'select' :
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}

export default createRules

```



#### 3.12 form组件封装 - 抽离校验方法

`src/utils/validate.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/21 14:23
 */

// 校验手机号
const regPhone = /^1[3456789]\d{9}$/
export const validatePhone = (rule, value, callback) => {
  if (value && regPhone.test(value)) {
    callback()
  } else {
    callback(new Error('请输入合法的手机号码'))
  }
}

// 校验密码
const resPass = /^[a-zA-Z0-9]{6,18}$/
export const validatePass = (rule, value, callback) => {
  return resPass.test(value)
}

// 校验邮箱
const regEmail = /1/
export const validateEmail = (rule, value, callback) => {
  if (regEmail.test(value)) {
    callback()
  } else {
    callback(new Error('请输入合法的邮箱地址'))
  }
}

```



`components/form/createRules.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/21 11:18
 */
import { validatePhone, validatePass, validateEmail } from '../../utils/validate'
const createRules = (data) => {
  data.forEach(item => {
    let rulesArray = []
    if (item.required) {
      const rules = { required: true, message: item.message || createMessage(item) }
      rulesArray.push(rules)
    }

    // 校验手机号
    if (item.valueType && item.valueType === 'phone') {
      const rule = { validator: validatePhone, trigger: 'change' }
      rulesArray.push(rule)
    }

    // 校验密码
    if (item.valueType && item.valueType === 'password') {
      const rule = { validator: validatePass, trigger: 'change' }
      rulesArray.push(rule)
    }

    // 校验邮箱
    if (item.valueType && item.valueType === 'email') {
      const rule = { validator: validateEmail, trigger: 'change' }
      rulesArray.push(rule)
    }

    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rulesArray = rulesArray.concat(item.rules)
    }
    item.rules = rulesArray
  })
  return data
}

const createMessage = (data) => {
  let msg = ''
  switch (data.type) {
    case 'input' :
      msg = '请输入'
      break
    case 'select' :
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}

export default createRules

```



#### 3.13 form组件封装 - 提交按钮渲染

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary', size: 'mini' },
        { label: '取消', key: 'cancel', type: 'danger', size: 'small' },
        { label: '下一个', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          valueType: 'password',
          prop: 'password',
          required: true
        },
        {
          label: '邮箱',
          type: 'input',
          valueType: 'email',
          prop: 'email',
          required: true
        },
        {
          label: '年龄',
          type: 'select',
          prop: 'age',
          required: true
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```



`components/form/index.vue`



```vue
<template>
    <el-form ref="form" :model="field"  label-width="80px">
      <template  v-for="item in formItem" >
        <el-form-item v-if="item.type === 'input'" :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item v-if="item.type === 'select'" :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button v-for="item in button" v-bind="item" :key="item.key" >{{item.label}}</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import createRules from './createRules'
export default {
  name: 'yangForm',
  props: {
    item: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      formItem: []
    }
  },
  methods: {

  },
  beforeMount () {
    this.formItem = createRules(this.item)
  }
}
</script>

<style scoped>

</style>

```



#### 3.14 form组件封装 - 提交表单校验数据

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          valueType: 'password',
          prop: 'password',
          required: true
        },
        {
          label: '邮箱',
          type: 'input',
          valueType: 'email',
          prop: 'email',
          required: true
        },
        {
          label: '年龄',
          type: 'select',
          prop: 'age',
          required: true
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>

```

`components/form/index.vue`

```vue
<template>
    <el-form ref="form" :model="field"  label-width="80px">
      <template  v-for="item in formItem" >
        <el-form-item v-if="item.type === 'input'" :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item v-if="item.type === 'select'" :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button @click="handleButton(item)" v-for="item in button" v-bind="item" :key="item.key" >{{item.label}}</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import createRules from './createRules'
export default {
  name: 'yangForm',
  props: {
    item: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      formItem: []
    }
  },
  methods: {
    handleButton (item) {
      if (item.key === 'submit') {
        this.handleSubmit(item)
        return
      }
      if (item.key === 'cancel') {
        this.handleCancel(item)
      }
    },
    handleSubmit (item) {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('表单提交')
        }
      })
    },
    handleCancel (item) {
      console.log('表单重置')
    }
  },
  beforeMount () {
    this.formItem = createRules(this.item)
  }
}
</script>

<style scoped>

</style>

```



#### 3.15 form组件封装 - 提交按钮的加载交互

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="submitForm"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          // valueType: 'phone',
          prop: 'phone'
          // required: true
        },
        {
          label: '密码',
          type: 'input',
          // valueType: 'password',
          prop: 'password'
          // required: true
        },
        {
          label: '邮箱',
          type: 'input',
          // valueType: 'email',
          prop: 'email'
          // required: true
        },
        {
          label: '年龄',
          type: 'select',
          prop: 'age'
          // required: true
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    submitForm () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```

`components/form/index.vue`

```vue
<template>
    <el-form ref="form" :model="field"  label-width="80px">
      <template  v-for="item in formItem" >
        <el-form-item v-if="item.type === 'input'" :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item v-if="item.type === 'select'" :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button @click="handleButton(item)" :loading="item.loading" v-for="item in button" v-bind="item" :key="item.key" >{{item.label}}</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import createRules from './createRules'
export default {
  name: 'yangForm',
  props: {
    item: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Array,
      default: () => ([])
    },
    beforeSubmit: Function
  },
  data () {
    return {
      formItem: []
    }
  },
  methods: {
    handleButton (item) {
      if (item.key === 'submit') {
        this.handleSubmit(item)
        return
      }
      if (item.key === 'cancel') {
        this.handleCancel(item)
      }
    },
    handleSubmit (item) {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (typeof this.beforeSubmit === 'function') {
            this.$set(item, 'loading', true)
            this.beforeSubmit().then(response => {
              console.log('成功')
              this.$set(item, 'loading', false)
            }).catch(() => {
              console.log('失败')
              this.$set(item, 'loading', false)
            })
          }
          console.log('表单提交')
        }
      })
    },
    handleCancel (item) {
      this.$refs.form.resetFields()
      item.callback && item.callback()
    }
  },
  beforeMount () {
    this.formItem = createRules(this.item)
  }
}
</script>

<style scoped>

</style>

```



#### 3.16 form组件封装 - 数据重置,callback事件回调

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          valueType: 'password',
          prop: 'password',
          required: true
        },
        {
          label: '邮箱',
          type: 'input',
          valueType: 'email',
          prop: 'email',
          required: true
        },
        {
          label: '年龄',
          type: 'select',
          prop: 'age',
          required: true
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

```



`components/form/index.vue`

```vue

<template>
    <el-form ref="form" :model="field"  label-width="80px">
      <template  v-for="item in formItem" >
        <el-form-item v-if="item.type === 'input'" :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item v-if="item.type === 'select'" :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button @click="handleButton(item)" v-for="item in button" v-bind="item" :key="item.key" >{{item.label}}</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import createRules from './createRules'
export default {
  name: 'yangForm',
  props: {
    item: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      formItem: []
    }
  },
  methods: {
    handleButton (item) {
      if (item.key === 'submit') {
        this.handleSubmit(item)
        return
      }
      if (item.key === 'cancel') {
        this.handleCancel(item)
      }
    },
    handleSubmit (item) {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('表单提交')
        }
      })
    },
    handleCancel (item) {
      this.$refs.form.resetFields()
      item.callback && item.callback()
    }
  },
  beforeMount () {
    this.formItem = createRules(this.item)
  }
}
</script>

<style scoped>

</style>

```



#### 3.17 form组件封装 - 使用自己封装的button按钮

#### 3.18 form组件封装 - 动态组件 - watch初始化数据

`components/control/input/index.vue`

```vue
<template>
  <div>
    <el-input v-model="val"></el-input>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>

```



`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="submitForm"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          // valueType: 'phone',
          prop: 'phone'
          // required: true
        },
        {
          label: '密码',
          type: 'input',
          // valueType: 'password',
          prop: 'password'
          // required: true
        },
        {
          label: '邮箱',
          type: 'input',
          // valueType: 'email',
          prop: 'email'
          // required: true
        },
        {
          label: '年龄',
          type: 'input',
          prop: 'age'
          // required: true
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    submitForm () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```



`components/form/index.vue`

```vue
<template>
    <el-form ref="form" :model="field"  label-width="80px">
      <template  v-for="item in formItem" >
        <el-form-item :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <component :value="field[item.prop]" :config="item"  :is="!item.type ? 'com-text' : `com-${item.type}`"></component>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button @click="handleButton(item)" :loading="item.loading" v-for="item in button" v-bind="item" :key="item.key" >{{item.label}}</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import createRules from './createRules'
const modules = {}
const files = require.context('../control', true, /index.vue$/i)
files.keys().forEach(item => {
  const key = item.split('/')
  const name = key[1]
  modules[`com-${name}`] = files(item).default
})
export default {
  name: 'yangForm',
  components: {
    ...modules
  },
  props: {
    item: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Array,
      default: () => ([])
    },
    beforeSubmit: Function
  },
  data () {
    return {
      formItem: []
    }
  },
  methods: {
    handleButton (item) {
      if (item.key === 'submit') {
        this.handleSubmit(item)
        return
      }
      if (item.key === 'cancel') {
        this.handleCancel(item)
      }
    },
    handleSubmit (item) {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (typeof this.beforeSubmit === 'function') {
            this.$set(item, 'loading', true)
            this.beforeSubmit().then(response => {
              console.log('成功')
              this.$set(item, 'loading', false)
            }).catch(() => {
              console.log('失败')
              this.$set(item, 'loading', false)
            })
          }
          console.log('表单提交')
        }
      })
    },
    handleCancel (item) {
      this.$refs.form.resetFields()
      item.callback && item.callback()
    }
  },
  beforeMount () {
    this.formItem = createRules(this.item)
  }
}
</script>

<style scoped>

</style>

```



#### 3.19 form组件封装 - 动态组件 - emit的update方法, 同步数据



`components/form/index.vue`

```vue
<template>
    <el-form ref="form" :model="field"  label-width="80px">
      <template  v-for="item in formItem" >
        <el-form-item :rules="item.rules" :key="item.label" :label="item.label" :prop="item.prop">
          <component :value.sync="field[item.prop]" :config="item"  :is="!item.type ? 'com-text' : `com-${item.type}`"></component>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button @click="handleButton(item)" :loading="item.loading" v-for="item in button" v-bind="item" :key="item.key" >{{item.label}}</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import createRules from './createRules'
const modules = {}
const files = require.context('../control', true, /index.vue$/i)
files.keys().forEach(item => {
  const key = item.split('/')
  const name = key[1]
  modules[`com-${name}`] = files(item).default
})
export default {
  name: 'yangForm',
  components: {
    ...modules
  },
  props: {
    item: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    button: {
      type: Array,
      default: () => ([])
    },
    beforeSubmit: Function
  },
  data () {
    return {
      formItem: []
    }
  },
  methods: {
    handleButton (item) {
      if (item.key === 'submit') {
        this.handleSubmit(item)
        return
      }
      if (item.key === 'cancel') {
        this.handleCancel(item)
      }
    },
    handleSubmit (item) {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (typeof this.beforeSubmit === 'function') {
            this.$set(item, 'loading', true)
            this.beforeSubmit().then(response => {
              console.log('成功')
              this.$set(item, 'loading', false)
            }).catch(() => {
              console.log('失败')
              this.$set(item, 'loading', false)
            })
          }
          console.log('表单提交')
        }
      })
    },
    handleCancel (item) {
      this.$refs.form.resetFields()
      item.callback && item.callback()
    }
  },
  beforeMount () {
    this.formItem = createRules(this.item)
  }
}
</script>

<style scoped>

</style>

```



`components/control/input/index.vue`

```vue
<template>
  <div>
    <el-input v-model="val" @input="handleInputEvent"></el-input>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    }
  },
  methods: {
    handleInputEvent () {
      this.$emit('update:value', this.val)
    }
  }
}
</script>

<style scoped>

</style>

```



### 四、select组件封装

#### 4.1 select组件集成 - option

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="submitForm"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          options: [
            { label: '1班', value: 1 },
            { label: '2班', value: 2 },
            { label: '3班', value: 3 }
          ]
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    submitForm () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```

`components/control/select/index.vue`

```vue
<template>
  <div>
    <el-select v-model="val" >
      <el-option>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponents',
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    }
  },
  methods: {
    handleInputEvent () {
      this.$emit('update:value', this.val)
    }
  }
}
</script>

<style scoped>

</style>

```



#### 4.2  select组件集成 - 初始化option

`components/control/select/index.vue`

```vue
<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent">
      <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponents',
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      val: '',
      option: []
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    },
    config: {
      handler (newValue) {
        this.initOptions()
      },
      immediate: true
    }
  },
  methods: {
    handleChangeEvent (value) {

    },
    initOptions () {
      const option = this.config.options
      if (option && Array.isArray(option) && option.length > 0) {
        this.option = option
      }
    }
  }
}
</script>

<style scoped>

</style>

```



#### 4.3  select组件集成 - 动态option的key(1)

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="submitForm"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          props: {
            label: 'name',
            value: 'id'
          },
          options: [
            { name: '1班', id: 1 },
            { name: '2班', id: 2 },
            { name: '3班', id: 3 }
          ]
          // options: [
          //   { label: '1班', value: 1 },
          //   { label: '2班', value: 2 },
          //   { label: '3班', value: 3 }
          // ]
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    submitForm () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```



`components/control/select/index.vue`

```vue
<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent">
      <el-option v-for="item in option" :key="item[props.value]" :label="item[props.label]" :value="item[props.value]">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponents',
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      val: '',
      option: [],
      props: {
        label: 'label',
        value: 'value'
      }
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    },
    config: {
      handler (newValue) {
        this.initOptions()
        this.initProps()
      },
      immediate: true
    }
  },
  methods: {
    handleChangeEvent (value) {
      this.$emit('update:value', value)
    },
    initOptions () {
      const option = this.config.options
      if (option && Array.isArray(option) && option.length > 0) {
        this.option = option
      }
    },
    initProps () {
      const props = this.config.props
      const keys = Object.keys(this.props)
    }
  }
}
</script>

<style scoped>

</style>

```



#### 4.4 select组件集成 - 动态option的key(2)

`components/control/select/index.vue`

```vue
<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent">
      <el-option v-for="item in option" :key="item[props.value]" :label="item[props.label]" :value="item[props.value]">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponents',
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      val: '',
      option: [],
      props: {
        label: 'label',
        value: 'value'
      }
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    },
    config: {
      handler (newValue) {
        this.initOptions()
        this.initProps()
      },
      immediate: true
    }
  },
  methods: {
    handleChangeEvent (value) {
      this.$emit('update:value', value)
    },
    initOptions () {
      const option = this.config.options
      if (option && Array.isArray(option) && option.length > 0) {
        this.option = option
      }
    },
    initProps () {
      const option = this.config.props
      const keys = Object.keys(this.props)

      if (option && Object.prototype.toString.call(option) === '[object Object]') {
        for (const key in option) {
          if (keys.includes(key)) {
            this.props[key] = option[key]
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>

```



#### 4.5 select组件集成 - 接口异步数据1

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="handleBeforeSubmit"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          options: [
            {
              label: '一教',
              value: 1
            },
            {
              label: '二教',
              value: 2
            },
            {
              label: '三教',
              value: 3
            },
            {
              label: '四教',
              value: 4
            }
          ]
        },
        {
          label: '异步教室',
          type: 'select',
          prop: 'class_room1',
          required: true,
          url: '/api/classname/',
          method: 'get',
          initRequest: true
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    handleBeforeSubmit () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```



`components/control/select/index.vue`

```vue
<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    },
    config: {
      handler (val) {
        this.initOptions()
      },
      immediate: true,
      deep: true
    }
  },
  data () {
    return {
      val: '',
      options: []
    }
  },
  methods: {
    handleChangeEvent (value) {
      console.log(value)
      this.$emit('update:value', value)
    },
    initOptions () {
      const initRequest = this.config.initRequest
      const url = this.config.url
      const method = this.config.method
      const options = this.config.options

      if (url) {
        this.fetchOptions(url, method)
      }

      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options
        console.log(options)
      }
    },
    fetchOptions (url, method) {

    }
  }
}
</script>

<style scoped>

</style>

```



#### 4.6 select组件集成 - 接口异步数据2

`views/Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="handleBeforeSubmit"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          options: [
            {
              label: '一教',
              value: 1
            },
            {
              label: '二教',
              value: 2
            },
            {
              label: '三教',
              value: 3
            },
            {
              label: '四教',
              value: 4
            }
          ]
        },
        {
          label: '异步教室',
          type: 'select',
          prop: 'class_room1',
          required: true,
          url: '/classroom/',
          method: 'get',
          initRequest: true,
          props: {
            label: 'class_name',
            value: 'id'
          }
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    handleBeforeSubmit () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```

`components/control/select/index.vue`

```vue
<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    },
    config: {
      handler (val) {
        this.initOptions()
      },
      immediate: true,
      deep: true
    }
  },
  data () {
    return {
      val: '',
      options: []
    }
  },
  computed: {
    url () {
      return this.config?.url
    },
    initRequest () {
      return this.config?.initRequest
    },
    methods () {
      return this.config?.methods || 'get'
    }
  },
  methods: {
    handleChangeEvent (value) {
      console.log(value)
      this.$emit('update:value', value)
    },
    initOptions () {
      if (this.url) {
        this.fetchOptions()
        return false
      }
      const options = this.config.options
      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options
        console.log(options)
      }
    },
    async fetchOptions () {
      if (!this.initRequest) {
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }

        const response = await this.$axios(requestData)
        console.log(response.data.data)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.options = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>

```



#### 4.7 select组件集成 - 远程搜索

`views/Fome.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="handleBeforeSubmit"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          options: [
            {
              label: '一教',
              value: 1
            },
            {
              label: '二教',
              value: 2
            },
            {
              label: '三教',
              value: 3
            },
            {
              label: '四教',
              value: 4
            }
          ]
        },
        {
          label: '异步教室',
          type: 'select',
          prop: 'class_room1',
          required: true,
          url: '/classroom/',
          method: 'get',
          initRequest: true,
          props: {
            label: 'class_name',
            value: 'id'
          },
          fetchSearch: true
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    handleBeforeSubmit () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```

`components/control/select/index.vue`

```vue
<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent" filterable remote :remote-method="keywordRequest">
      <el-option   v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    },
    config: {
      handler (val) {
        this.initOptions()
      },
      immediate: true,
      deep: true
    }
  },
  data () {
    return {
      val: '',
      options: []
    }
  },
  computed: {
    url () {
      return this.config?.url
    },
    initRequest () {
      return this.config?.initRequest
    },
    methods () {
      return this.config?.methods || 'get'
    },
    fetchSearch () {
      return this.config?.fetchSearch
    }
  },
  methods: {
    handleChangeEvent (value) {
      console.log(value)
      this.$emit('update:value', value)
    },
    initOptions () {
      if (this.url) {
        this.fetchOptions()
        return false
      }
      const options = this.config.options
      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options
        console.log(options)
      }
    },
    fetchOptions () {
      if (!this.initRequest) {
        return false
      }

      this.getOptions()
    },
    keywordRequest (query) {
      if (query) {
        this.getOptions()
      }
    },
    async getOptions () {
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }

        const response = await this.$axios(requestData)
        let data = response.data.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(response.data)
        }
        this.options = data

        this.onLoad && this.$emit('onLoad', response.data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>

```



#### 4.8 select组件集成 - 远程搜索定义字段名称

#### 4.9 select组件集成 - 远程搜索配置、多选

#### 4.10 select组件集成 - 自定义模版1

#### 4.11 select组件集成 - 自定义模版2

#### 4.12 select组件集成 - 完结



### 五、checkbox、radio组件封装

#### 5.1 checkbox组件封装 - 集成复选框组件

1. 将`select组件`复制一份,修改为`checkbox组件`
2. 在`Form.vue`配置`checkbox数据项`

```javascript
 formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '食物',
          type: 'checkbox',
          prop: 'food',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '一教',
              b: 1
            },
            {
              a: '二教',
              b: 2
            },
            {
              a: '三教',
              b: 3
            },
            {
              a: '四教',
              b: 4
            }
          ]
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '一教',
              b: 1
            },
            {
              a: '二教',
              b: 2
            },
            {
              a: '三教',
              b: 3
            },
            {
              a: '四教',
              b: 4
            }
          ]
        },
        {
          label: '教室1',
          type: 'select',
          prop: 'class_room1',
          required: true,
          props: {
            label: 'class_name',
            value: 'id'
          },
          initRequest: true,
          url: '/classroom/',
          method: 'GET'
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: '',
        food: []
      }
```

3. 在`checkbox组件`内渲染复选框

```vue
<template>
  <div>
    <el-checkbox-group v-model="val">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用"></el-checkbox>
      <el-checkbox label="选中且禁用"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>
```



#### 5.2 checkbox组件封装 - 初始化数据

`Form.vue`

```javascript
{
          label: '食物',
          type: 'checkbox',
          prop: 'food',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '苹果',
              b: 1
            },
            {
              a: '杨梅',
              b: 2
            },
            {
              a: '芒果',
              b: 3
            }
          ]
        },
```

`control/checkbox/index.vue`

```vue
	<template>
  <div>
    <el-checkbox-group v-model="val">
      <el-checkbox v-for="item in options" :key="item[props.value]" :label="item[props.value]">{{item[props.label]}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
```



#### 5.3 checkbox组件封装 - 解决bug

`components/form/createRules.js`

```javascript
const createMessage = (data) => {
  let msg = ''
  switch (data.type) {
    case 'input' :
      msg = '请输入'
      break
    case 'checkbox' :
      msg = '请选择'
      break
    case 'select' :
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}
```

`control/checkbox/index.vue`

```vue
<template>
  <div>
    <el-checkbox-group v-model="val" @change="handleChangeEvent">
      <el-checkbox v-for="item in options" :key="item[props.value]" :label="item[props.value]">{{item[props.label]}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
```

#### 5.4 checkbox组件封装 - 抽离公共对象

`components/control/basis.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/25 09:47
 */

export const props = {
  value: {
    type: [String, Number, Array],
    default: ''
  },
  config: {
    type: Object,
    default: () => ({})
  }
}

```

`control/checkbox/index.vue`

```javascript
import { props } from '../basis'
export default {
  name: 'CheckboxComponent',
  props: {
    ...props
  },
```



#### 5.5 checkbox组件封装 - 公共对象的混合

`components/control/basis.js`

```javascript
/**
 * @author YangLing
 * @date 2022/7/25 09:47
 */

export const props = {
  value: {
    type: [String, Number, Array],
    default: ''
  },
  config: {
    type: Object,
    default: () => ({})
  }
}

export const mixin = {
  data () {
    return {
      options: [],
      props: {
        label: 'label',
        value: 'value'
      }
    }
  },
  computed: {
    url () {
      return this.config?.url
    },
    method () {
      return this.config?.method || 'GET'
    },
    initRequest () {
      return this.config?.initRequest
    }
  },
  watch: {
    value: {
      handler (newValue) {
        this.val = newValue
      },
      immediate: true
    },
    config: {
      handler (val) {
        this.initOptions()
        this.initProps()
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleChangeEvent (value) {
      this.$emit('update:value', value)
    },
    initOptions () {
      if (this.url) {
        this.getOption()
        return false
      }

      const options = this.config.options
      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options
      }
    },
    initProps () {
      const props = this.config.props
      const keys = Object.keys(this.props)
      if (props && Object.prototype.toString.call(props) === '[object Object]') {
        for (const key in props) {
          if (keys.includes(key)) {
            this.props[key] = props[key]
          }
        }
      }
    },
    async getOption () {
      if (!this.initRequest) {
        return false
      }

      const response = await this.$axios({
        url: this.url,
        method: this.method
      })
      const data = response.data.data
      this.options = data
      console.log(this.options)
    }
  }
}

```

`control/checkbox/index.vue`

```vue
<template>
  <div>
    <el-checkbox-group v-model="val" @change="handleChangeEvent">
      <el-checkbox v-for="item in options" :key="item[props.value]" :label="item[props.value]">{{item[props.label]}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'CheckboxComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  watch: {

  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

```

`control/select/index.vue`

```vue
<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent" >
      <el-option  v-for="item in options" :key="item[props.value]" :label="item[props.label]" :value="item[props.value]"></el-option>
    </el-select>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'SelectComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  watch: {

  },
  data () {
    return {
      val: ''
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

```



#### 5.6 checkbox组件封装 - 完结

`Form.vue`

```javascript
 formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '交通工具',
          type: 'radio',
          prop: 'car',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '汽车',
              b: 1
            },
            {
              a: '高铁',
              b: 2
            },
            {
              a: '飞机',
              b: 3
            }
          ]
        },
        {
          label: '食物',
          type: 'checkbox',
          prop: 'food',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '苹果',
              b: 1
            },
            {
              a: '杨梅',
              b: 2
            },
            {
              a: '芒果',
              b: 3
            }
          ]
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '一教',
              b: 1
            },
            {
              a: '二教',
              b: 2
            },
            {
              a: '三教',
              b: 3
            },
            {
              a: '四教',
              b: 4
            }
          ]
        },
        {
          label: '教室1',
          type: 'select',
          prop: 'class_room1',
          required: true,
          props: {
            label: 'class_name',
            value: 'id'
          },
          initRequest: true,
          url: '/classroom/',
          method: 'GET'
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: '',
        food: [],
        car: 1
      }
```

`components/control/radio/index.vue`

```vue
<template>
  <div>
    <el-radio-group v-model="val" @change="handleChangeEvent">
      <el-radio v-for="item in options" :key="item[props.value]" :label="item[props.value]">{{item[props.label]}}</el-radio>
    </el-radio-group>
  </div>
</template>
```



### 六、date日期组件封装

#### 6.1 date日期组件封装 - type日期类型配置

`Form.vue`

```javascript
formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '日期',
          type: 'date',
          model: 'datetimerange',
          prop: 'createDate'
          // required: true,
        },
        {
          label: '交通工具',
          type: 'radio',
          prop: 'car',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '汽车',
              b: 1
            },
            {
              a: '高铁',
              b: 2
            },
            {
              a: '飞机',
              b: 3
            }
          ]
        },
        {
          label: '食物',
          type: 'checkbox',
          prop: 'food',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '苹果',
              b: 1
            },
            {
              a: '杨梅',
              b: 2
            },
            {
              a: '芒果',
              b: 3
            }
          ]
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '一教',
              b: 1
            },
            {
              a: '二教',
              b: 2
            },
            {
              a: '三教',
              b: 3
            },
            {
              a: '四教',
              b: 4
            }
          ]
        },
        {
          label: '教室1',
          type: 'select',
          prop: 'class_room1',
          // required: true,
          props: {
            label: 'class_name',
            value: 'id'
          },
          // initRequest: true,
          url: '/classroom/',
          method: 'GET'
        }
      ],
      formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: '',
        food: [],
        car: 1,
        createDate: ''
      }
```

`components/control/date/index.vue`

```vue
<template>
  <div>
    <el-date-picker
      v-model="val"
      :type="config.model || 'date'"
      @change="handleChangeEvent"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'RadioComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  watch: {

  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

```

`control/basis.js`

```javascript
 value: {
    type: [String, Number, Array, Date],
    default: ''
  },
```



#### 6.2 date日期组件封装 - placeholder占位符配置

`Form.vue`

```javascript
{
          label: '日期',
          type: 'date',
          model: 'datetimerange',
          // placeholder: '请选择创建日期',
          startPlaceholder: '请选择开始创建日期',
          endPlaceholder: '请选择结束创建日期',
          rangeSeparator: '至',
          prop: 'createDate'
          // required: true,
        },
```

`components/control/date/index.vue`

```vue
<template>
  <div>
    <el-date-picker
      v-model="val"
      :type="config.model || 'date'"
      :placeholder="config.placeholder || '请选择日期'"
      :range-separator="config.rangeSeparator || '-'"
      :start-placeholder="config.startPlaceholder || '开始日期'"
      :end-placeholder="config.endPlaceholder || '结束日期'"
      @change="handleChangeEvent"
      >
    </el-date-picker>
  </div>
</template>
```



#### 6.3 date日期组件封装 - picker-options禁用日期

`components/control/date/index.vue`

```vue
<template>
  <div>
    <el-date-picker
      v-model="val"
      :type="config.model || 'date'"
      :placeholder="config.placeholder || '请选择日期'"
      :range-separator="config.rangeSeparator || '-'"
      :start-placeholder="config.startPlaceholder || '开始日期'"
      :end-placeholder="config.endPlaceholder || '结束日期'"
      :picker-options="{
        disabledDate : (time)=>{
          // return true
          return time.getTime() < new Date() - 8.64e7
        }
      }"
      @change="handleChangeEvent"
      >
    </el-date-picker>
  </div>
</template>
```



#### 6.4 date日期组件封装 - 配置禁用日期

`Form.vue`

```javascript
{
          label: '日期',
          type: 'date',
          model: 'datetimerange',
          // disabledDate: true,
          disabledToDay: true,
          // placeholder: '请选择创建日期',
          startPlaceholder: '请选择开始创建日期',
          endPlaceholder: '请选择结束创建日期',
          rangeSeparator: '至',
          prop: 'createDate'
          // required: true,
        },
```

`components/control/date/index.vue`

```vue
<template>
  <div>
    <el-date-picker
      v-model="val"
      :type="config.model || 'date'"
      :placeholder="config.placeholder || '请选择日期'"
      :range-separator="config.rangeSeparator || '-'"
      :start-placeholder="config.startPlaceholder || '开始日期'"
      :end-placeholder="config.endPlaceholder || '结束日期'"
      :picker-options="pickerOptions()"
      @change="handleChangeEvent"
      >
    </el-date-picker>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'RadioComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  watch: {

  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    pickerOptions () {
      const disabledDate = this.config.disabledDate
      const disabledToDay = this.config.disabledToDay
      return {
        disabledDate: (time) => {
          if (disabledDate) {
            // return true
            return time.getTime() < new Date() - 8.64e7
          } else if (disabledToDay) {
            return time.getTime() < new Date()
          } else {
            return false
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>

```



#### 6.5 date日期组件封装 - 自定义禁用日期规则

`Form.vue`

```javascript
{
          label: '日期',
          type: 'date',
          model: 'datetimerange',
          // disabledDate: true,
          disabledDateRules: (time) => {
            return time.getTime() > new Date()
          },
          disabledToDay: true,
          // placeholder: '请选择创建日期',
          startPlaceholder: '请选择开始创建日期',
          endPlaceholder: '请选择结束创建日期',
          rangeSeparator: '至',
          prop: 'createDate'
          // required: true,
        },
```

`components/control/date/index.vue`

```vue
<template>
  <div>
    <el-date-picker
      v-model="val"
      :type="config.model || 'date'"
      :placeholder="config.placeholder || '请选择日期'"
      :range-separator="config.rangeSeparator || '-'"
      :start-placeholder="config.startPlaceholder || '开始日期'"
      :end-placeholder="config.endPlaceholder || '结束日期'"
      :picker-options="pickerOptions()"
      @change="handleChangeEvent"
      >
    </el-date-picker>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'RadioComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  watch: {

  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    pickerOptions () {
      const disabledDate = this.config.disabledDate
      const disabledToDay = this.config.disabledToDay
      const disabledDateRules = this.config.disabledDateRules && Object.prototype.toString.call(this.config.disabledDateRules) === '[object Function]'
      return {
        disabledDate: (time) => {
          if (disabledDateRules) {
            return this.config.disabledDateRules(time)
          } else if (disabledDate) {
            // return true
            return time.getTime() < new Date() - 8.64e7
          } else if (disabledToDay) {
            return time.getTime() < new Date()
          } else {
            return false
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>

```



#### 6.6 date日期组件封装 - format日期格式





### 七、upload上传组件

#### 7.1 upload上传组件 - upload初始化

#### 7.2 upload上传组件 - 元素类型

#### 7.3 upload上传组件 - 自定义上传区域尺寸

#### 7.4 upload上传组件 - 自定义接口上传文件1

#### 7.5 upload上传组件 - 自定义接口上传文件2

#### 7.6 upload上传组件 - 自定义删除

#### 7.7 upload上传组件 - 限制上传数据、回调显示

#### 7.8 upload上传组件 - 限制上传文件的大小

#### 7.9 upload上传组件 - 删除动作回调

#### 7.10 upload上传组件 - upload上传组件封装



### 八、 switch开关组件

![image-20220726095622090](README.assets/image-20220726095622090.png)

#### 8.1 switch开关组件 - switch初始化样式

`Form.vue`

```javascript
{
          label: '滑动开关',
          type: 'switch',
          prop: 'status'
        },
```

`control/switch/index.vue`

```vue
<template>
  <div class="yang-switch">
    <i></i>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.yang-switch{
  width: 64px;
  padding: 2px;
  border-radius: 100px;
  background-color: #f0f0f0;
  cursor: pointer;
  >i{
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.05);
  }
}
</style>

```



#### 8.2 switch开关组件 - 选中状态过滤动画

`control/switch/index.vue`

```vue
<template>
  <div class="yang-switch " :class="{'yang-switch-active' : active}">
    <i></i>
  </div>
</template>

<script>
export default {
  name: 'SwitchComponent',
  data () {
    return {
      active: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.active = true
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
$primary : #409eff !default;
.yang-switch{
  width: 64px;
  padding: 2px;
  border-radius: 100px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  >i{
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.05);
    transition: all 0.4s ease 0s;
  }
}
.yang-switch-active{
  background-color: $primary;
  >i{
    margin-left: 36px;
  }
}
</style>

```



#### 8.3 switch开关组件 - 配置打开和关闭状态的值

`Form.vue`

```javascript
{
          label: '滑动开关',
          type: 'switch',
          prop: 'status',
          activeValue: 1,
          inactiveValue: 0
        },
        
 formField: {
        phone: '17802901987',
        password: '',
        age: '',
        email: '',
        food: [1, 4],
        car: 1,
        createDate: '',
        status: 1
      }
```

`control/switch/index.vue`

```vue
<template>
  <div class="yang-switch " :class="{'yang-switch-active' : active}">
    <i></i>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'SwitchComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  data () {
    return {
      // 打开
      activeValue: true,
      // 关闭
      inactiveValue: false,
      // 定义类型
      initDefaultValueType: ['boolean', 'string', 'number']
    }
  },
  computed: {
    active () {
      return this.value === this.activeValue
    }
  },
  watch: {
    'config.activeValue': {
      handler (newValue) {
        const bool = this.initDefaultValueType.includes(typeof newValue)
        // const bool = ['boolean', 'string', 'number'].includes(typeof newValue)
        bool && (this.activeValue = newValue)
      },
      immediate: true,
      deep: true
    },
    'config.inactiveValue': {
      handler (newValue) {
        const bool = this.initDefaultValueType.includes(typeof newValue)
        // const bool = ['boolean', 'string', 'number'].includes(typeof newValue)
        bool && (this.inactiveValue = newValue)
      },
      immediate: true,
      deep: true
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.active = true
    // }, 2000)
  }
}
</script>

<style lang="scss" scoped>
$primary : #409eff !default;
.yang-switch{
  width: 64px;
  padding: 2px;
  border-radius: 100px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  >i{
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.05);
    transition: all 0.4s ease 0s;
  }
}
.yang-switch-active{
  background-color: $primary;
  >i{
    margin-left: 36px;
  }
}
</style>

```



#### 8.4 switch开关组件 - 单击事件回调

`Form.vue`

```javascript
{
          label: '滑动开关',
          type: 'switch',
          prop: 'status',
          activeValue: 1,
          inactiveValue: 0,
          beforeChange: () => {

          }
        },
```

`control/switch/index.vue`

```vue
<template>
  <div class="yang-switch " :class="{'yang-switch-active' : active}" @click="handleSwitch">
    <i></i>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'SwitchComponent',
  mixins: [mixin],
  props: {
    ...props
  },
  data () {
    return {
      // 打开
      activeValue: true,
      // 关闭
      inactiveValue: false,
      // 定义类型
      initDefaultValueType: ['boolean', 'string', 'number']
    }
  },
  computed: {
    active () {
      return this.value === this.activeValue
    }
  },
  watch: {
    'config.activeValue': {
      handler (newValue) {
        const bool = this.initDefaultValueType.includes(typeof newValue)
        // const bool = ['boolean', 'string', 'number'].includes(typeof newValue)
        bool && (this.activeValue = newValue)
      },
      immediate: true,
      deep: true
    },
    'config.inactiveValue': {
      handler (newValue) {
        const bool = this.initDefaultValueType.includes(typeof newValue)
        // const bool = ['boolean', 'string', 'number'].includes(typeof newValue)
        bool && (this.inactiveValue = newValue)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleSwitch () {
      const beforeChange = this.config.beforeChange
      if (beforeChange && Object.prototype.toString.call(beforeChange) === '[object Function]') {
        beforeChange(this.active).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })

        return false
      }
      const value = this.value === this.activeValue ? this.inactiveValue : this.activeValue
      this.$emit('update:value', value)
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.active = true
    // }, 2000)
  }
}
</script>

<style lang="scss" scoped>
$primary : #409eff !default;
.yang-switch{
  width: 64px;
  padding: 2px;
  border-radius: 100px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  >i{
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.05);
    transition: all 0.4s ease 0s;
  }
}
.yang-switch-active{
  background-color: $primary;
  >i{
    margin-left: 36px;
  }
}
</style>

```



#### 8.5 switch开关组件 - 异步方法

`Form.vue`

```javascript
{
          label: '滑动开关',
          type: 'switch',
          prop: 'status',
          activeValue: 1,
          inactiveValue: 0,
          beforeChange: () => {
            return this.handleSwitchApi()
          }
        },
handleSwitchApi () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
```

`control/switch/index.vue`

```javascript
 methods: {
    handleSwitch () {
      const value = this.value === this.activeValue ? this.inactiveValue : this.activeValue
      const beforeChange = this.config.beforeChange
      if (beforeChange && Object.prototype.toString.call(beforeChange) === '[object Function]') {
        beforeChange(this.active).then(response => {
          this.$emit('update:value', value)
        }).catch(error => {
          console.log(error)
        })
        return false
      }
      this.$emit('update:value', value)
    }
  },
```



#### 



### 九、code验证码组件

![image-20220726095613101](README.assets/image-20220726095613101.png)

#### 9.1 code验证码组件封装  - 验证码初始化样式

`Form.vue`

```javascript
{
          label: '验证码',
          type: 'input',
          valueType: 'sendcode',
          prop: 'code',
          required: true
        },
```

`control/input/index.vue`

```vue
<template>
  <div class="relative">
    <el-input v-model="val" @input="handleInputEvent"></el-input>
    <div class="code-button">
      <yang-button size="mini" type="primary">获取验证码</yang-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  components: {
    yangButton: () => import('../../button/index.vue')
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  watch: {
    value: {
      handler (newValue) {
        console.log(newValue)
        this.val = newValue
      },
      immediate: true
    }
  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    handleInputEvent () {
      this.$emit('update:value', this.val)
    }
  }
}
</script>

<style lang="scss" scoped>
.relative{
  position: relative;
}
.code-button{
  position: absolute;
  right: 10px;
  top: 0;
}
</style>

```



#### 9.2 code验证码组件封装  - 账号输入组件

`Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="handleBeforeSubmit"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '验证码',
          type: 'input',
          sendAccount: '',
          valueType: 'sendcode',
          prop: 'code',
          required: true
        },
        {
          label: '滑动开关',
          type: 'switch',
          prop: 'status',
          activeValue: 1,
          inactiveValue: 0
          // beforeChange: () => {
          //   return this.handleSwitchApi()
          // }
        },
        {
          label: '日期',
          type: 'date',
          model: 'datetimerange',
          rangeSeparator: '至',
          placeholder: '请选择您的生日',
          disabledDateRules: (time) => {
            return time.getTime() > new Date() - 86400000 * 1
          },
          format: 'yyyy-MM',
          valueFormat: 'yyyy-MM-dd HH:mm:ss',
          // disabledDate: true,
          // disabledToDay: true,
          startPlaceholder: '请选择开始创建的日期',
          endPlaceholder: '请选择结束创建的日期',
          prop: 'createDate',
          required: true
        },
        {
          label: '交通工具',
          type: 'radio',
          prop: 'car',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '火车',
              b: 1
            },
            {
              a: '高铁',
              b: 2
            },
            {
              a: '飞机',
              b: 3
            }
          ]
        },
        {
          label: '食物',
          type: 'checkbox',
          prop: 'food',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '苹果',
              b: 1
            },
            {
              a: '西瓜',
              b: 2
            },
            {
              a: '芒果',
              b: 3
            },
            {
              a: '哈密瓜',
              b: 4
            }
          ]
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '一教',
              b: 1
            },
            {
              a: '二教',
              b: 2
            },
            {
              a: '三教',
              b: 3
            },
            {
              a: '四教',
              b: 4
            }
          ]
        },
        {
          label: '教室1',
          type: 'select',
          prop: 'class_room1',
          // required: true,
          props: {
            label: 'class_name',
            value: 'id'
          },
          // initRequest: true,
          url: '/classroom/',
          method: 'GET'
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: '',
        food: [1, 4],
        car: 1,
        createDate: '',
        status: 1
      }
    }
  },
  watch: {
    'formField.phone': {
      handler: function (val, oldVal) {
        console.log(val)
      },
      immediate: true,
      deep: true
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    handleBeforeSubmit () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(this.formField)
          resolve()
          // eslint-disable-next-line prefer-promise-reject-errors
          // reject()
        }, 2000)
      })
    },
    handleSwitchApi () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```

`control/input/index.vue`

```vue
<template>
  <div class="relative">
    <el-input v-model="val" @input="handleChangeEvent"></el-input>
    <div class="code-button" v-if="config.valueType === 'sendcode'">
      <yang-button size="mini" type="primary" @click="getSms">获取验证码</yang-button>
    </div>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'InputComponent',
  mixins: [mixin],
  components: {
    yangButton: () => import('../../button/index.vue')
  },
  props: {
    ...props
  },
  watch: {
    value: {
      handler (newValue) {
        console.log(newValue)
        this.val = newValue
      },
      immediate: true
    }
  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    getSms () {
      if (!this.config.sendAccount) {
        this.$message.error('请先设置发送的手机号')
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.relative{
  position: relative;
}
.code-button{
  position: absolute;
  right: 10px;
  top: 0;
}
</style>

```



#### 9.3 code验证码组件封装  - 自定义回调函数更新账号

`Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="handleBeforeSubmit"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true,
          callback: () => {

          }
        },
        {
          label: '验证码',
          type: 'input',
          sendAccount: '',
          valueType: 'sendcode',
          prop: 'code',
          required: true
        },
        {
          label: '滑动开关',
          type: 'switch',
          prop: 'status',
          activeValue: 1,
          inactiveValue: 0
          // beforeChange: () => {
          //   return this.handleSwitchApi()
          // }
        },
        {
          label: '日期',
          type: 'date',
          model: 'datetimerange',
          rangeSeparator: '至',
          placeholder: '请选择您的生日',
          disabledDateRules: (time) => {
            return time.getTime() > new Date() - 86400000 * 1
          },
          format: 'yyyy-MM',
          valueFormat: 'yyyy-MM-dd HH:mm:ss',
          // disabledDate: true,
          // disabledToDay: true,
          startPlaceholder: '请选择开始创建的日期',
          endPlaceholder: '请选择结束创建的日期',
          prop: 'createDate',
          required: true
        },
        {
          label: '交通工具',
          type: 'radio',
          prop: 'car',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '火车',
              b: 1
            },
            {
              a: '高铁',
              b: 2
            },
            {
              a: '飞机',
              b: 3
            }
          ]
        },
        {
          label: '食物',
          type: 'checkbox',
          prop: 'food',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '苹果',
              b: 1
            },
            {
              a: '西瓜',
              b: 2
            },
            {
              a: '芒果',
              b: 3
            },
            {
              a: '哈密瓜',
              b: 4
            }
          ]
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '一教',
              b: 1
            },
            {
              a: '二教',
              b: 2
            },
            {
              a: '三教',
              b: 3
            },
            {
              a: '四教',
              b: 4
            }
          ]
        },
        {
          label: '教室1',
          type: 'select',
          prop: 'class_room1',
          // required: true,
          props: {
            label: 'class_name',
            value: 'id'
          },
          // initRequest: true,
          url: '/classroom/',
          method: 'GET'
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: '',
        food: [1, 4],
        car: 1,
        createDate: '',
        status: 1
      }
    }
  },
  watch: {
    'formField.phone': {
      handler: function (val, oldVal) {
        console.log(val)
        this.formItem[1].sendAccount = val
      },
      immediate: true,
      deep: true
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    handleBeforeSubmit () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(this.formField)
          resolve()
          // eslint-disable-next-line prefer-promise-reject-errors
          // reject()
        }, 2000)
      })
    },
    handleSwitchApi () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>

```

`control/input/index.vue`

```vue
<template>
  <div class="relative">
    <el-input v-model="val" @input="handleChangeEvent"></el-input>
    <div class="code-button" v-if="config.valueType === 'sendcode'">
      <yang-button size="mini" type="primary" @click="getSms">获取验证码</yang-button>
    </div>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'InputComponent',
  mixins: [mixin],
  components: {
    yangButton: () => import('../../button/index.vue')
  },
  props: {
    ...props
  },
  watch: {
    value: {
      handler (newValue) {
        console.log(newValue)
        this.val = newValue
      },
      immediate: true
    }
  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    handleChangeEvent (value) {
      this.$emit('update:value', value)
      if (this.config.callback && Object.prototype.toString.call(this.config.callback) === '[object Function]') {
        this.config.callback(value)
      }
    },
    getSms () {
      if (!this.config.sendAccount) {
        this.$message.error('请先设置发送的手机号')
        return false
      }

      console.log(this.config.sendAccount)
    }
  }
}
</script>

<style lang="scss" scoped>
.relative{
  position: relative;
}
.code-button{
  position: absolute;
  right: 10px;
  top: 0;
}
</style>

```



#### 9.4 code验证码组件封装  - 自定义beforeChange属性

`Form.vue`

```vue
<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="handleBeforeSubmit"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true,
          callback: () => {

          }
        },
        {
          label: '验证码',
          type: 'input',
          sendAccount: '',
          valueType: 'sendcode',
          prop: 'code',
          required: true,
          beforeChange: () => {
            return this.getApiSms()
          }
        },
        {
          label: '滑动开关',
          type: 'switch',
          prop: 'status',
          activeValue: 1,
          inactiveValue: 0
          // beforeChange: () => {
          //   return this.handleSwitchApi()
          // }
        },
        {
          label: '日期',
          type: 'date',
          model: 'datetimerange',
          rangeSeparator: '至',
          placeholder: '请选择您的生日',
          disabledDateRules: (time) => {
            return time.getTime() > new Date() - 86400000 * 1
          },
          format: 'yyyy-MM',
          valueFormat: 'yyyy-MM-dd HH:mm:ss',
          // disabledDate: true,
          // disabledToDay: true,
          startPlaceholder: '请选择开始创建的日期',
          endPlaceholder: '请选择结束创建的日期',
          prop: 'createDate',
          required: true
        },
        {
          label: '交通工具',
          type: 'radio',
          prop: 'car',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '火车',
              b: 1
            },
            {
              a: '高铁',
              b: 2
            },
            {
              a: '飞机',
              b: 3
            }
          ]
        },
        {
          label: '食物',
          type: 'checkbox',
          prop: 'food',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '苹果',
              b: 1
            },
            {
              a: '西瓜',
              b: 2
            },
            {
              a: '芒果',
              b: 3
            },
            {
              a: '哈密瓜',
              b: 4
            }
          ]
        },
        {
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          props: {
            label: 'a',
            value: 'b'
          },
          options: [
            {
              a: '一教',
              b: 1
            },
            {
              a: '二教',
              b: 2
            },
            {
              a: '三教',
              b: 3
            },
            {
              a: '四教',
              b: 4
            }
          ]
        },
        {
          label: '教室1',
          type: 'select',
          prop: 'class_room1',
          // required: true,
          props: {
            label: 'class_name',
            value: 'id'
          },
          // initRequest: true,
          url: '/classroom/',
          method: 'GET'
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: '',
        food: [1, 4],
        car: 1,
        createDate: '',
        status: 1
      }
    }
  },
  watch: {
    'formField.phone': {
      handler: function (val, oldVal) {
        console.log(val)
        this.formItem[1].sendAccount = val
      },
      immediate: true,
      deep: true
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {
    handleBeforeSubmit () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(this.formField)
          resolve()
          // eslint-disable-next-line prefer-promise-reject-errors
          // reject()
        }, 2000)
      })
    },
    handleSwitchApi () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    },
    getApiSms () {
      return new Promise((resolve, reject) => {
        this.$axios('/api/code').then(response => {
          console.log(response)
          // let data = response.data.data
          // if (this.format && typeof this.format === 'function') {
          //   data = this.format(response.data)
          // }
          // this.tableData = data
        })
      })
    }
  }
}
</script>

<style scoped>

</style>

```

`control/input/index.vue`

```vue
<template>
  <div class="relative">
    <el-input v-model="val" @input="handleChangeEvent"></el-input>
    <div class="code-button" v-if="config.valueType === 'sendcode'">
      <yang-button size="mini" type="primary" @click="getSms">获取验证码</yang-button>
    </div>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'InputComponent',
  mixins: [mixin],
  components: {
    yangButton: () => import('../../button/index.vue')
  },
  props: {
    ...props
  },
  watch: {
    value: {
      handler (newValue) {
        console.log(newValue)
        this.val = newValue
      },
      immediate: true
    }
  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    handleChangeEvent (value) {
      this.$emit('update:value', value)
      if (this.config.callback && Object.prototype.toString.call(this.config.callback) === '[object Function]') {
        this.config.callback(value)
      }
    },
    getSms () {
      if (!this.config.sendAccount) {
        this.$message.error('请先设置发送的手机号')
        return false
      }
      if (this.config.beforeChange && Object.prototype.toString.call(this.config.beforeChange) === '[object Function]') {
        this.config.beforeChange().then(response => {

        }).catch(error => {
          console.log(error)
        })
      }
      console.log(this.config.sendAccount)
    }
  }
}
</script>

<style lang="scss" scoped>
.relative{
  position: relative;
}
.code-button{
  position: absolute;
  right: 10px;
  top: 0;
}
</style>

```



#### 9.5 code验证码组件封装  - 倒计时效果1

`control/input/index.vue`

```vue
<template>
  <div class="relative">
    <el-input v-model="val" @input="handleChangeEvent"></el-input>
    <div class="code-button" v-if="config.valueType === 'sendcode'">
      <yang-button size="mini" :disabled="disabled" :loading="loading" type="primary" @click="getSms">{{text}}</yang-button>
    </div>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'InputComponent',
  mixins: [mixin],
  components: {
    yangButton: () => import('../../button/index.vue')
  },
  props: {
    ...props
  },
  watch: {
    value: {
      handler (newValue) {
        console.log(newValue)
        this.val = newValue
      },
      immediate: true
    }
  },
  data () {
    return {
      val: '',
      text: '获取验证码',
      loading: false,
      disabled: false,
      s: 60,
      timer: null
    }
  },
  methods: {
    handleChangeEvent (value) {
      this.$emit('update:value', value)
      if (this.config.callback && Object.prototype.toString.call(this.config.callback) === '[object Function]') {
        this.config.callback(value)
      }
    },
    getSms () {
      if (!this.config.sendAccount) {
        this.$message.error('请先设置发送的手机号')
        return false
      }
      if (this.config.beforeChange && Object.prototype.toString.call(this.config.beforeChange) === '[object Function]') {
        this.text = '发送中'
        this.loading = true
        this.config.beforeChange().then(response => {
          this.text = `倒计时${this.s}秒`
          this.loading = false
          this.disabled = true
          this.countDown()
        }).catch(error => {
          console.log(error)
        })
      }
      console.log(this.config.sendAccount)
    },
    countDown () {
      this.timer = setInterval(() => {

      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.relative{
  position: relative;
}
.code-button{
  position: absolute;
  right: 10px;
  top: 0;
}
</style>

```



#### 9.6 code验证码组件封装  - 倒计时效果2

`control/input/index.vue`

```vue
<template>
  <div class="relative">
    <el-input v-model="val" @input="handleChangeEvent"></el-input>
    <div class="code-button" v-if="config.valueType === 'sendcode'">
      <yang-button size="mini" :disabled="disabled" :loading="loading" type="primary" @click="getSms">{{text}}</yang-button>
    </div>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'InputComponent',
  mixins: [mixin],
  components: {
    yangButton: () => import('../../button/index.vue')
  },
  props: {
    ...props
  },
  watch: {
    value: {
      handler (newValue) {
        console.log(newValue)
        this.val = newValue
      },
      immediate: true
    }
  },
  data () {
    return {
      val: '',
      text: '获取验证码',
      loading: false,
      disabled: false,
      s: 3,
      timer: null
    }
  },
  methods: {
    handleChangeEvent (value) {
      this.$emit('update:value', value)
      if (this.config.callback && Object.prototype.toString.call(this.config.callback) === '[object Function]') {
        this.config.callback(value)
      }
    },
    getSms () {
      if (!this.config.sendAccount) {
        this.$message.error('请先设置发送的手机号')
        return false
      }
      if (this.config.beforeChange && Object.prototype.toString.call(this.config.beforeChange) === '[object Function]') {
        this.text = '发送中'
        this.loading = true
        this.config.beforeChange().then(response => {
          this.text = `倒计时${this.s}秒`
          this.loading = false
          this.disabled = true
          this.countDown()
        }).catch(error => {
          this.text = '重新获取'
          this.disabled = false
          console.log(error)
        })
      }
      console.log(this.config.sendAccount)
    },
    countDown () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        this.s--
        if (this.s === 0) {
          this.text = '重新获取'
          this.disabled = false
          this.s = 60
          clearInterval(this.timer)
          this.timer = null
        } else {
          this.text = `倒计时${this.s}秒`
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.relative{
  position: relative;
}
.code-button{
  position: absolute;
  right: 10px;
  top: 0;
}
</style>

```



### 十、密码组件

#### 10.1 密码组件 - 密码组件初始化

#### 10.2 密码组件 - 右侧眼睛切换文本类型

#### 10.3 密码组件 - 获取密码的值

#### 10.4 密码组件 - 正则校验密码

#### 10.5 密码组件 - 两次密码的对比





### 十一、form表单组件应用场景

#### 11.1 控件分栏1

#### 11.2 控件分栏2

#### 11.3 初始化隐藏控制

#### 11.4 元素交互隐藏控制

#### 11.5 关联元素交互隐藏控制1

#### 11.6 关联元素交互隐藏控制2

#### 11.7 关联元素交互隐藏控制3

#### 11.8 关联元素交互隐藏控制4

#### 11.9 元素禁启用交互控制

#### 11.10 自定义label、块元素

#### 11.11 自定义label、左右布局

#### 11.12 自定义label、callback回调

#### 11.13 自定义按钮callback回调

#### 11.14 部分校验的逻辑

#### 11.15 部分校验的bug与解决方式

#### 11.16 部分校验动态规则

#### 11.17 form表单数据还原1

#### 11.18 form表单数据还原2

#### 11.19 form表单 - select下拉还原数据1

#### 11.20 form表单 - select下拉还原数据2

#### 

### 十二、table列表组件应用场景

#### 12.1 了解列表组件的搜索功能

#### 12.2 table列表组件引入search组件

#### 12.3 search组件配置控件

#### 12.4 按钮布局配置

#### 12.5 获取search组件字段参数

#### 12.6 搜索动作、过滤数据

#### 12.7 重置动作

#### 12.8 默认参数

#### 12.9 配置额外的按钮

#### 12.10 单元格合并

#### 12.11 了解单元格合并规则

#### 12.12 了解数据计算规则

#### 12.13 生成合并规则1

#### 12.14 生成合并规则2

#### 12.15 生成合并规则3

#### 12.16 封装合并规则

#### 12.17 自定义合并规则

#### 12.18 分页

#### 12.19 分页传参

#### 12.20 勾选动作的思考

#### 12.21 勾选数据的存储

#### 12.22 配置是否需要初始化选择

#### 12.23 勾选动作逻辑

#### 12.24 table组件场景应用完结

