import apiClient from "../utils/api"

const AuthService = {
    signIn: async (payload) => {
        return (await apiClient.post('/auth/login',payload)).data
    }
}

export default AuthService;