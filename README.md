# Site internet avec Angular

## Run and build your website

### Outils

- TypeScript
- Bootstrap
- NPM, version 6.14.14 : Vous aurez besoin d'installer les dépendances nécessaires
- Ce projet a été réalisé et construit avec [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

### Informations utiles

#### node_modules

En installant les dépendances, vous remarquerez que le poids est assez lourd. Imaginez devoir installer ces dépendances à chaque projet !

Il faut savoir que si le projet ne trouve pas l'ensemble des dépendances (node_modules), il va chercher dans le dossier parent, jusqu'à arriver au root et ensuite renvoyer une erreur.

Vous pouvez donc installer les dépendances une fois et les déplacer dans le dossier parent, là où vous construirez l'ensemble de vos projets. Donc économie en espace et vous n'aurez plus à les installer pour chaque projet.

ATTENTION : Il faut penser à ajouter `--skip-install=true;` lors de la création de projet pour ne pas à avoir à installer ces dépendances.

#### Création de serveur

Avant tout, il vous faut installer [Node.js](https://nodejs.org/fr/download/) (vous n'avez pas à savoir l'utiliser) qui va vous aider à installer les fichiers nécessaires, je vous laisse suivre les directives fournies pour installer cet outil.
Il ne vous faut pas installer un serveur web, Node.js vous fera tout cela.

Quand tout cela sera installé, vous pouvez exécuter la commande suivante là où vous souhaitez créer votre projet : `ng new $1 --style=scss --skip-tests=true`;
Notez que si vous souhaitez utiliser les mêmes dépendances `node_modules` pour tous vos projets, cette commande sera probablement exécutée au même endroit que ces fichiers.

Accéder à votre projet simplement avec `cd nom_projet` et si vous souhaitez installer boostrap avec votre projet, exécutez la commande suivante : `npm install bootstrap@3.3.7 --save;`.
Dans le fichier `angular.json`, il faut penser à ajouter `"node_modules/bootstrap/dist/css/bootstrap.css"` dans la liste des feuilles de style dans la rubrique `projects/architect/build/options/styles`.

### Déployez votre serveur

Exécutez `ng serve` pour mettre votre serveur de développement en route. Vous pouvez accéder à votre projet en tapant `http://localhost:4200/` dans votre naviguateur de recherche. Tout se mettra à jour automatiquement à chaque modification donc aucun besoin de redéployer votre serveur à chaque commit.

### Générer de nouveaux éléments

Exécutez `ng generate component component-name` pour générer un nouveau composant. Vous avez aussi la possibilité d'utiliser `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Firebase

Ce projet utilise [firebase](https://firebase.google.com/) qui sert notamment pour l'authentification par email et mot de passe ainsi que pour l'enregistrement de données dans une base (notamment les posts).

Le code ici mets à disposition une connexion à ma base de données donc il n'y a aurait pas de possibilité de détruire manuellement des informations. Je vous conseille donc de vous créer un compte en ligne et de lier votre base `firebase` à votre projet.

La configuration se modifie dans le fichier `src/app/app.component.ts`.

### Build

Exécutez `ng build` pour compiler votre projet. Les fichiers compilés se trouveront dans votre répertoire `dist/`.

### Améliorations possibles et en vue

Beaucoup de fonctionnalités manquent à l'appel :

- Envoyer un mail de confirmation pour l'ouverture d'un compte
- Lier le pseudonyme au compte via la base de données
- Améliorer la modération
- Ajouter des rubriques autre que le blog
- Ajouter une barre de progression pour le mot de passe
- Utiliser les rôles pour la modération
