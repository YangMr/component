/**
 * @author YangLing
 * @date 2022/7/21 14:23
 */

// 校验手机号
const regPhone = /^1[3456789]\d{9}$/
export const validatePhone = (rule, value, callback) => {
  if (value && regPhone.test(value)) {
    callback()
  } else {
    callback(new Error('请输入合法的手机号码'))
  }
}

// 校验密码
const resPass = /^[a-zA-Z0-9]{6,18}$/
export const validatePass = (rule, value, callback) => {
  return resPass.test(value)
}

// 校验邮箱
const regEmail = /1/
export const validateEmail = (rule, value, callback) => {
  if (regEmail.test(value)) {
    callback()
  } else {
    callback(new Error('请输入合法的邮箱地址'))
  }
}

/**
 *
 * 通用型组件
 *
 * 业务组件
 *
 *
 */
