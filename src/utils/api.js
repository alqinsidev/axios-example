import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://staging-antro.srv.kirei.co.id`
})

export default apiClient