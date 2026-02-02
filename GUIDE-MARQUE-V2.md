# ⚡ ÉLECTRICITÉ MARTIN - Guide de Marque Premium V2

## 🎨 IDENTITÉ VISUELLE REFONDÉE

### Positionnement
**"L'Excellence Électrique au Service de Votre Sécurité"**

Électricité Martin incarne la fusion parfaite entre :
- **Expertise technique** (25 ans d'expérience)
- **Innovation technologique** (domotique, smart home)
- **Fiabilité absolue** (certifications, garanties)
- **Service d'exception** (disponibilité 24/7, < 1h)

---

## 🎭 TYPOGRAPHIE PREMIUM

### Hiérarchie des Polices

#### 1. **Outfit** - Police Display/Titres
```css
font-family: 'Outfit', sans-serif;
```
- **Utilisation :** Tous les titres, sous-titres, boutons, badges
- **Poids disponibles :** 400, 500, 600, 700, 800, 900
- **Caractère :** Moderne, géométrique, tech, confiance
- **Pourquoi :** Évoque la précision technique et le professionnalisme

**Exemples d'utilisation :**
- H1 : font-weight: 900
- H2 : font-weight: 800
- H3 : font-weight: 700
- Boutons : font-weight: 700, uppercase, letter-spacing: 0.05em

#### 2. **IBM Plex Sans** - Police Corps de Texte
```css
font-family: 'IBM Plex Sans', sans-serif;
```
- **Utilisation :** Paragraphes, descriptions, textes longs
- **Poids disponibles :** 400, 500, 600, 700
- **Caractère :** Lisible, professionnel, humain, IBM-quality
- **Pourquoi :** Excellente lisibilité avec personnalité distinctive

**Exemples d'utilisation :**
- Texte normal : font-weight: 400
- Texte important : font-weight: 500 ou 600
- Légendes : font-weight: 500

---

## 🎨 PALETTE DE COULEURS PREMIUM

### Couleurs Principales

#### Bleu Nuit Profond
```css
--primary-dark: #0B1437
```
- **Usage :** Titres principaux, texte dark mode
- **Symbolique :** Sérieux, confiance, nuit (disponibilité 24/7)

#### Bleu Électrique Sombre
```css
--primary: #1A2B5F
```
- **Usage :** Backgrounds sombres, headers, footer
- **Symbolique :** Expertise, profondeur, stabilité

#### Cyan Électrique (Signature)
```css
--electric-cyan: #00D9FF
```
- **Usage :** Accents, highlights, liens, effets glow
- **Symbolique :** Électricité, innovation, énergie
- **EFFET SIGNATURE :** Utilisé pour les effets néon/glow

#### Bleu Vif
```css
--electric-blue: #0EA5E9
```
- **Usage :** Boutons primaires, CTAs, éléments interactifs
- **Symbolique :** Action, confiance, modernité

### Couleurs Secondaires

#### Orange Sécurité
```css
--safety-orange: #FF6B35
```
- **Usage :** Boutons urgence, alertes, éléments importants
- **Symbolique :** Urgence, sécurité, attention

#### Or Premium
```css
--premium-gold: #FFB627
```
- **Usage :** Badges, certifications, éléments premium
- **Symbolique :** Excellence, qualité, certifications

### Couleurs Neutres

```css
--white: #FFFFFF
--off-white: #F8FAFC
--light-gray: #E2E8F0
--gray: #64748B
--dark-gray: #334155
--black: #0F172A
```

### Gradients Signature

```css
/* Gradient Principal - Électrique */
--gradient-electric: linear-gradient(135deg, #00D9FF 0%, #0EA5E9 100%);

/* Gradient Sécurité - Urgence */
--gradient-safety: linear-gradient(135deg, #FF6B35 0%, #FFB627 100%);

/* Gradient Dark - Backgrounds Premium */
--gradient-dark: linear-gradient(180deg, #0B1437 0%, #1A2B5F 100%);
```

---

## 🎭 EFFETS VISUELS SIGNATURE

### 1. Glow Effects (Néon)
```css
/* Glow Cyan - Électrique */
box-shadow: 0 0 20px rgba(0, 217, 255, 0.4);

/* Glow Orange - Urgence */
box-shadow: 0 0 20px rgba(255, 107, 53, 0.4);
```

### 2. Animations
- **Pulse** : Bouton urgence
- **Float** : Cartes flottantes
- **Circuit Move** : Background animé
- **Hover Glow** : Augmentation de l'intensité lumineuse au survol

### 3. Border Radius
```css
--radius-sm: 0.5rem    /* 8px */
--radius-md: 0.75rem   /* 12px */
--radius-lg: 1rem      /* 16px */
--radius-xl: 1.5rem    /* 24px */
--radius-full: 9999px  /* Pills/Boutons ronds */
```

---

## 📸 PHOTOS NÉCESSAIRES - LISTE COMPLÈTE

### 🔴 PRIORITÉ CRITIQUE (Sans ces photos, le site est incomplet)

#### 1. **PHOTO HERO - Électricien Professionnel**
📍 **Emplacement :** index-v2.html (Hero section)
📐 **Format :** Portrait vertical (4:5) - 800x1000px minimum
🎯 **Contenu requis :**
- Électricien en tenue professionnelle (polo/veste avec logo)
- Travaillant sur un tableau électrique moderne
- Équipement de sécurité visible (si pertinent)
- Expression confiante et professionnelle
- Éclairage professionnel (lumière naturelle ou studio)
- Fond : Environnement de travail propre et organisé

**📌 Suggestion Unsplash actuelle utilisée :**
```
https://images.unsplash.com/photo-1621905252507-b35492cc74b4
```
✅ Fonctionne bien mais **remplacer par VOTRE vraie photo** pour authenticité

**💡 Alternative si vous cherchez :**
- Photographe professionnel pour 1 journée (300-500€)
- Session photo sur un de vos chantiers
- Photo de Jean-Pierre Martin au travail

---

#### 2. **LOGO PROFESSIONNEL**
📍 **Emplacement :** Toutes les pages (navbar, footer)
📐 **Formats nécessaires :**
```
logo.svg         → 300x300px vectoriel
logo.png         → 512x512px fond transparent
logo-white.png   → 512x512px version blanche
favicon.ico      → 32x32px et 16x16px
logo-horizontal.svg → 300x100px pour navbar
```

**🎨 Concepts de Logo :**

**Option A : Éclair dans Badge Hexagonal**
```
[Hexagone bleu électrique]
  └─ Éclair cyan stylisé au centre
  └─ "EM" intégré subtilement
```
- Style : Moderne, tech, géométrique
- Couleurs : Gradient electric (#00D9FF → #0EA5E9)

**Option B : Initiales EM + Circuit**
```
[E] [M] entrelacées
  └─ Circuit électrique stylisé en fond
  └─ Point de connexion = éclair
```
- Style : Minimaliste, premium
- Couleurs : Bleu nuit + cyan

**Option C : Bouclier de Confiance**
```
[Bouclier/Shield]
  └─ Éclair central
  └─ "MARTIN" en arc
  └─ "DEPUIS 1999" en bas
```
- Style : Badge vintage moderne
- Couleurs : Bleu nuit + or premium

**💰 Où faire créer votre logo :**
- **Fiverr** (50-200€) : Rapide, choix varié
- **99designs** (300-800€) : Concours de designers
- **Designer local** (500-1500€) : Sur-mesure, rencontres

---

### 🟡 PRIORITÉ HAUTE (Améliore fortement le site)

#### 3. **GALERIE DE RÉALISATIONS** (6-12 photos)
📍 **Emplacement :** Page d'accueil (à ajouter), page Services
📐 **Format :** Paysage (16:9) ou Carré (1:1) - 1200x675px ou 1000x1000px

**Photos nécessaires :**

**a) Tableau Électrique Moderne**
- Tableau bien organisé, câbles colorés
- Étiquetage professionnel visible
- Disjoncteurs modernes
- Éclairage LED du tableau si possible
📸 **Suggestion temporaire Unsplash :**
```
https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc
```

**b) Installation Éclairage LED Design**
- Intérieur moderne avec spots encastrés
- Éclairage indirect/ruban LED
- Ambiance chaleureuse
- Photo de jour + photo de nuit
📸 **Suggestion Unsplash :**
```
https://images.unsplash.com/photo-1513694203232-719a280e022f
```

