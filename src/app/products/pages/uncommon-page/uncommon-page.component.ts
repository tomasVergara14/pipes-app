import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs'

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

  public person:{}={
    name: 'Tomas',
    age: 27,
    city: 'Cba'
  }

  public myObservableTimer:Observable<number> = interval(1000)

  changeClient(){
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient(){
    this.clients.shift();
  }

}
