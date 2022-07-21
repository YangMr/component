<template>
  <div>
    <yang-form :item="formItem" :field="formField"></yang-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      formItem: [
        {
          label: '姓名',
          type: 'input',
          prop: 'name',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          prop: 'password',
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
        name: 'jack',
        password: '123456'
      }
    }
  },
  components: {
    yangForm: () => import('../components/form/index')
  }
}
</script>

<style scoped>

</style>
