/**
 * @author YangLing
 * @date 2022/7/21 11:18
 */
import { validatePhone, validatePass, validateEmail } from '../../utils/validate'
const createRules = (data) => {
  data.forEach(item => {
    let rulesArray = []
    if (item.required) {
      const rules = { required: true, message: item.message || createMessage(item) }
      rulesArray.push(rules)
    }

    // 校验手机号
    if (item.valueType && item.valueType === 'phone') {
      const rule = { validator: validatePhone, trigger: 'change' }
      rulesArray.push(rule)
    }

    // 校验密码
    if (item.valueType && item.valueType === 'password') {
      const rule = { validator: validatePass, trigger: 'change' }
      rulesArray.push(rule)
    }

    // 校验邮箱
    if (item.valueType && item.valueType === 'email') {
      const rule = { validator: validateEmail, trigger: 'change' }
      rulesArray.push(rule)
    }

    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rulesArray = rulesArray.concat(item.rules)
    }
    item.rules = rulesArray
  })
  return data
}

const createMessage = (data) => {
  let msg = ''
  switch (data.type) {
    case 'input' :
      msg = '请输入'
      break
    case 'checkbox' :
      msg = '请选择'
      break
    case 'select' :
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}

export default createRules
