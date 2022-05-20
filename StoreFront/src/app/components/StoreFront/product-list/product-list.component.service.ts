import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()

export class BooksService
{
    private url = 'https://localhost:44382/api/bookstore'; //ARRUMAR LINK

    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private Http:HttpClient){}

    getBook(){
        console.log(this.url);
        
        return this.Http.get(this.url)
    }

}