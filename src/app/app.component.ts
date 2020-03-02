import { Component, Input, ViewEncapsulation } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  // title = 'DemoProject';
serverElement= [{type: 'server', name: 'Testserver', content:'just a test'}];

onServerAdded(serverData:{serverName:string, serverContent: string}){
  this.serverElement.push({
    type: 'server',
    name: serverData.serverName,
    content : serverData.serverContent
  });
}

onBlueprintAdded(blueprintData:{serverName:string, serverContent: string}){
  this.serverElement.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content : blueprintData.serverContent
  });
}
}
