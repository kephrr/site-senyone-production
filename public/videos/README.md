# Dossier des vidéos de démonstration

## Placement des vidéos

Placez vos fichiers vidéo de démonstration dans ce dossier. Le format recommandé est MP4.

## Configuration

Dans `src/components/HeroSection.tsx`, vous pouvez configurer la vidéo à afficher:

### Option 1: Vidéo locale (prioritaire)
```tsx
videoSrc="/videos/demo.mp4"
```

### Option 2: Vidéo YouTube
```tsx
videoUrl="https://www.youtube.com/embed/VOTRE_ID_VIDEO"
```

## Formats supportés

- **Vidéos locales**: MP4, WebM, OGG
- **Vidéos distantes**: YouTube (embed), Vimeo, autres plateformes

## Personnalisation

Pour changer la vidéo par défaut:
1. Ajoutez votre fichier vidéo dans ce dossier
2. Modifiez le nom du fichier dans `HeroSection.tsx`
3. Ou changez l'URL YouTube pour votre vidéo

## Exemples d URLs

### YouTube
- Format: `https://www.youtube.com/embed/VIDEO_ID`
- Exemple: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Vimeo
- Format: `https://player.vimeo.com/video/VIDEO_ID`
- Exemple: `https://player.vimeo.com/video/123456789`
