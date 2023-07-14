import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnInit {
  public items: MenuItem[] = []

  ngOnInit() {
      this.items = [
        {
          label: 'Angular pipes',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Texts & Dates',
              icon: 'pi pi-align-left',
              routerLink:'/'
            },
            {
                label: 'Numbers',
                icon: 'pi pi-dollar',
                routerLink:'numbers'
            },
            {
                label: 'Uncommon',
                icon: 'pi pi-globe',
                routerLink:'uncommon'
            }
          ],
        },
        {
          label: 'Personalized pipes',
          icon: 'pi pi-cog',
        }
      ];
  }
}
