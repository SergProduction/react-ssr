import axios from 'axios'


const baseConfig = {
  method: 'post',
  baseURL: 'https://ruolimp.ru/apicps',
  params: {
    lang: 0,
  },
  headers: {},
  timeout: 5000,
}


const request = axios.create(baseConfig)


const responseFormat = instance => instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

responseFormat(request)


export const api = {
  sportList: () => request.get('/live/sport/list')
    .catch(error => []),
}