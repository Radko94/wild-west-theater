import { IUser } from "@user/interfaces/interfaces";

export const userStateFeatureKey: string = 'userStateFeatureKey';

export interface IUserState {
  user?: IUser;
}

export const userInitialState: IUserState = {
  user: undefined
}
