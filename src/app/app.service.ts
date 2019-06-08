import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class Service {

    constructor(
        private http: HttpClient
    ){}

    produtos() {
        return this.http.get("http://localhost:3000/api/produtos").pipe(take(1));
    }

    pessoas() {
        return this.http.get("http://localhost:3000/api/pessoas").pipe(take(1));
    }

    fazerEscolhar(pessoa: any){
        return this.http.post("http://localhost:3000/api/pessoa/add", pessoa).pipe(take(1));
    }

}