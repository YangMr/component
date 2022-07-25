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
  name: 'CheckBoxComponent',
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
