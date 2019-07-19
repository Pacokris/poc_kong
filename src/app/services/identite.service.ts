import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdentiteRetour } from '../models/identiteRetour';

@Injectable({
    providedIn: 'root'
})
export class IdentiteService {

    public identiteConnected;
    private IdentiteRetour : IdentiteRetour[];

    private urlGet = `${'http://127.0.0.1:8080/'}http://kong-ee-api.swcx0010.sii24.pole-emploi.intra/da058/info`;
    private urlPost = `${'http://127.0.0.1:8080/'}http://kong-ee-api.swcx0010.sii24.pole-emploi.intra/da058/certification`;

    constructor(private http: HttpClient) {
    }

    public certification(identite: any) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: headers
        };
        const body = JSON.stringify({ identite });
        return this.http.post(this.urlPost, body, options)
    }

    public getKong() {
        this.http.get<any[]>(this.urlGet)
            .subscribe(
                (response) => {
                    this.IdentiteRetour = response;
                }
            );
    }
}

