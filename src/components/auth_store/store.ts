import { createContext } from 'react';
import { action, makeObservable } from 'mobx';
import UserApiProvider from '../../api/user.api';
import { LoaderInstance } from '../loader/store'
import { SnackbarInstance } from '../snackbar/store';

class Auth {

  loginAction = async (data: any) => {
    LoaderInstance.setLoader(true)
    try {
      const res = await UserApiProvider.loginUser(data);
      localStorage.setItem('access_token', res.access_token)
      SnackbarInstance.setOpenSnackbar(true)
    } catch (e) {

    } finally {
      LoaderInstance.setLoader(false)
    }

  }

  signUpAction = async (data: any) => {
    LoaderInstance.setLoader(true)
    try {
      await UserApiProvider.signUpUser(data);
    } catch (e) {

    } finally {
      LoaderInstance.setLoader(false)
    }

  }

  constructor() {
    makeObservable(this, {
      loginAction: action,
      signUpAction: action
    });
  }
}

export const AuthInstance = new Auth();
export const AuthCTX = createContext(AuthInstance);
