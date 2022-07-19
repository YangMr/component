<template>
  <div class="home">
    <yang-table :column="column" index checkbox>
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)">编辑</el-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        {
          label: '标题',
          prop: 'title',
          type: 'function',
          callback: (row) => {
            if (row.id === 1) {
              return `<a href="https://www.baidu.com">${row.title}</a>`
            }
            return `<span>${row.title}</span>`
          }
        },
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ]
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    }
  }
}
</script>
