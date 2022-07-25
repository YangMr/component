/**
 * @author YangLing
 * @date 2022/7/25 14:15
 */

export const props = {
  value: {
    type: [String, Number, Array, Date],
    default: ''
  },
  config: {
    type: Object,
    default: () => ({})
  }
}

export const mixin = {
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
