import { Component, OnInit } from '@angular/core';
import { Identite } from '../../models/identite';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdentiteService } from '../../services/identite.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { IdentiteRetour } from '../../models/identiteRetour';

@Component({
    selector: 'app-identite-form',
    templateUrl: './identite-form.component.html',
    styleUrls: ['./identite-form.component.css'],
})
export class IdentiteFormComponent implements OnInit {

    model = new Identite(69389, 'CDN', '08081965', 2650869091294, 'AGGOUN', 'ALIA', 'AGGOUN', 2, 'string', 'string', 'string',
        'string', 'string', 'string', 'string', 'string', 'string');

    createIdentite: FormGroup;
    submitted = false;
    identiteCree = false;

    constructor(public http: HttpClient, private authenticationService: AuthenticationService, private formBuilder: FormBuilder, private identiteService: IdentiteService, private router: Router) { }

    ngOnInit() {
        this.createIdentite = this.formBuilder.group({
            code_lieu_naissance: [69389, Validators.required],
            code_pays_naissance: ['CDN', Validators.required],
            date_naissance: ['08081965', Validators.required],
            num_assure: [2650869091294, Validators.required],
            nom_naissance: ['AGGOUN', Validators.required],
            liste_prenoms: ['ALIA', Validators.required],
            nom_usage: ['AGGOUN', Validators.required],
            code_sexe: [2, Validators.required],
            libelle_departement: ['RHONE', Validators.required],
            libelle_commune: ['GIVORS', Validators.required],
            libelle_pays: ['string', Validators.required],
            libelle_localite: ['string', Validators.required],
            nom_marital: ['string', Validators.required],
            nom_naissance_pere: ['string', Validators.required],
            liste_prenoms_pere: ['string', Validators.required],
            nom_naissance_mere: ['string', Validators.required],
            liste_prenoms_mere: ['string', Validators.required],
        });
    }

    get f() {
        return this.createIdentite.controls;
    }

    onSubmit(buttonType): void {
        this.submitted = true;

        const formValue = this.createIdentite.value;
        const identiteTrue = this.identiteCree = true;
        const newIdentite = new Identite(
            formValue.code_lieu_naissance,
            formValue.code_pays_naissance,
            formValue.date_naissance,
            formValue.num_assure,
            formValue.nom_naissance,
            formValue.liste_prenoms,
            formValue.nom_usage,
            formValue.code_sexe,
            formValue.libelle_departement,
            formValue.libelle_commune,
            formValue.libelle_pays,
            formValue.libelle_localite,
            formValue.nom_marital,
            formValue.nom_naissance_pere,
            formValue.liste_prenoms_pere,
            formValue.nom_naissance_mere,
            formValue.liste_prenoms_mere
        );

        if (buttonType === 'certification') {
            this.identiteService.certification(newIdentite)
                .subscribe(data => {
                    this.identiteService.identiteConnected = data;
                    console.log(data);
                }, _error => {
                    this.submitted = false;
                }
                );
        }
    }

    public getKong() {
        this.identiteService.getKong();
    }
}