# Suyog Dighe - Portfolio Website

A modern, professional portfolio website built with React, Vite, and Tailwind CSS v4. Features a clean, responsive design with dark/light mode toggle, smooth animations, and interactive components.

## ✨ Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Sections**:
  - Hero section with animated typing effect
  - Skills showcase with progress bars
  - Project cards with hover effects
  - Resume and achievements timeline
  - Contact form with validation
- **Smooth Animations**: Engaging hover effects and transitions throughout
- **SEO Optimized**: Semantic HTML and meta tags

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind CSS Vite plugin

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/suyogdighe/portfolio-suyog.git
cd portfolio-suyog
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

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-suyog/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit the component files in `src/components/` to update:
- **Hero.jsx**: Name, roles, bio
- **Skills.jsx**: Technical skills and proficiency levels
- **Projects.jsx**: Project details, links, and descriptions
- **Resume.jsx**: Education and work experience
- **Achievements.jsx**: Awards and accomplishments
- **Contact.jsx**: Contact information and social links

### Change Color Scheme

Modify the gradient colors in `src/index.css` and component files. The current theme uses blue and purple gradients.

### Add/Remove Sections

Edit `src/App.jsx` to add or remove sections from the portfolio.

## 📱 Sections

1. **About/Hero** - Introduction with animated typing effect
2. **Skills** - Technical skills with visual progress indicators
3. **Projects** - Portfolio projects with images and links
4. **Resume** - Education and work experience
5. **Achievements** - Awards, certifications, and recognition
6. **Contact** - Contact form and social media links

## 🌐 Deployment

This project can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting service**

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Suyog Dighe**
- GitHub: [@suyogdighe](https://github.com/suyogdighe)
- LinkedIn: [suyogdighe](https://linkedin.com/in/suyogdighe)

## 🙏 Acknowledgments

- Built with React and Tailwind CSS
- Icons from Heroicons and custom emojis
- Inspired by modern portfolio designs

---

Made with ❤️ by Suyog Dighe
