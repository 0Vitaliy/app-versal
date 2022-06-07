import { createContext } from 'react';
import { action, makeObservable, observable } from 'mobx';

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
