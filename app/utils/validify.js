export default () => {
  return 'Hello Util'
}

export const isValidEmail = (value = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
export const phoneLength = (value = '') => /^8\d{9,}$/.test(value)
export const haveUppercase = (value = '') => /[A-Z]/.test(value)
export const haveNumber = (value = '') => /\d/.test(value)
export const haveSpecial = (value = '') => /[^\w\s]/.test(value)
