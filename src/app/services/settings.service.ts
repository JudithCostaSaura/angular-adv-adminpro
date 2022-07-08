import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme');
    
    if(url){
      this.linkTheme.setAttribute('href', url);
    }else {
      this.linkTheme.setAttribute('href', './assets/css/colors/default-dark.css');
    }
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    links.forEach(link => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        link.classList.add('working');
      }
    });
  }

}
