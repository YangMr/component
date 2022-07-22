<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent" >
      <el-option  v-for="item in options" :key="item[props.value]" :label="item[props.label]" :value="item[props.value]"></el-option>
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
        this.initProps()
      },
      immediate: true,
      deep: true
    }
  },
  data () {
    return {
      val: '',
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
    },
    basePath () {
      return this.config?.basePath
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
        method: this.method,
        basePath: this.basePath
      })
      const data = response.data.data
      this.options = data
      console.log(this.options)
    }

  }
}
</script>

<style scoped>

</style>
