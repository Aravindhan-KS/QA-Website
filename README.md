# QA-Website - Quizzers Anonymous

The official website for Quizzers Anonymous, College of Engineering Guindy's premier quiz club. A modern React-based platform showcasing our events, team, articles, quiz sets, and gallery.

## � Content Management Tutorial

For detailed instructions on how to add new content (events, articles, gallery images, quiz sets), please refer to our [Content Management Tutorial](CONTENT_MANAGEMENT.md).

## 🚀 Features

- **Event Management**: Display upcoming and completed quiz events with details
- **Team Showcase**: Meet our current team members and alumni network
- **Articles Section**: Knowledge sharing through informative articles
- **Quiz Sets**: Access our curated quiz question sets
- **Interactive Gallery**: Browse photos from our events and activities
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth animations
- **Contact Integration**: Multiple ways to get in touch with the club

## 🛠️ Technologies Used

- **React 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing for single-page application
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Social Media Embed** - Instagram post embedding
- **Vercel Speed Insights** - Performance monitoring
- **React Testing Library** - Component testing framework

## 📦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aravindhan-KS/QA-Website.git
   cd QA-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Website Structure

### Main Pages

- **Home**: Welcome page with club introduction and highlights
- **Events**: Showcase of upcoming and past quiz events
- **Team**: Current team members with roles and contact information
- **Articles**: Educational content and quiz-related articles
- **Quiz Sets**: Collection of downloadable quiz question sets
- **Gallery**: Photo gallery from events and activities
- **Contact**: Multiple ways to reach the club with embedded map

### Key Components

- **Navbar**: Responsive navigation with dark theme
- **EventCard**: Individual event display with status indicators
- **MemberCard**: Team member profiles with photos and details
- **GalleryImage**: Interactive image viewer with modal
- **Footer**: Social media links and contact information

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🏗️ Project Structure

```
src/
├── components/         # Reusable React components
├── data/               # JSON data files
│   ├── events.json     # Event data
│   ├── quizSets.json   # Quiz sets data
│   └── galleryImages.json # Gallery images data
├── pages/              # Main page components
├── utils/              # Utility functions
└── App.js              # Main application component
```

Built with ❤️ by Quizzers Anonymous Team