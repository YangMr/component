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
