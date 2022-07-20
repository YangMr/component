<template>
  <div>
    <el-tag type="success" v-if="data[prop] === 1">正常</el-tag>
    <el-tag type="info" v-if="data[prop] === 0">禁用</el-tag>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    },
    prop: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
