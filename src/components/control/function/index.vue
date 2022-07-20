<template>
  <div v-html="config.callback && config.callback(data)"></div>
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
