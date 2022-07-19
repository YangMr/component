<template>
  <div class="home">
    <yang-table :column="column" index checkbox></yang-table>
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
            // return `<strong>${row.title}</strong>`
            // return row.title.replace('标题', '<strong>标题</strong>')
          }
        },
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '性别', prop: 'sex' }
      ]
    }
  },
  components: {
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {

  }
}
</script>
