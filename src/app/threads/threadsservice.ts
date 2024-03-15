import { Injectable,Component, Input, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThreadService {
    constructor(private http: HttpClient) { }

    getThreadsInfo() {
        return this.http.get('assets/threads.txt', { responseType: 'text' });
    }

}
