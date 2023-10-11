import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  menuOpen: boolean = false

  constructor() { }

  toggleMenu = () => {
    this.menuOpen = !this.menuOpen
  }
}
