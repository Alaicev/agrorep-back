import axios from "axios"

const instance = axios.create({
  baseURL:'http://agrorep.ru/api'
})

export default instance