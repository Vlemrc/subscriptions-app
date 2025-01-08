# PROJET ABONNEMENTS IIM

## Équipe

- **Anthony** : Lead Back
- **Victor** : Lead Front

## Reach

On peut estimer que 50% des français qui ont des abonnements seraient intéressés (5 millions de personnes) mais que seulement 5% utiliserait notre app au départ. On peut espérer toucher 250000 personnes. Ce qui semble déjà énorme mais ce qui constitue une réelle cible.

## Impact

**4** - Intéressant pour suivre et maitriser leurs dépenses

## Confidence

**Medium** - Le succès dépendra de la qualité de l’UX & des fonctionnalités.

## Effort

**1,3 - 1,6** - Victor : débutant en React il va rencontrer des difficultés mais c’est une excellente source d’apprentissage. Pour Anthony, cela reste une charge de travail conséquente, il va falloir mener le projet à bien du début à la fin.

## Rôle/Contexte

Personne technophile et soucieuse de ses finances, utilisant plusieurs abonnements mensuels pour le streaming, les applications, ou les box. Cela inclut des jeunes professionnels, étudiants ou parents cherchant à mieux gérer leur budget.

## Problème principal

L'utilisateur oublie souvent ses abonnements ou perd de vue les dates de renouvellement, entraînant des frais imprévus et une gestion financière chaotique. Les dépenses deviennent difficilement contrôlables, surtout pour les services non utilisés.

## Ce qu'il/elle veut accomplir

L'utilisateur veut centraliser ses abonnements pour suivre leurs coûts et dates de renouvellement. Il/elle souhaite recevoir des alertes pour éviter les dépenses inutiles et mieux contrôler son budget mensuel.

## MUST (MVP, essentiel)

### Ajout, Modification & Suppression des abonnements

- **En quoi ça consiste** : L'utilisateur peut facilement ajouter, modifier ou supprimer des abonnements. C’est essentiel pour permettre à l'utilisateur de gérer ses abonnements de manière fluide.
- **Critères de succès** : La fonctionnalité est intuitive, les informations sont sauvegardées correctement, et l'interface est simple à utiliser. C’est un must-have pour un MVP.

### Envoi d’une notification à l’utilisateur quand le renouvellement d’un abonnement approche

- **En quoi ça consiste** : Informer l’utilisateur quelques jours avant le renouvellement d’un abonnement, afin qu'il puisse prendre les mesures nécessaires (annuler, renouveler, etc.).
- **Critères de succès** : La notification est envoyée avec précision selon la configuration de l'utilisateur. C’est également crucial pour éviter des frais imprévus, c’est donc indispensable dans le MVP.

## SHOULD (si on a le temps, fonctionnalités supplémentaires)

### Export données en PDF

- **En quoi ça consiste** : Permet à l’utilisateur d’exporter ses abonnements et leurs coûts en PDF pour une consultation hors ligne ou un suivi externe.
- **Critères de succès** : Le PDF est bien formaté, facile à lire, et inclut toutes les informations pertinentes. Cela pourrait être un ajout utile si le temps le permet, mais ce n'est pas vital pour la version de base.

### Classer les abonnements par catégorie

- **En quoi ça consiste** : Permet de trier les abonnements en différentes catégories (streaming, logiciels, bien-être, etc.), ce qui rend la gestion plus claire.
- **Critères de succès** : L’utilisateur peut facilement ajouter une catégorie à chaque abonnement et filtrer ses abonnements par catégorie. C'est un bon ajout qui améliore l'expérience utilisateur, mais peut attendre si le temps est compté.

## COULD (nice to have)

### Proposition d’abonnements

- **En quoi ça consiste** : Suggérer à l'utilisateur des abonnements qu'il pourrait vouloir ajouter en fonction de ses habitudes ou intérêts (streaming, fitness, etc.).
- **Critères de succès** : Les suggestions sont pertinentes et bien ciblées. Cela apporterait une valeur ajoutée à l’application, mais c’est un luxe pour l’instant, en dehors du scope du MVP.

