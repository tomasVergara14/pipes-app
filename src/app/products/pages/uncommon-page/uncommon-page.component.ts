import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {

  public name: string = 'Tomas';
  public gender: 'male'|'female' = 'male';
  
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public clients:string[] = ['To','Ce','Pau','Wal','Fa','Yo']

  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando'
  }

  changeClient(){
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient(){
    this.clients.shift();
  }

}
