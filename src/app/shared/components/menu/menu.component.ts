import { Component, OnInit } from '@angular/core';
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
              icon: 'pi pi-align-left'
            },
            {
                label: 'Numbers',
                icon: 'pi pi-dollar'
            },
            {
                label: 'Uncommon',
                icon: 'pi pi-globe'
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
