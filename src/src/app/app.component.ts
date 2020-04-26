import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electron-test';

  public openWindow() {
    const { BrowserWindow } = (<any>window).require('electron').remote
    let win = new BrowserWindow({ width: 800, height: 600 })
    win.setProgressBar(0.5);
    win.loadURL('https://github.com')
  }

  public setProgress( perc : number){
    const { BrowserWindow } = (<any>window).require('electron').remote;
    BrowserWindow.setProgressBar(perc);
  }
}
