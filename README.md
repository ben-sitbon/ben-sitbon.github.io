# Altgain Consulting — Site statique

Ce dossier contient un site statique simple (HTML/CSS/JS) pour Altgain Consulting.

## Modifier le texte
- Les pages sont des fichiers HTML à la racine : `index.html`, `services.html`, `industries.html`, `about.html`, `contact.html`.
- Ouvrez un fichier et modifiez directement les titres, paragraphes, listes, boutons, etc.

## Modifier le style
- Les styles globaux sont dans `assets/css/styles.css`.
- Exemple : pour changer la couleur de marque, ajustez les variables en haut du fichier:

```css
:root {
  --brand: #56d1a7;
  --brand-600: #38b28b;
  --accent: #5b8def;
}
```

- Les composants communs utilisent des classes comme `.site-header`, `.hero`, `.cards`, `.contact-form`.
- La navigation mobile utilise la classe `.nav-list.open` quand le menu est ouvert.

## Modifier le logo et le favicon
- Fichiers dans `assets/img/` : `logo.svg` et `favicon.svg`.
- Remplacez ces fichiers par vos versions (même nom recommandé) pour mettre à jour le branding.

## Navigation et état actif
- Les liens de navigation sont dans l'entête de chaque page.
- Le script `assets/js/main.js` ajoute automatiquement la classe `active` sur le lien correspondant à la page ouverte.

## Formulaire de contact
- Les formulaires pointent vers Formspree (valeur de démonstration): `https://formspree.io/f/your-id`.
- Remplacez `your-id` par votre identifiant Formspree (ou branchez votre backend) dans `index.html` et `contact.html`.

## Déployer
- Vous pouvez héberger ces fichiers sur n'importe quel hébergement statique (Netlify, Vercel, GitHub Pages, OVH, etc.).
- Le site est entièrement statique, aucune dépendance à installer.

## Conseils d'édition
- Faites une copie de sauvegarde avant de modifier.
- Travaillez par petites étapes (modifier une section, vérifier, puis continuer).
- Gardez une cohérence de ton et de style entre les pages.

