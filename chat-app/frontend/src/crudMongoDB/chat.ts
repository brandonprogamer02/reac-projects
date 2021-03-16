import { AxiosResponse } from 'axios'
import axiosClient from '../clienteAxios'
import IChat, { chatExampleObject } from '../types/Chat'

const url = '/chat'

export function getChats(idUser?: any, callback?: (res: AxiosResponse<IChat[]>) => void): Promise<IChat[]> {
     const params = {
          params: {
               member1: idUser
          }
     }

     return axiosClient.get(url, params)
          .then(res => {
               callback && callback(res)
               return res.data
          })
          .catch(error => console.log(error))
}

export function getChat(chatId?: string, callback?: (res: AxiosResponse<IChat>) => void): Promise<IChat> {

     return axiosClient.get(`${url}/${chatId}`)
          .then(res => {
               callback && callback(res)
               return res.data
          })
          .catch(error => console.log(error))
}

export async function insertNewMessage(chatId: string, message: string, authorId: string) {
     const body = {
          "field": "messages",
          "value": {
               text: message,
               author: authorId,
               date: new Date()
          }
     }
     await axiosClient.put('/chat/' + chatId, body)
}

export async function createNewChat(memberId1: string, memberId2: string): Promise<IChat[]> {

     const newChat = {
          ...chatExampleObject, author: memberId1,
          members: [memberId1, memberId2]
     };

     const res = await axiosClient.post('/chat', newChat);
     return res.data;
}

export async function deleteChatApi(chatId: string): Promise<IChat[]> {
     const res = await axiosClient.delete('/chat/' + chatId);
     return res.data;
}