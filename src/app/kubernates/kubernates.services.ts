import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class KubernatesService {
    constructor(private http: HttpClient) { }

    getKubernatesInfo() {
        return this.http.get('assets/kubernates.txt', { responseType: 'text' });
    }

}
