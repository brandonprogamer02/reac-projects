import { AxiosResponse } from 'axios'
import axiosClient from '../clienteAxios'
import IUser from '../types/User'

const url = '/user'

export function getUser(userId: string, callback?: (res: AxiosResponse<IUser>) => void) {
     return axiosClient.get(`${url}/${userId}`)
          .then(res => {
               (callback) && callback(res.data)
               return res.data
          })
          .catch(error => console.log(error))
}

export const userExistsFetch = async (username: string) => {
     const userExistsFetch = await axiosClient.get('user/', { params: { username } });
     return userExistsFetch.data[0] ? true : false
}

export const getUserByToken = async (token: string) => {
     const userExistsFetch = await axiosClient.get('user/', { params: { token } });
     const { user } = userExistsFetch.data;
     return user;
}

export const getUserByName = async (username: string) => {
     const users = await axiosClient.get('/user', { params: { username } });
     return users.data
}