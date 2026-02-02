# 📤 Instructions pour Pousser sur GitHub

## ✅ État actuel
- ✅ Git initialisé
- ✅ Tous les fichiers ajoutés
- ✅ Commit initial créé
- ✅ Identité configurée (Thomas - agence.celexia@gmail.com)

---

## 🚀 Option 1 : Via l'interface GitHub (RECOMMANDÉ - Plus simple)

### Étape 1 : Créer le repository sur GitHub.com

1. Allez sur **https://github.com/new**
2. Connectez-vous avec le compte associé à **agence.celexia@gmail.com**
3. Remplissez les informations :
   - **Repository name :** `electricite-martin` (ou le nom de votre choix)
   - **Description :** "Site web professionnel pour Électricité Martin - Électricien en Île-de-France"
   - **Visibilité :**
     - ✅ **Private** (recommandé pour un site client)
     - ⬜ Public (si vous voulez le partager publiquement)
   - ⚠️ **NE COCHEZ PAS** "Initialize this repository with a README"
   - ⚠️ **NE COCHEZ PAS** "Add .gitignore"
   - ⚠️ **NE COCHEZ PAS** "Choose a license"
4. Cliquez sur **"Create repository"**

### Étape 2 : Pousser le code depuis votre ordinateur

Une fois le repo créé, GitHub vous affichera des instructions. **Utilisez la section "push an existing repository from the command line"**.

Copiez et exécutez ces commandes dans votre terminal (dans le dossier du projet) :

```bash
# Remplacez YOUR-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/YOUR-USERNAME/electricite-martin.git

# Pousser le code
git branch -M main
git push -u origin main
```

**Exemple concret :**
```bash
# Si votre username GitHub est "thomascelexia" :
git remote add origin https://github.com/thomascelexia/electricite-martin.git
git branch -M main
git push -u origin main
```

---

## 🔧 Option 2 : Via GitHub CLI (Plus rapide si installé)

### Si vous avez GitHub CLI (commande `gh`)

```bash
# Se connecter à GitHub
gh auth login

# Créer le repo et pousser en une commande
gh repo create electricite-martin --private --source=. --push
```

### Installer GitHub CLI (optionnel)

**Windows :**
```bash
winget install --id GitHub.cli
```

Ou téléchargez depuis : https://cli.github.com/

---

## 📋 Commandes à exécuter (Résumé)

Ouvrez un terminal dans le dossier `c:\Users\AA\.vscode\electicien` et exécutez :

```bash
# 1. Ajouter le remote (remplacez l'URL par la vôtre)
git remote add origin https://github.com/VOTRE-USERNAME/electricite-martin.git

# 2. Vérifier que c'est bien configuré
git remote -v

# 3. Pousser le code
git push -u origin main
```

---

## 🔐 Authentification

Si GitHub vous demande de vous authentifier :

### Méthode 1 : Personal Access Token (Recommandé)
1. Allez sur https://github.com/settings/tokens
2. Cliquez "Generate new token (classic)"
3. Donnez un nom : "Electricite Martin Project"
4. Cochez les permissions : `repo` (accès complet)
5. Générez et **COPIEZ LE TOKEN** (vous ne le reverrez plus)
6. Lors du `git push`, utilisez le token comme mot de passe

### Méthode 2 : SSH (Plus complexe)
Suivez le guide : https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

## ✅ Vérification

Après le push, vérifiez sur GitHub :
1. Allez sur https://github.com/VOTRE-USERNAME/electricite-martin
2. Vous devriez voir tous les fichiers :
   - index.html
   - presentation.html
   - services.html
   - urgences.html
   - devis.html
   - certifications.html
   - styles.css
   - pages-styles.css
   - script.js
   - README-PROJET.md
   - .gitignore

---

## 🎯 Partager avec des Collaborateurs

Pour que d'autres personnes puissent accéder au repo :

1. Sur GitHub, allez dans **Settings** > **Collaborators**
2. Cliquez **Add people**
3. Entrez l'email ou le username GitHub de la personne
4. Choisissez les permissions (Read, Write, ou Admin)

---

## 📝 Commandes Git Utiles pour la Suite

```bash
# Voir l'état des fichiers
git status

# Voir l'historique
git log --oneline

# Ajouter des modifications
git add .

# Créer un nouveau commit
git commit -m "Ajout des photos et personnalisation"

# Pousser les changements
git push

# Récupérer les changements (si quelqu'un d'autre modifie)
git pull
```

---

## ❓ Problèmes Fréquents

### "fatal: remote origin already exists"
```bash
# Supprimer l'ancien remote et en ajouter un nouveau
git remote remove origin
git remote add origin https://github.com/VOTRE-USERNAME/electricite-martin.git
```

### "Authentication failed"
- Vérifiez que vous utilisez le bon compte GitHub
- Utilisez un Personal Access Token au lieu du mot de passe
- Ou configurez SSH

### "Updates were rejected"
```bash
# Forcer le push (ATTENTION : seulement si vous êtes sûr)
git push -f origin main
```

---

## 🌐 Hébergement du Site (Bonus)

Une fois sur GitHub, vous pouvez héberger le site **GRATUITEMENT** avec GitHub Pages :

1. Sur GitHub, allez dans **Settings** > **Pages**
2. Source : Sélectionnez **main** branch
3. Cliquez **Save**
4. Votre site sera accessible à : `https://VOTRE-USERNAME.github.io/electricite-martin/`

---

## 📞 Besoin d'Aide ?

- Documentation GitHub : https://docs.github.com/
- Support Git : https://git-scm.com/doc
- Tutoriel Git : https://learngitbranching.js.org/

---

Bon courage ! 🚀