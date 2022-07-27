<template>
  <div>
    <yang-form inline :item="formItem" :field="formFiled" :button="formButton" :beforeSubmit="handleSearchSubmit"></yang-form>
    <yang-table :format="tableFormat" initRequest :column="column" index url="/article/advert/search" method="POST">
      <template v-slot:operate>
        <el-button type="primary" size="mini" >编辑</el-button>
        <el-button type="danger" size="mini">删除</el-button>
      </template>
    </yang-table>
  </div>
</template>

<script>
import AdvertApi from '@/api/advert'
export default {
  name: 'FormView',
  components: {
    yangForm: () => import('../components/form/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  data () {
    return {
      inline: true,
      formButton: [
        {
          label: '查询',
          size: 'mini',
          key: 'submit',
          type: 'primary'
        },
        { label: '编辑', size: 'mini', key: 'cancel', type: 'danger' },
        { label: '新增', size: 'mini', key: 'add', type: 'danger' }
      ],
      formItem: [
        {
          label: '广告标题:',
          type: 'input',
          prop: 'title',
          size: 'mini'
        },
        {
          label: '状态:',
          type: 'select',
          prop: 'status',
          size: 'mini',
          options: [
            { label: '禁用', value: 0 },
            { label: '正常', value: 1 }
          ]
        }
      ],
      formFiled: {
        title: '',
        status: '',
        current: 1,
        size: 20
      },
      column: [
        {
          label: '广告标题',
          prop: 'title'
        },
        {
          label: '广告图片',
          prop: 'imageUrl',
          type: 'function',
          callback: (data) => {
            return `<img src="${data.imageUrl}" width="80" height="80" />`
          }
        },
        {
          label: '广告链接',
          prop: 'advertUrl',
          type: 'function',
          callback: (data) => {
            return `<a href="${data.advertUrl}" target="${data.advertTarget}">${data.advertUrl}</a>`
          }
        },
        {
          label: '广告状态',
          prop: 'status'
        },
        {
          label: '广告排序',
          prop: 'sort'
        },
        {
          label: '操作',
          type: 'slot',
          slot_name: 'operate'
        }
      ]
    }
  },
  methods: {
    async handleSearchSubmit () {
      const response = await AdvertApi.getAdvertList(this.formFiled)
      console.log(response)
      return response
    },
    tableFormat (data) {
      return data.data.records
    }
  }

}
</script>

<style scoped>

</style>
