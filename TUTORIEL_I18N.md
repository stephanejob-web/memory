# 🌍 Tutoriel react-i18next pour Débutants

## Qu'est-ce que react-i18next ?

**react-i18next** est une bibliothèque qui permet de traduire votre application React en plusieurs langues facilement. Au lieu d'écrire le texte directement dans votre code, vous utilisez des **clés** qui pointent vers des traductions.

---

## 📋 Étape 1 : Installation

Dans votre projet React, installez les packages nécessaires :

```bash
npm install i18next react-i18next
```

---

## 📁 Étape 2 : Créer les fichiers de traduction

Créez un dossier `src/locales/` et ajoutez un fichier JSON par langue.

### Exemple : `src/locales/fr.json`
```json
{
  "welcome": "Bienvenue",
  "hello": "Bonjour {{name}}",
  "startButton": "Commencer"
}
```

### Exemple : `src/locales/en.json`
```json
{
  "welcome": "Welcome",
  "hello": "Hello {{name}}",
  "startButton": "Start"
}
```

> **Important** : Les **clés** (comme `welcome`, `hello`) doivent être **identiques** dans tous les fichiers. Seules les **valeurs** changent.

---

## ⚙️ Étape 3 : Configurer i18next

Créez un fichier `src/i18n.ts` (ou `.js`) :

```typescript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './locales/fr.json'
import en from './locales/en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en }
    },
    lng: 'fr',           // Langue par défaut
    fallbackLng: 'fr',   // Langue de secours si traduction manquante
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    }
  })

export default i18n
```

---

## 🔌 Étape 4 : Importer i18n dans votre application

Dans `src/main.tsx` (ou `index.js`), importez la configuration **avant** votre composant App :

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'  // ← Ajoutez cette ligne
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

## 🎨 Étape 5 : Utiliser les traductions dans vos composants

### Méthode simple

```tsx
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button>{t('startButton')}</button>
    </div>
  )
}
```

### Avec des variables

```tsx
const { t } = useTranslation()

<p>{t('hello', { name: 'Marie' })}</p>
// Résultat en français : "Bonjour Marie"
// Résultat en anglais : "Hello Marie"
```

---

## 🔄 Étape 6 : Changer de langue

Pour permettre à l'utilisateur de changer de langue :

```tsx
import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { i18n } = useTranslation()

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('fr')}>🇫🇷 Français</button>
      <button onClick={() => i18n.changeLanguage('en')}>🇬🇧 English</button>
    </div>
  )
}
```

---

## ➕ Ajouter une nouvelle langue

### 1. Créez le fichier de traduction

`src/locales/es.json` :
```json
{
  "welcome": "Bienvenido",
  "hello": "Hola {{name}}",
  "startButton": "Empezar"
}
```

### 2. Ajoutez-la à la configuration

Dans `src/i18n.ts` :

```typescript
import es from './locales/es.json'  // ← Importez

i18n.init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    es: { translation: es }  // ← Ajoutez
  },
  // ...
})
```

### 3. Ajoutez un bouton

```tsx
<button onClick={() => i18n.changeLanguage('es')}>🇪🇸 Español</button>
```

---

## 📝 Bonnes pratiques

### ✅ À FAIRE

- Utilisez des **clés descriptives** : `loginButton` au lieu de `btn1`
- Gardez les **mêmes clés** dans tous les fichiers de langue
- Utilisez des **variables** pour les valeurs dynamiques : `"score": "Score: {{points}}"`

### ❌ À ÉVITER

- Ne mélangez pas texte en dur et traductions
- N'oubliez pas d'ajouter une traduction dans **tous** les fichiers de langue
- Ne traduisez pas les clés, seulement les valeurs

---

## 🎯 Exemple complet

### Structure des fichiers
```
src/
├── locales/
│   ├── fr.json
│   ├── en.json
│   └── es.json
├── i18n.ts
├── main.tsx
└── App.tsx
```

### App.tsx complet
```tsx
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div>
      {/* Sélecteur de langue */}
      <div>
        <button onClick={() => i18n.changeLanguage('fr')}>🇫🇷</button>
        <button onClick={() => i18n.changeLanguage('en')}>🇬🇧</button>
        <button onClick={() => i18n.changeLanguage('es')}>🇪🇸</button>
      </div>

      {/* Contenu traduit */}
      <h1>{t('welcome')}</h1>
      <p>{t('hello', { name: 'Utilisateur' })}</p>
      <button>{t('startButton')}</button>
    </div>
  )
}

export default App
```

---

## 🐛 Dépannage

### Le texte ne change pas quand je clique sur le drapeau
- Vérifiez que vous avez bien importé `./i18n` dans `main.tsx`
- Vérifiez que les clés sont identiques dans tous les fichiers JSON

### J'ai une erreur "translation not found"
- Vérifiez que la clé existe dans le fichier JSON de la langue active
- Vérifiez l'orthographe de la clé

### Les variables {{name}} ne fonctionnent pas
- Assurez-vous de passer l'objet en second paramètre : `t('hello', { name: 'Marie' })`

---

## 🎓 Résumé

1. **Installez** : `npm install i18next react-i18next`
2. **Créez** des fichiers JSON par langue dans `src/locales/`
3. **Configurez** i18n dans `src/i18n.ts`
4. **Importez** la config dans `src/main.tsx`
5. **Utilisez** `const { t } = useTranslation()` dans vos composants
6. **Traduisez** avec `{t('clé')}`
7. **Changez** de langue avec `i18n.changeLanguage('code')`

---

## 📚 Ressources

- [Documentation officielle react-i18next](https://react.i18next.com/)
- [Liste des codes de langue ISO](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

---

**Bon courage avec vos traductions ! 🚀**
