<template>
  <div>
    <el-radio-group v-model="val" @change="handleChangeEvent">
      <el-radio v-for="item in options" :key="item[props.value]" :label="item[props.value]">{{item[props.label]}}</el-radio>
    </el-radio-group>
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
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
