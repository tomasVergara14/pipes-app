import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent {

  public nameLower: string = 'tomas';
  public nameUpper: string = 'TOMAS';
  public fullName: string = 'tOMas';
  public customDate: Date = new Date();

}
