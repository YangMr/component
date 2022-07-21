/**
 * @author YangLing
 * @date 2022/7/21 11:18
 */

const createRules = (data) => {
  data.forEach(item => {
    const rulesArray = []
    if (item.required) {
      const rules = { required: true, message: item.message || createMessage(item) }
      rulesArray.push(rules)
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
    case 'select' :
      msg = '请选择'
      break
  }
  return `${msg}${data.label}`
}

export default createRules
