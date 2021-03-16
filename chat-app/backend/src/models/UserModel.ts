import { model, SchemaTypes, Schema,Document } from 'mongoose'

const UserSchema = new Schema({
     userName: SchemaTypes.String,
     password: SchemaTypes.String,
     active: SchemaTypes.Boolean,
     contacts: [{
          ref: 'Users',
          type: SchemaTypes.ObjectId
     }],
     imageProfile: SchemaTypes.String
}, { versionKey: false });

export interface IUser {
    userName: string,
    password: string,
    active: boolean,
    contacts: string[],
    imageProfile: string 
} 

const UserModel = model<Document<IUser>>('Users', UserSchema);


export default UserModel;