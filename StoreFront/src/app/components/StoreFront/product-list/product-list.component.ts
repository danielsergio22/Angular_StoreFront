import { BooksService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  BooksService : BooksService

  constructor( BooksService : BooksService) { 

    this.BooksService = BooksService;
  }

  ngOnInit(): void {
  
    this.livros = this.BooksService.getBook().subscribe(((response: any) => {
      this.livros = response;
    }));


  }

}
