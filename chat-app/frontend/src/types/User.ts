
export default interface IUser {
     _id?: string 
     userName: string,
     active: boolean,
     contacts: IUser[],
     imageProfile: string
}

