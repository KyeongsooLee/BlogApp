import { Document } from 'mongoose'

export interface IUser extends Document{
    name: String
    account: string
    password: string
    avatar: string
    role: string
    type: string
    _doc: object
}


export interface INewUser {
    name: string
    account: string
    password: string
}
  
export interface IDecodedToken {
    id?: string
    newUser?: INewUser
    iat: number
    exp: number
}

export interface IGgPayload {
    email: string
    email_verified: boolean
    name: string
    picture: string
  }
  
  export interface IUserParams {
    name: string 
    account: string 
    password: string
    avatar?: string
    type: string
  }