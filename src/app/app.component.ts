import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
 loadedFeature = 'recipe';
  OnNavigate(feature: string) {
this.loadedFeature = feature;
  }
 //  serverElements = [{type : 'server' , name : 'testServer' , content : 'Just a test !' }];

// onServerAdded(serverData: {serverName: string , serverContent: string }) {
//     console.log('onserveradded method');
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }

//   onBluePrintAdded(bluePrintData: {serverName: string , serverContent: string}) {
//     console.log('onblueprintadded method');
//     this.serverElements.push({
//       type: 'blueprint',
//       name: bluePrintData.serverName,
//       content: bluePrintData.serverContent
//     });
//      console.log(this.serverElements);
//   }

}
