import { Component,Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/Film.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: any[] = [];
  @Input()
  type:string="rien";


  constructor() {
    //alert(this.products instanceof Film);
   }

  ngOnInit(): void {
  }

}