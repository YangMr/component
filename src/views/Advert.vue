<template>
  <div class="article-container">
    <yang-table :format="formatData" :column="column" init-request index url="/article/advert/search" method="POST">
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot)" icon="el-icon-edit">编辑</el-button>
        <el-button type="danger" @click="handleDelete(slot)" icon="el-icon-delete">删除</el-button>
      </template>
    </yang-table>
  </div>
</template>

<script>
export default {
  name: 'Advert',
  data () {
    return {
      column: [
        {
          label: '广告标题',
          prop: 'title'
        },
        {
          label: '广告图片',
          prop: 'imageUrl',
          type: 'image'
        },
        {
          label: '广告链接',
          prop: 'advertUrl',
          type: 'function',
          callback: (item) => {
            return '<a href="' + item.advertUrl + '" target="_blank">' + item.advertUrl + '</a>'
          }
        },
        {
          label: '状态',
          prop: 'status',
          type: 'tag'
        },
        {
          label: '排序',
          prop: 'sort'
        },
        {
          label: '操作',
          type: 'slot',
          slot_name: 'operation',
          prop: 'operation'
        }
      ]
    }
  },
  components: {
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    formatData (response) {
      console.log('--', response)
      return response.data.records
    }
  }
}
</script>

<style scoped>

</style>
