import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { FieldsetModule} from 'primeng/fieldset'
import { PanelModule } from 'primeng/panel'



@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
