import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from 'src/app/components/shopping-cart/product-list/product-item/product-item.component'
import { Router } from '@angular/router'
import { ViewService } from 'src/app/service/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private viewService : ViewService , 
    private router : Router) { }

  ngOnInit(): void {
  }

}