**c) Chantier Propre et Professionnel**
- Outils organisés
- Environnement de travail soigné
- Chantier en cours ou terminé
- Montre le professionnalisme

**d) Installation Domotique**
- Smartphone avec app domotique
- Contrôle d'éclairage ou volets
- Interface moderne visible
📸 **Suggestion Unsplash :**
```
https://images.unsplash.com/photo-1558002038-1055907df827
```

**e) Avant/Après Rénovation**
- Tableau ancien vs nouveau
- Installation vétuste vs moderne
- Impact visuel fort

**f) Installation Professionnelle/Tertiaire**
- Bureau moderne ou commerce
- Éclairage professionnel
- Installation complexe

---

#### 4. **ÉQUIPE - Photos Individuelles** (6 personnes)
📍 **Emplacement :** presentation.html (section équipe)
📐 **Format :** Carré (1:1) - 400x400px minimum
🎯 **Spécifications strictes :**

**Style Uniforme (TRÈS IMPORTANT) :**
- Fond uni (blanc, gris clair, ou bleu clair)
- Même éclairage pour tous
- Même cadrage (buste, épaules visibles)
- Tenue professionnelle identique (polo avec logo)
- Expression souriante et accessible
- Regard caméra

**Personnes à photographier :**
1. Jean-Pierre Martin (Fondateur)
2. Alexandre Dubois (Chef d'Équipe)
3. Thomas Leroy (Électricien Senior)
4. Sophie Chen (Électricienne)
5. Karim Benali (Électricien)
6. Marie Martin (Responsable Administrative)

**💡 Solution économique :**
- Session photo d'équipe en studio (200-300€ pour 6 personnes)
- Ou fond blanc DIY + appareil photo de qualité
- Lumière naturelle devant fenêtre

---

#### 5. **CERTIFICATIONS - Scans/Photos de Certificats**
📍 **Emplacement :** certifications.html, footer
📐 **Format :** Variable, mais clair et lisible

**Documents à photographier/scanner :**
- Certificat Qualifelec
- Certification RGE
- Attestation NF
- Assurance Décennale (attestation)
- Assurance RC Pro
- Diplômes/formations

**📸 Comment les photographier :**
- Scanner haute résolution (300 DPI)
- Ou photo bien éclairée, de face, nette
- Fond neutre
- Document entier visible

---

### 🟢 PRIORITÉ MOYENNE (Bonus, améliore l'expérience)

#### 6. **INTERVENTIONS/CHANTIERS**
📐 **Format :** Variable
**Suggestions :**
- Électricien au travail (vue de dos ou côté)
- Outils professionnels
- Camionnette de l'entreprise (avec logo)
- Travail de nuit avec lampe frontale (urgences)
- Installation extérieure
- Satisfaction client (si accord client)

#### 7. **ZONE D'INTERVENTION - Carte**
📍 **Emplacement :** presentation.html
**Option A :** Intégrer Google Maps avec marqueurs
**Option B :** Carte illustrée d'Île-de-France stylisée
**Option C :** Screenshot Google Maps customisé

#### 8. **BACKGROUNDS/TEXTURES**
Pour donner de la profondeur :
- Texture de circuit électrique
- Motifs géométriques
- Grilles/quadrillages techniques
- Photos en arrière-plan floutées

---

## 📥 OÙ TROUVER DES PHOTOS (Temporaires ou Inspiration)

### Photos Stock Gratuites de Qualité

#### 1. **Unsplash** (Meilleure qualité)
```
https://unsplash.com/s/photos/electrician
https://unsplash.com/s/photos/electrical-work
https://unsplash.com/s/photos/circuit-breaker
https://unsplash.com/s/photos/smart-home
```
- ✅ Haute qualité
- ✅ Gratuit pour usage commercial
- ✅ Pas d'attribution requise

#### 2. **Pexels**
```
https://www.pexels.com/search/electrician/
https://www.pexels.com/search/electrical-installation/
```
- ✅ Gratuit
- ✅ Bonne qualité

#### 3. **Pixabay**
```
https://pixabay.com/images/search/electrician/
```
- ✅ Gratuit
- ⚠️ Qualité variable

### Photos Payantes Premium

#### 1. **Adobe Stock**
- Prix : ~10-30€ par photo
- Qualité exceptionnelle
- Recherche avancée

#### 2. **Shutterstock**
- Abonnement : 29€/mois pour 10 photos
- Immense bibliothèque

---

## 🎯 PLAN D'ACTION PHOTOS

### Semaine 1 : ESSENTIELS
- [ ] Commander logo auprès d'un designer (Concept A recommandé)
- [ ] Session photo équipe (6 personnes, même jour, même lieu)
- [ ] Photo hero principale (Jean-Pierre au travail)

### Semaine 2 : CHANTIERS
- [ ] Photographier 6-12 réalisations récentes
- [ ] Avant/après d'une rénovation
- [ ] Photos camionnette avec logo

### Semaine 3 : DOCUMENTS
- [ ] Scanner tous les certificats
- [ ] Prendre photos outils/matériel
- [ ] Photos bureau/locaux si pertinent

### Budget Estimé
```
Logo professionnel      : 200-500€
Session photo équipe    : 200-300€
Photos chantiers        : 0€ (vous-même)
Photos stock (si besoin): 50-200€
TOTAL                   : 450-1000€
```

---

## 📱 SPÉCIFICATIONS TECHNIQUES

### Tailles d'Images Recommandées

```css
/* Hero Images */
Hero principale      : 800x1000px (portrait)
Hero alternative     : 1920x1080px (paysage)

/* Galerie */
Photos réalisations  : 1200x800px ou 1000x1000px
Miniatures          : 400x300px

/* Équipe */
Portraits équipe     : 400x400px

/* Logo */
SVG vectoriel       : Scalable
PNG haute-rés       : 512x512px
Favicon             : 32x32px et 16x16px

/* Certifications */
Scans certificats   : 300 DPI, format A4
```

### Optimisation

**Avant intégration, optimisez toutes les images :**
- **Format :** WebP (moderne) ou JPEG (compatible)
- **Compression :** 80-85% qualité
- **Poids cible :**
  - Hero : < 200 Ko
  - Galerie : < 150 Ko
  - Portraits : < 80 Ko
  - Logo : < 50 Ko

**Outils recommandés :**
- **TinyPNG** : https://tinypng.com/ (gratuit)
- **Squoosh** : https://squoosh.app/ (Google, gratuit)
- **ImageOptim** : https://imageoptim.com/ (Mac, gratuit)

---

## ✅ CHECKLIST INTÉGRATION

### Avant de mettre en ligne

- [ ] Logo créé et intégré (tous formats)
- [ ] Photo hero remplacée par vraie photo
- [ ] 6 photos équipe ajoutées
- [ ] 6-12 photos réalisations ajoutées
- [ ] Certificats scannés et ajoutés
- [ ] Toutes images optimisées (< poids cible)
- [ ] Test sur mobile (images responsive)
- [ ] Alt text ajouté à toutes images (SEO)

### Test de Performance

Utilisez **Google PageSpeed Insights** :
```
https://pagespeed.web.dev/
```

Objectif :
- Score mobile : > 85
- Score desktop : > 90
- LCP (Largest Contentful Paint) : < 2.5s

---

## 🎨 EXEMPLES D'UTILISATION

### Exemple de Balise Image Optimisée

```html
<img
  src="images/hero-electricien-martin.webp"
  alt="Jean-Pierre Martin, électricien professionnel, travaillant sur tableau électrique moderne"
  width="800"
  height="1000"
  loading="eager"
  fetchpriority="high"
>
```

### Exemple de Galerie Responsive

```html
<picture>
  <source srcset="images/realisation-1.webp" type="image/webp">
  <source srcset="images/realisation-1.jpg" type="image/jpeg">
  <img
    src="images/realisation-1.jpg"
    alt="Installation tableau électrique moderne - Électricité Martin"
    loading="lazy"
  >
</picture>
```

---

## 🚀 PROCHAINES ÉTAPES

1. **Créer/Commander le logo** (priorité #1)
2. **Organiser session photo équipe** (priorité #2)
3. **Photographier vos meilleures réalisations** (priorité #3)
4. **Optimiser et intégrer les images**
5. **Tester le site complet**
6. **Mettre en ligne !**

---

**💪 Vous avez maintenant tout ce qu'il faut pour un site PREMIUM !**

*Guide créé avec le skill frontend-design - Électricité Martin V2*