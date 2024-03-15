import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AwsService {
    constructor(private http: HttpClient) { }

    getAws() {
        return this.http.get('assets/aws.txt', { responseType: 'text' });
    }

}
