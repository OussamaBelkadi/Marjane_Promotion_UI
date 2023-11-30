import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promotion_front';
  action : Array<any> = [
    {title: "home" , path: "/home"},
    {title: "about" , path: "/promotion"},
  ]
  currentAction : any;

  setCurrentAction(action: any){
    this.currentAction = action;
  }
}
