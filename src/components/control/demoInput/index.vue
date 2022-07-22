<template>
  <div>
    <el-input v-model="val"></el-input>
  </div>
</template>

<script>
export default {
  name: 'demoInputComponent',
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

<style scoped>

</style>
