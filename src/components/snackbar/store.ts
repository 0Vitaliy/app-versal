import { createContext } from 'react';
import { action, makeObservable, observable } from 'mobx';

class Snackbar {

  openSnackbar = false

  setOpenSnackbar = (open: boolean) => {
    this.openSnackbar = open
  }

  constructor() {
    makeObservable(this, {
      setOpenSnackbar: action,
      openSnackbar: observable
    });
  }
}

export const SnackbarInstance = new Snackbar();
export const SnackbarCTX = createContext(SnackbarInstance);
