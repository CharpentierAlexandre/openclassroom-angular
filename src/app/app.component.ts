import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Posts';
    isAuth = false;
    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });
  
    pl = [
    {
      title: 'Mon premier Post',
      content: 'Suspendisse potenti. Cras id dui vel est bibendum consectetur sed non sem. Etiam venenatis vitae neque at dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas venenatis blandit dui, vel rhoncus sapien. In iaculis metus sit amet rhoncus accumsan. Phasellus laoreet, ex vel consectetur accumsan, dolor tellus ultricies urna, sit amet pretium augue enim et ante. '
    },
    {
      title: 'Mon Post 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum ligula leo, vel imperdiet nulla vestibulum et. Donec at sapien nec sem lacinia fringilla nec vel nunc. Sed vitae volutpat erat. Etiam pulvinar sollicitudin mi at congue. Nam venenatis lacus eu augue luctus posuere. Ut vehicula fringilla massa, et finibus leo commodo non. Donec quis efficitur libero. In rutrum molestie dui, id venenatis nunc. Integer commodo eleifend leo non auctor. Aliquam consequat leo sed magna volutpat, sit amet feugiat libero aliquam. '
    },
    {
      title: 'Lorem Ipsum',
      content: 'Integer commodo eleifend leo non auctor. Aliquam consequat leo sed magna volutpat, sit amet feugiat libero aliquam. Suspendisse potenti. Cras id dui vel est bibendum consectetur sed non sem. Etiam venenatis vitae neque at dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas venenatis blandit dui, vel rhoncus sapien. In iaculis metus sit amet rhoncus accumsan. '
    }
  ];
    
    constructor(){
    }
}
