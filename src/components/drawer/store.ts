import { createContext } from 'react';
import { action, makeObservable, observable } from 'mobx';

class Drawer {

  openDrawer = false

  setOpenDrawer = (open: boolean) => {
    this.openDrawer = open
  }

  constructor() {
    makeObservable(this, {
      setOpenDrawer: action,
      openDrawer: observable
    });
  }
}

export const DrawerInstance = new Drawer();
export const DrawerCTX = createContext(DrawerInstance);
