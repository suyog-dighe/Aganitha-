import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setBooks([]);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
      );
      const data = await res.json();

      if (data.docs.length === 0) {
        setError("No books found. Try another title.");
      } else {
        setBooks(data.docs.slice(0, 12));
      }
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(79, 70, 229, 0.9) 0%, rgba(147, 51, 234, 0.8) 50%, rgba(236, 72, 153, 0.7) 100%), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 opacity-40"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white bg-opacity-30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 pt-8">
            <div className="inline-block mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full p-6 shadow-2xl">
                <div className="text-6xl">📚</div>
              </div>
            </div>
            <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                BookVerse
              </span>
            </h1>
            <p className="text-xl text-white text-opacity-90 font-light">
              Discover your next favorite story in our magical library
            </p>
          </div>

          {/* Search Section */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-2xl">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                      placeholder="Search for magical stories..."
                      className="flex-1 p-4 bg-transparent text-gray-800 placeholder-gray-500 text-lg focus:outline-none"
                    />
                    <button
                      onClick={handleSearch}
                      disabled={loading}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition duration-300 shadow-lg font-semibold text-lg disabled:opacity-50 disabled:transform-none"
                    >
                      {loading ? "✨ Searching..." : "🔍 Search"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Messages */}
          <div className="text-center mb-8">
            {loading && (
              <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3 text-white">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Discovering amazing books...
              </div>
            )}
            {error && (
              <div className="inline-block bg-red-500 bg-opacity-90 backdrop-blur-lg rounded-full px-6 py-3 text-white shadow-lg">
                {error}
              </div>
            )}
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {books.map((book, index) => {
              const coverId = book.cover_i;
              const coverUrl = coverId
                ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
                : "https://via.placeholder.com/200x300/4F46E5/FFFFFF?text=No+Cover+Available";

              return (
                <div
                  key={index}
                  className="group cursor-pointer transform hover:scale-105 transition duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="relative bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-500">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition duration-500 z-10"></div>
                    
                    <div className="relative overflow-hidden rounded-t-3xl">
                      <img
                        src={coverUrl}
                        alt={book.title}
                        className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/200x300/4F46E5/FFFFFF?text=No+Cover+Available";
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="w-6 h-6 text-purple-600">❤️</div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition duration-300">
                        {book.title}
                      </h2>
                      <p className="text-gray-600 mb-2 font-medium">
                        {book.author_name ? book.author_name.slice(0, 2).join(", ") : "Unknown Author"}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                          {book.first_publish_year || "N/A"}
                        </span>
                        {book.ratings_average && (
                          <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">⭐</span>
                            <span>{book.ratings_average.toFixed(1)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {books.length === 0 && !loading && !error && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">📖</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to explore?
              </h3>
              <p className="text-white text-opacity-80 text-lg">
                Search for any book title to discover amazing stories
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}