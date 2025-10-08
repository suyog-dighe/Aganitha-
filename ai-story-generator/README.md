# ✨ AI Story Generator

A beautiful, modern AI-powered story generator built with **Vite**, **React**, **Tailwind CSS**, and **Google Gemini AI**.

![AI Story Generator](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-cyan)

## 🌟 Features

- 🎨 **Beautiful Modern UI** - Stunning gradient backgrounds with animated elements
- 🤖 **Google Gemini AI Integration** - Powered by advanced AI for creative storytelling
- 📚 **10 Genre Options** - Fantasy, Sci-Fi, Mystery, Romance, Horror, and more
- ⚡ **Real-time Generation** - Fast story creation with loading animations
- 🎭 **Customizable Prompts** - Enter any keyword or detailed prompt
- 📱 **Responsive Design** - Works perfectly on all devices
- ✨ **Smooth Animations** - Floating background elements and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd ai-story-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🎯 How to Use

1. **Select a Genre** (Optional) - Choose from 10 different story genres
2. **Enter Your Prompt** - Type keywords or a detailed story prompt
3. **Generate Story** - Click the button or press Enter
4. **Enjoy Your Story** - Read your AI-generated masterpiece!
5. **Generate More** - Create unlimited stories with different prompts

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS v4 with @tailwindcss/vite
- **AI Engine:** Google Gemini AI (@google/generative-ai)
- **Icons:** Lucide React
- **Animations:** Custom Tailwind animations

## 📦 Project Structure

```
ai-story-generator/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Tailwind CSS imports
├── public/              # Static assets
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🎨 Customization

### Change API Key
The Google API key is currently hardcoded in `src/App.jsx`. For production, use environment variables:

```javascript
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
```

### Modify Genres
Edit the `genres` array in `src/App.jsx`:

```javascript
const genres = ['Your', 'Custom', 'Genres']
```

### Adjust Styling
Modify `tailwind.config.js` for custom animations and colors.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Google Gemini AI for powerful story generation
- Tailwind CSS for beautiful styling
- Lucide React for amazing icons
- Vite for blazing fast development

---

**Made with ❤️ and AI**
