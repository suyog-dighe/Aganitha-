import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { Sparkles, Wand2, BookOpen, Loader2 } from 'lucide-react'

const GOOGLE_API_KEY = 'AIzaSyB2-4V8u1hDraz5_uR_8grANva5nAK6eZc'

function App() {
  const [prompt, setPrompt] = useState('')
  const [genre, setGenre] = useState('')
  const [story, setStory] = useState('')
  const [storyImages, setStoryImages] = useState([])
  const [loading, setLoading] = useState(false)

  const genres = [
    'Fantasy',
    'Science Fiction',
    'Mystery',
    'Romance',
    'Horror',
    'Adventure',
    'Thriller',
    'Comedy',
    'Drama',
    'Historical'
  ]

  const generateStory = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt or keyword!')
      return
    }

    setLoading(true)
    setStory('')
    setStoryImages([])

    try {
      // Generate story with Gemini AI
      const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY)
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' })

      const fullPrompt = `Write a creative and engaging short story ${genre ? `in the ${genre} genre` : ''} based on the following prompt or keywords: "${prompt}". Make it interesting, well-structured with a beginning, middle, and end. Keep it between 300-500 words.`

      const result = await model.generateContent(fullPrompt)
      const response = await result.response
      const text = response.text()
      
      setStory(text)

      // Fetch 3 relevant images from Unsplash API
      const imageQuery = genre ? `${genre} ${prompt}` : prompt
      const keywords = imageQuery.split(' ').filter(word => word.length > 3)
      
      // Generate 3 different image URLs with different keywords
      const images = []
      for (let i = 0; i < 3; i++) {
        const keywordSubset = keywords.slice(i, i + 2).join(',') || imageQuery
        const randomSeed = Date.now() + i
        const imageUrl = `https://source.unsplash.com/400x300/?${encodeURIComponent(keywordSubset)}&sig=${randomSeed}`
        images.push(imageUrl)
      }
      
      setStoryImages(images)
    } catch (error) {
      console.error('Error generating story:', error)
      alert('Failed to generate story. Please check your API key and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      generateStory()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI Story Generator
            </h1>
            <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-purple-200">
            Powered by Google Gemini AI - Create magical stories instantly
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Input Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 mb-8">
            <div className="space-y-6">
              {/* Genre Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-purple-200">
                  Select Genre (Optional)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {genres.map((g) => (
                    <button
                      key={g}
                      onClick={() => setGenre(genre === g ? '' : g)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        genre === g
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                          : 'bg-white/10 hover:bg-white/20 text-purple-100'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt Input */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-purple-200">
                  What's your story about?
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Example: A boy finds a magic book, A girl travels to space, A dog saves the day..."
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none transition-all duration-300"
                  rows="4"
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={generateStory}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Generating Your Story...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-6 h-6" />
                    Generate Story
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Story Output */}
          {story && (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Your Story
                </h2>
              </div>
              
              {/* Story Text */}
              <div className="prose prose-invert max-w-none mb-6">
                <div className="text-lg leading-relaxed text-purple-50 whitespace-pre-wrap">
                  {story}
                </div>
              </div>
              
              {/* 3 Small Images in a Row */}
              {storyImages.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {storyImages.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                      <img 
                        src={image} 
                        alt={`Story illustration ${index + 1}`} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to a different image service if Unsplash fails
                          e.target.src = `https://picsum.photos/400/300?random=${Date.now() + index}`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <button
                  onClick={() => {
                    setStory('')
                    setStoryImages([])
                    setPrompt('')
                    setGenre('')
                  }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-all duration-300"
                >
                  Generate Another Story
                </button>
              </div>
            </div>
          )}

          {/* Loading Animation */}
          {loading && (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <Sparkles className="w-16 h-16 text-yellow-400 animate-pulse" />
                  <div className="absolute inset-0 w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-xl text-purple-200">Crafting your magical story...</p>
                <p className="text-sm text-purple-300">Finding the perfect image to match your tale...</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-purple-300">
          <p className="text-sm">
            ✨ Unleash your imagination with AI-powered storytelling ✨
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
