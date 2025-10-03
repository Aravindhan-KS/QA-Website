# Content Management Tutorial

This guide will help you add new content to the Quizzers Anonymous website. All content is managed through JSON files in the `src/data/` directory.

## Table of Contents
- [Adding New Events](#adding-new-events)
- [Adding New Articles](#adding-new-articles)
- [Adding Gallery Images](#adding-gallery-images)
- [Adding Quiz Sets](#adding-quiz-sets)
- [Image Management](#image-management)
- [Best Practices](#best-practices)

---

## Adding New Events

Events are managed in `src/data/events.json`. Each event follows this structure:

### Event Structure
```json
{
  "id": 1,
  "title": "Event Name",
  "description": "Brief description of the event",
  "date": "YYYY-MM-DD",
  "time": "HH:MM PM/AM",
  "venue": "Location or platform",
  "poster": "/media/pictures/events/poster-name.png",
  "reportUrl": "https://drive.google.com/file/d/...",
  "eventStatus": "upcoming" | "completed"
},
```

### Steps to Add a New Event

1. **Open** `src/data/events.json`
2. **Add your event** to the array with a unique `id`
3. **Upload poster image** to `public/media/pictures/events/`
4. **Set eventStatus**:
   - `"upcoming"` for future events
   - `"completed"` for past events with reports

### Example Event Entry
```json
{
  "id": 5,
  "title": "Science & Technology Quiz",
  "description": "A comprehensive quiz covering latest developments in science and technology",
  "date": "2025-10-15",
  "time": "6:00 PM",
  "venue": "Red Building Room 75",
  "poster": "/media/pictures/events/sci-tech-quiz.png",
  "reportUrl": "",
  "eventStatus": "upcoming"
}
```

---

## Adding New Articles

Articles are hardcoded in `src/pages/Articles.js`. To add new articles:

### Article Structure
```javascript
{
  id: 1,
  title: "Article Title",
  excerpt: "Brief description or summary of the article",
  author: "Author Name",
  date: "YYYY-MM-DD",
  readTime: "X min read",
  category: "Category Name",
  image: "/api/placeholder/400/250" // or actual image path
}
```

### Steps to Add a New Article

1. **Open** `src/pages/Articles.js`
2. **Find** the `articles` array (around line 4)
3. **Add your article** with a unique `id`
4. **Upload image** to `public/media/pictures/articles/` (if using custom image)

### Example Article Entry
```javascript
{
  id: 8,
  title: "Quiz Preparation Strategies for Beginners",
  excerpt: "Essential tips and techniques for new quiz enthusiasts to improve their performance and knowledge retention.",
  author: "Priya Sharma",
  date: "2025-09-20",
  readTime: "7 min read",
  category: "Tips & Tricks",
  image: "/media/pictures/articles/quiz-prep.jpg"
}
```

---

## Adding Gallery Images

Gallery images are managed in `src/data/galleryImages.json`.

### Gallery Image Structure
```json
{
  "id": 1,
  "src": "/media/pictures/gallery/image-name.png",
  "caption": "Description of the image",
  "category": "events" | "team" | "workshops",
  "year": 2025
}
```

### Steps to Add Gallery Images

1. **Upload images** to `public/media/pictures/gallery/`
2. **Open** `src/data/galleryImages.json`
3. **Add image entries** with unique `id`s
4. **Set appropriate category**:
   - `"events"` for event photos
   - `"team"` for team photos
   - `"workshops"` for workshop/training photos

### Example Gallery Entry
```json
{
  "id": 15,
  "src": "/media/pictures/gallery/annual-quiz-2025.png",
  "caption": "Annual Inter-College Quiz Championship 2025",
  "category": "events",
  "year": 2025
}
```

---

## Adding Quiz Sets

Quiz sets are managed in `src/data/quizSets.json`.

### Quiz Set Structure
```json
{
  "id": 1,
  "title": "Quiz Set Name",
  "description": "Brief description and context",
  "category": "Category Name",
  "questions": 10,
  "image": "/media/pictures/quizsets/quiz-image.jpeg",
  "downloadUrl": "https://www.instagram.com/p/..." | "https://drive.google.com/..."
}
```

### Steps to Add Quiz Sets

1. **Upload quiz image** to `public/media/pictures/quizsets/`
2. **Open** `src/data/quizSets.json`
3. **Add your quiz set** with a unique `id`
4. **Add image path** in the `image` field
5. **Set appropriate category**:
   - `"Entertainment"`
   - `"Sports"`
   - `"Arts & Literature"`
   - `"Science & Technology"`
   - `"History & Geography"`
   - `"Current Affairs"`

### Example Quiz Set Entry
```json
{
  "id": 8,
  "title": "Indian Cinema Through Decades",
  "description": "Bollywood and Regional Cinema Quiz - September 2025",
  "category": "Entertainment",
  "questions": 12,
  "image": "/media/pictures/quizsets/indian-cinema.jpeg",
  "downloadUrl": "https://www.instagram.com/p/DM4ZDZyy1Ex/"
}
```

---

## Image Management

### Directory Structure
```
public/
└── media/
    └── pictures/
        ├── events/      # Event posters
        ├── gallery/     # Gallery images
        ├── articles/    # Article images (optional)
        └── quizsets/    # Quiz set images
```

### Image Guidelines

1. **File Formats**: Use `.png`, `.jpg`, or `.jpeg`
2. **Naming Convention**: Use descriptive, lowercase names with hyphens
   - ✅ `sci-tech-quiz-2025.png`
   - ❌ `IMG_001.jpg`
3. **Image Sizes**:
   - **Event posters**: 400x600px recommended
   - **Quiz set images**: 1080x1080px recommended (square format)
   - **Gallery images**: 800x600px recommended
   - **Article images**: 400x250px recommended
4. **File Size**: Keep under 1MB for optimal loading

### Adding Images

1. **Navigate** to the appropriate folder in `public/media/pictures/`
2. **Copy your image** to the folder
3. **Reference the image** in JSON with path starting from `/media/`
   - Example: `/media/pictures/events/your-image.png`

---

## Best Practices

### General Guidelines

1. **Always increment IDs**: Use the next available number for new entries
2. **Consistent formatting**: Follow the exact JSON structure
3. **Validate JSON**: Use a JSON validator to check syntax
4. **Test locally**: Run `npm start` to verify changes work correctly

### Content Guidelines

1. **Keep descriptions concise** but informative
2. **Use consistent date format**: `YYYY-MM-DD`
3. **Provide accurate information**: Double-check dates, times, and venues
4. **Optimize images**: Compress images to reduce load times

### Deployment Workflow

1. **Make changes** to JSON files
2. **Add/upload images** to appropriate directories
3. **Test locally** with `npm start`
4. **Commit and push** changes to repository
5. **Verify on live site** after deployment

---

## Troubleshooting

### Common Issues

1. **Images not loading**:
   - Check file path spelling
   - Ensure image exists in `public/media/pictures/`
   - Verify file extension matches JSON entry

2. **JSON syntax errors**:
   - Missing commas between entries
   - Incorrect quote marks (`"` not `'`)
   - Missing closing brackets

3. **Content not updating**:
   - Clear browser cache
   - Check if development server restarted
   - Verify JSON file was saved

### Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Validate your JSON using online validators
3. Contact the development team
4. Create an issue in the repository

---

## Quick Reference

### File Locations
- Events: `src/data/events.json`
- Articles: `src/pages/Articles.js`
- Gallery: `src/data/galleryImages.json`
- Quiz Sets: `src/data/quizSets.json`
- Images: `public/media/pictures/`

### Common Commands
```bash
# Start development server
npm start

# Install dependencies
npm install

# Build for production
npm run build
```

Remember to always test your changes locally before deploying to ensure everything works correctly!