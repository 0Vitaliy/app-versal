import { createContext } from 'react';
import { action, makeObservable } from 'mobx';
import UserApiProvider from '../../api/user.api';

class Auth {

  loginAction = async (data: any) => {
    console.log('AUTH');
    await UserApiProvider.loginUser(data);
  }

  constructor() {
    makeObservable(this, {
      loginAction: action,
    });
  }
}

export const AuthInstance = new Auth();
export const AuthCTX = createContext(AuthInstance);
