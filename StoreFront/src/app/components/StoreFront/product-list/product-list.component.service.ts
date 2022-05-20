import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()

export class BooksService
{
    private url = 'https://623b5abf8e9af58789421259.mockapi.io/api/v1/books';

    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private Http:HttpClient){}

    getBook(){
        return this.Http.get(this.url)
    }

}
