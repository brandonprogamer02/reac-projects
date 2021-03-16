import axios from '../clienteAxios'

export const registerNewUserAndGetToken = async (username: string, password: string) => {
     const body = {
          username,
          password
     }
     const res = await axios.post('/sign', body);
     return res.data;
}


export const verifyUserCorrect = async (username: string, password: string) => {
     const body = {
          username,
          password
     }
     try {
          const res = await axios.post('/log', body);
          return res.data
     } catch {
          return { token: null };
     }
}

export const verifyValidToken = async (token: string) => {
     const body = {
          token
     }
     const res = await axios.post('log',body);
     return res.data.tokenValid;    
}