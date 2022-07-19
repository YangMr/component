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
      const url = this.url
      if (!url) {
        throw new Error('url is required')
        return false
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method
        }

        if (JSON.stringify(this.data) === '{}') {
          requestData.data = this.data
        }

        if (JSON.stringify(this.params) === '{}') {
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
