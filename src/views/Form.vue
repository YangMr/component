<template>
  <div>
    <yang-form :item="formItem" :field="formField" :button="formButton" :before-submit="handleBeforeSubmit"></yang-form>
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
          label: '教室',
          type: 'select',
          prop: 'class_room',
          required: true,
          options: [
            {
              label: '一教',
              value: 1
            },
            {
              label: '二教',
              value: 2
            },
            {
              label: '三教',
              value: 3
            },
            {
              label: '四教',
              value: 4
            }
          ]
        }
      ],
      formField: {
        phone: '17802901987',
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
    handleBeforeSubmit () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>

</style>
