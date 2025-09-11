# BookVerse 📚

A magical book discovery application built with React and Vite, featuring an enchanting animated interface for finding your next favorite story.

![BookVerse Preview](https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80)

## ✨ Features

- **🔍 Intelligent Book Search**: Search for books by title using the OpenLibrary API
- **🎨 Animated Background**: Beautiful gradient background with floating particles animation
- **📖 Book Grid Display**: Responsive grid layout showcasing book covers, titles, authors, and ratings
- **⚡ Fast & Responsive**: Built with Vite for lightning-fast development and hot module replacement
- **🎭 Modern UI**: Styled with TailwindCSS featuring glassmorphism effects and smooth animations
- **📱 Mobile-Friendly**: Fully responsive design that works on all devices
- **⭐ Rating Display**: Shows book ratings when available
- **🖼️ Cover Images**: Displays book cover images with fallback placeholders

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd book-finder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **TailwindCSS 4** - Utility-first CSS framework
- **OpenLibrary API** - Free book data API
- **ESLint** - Code linting and formatting
- **JavaScript (ES6+)** - Modern JavaScript features

## 🎯 How It Works

1. **Search Interface**: Enter a book title in the search bar
2. **API Integration**: Fetches book data from OpenLibrary's search API
3. **Results Display**: Shows up to 12 books in a responsive grid
4. **Book Details**: Displays title, author, publication year, and ratings
5. **Error Handling**: Graceful error messages for failed searches or no results

## 📁 Project Structure

```
book-finder/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main application component
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md           # Project documentation
```

## 🎨 Customization

### Styling
The app uses TailwindCSS for styling. You can customize colors, animations, and layout by modifying the classes in `App.jsx` or updating the Tailwind configuration.

### API
Currently uses OpenLibrary API. You can modify the API endpoint in `App.jsx` to use a different book API if needed.

### Animations
- Background gradient animation
- Floating particles effect
- Hover animations on book cards
- Loading spinner animation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenLibrary](https://openlibrary.org/) for providing free book data
- [Unsplash](https://unsplash.com/) for the background image
- [TailwindCSS](https://tailwindcss.com/) for the amazing utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

**Happy Reading! 📖✨**
