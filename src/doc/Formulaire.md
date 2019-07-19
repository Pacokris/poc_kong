# Réalisation POC Angular / Kong

Avant de commencer, vous pourrez trouver la documentation d’Angular CLI ici : [cli.angular](https://cli.angular.io/)

## Installation

Avant toute chose, vous devez avoir installé [Node et npm](https://nodejs.org/en/)

Ensuite pour installer angular CLI, il suffit de taper la commande suivante dans votre bash :

```
npm install -g @angular/cli
```

## Démarrage de votre projet

Pour démarrer une nouvelle application, il suffit d’exécuter la commande suivante :

```
ng new FormAnguKong
```
(Bien entendu, vous pouvez remplacer FormAnguKong par votre nom de projet)

On va vous demandez si vous voulez que le projet génère le fichier module routing

Répondez oui

```
? Would you like to add Angular routing? (y/N) 
```

Ensuite on va vous proposez différentes options comme le choix du CSS SCSS...

A vous de voir celon vos besoins, dans cet exemple j'ai chois CSS

```
? Which stylesheet format would you like to use? (Use arrow keys)
❯ CSS 
  SCSS   [ http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax ] 
  Sass   [ http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html       ] 
  Less   [ http://lesscss.org                                                 ] 
  Stylus [ http://stylus-lang.com 
```
Voilà ce qui doit s’afficher dans votre console :

```
CREATE FormAnguKong/README.md (1029 bytes)
CREATE FormAnguKong/.editorconfig (246 bytes)
CREATE FormAnguKong/.gitignore (629 bytes)
CREATE FormAnguKong/angular.json (3861 bytes)
CREATE FormAnguKong/package.json (1313 bytes)
CREATE FormAnguKong/tsconfig.json (435 bytes)
CREATE FormAnguKong/tslint.json (1621 bytes)
CREATE FormAnguKong/src/favicon.ico (5430 bytes)
CREATE FormAnguKong/src/index.html (299 bytes)
CREATE FormAnguKong/src/main.ts (372 bytes)
CREATE FormAnguKong/src/polyfills.ts (2841 bytes)
...
...
```

## La structure des dossiers

Après l’installation et la création de votre projet avec angular-cli, nous allons voir la structure des dossiers et fichiers dans l’architecture d’angular-cli.

```
// Tout ce qui va concerner les tests end to end
|- e2e/
  |----- app.e2e-spec.ts
  |----- app.po.ts
  |----- tsconfig.e2e.json

// les dépendances avec npm
|- node_modules/

// l'endroit où les fichiers de build seront mis
|- dist/

// Le dossier où vous allez modifier vos fichiers de code
//Là où va se trouver vos composants, services, etc..
|- src/
  |----- app/
      |----- app.component.css|html|spec.ts|ts
      |----- app.module.ts
  |----- assets/
  |----- environments/
      |----- environment.prod.ts|ts
  |----- favicon.ico
  |----- index.html
  |----- main.ts
  |----- polyfills.ts
  |----- styles.css
  |----- test.ts
  |----- tsconfig.app.json
  |----- tsconfig.spec.json
  |----- typings.d.ts

// la configuration globale de votre application
|- .angular-cli.json  // the main configuration file
|- .editorconfig      // editorconfig which is used in some VS Code setups
|- .gitignore
|- karma.conf.js
|- package.json
|- protractor.conf.js
|- README.md
|- tsconfig.json
|- tslint.json
```

Vous allez quasiment passer tout votre temps dans le dossier **src/app**. Ce dossier contient presque tous les fichiers dont vous avez besoin pour coder votre application. Les fichiers contenus dans ce dossier sont ensuite compilés dans le dossier **dist**.  Vous pouvez aussi installer des dependances avec le gestionnaire de package de node : **npm**. Ces dépendances seront installées dans le dossier **node_modules**.

## Démarrer notre application

il suffit d’executer la commande suivante :

```
ng serve
```
ou pour executer et ouvrir automatique l'application dans votre navigateur
```
ng serve -o
```

Résultat que vous devez avoir dans votre console :

![img ngServe](https://image.noelshack.com/fichiers/2019/23/5/1559913472-ngserve.png "img ngServe")

Et si vous ouvrez votre application dans votre navigateur à http://localhost:4200 vous devriez obtenir cette page :


![img ngServe](https://image.noelshack.com/fichiers/2019/23/5/1559913752-accueilang.png "img ngServe")

(Les 3 liens en bas à gauche sont des petits tutos qui vous permettront de vous familiariser avec Angular)

### Créer un composant avec Angular-CLI

```
ng g c identite-form
```

![img compsantIdentiteForm](https://image.noelshack.com/fichiers/2019/23/5/1559914425-composantidentiteform.png "img compsantIdentiteForm")

La commande a créé un identite-form, les fichiers associés à ce composant :

    identite-form.component.html (pour le template)
    identite-form.component.css (pour le fichier style)
    identite-form.component.ts (pour le code métier du composant)
    identite-form.component.spec.ts (pour le fichier de test propre au composant)

(Remarque : 

Quand vous utilisez la commande ng g c, pensez au nom de votre composant et pas au nom de la classe.
Par exemple, si vous utilisez la commande ng g c identite-formComponent, vous allez créer un composant identite-formComponent**Component**.)

### Générer autre chose

Il est aussi possible de générer :

    Component : ng g component mycomponent
    Directive : ng g directive mydirective
    Pipe : ng g pipe mypipe
    Service : ng g service myservice
    Class : ng g class myclass
    Guard : ng g guard myguard
    Interface : ng g interface myinterface
    Enum : ng g enum myenum
    Module : ng g module mymodule

## Le modèle

Il contiendra les informations de notre identité.

```
ng g class identite-model/identite
```

![img compsantIdentiteForm](https://image.noelshack.com/fichiers/2019/23/5/1559916023-identitemodel.png "img compsantIdentiteForm")

```typescript
export class Identite {
  constructor(
    public code_lieu_naissance: number,
    public code_pays_naissance: string,
    public date_naissance: number,
    public num_assure: number,
    public nom_naissance: string,
    public liste_prenoms: string,
    public nom_usage: string,
    public code_sexe: number,
    public libelle_departement: string,
    public libelle_commune: string,
    public libelle_pays: string,
    public libelle_localite: string,
    public nom_marital: string,
    public nom_naissance_pere: string,
    public liste_prenoms_pere: string,
    public nom_naissance_mere: string,
    public liste_prenoms_mere: string,
  ) {
  }
}
```
![img compsantIdentiteForm](https://image.noelshack.com/fichiers/2019/23/5/1559916211-model.png "img compsantIdentiteForm")

## Le component

Interaction avec l'utilisateur, Le component sera composé d'un contrôleur (.ts) ainsi que d'**un formulaire** (.html) muni d'un **champ de texte** et d'un **bouton soumettre**.

Exemple de formulaire à saisir dans identite-form/identite-form.component.html

(composant que nous avons créé plus haut)

```html
<div class="container">
  <div [hidden]="submitted">
    <h1>Identité</h1>
    <form [formGroup]="createIdentite" (ngSubmit)="onSubmit(createIdentite)">
      <div class="form-group">
        <label for="code_lieu_naissance">code_lieu_naissance</label>
        <input formControlName="code_lieu_naissance" type="text" class="form-control" id="code_lieu_naissance" required
               [(ngModel)]="model.code_lieu_naissance"
               [ngClass]="{ 'is-invalid': submitted && f.code_lieu_naissance.errors }"/>
        <div *ngIf="submitted && f.code_lieu_naissance.errors" class="invalid-feedback">
          <div *ngIf="f.code_lieu_naissance.errors.required">code_lieu_naissance is required</div>
        </div>
      </div>

      <div class="form-group">
        <label for="code_pays_naissance">code_pays_naissance</label>
        <input formControlName="code_pays_naissance" type="text" class="form-control" id="code_pays_naissance" required
               [(ngModel)]="model.code_pays_naissance"
               [ngClass]="{ 'is-invalid': submitted && f.code_pays_naissance.errors }"/>
        <div *ngIf="submitted && f.code_pays_naissance.errors" class="invalid-feedback">
          <div *ngIf="f.code_pays_naissance.errors.required">champs requis</div>
          <div *ngIf="f.code_pays_naissance.errors.pattern">erreur saisie</div>
        </div>
      </div>


      <div class="form-group">
        <label for="date_naissance">date_naissance</label>
        <input formControlName="date_naissance" type="text" class="form-control" id="date_naissance" required
               [(ngModel)]="model.date_naissance" [ngClass]="{ 'is-invalid': submitted && f.date_naissance.errors }"/>
        <div *ngIf="submitted && f.date_naissance.errors" class="invalid-feedback">
          <div *ngIf="f.date_naissance.errors.required">champs requis</div>
          <div *ngIf="f.date_naissance.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="num_assure">num_assure</label>
        <input formControlName="num_assure" type="text" class="form-control" id="num_assure" required
               [(ngModel)]="model.num_assure" [ngClass]="{ 'is-invalid': submitted && f.num_assure.errors }"/>
        <div *ngIf="submitted && f.num_assure.errors" class="invalid-feedback">
          <div *ngIf="f.num_assure.errors.required">champs requis</div>
          <div *ngIf="f.num_assure.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="nom_naissance">nom_naissance</label>
        <input formControlName="nom_naissance" type="text" class="form-control" id="nom_naissance" required
               [(ngModel)]="model.nom_naissance" [ngClass]="{ 'is-invalid': submitted && f.nom_naissance.errors }"/>
        <div *ngIf="submitted && f.nom_naissance.errors" class="invalid-feedback">
          <div *ngIf="f.nom_naissance.errors.required">champs requis</div>
          <div *ngIf="f.nom_naissance.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="liste_prenoms">liste_prenoms</label>
        <input formControlName="liste_prenoms" type="text" class="form-control" id="liste_prenoms" required
               [(ngModel)]="model.liste_prenoms" [ngClass]="{ 'is-invalid': submitted && f.liste_prenoms.errors }"/>
        <div *ngIf="submitted && f.liste_prenoms.errors" class="invalid-feedback">
          <div *ngIf="f.liste_prenoms.errors.required">champs requis</div>
          <div *ngIf="f.liste_prenoms.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="nom_usage">nom_usage</label>
        <input formControlName="nom_usage" type="text" class="form-control" id="nom_usage" required
               [(ngModel)]="model.nom_usage" [ngClass]="{ 'is-invalid': submitted && f.nom_usage.errors }"/>
        <div *ngIf="submitted && f.nom_usage.errors" class="invalid-feedback">
          <div *ngIf="f.nom_usage.errors.required">champs requis</div>
          <div *ngIf="f.nom_usage.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group">
        <label for="code_sexe">code_sexe</label>
        <input formControlName="code_sexe" type="text" class="form-control" id="code_sexe" required
               [(ngModel)]="model.code_sexe" [ngClass]="{ 'is-invalid': submitted && f.code_sexe.errors }"/>
        <div *ngIf="submitted && f.code_sexe.errors" class="invalid-feedback">
          <div *ngIf="f.code_sexe.errors.required">champs requis</div>
          <div *ngIf="f.code_sexe.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="libelle_departement">libelle_departement</label>
        <input formControlName="libelle_departement" type="text" class="form-control" id="libelle_departement" required
               [(ngModel)]="model.libelle_departement"
               [ngClass]="{ 'is-invalid': submitted && f.libelle_departement.errors }"/>
        <div *ngIf="submitted && f.libelle_departement.errors" class="invalid-feedback">
          <div *ngIf="f.libelle_departement.errors.required">champs requis</div>
          <div *ngIf="f.libelle_departement.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="libelle_commune">libelle_commune</label>
        <input formControlName="libelle_commune" type="text" class="form-control" id="libelle_commune" required
               [(ngModel)]="model.libelle_commune" [ngClass]="{ 'is-invalid': submitted && f.libelle_commune.errors }"/>
        <div *ngIf="submitted && f.libelle_commune.errors" class="invalid-feedback">
          <div *ngIf="f.libelle_commune.errors.required">champs requis</div>
          <div *ngIf="f.libelle_commune.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="libelle_pays">libelle_pays</label>
        <input formControlName="libelle_pays" type="text" class="form-control" id="libelle_pays" required
               [(ngModel)]="model.libelle_pays" [ngClass]="{ 'is-invalid': submitted && f.libelle_pays.errors }"/>
        <div *ngIf="submitted && f.libelle_pays.errors" class="invalid-feedback">
          <div *ngIf="f.libelle_pays.errors.required">champs requis</div>
          <div *ngIf="f.libelle_pays.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="libelle_localite">libelle_localite</label>
        <input formControlName="libelle_localite" type="text" class="form-control" id="libelle_localite" required
               [(ngModel)]="model.libelle_localite"
               [ngClass]="{ 'is-invalid': submitted && f.libelle_localite.errors }"/>
        <div *ngIf="submitted && f.libelle_localite.errors" class="invalid-feedback">
          <div *ngIf="f.libelle_localite.errors.required">champs requis</div>
          <div *ngIf="f.libelle_localite.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="nom_marital">nom_marital</label>
        <input formControlName="nom_marital" type="text" class="form-control" id="nom_marital" required
               [(ngModel)]="model.nom_marital" [ngClass]="{ 'is-invalid': submitted && f.nom_marital.errors }"/>
        <div *ngIf="submitted && f.nom_marital.errors" class="invalid-feedback">
          <div *ngIf="f.nom_marital.errors.required">champs requis</div>
          <div *ngIf="f.nom_marital.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="nom_naissance_pere">nom_naissance_pere</label>
        <input formControlName="nom_naissance_pere" type="text" class="form-control" id="nom_naissance_pere" required
               [(ngModel)]="model.nom_naissance_pere"
               [ngClass]="{ 'is-invalid': submitted && f.nom_naissance_pere.errors }"/>
        <div *ngIf="submitted && f.nom_naissance_pere.errors" class="invalid-feedback">
          <div *ngIf="f.nom_naissance_pere.errors.required">champs requis</div>
          <div *ngIf="f.nom_naissance_pere.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="liste_prenoms_pere">liste_prenoms_pere</label>
        <input formControlName="liste_prenoms_pere" type="text" class="form-control" id="liste_prenoms_pere" required
               [(ngModel)]="model.liste_prenoms_pere"
               [ngClass]="{ 'is-invalid': submitted && f.liste_prenoms_pere.errors }"/>
        <div *ngIf="submitted && f.liste_prenoms_pere.errors" class="invalid-feedback">
          <div *ngIf="f.liste_prenoms_pere.errors.required">champs requis</div>
          <div *ngIf="f.liste_prenoms_pere.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="nom_naissance_mere">nom_naissance_mere</label>
        <input formControlName="nom_naissance_mere" type="text" class="form-control" id="nom_naissance_mere" required
               [(ngModel)]="model.nom_naissance_mere"
               [ngClass]="{ 'is-invalid': submitted && f.nom_naissance_mere.errors }"/>
        <div *ngIf="submitted && f.nom_naissance_mere.errors" class="invalid-feedback">
          <div *ngIf="f.nom_naissance_mere.errors.required">champs requis</div>
          <div *ngIf="f.nom_naissance_mere.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="form-group test">
        <label for="liste_prenoms_mere">liste_prenoms_mere</label>
        <input formControlName="liste_prenoms_mere" type="text" class="form-control" id="liste_prenoms_mere" required
               [(ngModel)]="model.liste_prenoms_mere"
               [ngClass]="{ 'is-invalid': submitted && f.liste_prenoms_mere.errors }"/>
        <div *ngIf="submitted && f.liste_prenoms_mere.errors" class="invalid-feedback">
          <div *ngIf="f.liste_prenoms_mere.errors.required">champs requis</div>
          <div *ngIf="f.liste_prenoms_mere.errors.pattern">erreur saisie</div>
        </div>
      </div>

      <div class="button">
        <button *ngIf=(!identiteCree) type="button" (click)="onSubmit('createIdentite1')"
                class="btn btn-danger btn-lg btn-block">Localhost
        </button>
        <button *ngIf=(!identiteCree) type="button" (click)="onSubmit('createIdentite2')"
                class="btn btn-primary btn-lg btn-block">da058
        </button>
        <button *ngIf=(!identiteCree) type="button" (click)="onSubmit('createIdentite3')"
                class="btn btn-warning btn-lg btn-block">Kong
        </button>
      </div>
    </form>
  </div>
</div>
```
### Directives structurelles

Elles permettent de modifier la structure du DOM.

L'une de ces directives les plus utilisées est le **ngIf**

    Si l'expression associée à la directive est "false" alors l'élément et son contenu sont retirés du DOM (ou jamais ajoutés).

_app.component.html_
```html
<button *ngIf="isAvailable">identite</button>
```

_app.component.ts_
```typescript
...
export class AppComponent {
    isAvailable = false;
}
```
La directive structurelle **ngFor** permet de boucler sur un array et d'injecter les éléments dans le DOM.

_app.component.html_
```html
<ul>
    <li *ngFor="let book of bookList">{{ book.name }}</li>
</ul>
```
_app.component.ts_
```typescript
export class AppComponent {
    bookList = [
        {
            name: 'eXtreme Programming Explained'
        },
        {
            name: 'Clean Code'
        }
    ];
}
```

La directive **ngClass** permet d'attribuer à un élément HTML une classe qui peut évoluer dynamiquement. L'attribut ngClass accepte les conditions de 2 manières différentes. Elles doivent, dans tous les cas, retourner true ou false pour que le test soit valide.

La directive **ngStyle** vous permet de définir le style CSS sur un élément HTML de manière conditionnelle. Tout comme nous pourrions utiliser l'attribut de style sur l'élément HTML dans les projets non-Angular, nous pouvons utiliser ng-style dans les styles angular qui sont basés sur des conditions booléennes.

**ngModel** est utilisé pour lier entre eux des éléments HTML qui existent déjà.

**[(ngModel)]="model.body"** Défini un 'two-way data binding' sur l'attribut body du modèle. Cela signifie que si le champ est modifié par l'utilisateur, le modèle sera mis à jour automatiquement et si le code modifie le modèle, le contenu du champ sera mis à jour.

**ngForm**, le module de gestion des formulaires Angular, il faudra l'enregistrer (faire un **import**) à partir du @NgModule (fichier **app.module.ts**).

(ngSubmit): défini la méthode utilisée pour gérer la soumission du formulaire.

### Contrôleur du composent identite-form

```typescript
import {Component, OnInit} from '@angular/core';
import {Identite} from '../identite-model/identite';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IdentiteService} from '../identite-service/identite.service';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Get} from '../identite-model/get';

@Component({
  selector: 'app-identite-form',
  templateUrl: './identite-form.component.html',
  styleUrls: ['./identite-form.component.css']
})
export class IdentiteFormComponent implements OnInit {

  model = new Identite(69389, 'CDN', 15121999, 1920845625856, 'string', 'string', 'string', 0, 'string', 'string', 'string',
    'string', 'string', 'string', 'string', 'string', 'string');

  createIdentite: FormGroup;
  submitted = false;
  identiteCree = false;

  private get: Get[] = [];
  private getObservable: Observable<any[]>;

  constructor(private formBuilder: FormBuilder, private identiteService: IdentiteService, private route: ActivatedRoute,
              private router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.createIdentite = this.formBuilder.group({
      code_lieu_naissance: [69389, Validators.required],
      code_pays_naissance: ['CDN', Validators.required],
      date_naissance: [15121999, Validators.required],
      num_assure: [1920845625856, Validators.required],
      nom_naissance: ['string', Validators.required],
      liste_prenoms: ['string', Validators.required],
      nom_usage: ['string', Validators.required],
      code_sexe: [0, Validators.required],
      libelle_departement: ['string', Validators.required],
      libelle_commune: ['string', Validators.required],
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

    if (this.createIdentite.invalid) {
      this.router.navigate(['/identite-invalide']);
    }


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

    if (buttonType === 'createIdentite1') {
      this.identiteService.createIdentite1(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }

    if (buttonType === 'createIdentite2') {
      this.identiteService.createIdentite2(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }

    if (buttonType === 'createIdentite3') {
      this.identiteService.createIdentite3(newIdentite)
        .subscribe(data => {
            this.identiteService.identiteConnected = data;
            // tslint:disable-next-line:variable-name
          }, _error => {
            this.submitted = false;
            this.router.navigate(['/identite-invalide']);
          }
        );
      // tslint:disable-next-line:no-conditional-assignment
      if (identiteTrue) {
        this.router.navigate(['/identite-valide']);
      }
    }
  }

  getTest() {
    this.httpClient.get(`http://kong-ee-api.swcx0010.sii24.pole-emploi.intra/da058`).subscribe((res: any[]) => {
      console.log(res);
      this.get = res;
    });
  }
}
```

La méthode subscribe() permet d'écouter le flux d'événements d'un Observable. Cette méthode supporte trois paramètres: next, error et complete. Il est donc possible de lui fournir des fonctions de callback.

## Le service

### Interagir avec l'API REST

La prochaine étape consiste à créer un service qui aura pour mandat de soumettre les données du commentaire grâce à une requête POST envoyée à l'API REST.

La logique sera encapsulée dans la méthode createIdentite(). Cette méthode retournera un objet Observable sur un commentaire. Comme nous l'avons vu préalablement, le Component s'est inscrit à cet observable avec la méthode subscribe() afin d'être informé du flux d'information entre le service et l'API REST. En fait, ce qui nous intéresse, c'est de savoir quand les données du serveur seront disponible chez le client.

Créons le service :

```
$ ng g s identite-service
```
Le code suivant présente la classe identiteService. Notez l'injection de dépendance dans le constructeur. La classe HttpClient est nécessaire afin de communiquer avec le serveur qui héberge l'API REST.

```typescript

@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  public identiteConnected;

  private baseUrl= `http://localhost:9091/certification/identities`;
  
  constructor(private httpClient: HttpClient) {}

  public createIdentite(identite: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
    };

    const body = JSON.stringify({identite});

    return this.httpClient.post(`${this.baseUrl}`, body, httpOptions);

  }
```
