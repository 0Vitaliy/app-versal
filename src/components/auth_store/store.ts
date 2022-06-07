import { createContext } from 'react';
import { action, makeObservable } from 'mobx';
import UserApiProvider from '../../api/user.api';
import { LoaderInstance } from '../loader/store'

class Auth {

  loginAction = async (data: any) => {
    LoaderInstance.setLoader(true)
    try {
      const res = await UserApiProvider.loginUser(data);
      localStorage.setItem('access_token', res.access_token)
    } catch (e) {

    } finally {
      LoaderInstance.setLoader(false)
    }

  }

  constructor() {
    makeObservable(this, {
      loginAction: action,
    });
  }
}

export const AuthInstance = new Auth();
export const AuthCTX = createContext(AuthInstance);
