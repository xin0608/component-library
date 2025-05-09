import request from './request'

// 使用规范：
// import { login, getUserInfo } from '@/api/user'
// import { ref } from 'vue'
// const formData = ref({ username: '', password: '' })
// const handleLogin = async () => {
//     try {
//         const res = await login(formData.value)
//         console.log('登录成功', res)
//     } catch (err) {
//         console.error('登录失败', err)
//     }
// }



// 用户登录
export const login = (data) => { return request.post('/login', data) }

// 获取用户信息
export const getUserInfo = (userId) => { return request.get(`/user/${userId}`) }



