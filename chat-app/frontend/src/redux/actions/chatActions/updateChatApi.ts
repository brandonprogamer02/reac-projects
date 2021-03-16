import { GlobalState } from '../../types'
import { ChatAction } from '../../types/chat'
import { BodyParam } from '../../types'
import axios from '../../../clienteAxios'
import { findChatApi } from './findChatApi'
import { findChatsApi } from '../chatsAction'
import { reloadChatToServer } from '../../../socket/emitters/index'

export const UPDATE_CHAT_API_SUCESSS = 'UPDATE_CHAT_API_SUCESSS'
export const UPDATE_CHAT_API_STARTED = 'UPDATE_CHAT_API_STARTED'
export const UPDATE_CHAT_API_ERROR = 'UPDATE_CHAT_API_ERROR'

const updateChatApiStarted = (): ChatAction => ({
     type: UPDATE_CHAT_API_STARTED,
});

const updateChatApiSuccess = (): ChatAction => ({
     type: UPDATE_CHAT_API_SUCESSS
});

const updateChatApiError = (error: Error): ChatAction => ({
     type: UPDATE_CHAT_API_ERROR,
     payload: error
});

export const updateChatApi = (chatId: string, body: BodyParam) => async (dispatch: any, getState: () => GlobalState) => {
     dispatch(updateChatApiStarted());

     axios.put('/chat/' + chatId, body)
          .then(res => {
               // despues que actualizemos el chat
               dispatch(updateChatApiSuccess());
               // mandamos a fetchear a chat y a chats
               dispatch(findChatApi(chatId));
               dispatch(findChatsApi());

               // getting members id without the own id
               // const membersId: string[] = []
               // getState().chat.result.members.forEach(member => {
               //      if (member._id !== getState().user.result._id) {
               //           membersId.push(member._id as string);
               //      }
               // })
               // reloadChatToServer(membersId);
          })
          .catch(error => {
               dispatch(updateChatApiError(error));
          })

}

