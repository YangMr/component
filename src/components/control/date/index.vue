<template>
  <div>
    <el-date-picker
      v-model="val"
      :type="config.model || 'year'"
      :placeholder="config.placeholder || '请选择日期'"
      :start-placeholder="config.startPlaceholder || '开始日期'"
      :end-placeholder="config.endPlaceholder || '结束日期'"
      :range-separator="config.rangeSeparator || '-'"
      :picker-options = "pickerOptions()"
      :format="config.format || 'yyyy-MM-dd'"
      :value-format="config.valueFormat || 'yyyy-MM-dd'"
      @change="handleChangeEvent"
    >
    </el-date-picker>
  </div>
</template>

<script>
import { props, mixin } from '../basis'
export default {
  name: 'DateComponent',
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
    pickerOptions () {
      const disabledDate = this.config.disabledDate
      const disabledToDay = this.config.disabledToDay
      const disabledDateRules = this.config.disabledDateRules && Object.prototype.toString.call(this.config.disabledDateRules) === '[object Function]'
      return {
        disabledDate: (time) => {
          if (disabledDateRules) {
            return this.config.disabledDateRules(time)
          } else if (disabledDate) {
            return time.getTime() < new Date() - 86400000 * 1
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