## WON’T (hors scope)

### Intégration avec le compte bancaire

- **En quoi ça consiste** : Lier l'application directement aux comptes bancaires pour importer automatiquement les paiements d'abonnement.
- **Critères de succès** : La synchronisation fonctionne sans erreur, mais cela implique des défis techniques et des préoccupations liées à la sécurité des données, ce qui dépasse largement le cadre d'un MVP basique.

## Choix technologiques

### Back-End

J’utilise Express.Js car je voulais me remettre un peu dessus. Et express est beaucoup plus léger que java pour ce type d'exercice et d'application. C'est également un gain de temps.

### Front-End

J’ai commencé une formation React et je souhaitais continuer ma formation.

## User Stories

### US1

#### Tâche 1 : Implémenter la page de connexion

- **Détails techniques** :
  - Créer un formulaire avec deux champs (email et mot de passe) et un bouton de soumission.
  - Utiliser Redux pour gérer l'état de l'utilisateur connecté.
  - Appeler l'API backend pour vérifier les identifiants via une requête POST.
  - En cas de succès, stocker le token JWT dans Redux et rediriger l'utilisateur vers la page d'accueil.
  - Gérer les erreurs (e.g., identifiants incorrects) avec des messages d'alerte.
- **Dépendances** :
  - Configuration de Redux et de l'API backend pour la vérification des utilisateurs.

### US2

#### Tâche 2 : Afficher les abonnements sur la page d'accueil

- **Détails techniques** :
  - Récupérer la liste des abonnements de l'utilisateur via une requête GET au backend.
  - Afficher les abonnements sous forme de cartes ou de liste. Chaque carte doit inclure les détails principaux (nom, coût, fréquence).
  - Implémenter une barre de recherche pour filtrer les abonnements.
  - Gérer les états de chargement et les erreurs (spinner ou message).
- **Dépendances** :
  - Authentification de l'utilisateur (JWT nécessaire pour accéder à l'API).
  - Endpoint backend pour récupérer les abonnements.

### US3

#### Tâche 3 : Implémenter la page de compte utilisateur

- **Détails techniques** :
  - Créer une interface permettant d'afficher les informations personnelles de l'utilisateur (nom, email, etc.).
  - Ajouter un bouton pour modifier les informations personnelles (e.g., formulaire de mise à jour).
  - Inclure une option pour se déconnecter en réinitialisant l'état Redux et en supprimant le token JWT.
- **Dépendances** :
  - API backend pour récupérer et mettre à jour les données utilisateur.
  - Fonctionnalité de déconnexion fonctionnelle.

### US4

#### Tâche 4 : Ajouter un abonnement via la page dédiée

- **Détails techniques** :
  - Créer un formulaire avec les champs nécessaires : nom, coût, fréquence, date de début, etc.
  - Valider les données saisies (e.g., coût doit être un nombre, fréquence sélectionnée dans une liste déroulante).
  - Soumettre les données à l’API backend via une requête POST.
  - Rediriger l’utilisateur vers la page d'accueil avec la liste mise à jour après ajout.
  - Gérer les erreurs (e.g., problème de validation ou échec de la requête).
- **Dépendances** :
  - API backend pour gérer l’ajout d’un abonnement.
  - Fonctionnalité de rafraîchissement de la liste des abonnements sur la page d'accueil.

### US5

#### Tâche 5 : Supprimer un abonnement depuis la page d'accueil

- **Détails techniques** :
  - Ajouter un bouton "supprimer" sur chaque carte/liste d'abonnement.
  - Confirmer l’action de suppression avec un modal ou une alerte.
  - Appeler l’API backend avec une requête DELETE pour supprimer l’abonnement sélectionné.
  - Mettre à jour l’état Redux pour refléter les changements et rafraîchir la liste affichée.
- **Dépendances** :
  - API backend pour la suppression d’abonnement.
