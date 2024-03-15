import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AngularService {
    constructor(private http: HttpClient) { }

    getAngular(filePath: string) {
        return this.http.get(`assets/${filePath}`, { responseType: 'text' });
    }

}
