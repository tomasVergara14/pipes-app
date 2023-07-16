import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Hero } from '../../interfaces/hero';
import { Color } from '../../interfaces/hero';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public items!: MenuItem[];
  public isUpperCase: boolean = false;
  public sortByValue: 'canFly' | 'name' | 'color' | '' = ''

  public heroes: Hero[] =[
    {
      name:'superman',
      canFly: true,
      color: Color.blue
    },
    {
      name:'batman',
      canFly: false,
      color: Color.black
    },
    {
      name:'dareDevil',
      canFly: false,
      color: Color.red
    },
    {
      name:'greenLighter',
      canFly: true,
      color: Color.green
    },
  ]

  ngOnInit() {
      this.items = [
          {
              label: 'Update',
              icon: 'pi pi-refresh'
          },
          {
              label: 'Delete',
              icon: 'pi pi-times'
          },
          {
              label: 'Angular',
              icon: 'pi pi-external-link',
              url: 'http://angular.io'
          },
          {
              label: 'Router',
              icon: 'pi pi-upload',
              routerLink: '/fileupload'
          }
      ];
  }

  toggleValue(){
    this.isUpperCase = !this.isUpperCase;
  }

  sortByBtn (sortByValue:'canFly' | 'name' | 'color' | ''){
    this.sortByValue = sortByValue
  }

}
