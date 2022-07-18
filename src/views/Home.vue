<template>
  <div class="home">
    <yang-table :column="column" checkbox index></yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        { label: '日期', prop: 'date', width: 500 },
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
