![img Logo Angular](https://image.noelshack.com/fichiers/2019/23/5/1559895622-angular.png "img Logo Angular")

Angular est un framework Javascript côté client qui permet de réaliser des applications de type "Single Page Application". Il est basé sur le concept de l'architecture MVC (Model View Controller) qui permet de séparer les données, les vues et les différentes actions que l'on peut effectuer.

Le code source d'Angular est écrit en TypeScript. Le TypeScript est une couche supérieur au Javascript développé par Microsoft qui se compile en JavaScript simple. Etant un language typé, il permet de créer des classes, des variables... L'utilisation du TypeScript est facultative, on peut tout à fait utiliser du JavaScript.

# Architecture

Angular est aujourd'hui basé sur une architecture de composants complètement indépendants les uns des autres. Une fois le composant principal chargé, il analyse ensuite la vue html correspondant à celui-ci et détecte si il comporte des composants imbriqués. Si c'est le cas, Angular va trouver toutes les correspondances et exécuter le code lié a celles-ci. On peut imbriquer autant de composants que l'on souhaite.

Un composant dans Angular sert à générer une partie de code html et fournir des fonctionnalités à celle-ci. C'est pour cela qu'un composant est constitué d'une classe dans laquelle on pourra définir la logique d'application pour ce composant avec des propriétés, des méthodes...etc

![img architecture Angular](https://image.noelshack.com/fichiers/2019/23/5/1559896030-archiangular.png "img architecture Angular")

## Module racine

![img moduleRacine](https://image.noelshack.com/fichiers/2019/23/5/1559896603-moduleracine.png "img moduleRacine")

Chaque application nécessite un module root (ou racine) qui agit comme point de départ dans une application. Celui-ci sera contenu dans un fichier nommé **app.module.ts** et va permettre d'indiquer à Angular comment assembler l'application. Pour informer Angular que cette classe sera destinée à être un module, on utilisera le décorateur **NgModule**

Ce module racine va contenir différentes propriétés :

    1.Import: on va déclarer ici les autres modules Angular dont ce module aura besoin.

    2.Declaration: pour rendre les composants, les directives accessibles à notre module qui ne proviennent pas d'un autre module.

    3.Bootstrap: permet à Angular de connaitre le composant qui sera le composant de départ de l'application.

Ce composant va s'appeler **AppComponent** et proviendra d'un fichier nommé **app.composant.ts** et sera situé juste à côté du fichier **app.module.ts**

## AppComponent

![img appComponent](https://image.noelshack.com/fichiers/2019/23/5/1559897298-appcomponent.png "img appComponent")

**AppComponent** est notre component principal : tous les autres components de notre application seront emboîtés dans celui-ci.

    1.Selector: cette propriété est utilisée par Angular pour localiser notre balise HTML et ainsi appliquer le composant, ce nom doit être unique

    2.TemplateUrl: le chemin vers le code HTML à injecter

    3.StyleUrls: un array contenant un ou plusieurs chemins vers les feuilles de styles qui concernent ce component

## Composants

### Ajouter un composant

Dans une application Angular, il est possible et même recommandé d'imbriquer un ou plusieurs composants. Pour cela, on va simplement mettre a disposition notre nouveau composant de la même manière que notre AppComponent.

Il est possible ainsi d'imbriquer un nombre illimité de composants dans notre application.

![img imbriquerComponentEx](https://image.noelshack.com/fichiers/2019/23/5/1559900200-appelcomponent.png "img imbriquerComponentEx")

**Exemple de structure** :

![img appComponentEx](https://image.noelshack.com/fichiers/2019/23/5/1559897686-appcomponentimg.png "img appComponentEx")

Pour cette structure, on peut imaginer un composant pour la barre de menu, un autre pour la partie contenue et un dernier pour le menu de droite.

### Afficher des données dans la vue

Une des méthodes les plus courantes pour afficher du contenue dans notre template HTML est l'interpolation. Pour ceci on utilisera la syntaxe des doubles accolades qui rendra un contenu de type string. On pourra ainsi déclarer une variable dans le composant correspondant et afficher sa valeur directement dans la vue.

_Dans le composant_ :

![img interpolationCode](https://image.noelshack.com/fichiers/2019/23/5/1559900889-interpolationcode.png "img interpolationCode")

_La vue_ :

![img interpolationImg](https://image.noelshack.com/fichiers/2019/23/5/1559900917-interpolationimg.png "img interpolationImg")

### Data Binding

Une autre façon de combiner les données dans les modèles avec Angular est le "data binding".

Les éléments HTML possèdent des propriétés du DOM qui suivent l'état des éléments. On peut utiliser la syntaxe de data binding d'Angular pour lier nos propriétés. On pourra faire cela avec une syntaxe spécifique, une paire de crochets autour d'un nom de variable sur un élément, et on definira notre variable suivant les mêmes règles que pour l'interpolation.

_Dans le composant_ :

![img dataBindingCode](https://image.noelshack.com/fichiers/2019/23/5/1559902524-databindingcode.png "img dataBindingCode")

_La vue_ :

![img dataBindingImg](https://image.noelshack.com/fichiers/2019/23/5/1559902528-databindingimg.png "img dataBindingImg")

### Evènements

Pour lier des évènements depuis la template vers le composant, on utilisera la syntaxe d'Angular prévue à cet effet. Par exemple, pour lier un "click" vers notre composant, on va insérer (click)="nomMethode()" dans la balise souhaitée et on déclarera également cette méthode dans notre composant qui contiendra la logique de l'action.

![img dataBindingImg](https://image.noelshack.com/fichiers/2019/23/5/1559906986-venementscode.png "img dataBindingImg")

# Injection de dépendances

![img injectionDependance](https://image.noelshack.com/fichiers/2019/23/5/1559907180-injectiondependance.jpg "img injectionDependance")

Angular a également été concu pour permettre l'injection de dépendances. C'est ce principe qui nous donne la possibilité de créer des composants, des directives, d'une manière modulaire où ils ne sont pas forcés de se connaître mutuellement pour coéxister. Angular va gèrer la création d'instances et les injecter dans les endroits où elles sont nécessaires.

## Les services

Un service est une classe qui contiendra une logique que l'on va pouvoir utiliser un peu partout dans notre application. L'injection de dépendances va nous permettre ainsi d'injecter nos services seulement aux endroits souhaités et eviter de répéter du code logique dans chaque composants.

### Utilisation d'un service

Pour utiliser un service depuis un composant, il faut tout d'abord l'importer dans le fichier app.module.ts et le déclarer dans la section 'providers'. Il faut également importer le service dans le composant dans lequel on souhaite l'utiliser. Nous devons ensuite créer un constructeur afin de pouvoir effectuer une injection de constructeur Angular. Pour ceci on va déclarer le service comme paramètre privé du constructeur en specifiant son type. Et on pourra ainsi utiliser toute la logique du service depuis ce composant.

![img serviceEx](https://image.noelshack.com/fichiers/2019/23/5/1559907589-serviceex.png "img serviceEx")

### Le décorateur @Injectable()

Est un décorateur un peu particulier. Il ne permet pas l’injection à proprement parlé, mais plutôt d’initialiser un contexte détectabilité. Si vous injectez dans un de vos services ( sans ce décorateur) un autre service, le moteur d'injection retournera une erreur. Angular conseille de toujours mettre cette annotation sur un service même si vous n'utilisez pas les injections dans les premiers développements de votre service afin d'éviter de se poser la question plus tard.

# Routes

Angular possède un module appelé Router pour gérer le routage côté client.

![img routesEx](https://image.noelshack.com/fichiers/2019/23/5/1559908316-routesex.png "img routesEx")

_'**' est une "wildcard" qui "match" toutes les urls (sauf celles qui ont "match" les routes précédentes).
Il faut donc faire attention à l'ordre des "routes"._

## Configuration d'une 'Route' avec Paramtères

Le path d'une "route" peut définir des paramètres obligatoires grâce au préfixe :

```javascript
const routes: Routes = [
    ...,
    {
        path: 'identite-form/:identiteId',
        component: IdentiteFormComponent
    },
    ...
];
```

## router-outlet

La configuration du "Routing" permet de définir quel composant afficher en fonction de la route mais cela n'indique pas à Angular **où injecter le composant** dans la page.

Pour **indiquer l'emplacement d'insertion du composant**, il faut utiliser la directive <router-outlet> directement dans le "root component" AppComponent.

_app.component.html_
```javascript
<header>
...
</header>
<router-outlet></router-outlet>
<footer>
...
</footer>
```
En fonction de la "route" visitée, le **composant associé sera alors injecté en dessous du tag router-outlet** (et non à l'intérieur ou à la place du tag contrairement à ce que l'on pourrait supposer).

## RouterLink

En utilisant des liens natifs 
```javascript
<a href="/search"> 
```
le "browser" va produire une requête HTTP GET vers le serveur et **recharger toute l'application**.
Pour éviter ce problème, le module de "Routing" Angular fournit la directive routerLink qui permet d'intercepter l'événement click sur les liens et de changer de "route" sans recharger toute l'application
```javascript
<a routerLink="/search">Search</a> 
```

### Construction Dynamique

La "route" peut être construite dynamiquement et passée à l'Input routerLink.
```javascript
this.route = '/search';
this.routeName = 'Search';

<a [routerLink]="route">{{ routeName }}</a>
```

### Construction avec Paramètres

La "route" /identite/1 peut être construite avec des paramètres :
```javascript
<a [routerLink]="['/identites', identite.id]">{{ routeName }}</a>
```

où identite.id = '1'

Il est également possible de passer des paramètres optionnels par "query string" via l'Input queryParams.

```javascript
<a
    routerLink="'/search"
    [queryParams]="{keywords: 'eXtreme Programming'}">eXtreme Programming Identites
</a>
```

# Conclusion

On peut dire que ce framework est un outil très performant pour la création d'applications web. L'utilisation de TypeScript permet d'avoir un code plus structuré et permet d'utiliser des décorateurs. Les composants facilitent le développement d'applications à grande échelle tout en conservant la maintenabilité. Ils permettent également d'organiser le code et de le décomposer en un niveau très granulaire. On peut séparer les services / la logique métier des composants et des vues. L'injection de dépendances nous permet d'utiliser des patterns courants dans la plupart des frameworks backend.



