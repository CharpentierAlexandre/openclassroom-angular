import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

@Input() deviceName: string;
@Input() deviceStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

getStatus(){
    return this.deviceStatus;
}

getColor(){
    if(this.deviceStatus === true){
        return 'green';
       
    } else{
            return 'red';
        }
}
}
