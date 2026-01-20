# Memory Game

Un jeu de mémoire interactif construit avec React et TypeScript.

## Description

Memory Game est un jeu classique de cartes où le joueur doit retrouver toutes les paires de cartes identiques en les retournant deux par deux. Le but est de trouver toutes les paires en un minimum de coups.

## Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **TypeScript** - Superset typé de JavaScript pour un code plus robuste
- **Vite** - Outil de build rapide pour le développement moderne
- **Material UI (MUI)** - Bibliothèque de composants React
- **i18next** - Framework d'internationalisation pour le support multilingue
- **ESLint** - Linter pour maintenir la qualité du code

## Fonctionnalites

- 3 niveaux de difficulte : 4, 6 ou 8 paires de cartes
- Support multilingue (Francais, Anglais, Vietnamien, Espagnol, Coreen, Hindi)
- Compteur de coups
- Interface responsive et animations fluides
- Ecran de presentation avec les regles du jeu

## Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/memory.git

# Acceder au dossier
cd memory

# Installer les dependances
npm install
```

## Scripts disponibles

```bash
# Lancer le serveur de developpement
npm run dev

# Construire pour la production
npm run build

# Lancer le linter
npm run lint

# Previsualiser le build de production
npm run preview
```

## Structure du projet

```
memory/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── SimpleForm/
│   │   └── Title/
│   ├── locales/          # Fichiers de traduction
│   │   ├── ar.json
│   │   ├── en.json
│   │   ├── es.json
│   │   ├── fr.json
│   │   ├── hi.json
│   │   ├── it.json
│   │   ├── ko.json
│   │   ├── vi.json
│   │   └── zh.json
│   ├── App.tsx
│   ├── App.css
│   ├── i18n.ts           # Configuration i18next
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Comment jouer

1. Selectionnez votre langue preferee
2. Choisissez le nombre de paires (difficulte)
3. Cliquez sur "Jouer" pour commencer
4. Retournez deux cartes pour trouver des paires identiques
5. Trouvez toutes les paires en un minimum de coups

## Auteur

Projet realise dans le cadre de La Plateforme.
