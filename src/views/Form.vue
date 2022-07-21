<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formButton: [
        { label: '提交', key: 'submit', type: 'primary' },
        { label: '重置', key: 'cancel', type: 'danger' },
        { label: '下一步', key: 'next', type: 'success' }
      ],
      formItem: [
        {
          label: '手机号',
          type: 'input',
          valueType: 'phone',
          prop: 'phone',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          valueType: 'password',
          prop: 'password',
          required: true
        },
        {
          label: '邮箱',
          type: 'input',
          valueType: 'email',
          prop: 'email',
          required: true
        },
        {
          label: '年龄',
          type: 'select',
          prop: 'age',
          required: true
        }
      ],
      formField: {
        phone: '',
        password: '',
        age: '',
        email: ''
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
