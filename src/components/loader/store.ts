import { createContext } from 'react';
import { action, makeObservable, observable } from 'mobx';
import UserApiProvider from '../../api/user.api';

class Loader {

  loader = false

  setLoader = (load: boolean) => {
    this.loader = load
  }

  constructor() {
    makeObservable(this, {
      setLoader: action,
      loader: observable
    });
  }
}

export const LoaderInstance = new Loader();
export const LoaderCTX = createContext(LoaderInstance);
