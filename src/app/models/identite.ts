export class Identite {
    constructor(
        // tslint:disable-next-line:variable-name
        public code_lieu_naissance: number,
        // tslint:disable-next-line:variable-name
        public code_pays_naissance: string,
        // tslint:disable-next-line:variable-name
        public date_naissance: string,
        // tslint:disable-next-line:variable-name
        public num_assure: number,
        // tslint:disable-next-line:variable-name
        public nom_naissance: string,
        // tslint:disable-next-line:variable-name
        public liste_prenoms: string,
        // tslint:disable-next-line:variable-name
        public nom_usage: string,
        // tslint:disable-next-line:variable-name
        public code_sexe: number,
        // tslint:disable-next-line:variable-name
        public libelle_departement: string,
        // tslint:disable-next-line:variable-name
        public libelle_commune: string,
        // tslint:disable-next-line:variable-name
        public libelle_pays: string,
        // tslint:disable-next-line:variable-name
        public libelle_localite: string,
        // tslint:disable-next-line:variable-name
        public nom_marital: string,
        // tslint:disable-next-line:variable-name
        public nom_naissance_pere: string,
        // tslint:disable-next-line:variable-name
        public liste_prenoms_pere: string,
        // tslint:disable-next-line:variable-name
        public nom_naissance_mere: string,
        // tslint:disable-next-line:variable-name
        public liste_prenoms_mere: string,
    ) {
    }
}
