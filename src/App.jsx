import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Simple Header */}
      <header className="bg-transparent border-b border-gray-100">
        <nav className="max-w-[1024px] mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-quicksand flex items-center gap-5">
            <img src="/images/icons/logo.png" alt="TamilLit Logo" className="w-12" />
            Tamil Lit
          </h1>
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-8 text-gray-600">
              <li><a href="https://apps.apple.com/in/app/tamil-lit/id6476827222" target='_blank' className="hover:text-orange-600">Download</a></li>
              <li><a href="mailto:selvarajan2006@gmail.com" className="hover:text-orange-600">Contact</a></li>
            </ul>
            <div className="flex space-x-6">
              <a href="https://github.com/coder-selvarajan" className="hover:text-orange-600" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/selvarajan-t" className="hover:text-orange-600" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/selvarajan.t/" className="hover:text-orange-600" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with App Preview */}
      <main className="max-w-[1024px] mx-auto px-4">
        <section className="py-16 flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 text-left space-y-8">
            <h2 className="text-4xl leading-tight font-bold tracking-tight">
              App for <br/>
              <span className="text-orange-600 font-bold">Tamil Literature</span>
              <br/>
              Lovers
              </h2>
            <p className="text-lg text-gray-600">
            A <span className="text-orange-600">free iOS app</span> offering rich insights into Tamil literature, providing a comprehensive gateway 
            to the timeless beauty of classical <span className="text-orange-600">Tamil poems</span> and their <span className="text-orange-600">interpretations</span>. Explore, learn, and 
            immerse yourself in the profound world of Tamil literary treasures.
            </p>
            {/* App Store Button */}
            <div className="pt-4">
              <a href="https://apps.apple.com/in/app/tamil-lit/id6476827222" target='_blank' className="w-[200px] hover:opacity-80 transition-opacity inline-block">
                <img 
                  src="/app_store_badge.svg" 
                  alt="Download on App Store" 
                  className="w-[200px]"
                />
              </a>
            </div>
          </div>
          
          {/* Right Column - App Preview */}
          <div className="w-full md:w-1/2">
            <img 
              src="/images/screenshots/Tamil-lit-home.png" 
              alt="TamilLit App Interface" 
              className="w-full max-w-[700px] mx-auto rounded-3xl"
            />
          </div>
        </section>

        {/* Literature Collection Section */}
        <section className="pt-16 pb-5 bg-gray-200 rounded-3xl px-8 shadow-sm">
          <h2 className="text-4xl font-bold text-center mb-16">10 Renowned Literature Books</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {[
              { en: 'Thirukural', ta: 'திருக்குறள்' },
              { en: 'Naaladiyar', ta: 'நாலடியார்' },
              { en: 'Athichudi', ta: 'ஆத்திசூடி' },
              { en: 'Pazhamozhi Naanuru', ta: 'பழமொழி நானூறு' },
              { en: 'Acharakovai', ta: 'ஆசாரக்கோவை' },
              { en: 'Inna Naarpathu', ta: 'இன்னா நாற்பது' },
              { en: 'Iniyavai Naarpathu', ta: 'இனியவை நாற்பது' },
              { en: 'Muthumozhi Kanchi', ta: 'முதுமொழிக் காஞ்சி' },
              { en: 'Thirikadukam', ta: 'திரிகடுகம்' },
              { en: 'Naanmanikadikai', ta: 'நான்மணிக்கடிகை' }
            ].map((book) => (
              <div key={book.en} className="py-1 px-4 rounded-xl text-center">
                <img 
                  src={`/images/icons/${book.en.toLowerCase()}.png`}
                  alt={book.en}
                  className="w-full bg-gray-50 rounded-2xl shadow-md mb-5 p-6"
                />
                <p className="font-medium text-gray-600">{book.ta}</p>
                <p className="font-light text-gray-500">({book.en})</p>
              </div>
            ))}
          </div>
          {/* <p className="text-center text-gray-600">
            With multiple explanations to deepen your understanding
          </p> */}
        </section>

        {/* Core Features Grid */}
        <section className="pt-20 pb-10 mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">Features </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Bookmark Share Snap Speak */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/images/screenshots/share-options.png" 
                  alt="Share Options" 
                  className="w-full rounded-3xl shadow-lg mb-10 px-6 pt-10 bg-gray-200"
                />
                <div className="absolute inset-x-0 text-center">
                  <h3 className="text-2xl font-bold">Bookmark, Share </h3>
                  <h3 className="text-2xl font-bold">Snap the poem</h3>
                </div>
              </div>
            </div>
            
            {/* Easy Category Navigation */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/images/screenshots/category-navigation.png" 
                  alt="Category Navigation" 
                  className="w-full rounded-3xl shadow-lg mb-10 px-6 pt-10 bg-gray-200"
                />
                <div className="absolute inset-x-0 text-center mb-0">
                  <h3 className="text-2xl font-bold">Intutive Category</h3>
                  <h3 className="text-2xl font-bold">Navigation</h3>
                </div>
              </div>
            </div>

            {/* Easy Search */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/images/screenshots/search.png" 
                  alt="Poem Search" 
                  className="w-full rounded-3xl shadow-lg mb-10 px-6 pt-10 bg-gray-200"
                />
                <div className="absolute inset-x-0 text-center">
                  <h3 className="text-2xl font-bold">Effective</h3>
                  <h3 className="text-2xl font-bold">Poem Search</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Personalization Features */}
        <section className="pb-20 pt-10 space-y-16">
          {/* Random Poems Section */}
          <div className="bg-gray-200 rounded-3xl px-20 pt-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/3">
                <img 
                  src="/images/screenshots/random-poem.png" 
                  alt="Random Poems Feature" 
                  className="w-full max-w-[350px]"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-4xl font-bold">Random Pick</h3>
                <p className="text-gray-600 text-lg">
                  Explore random poems from any book with a simple click of the "Next" button. Uncover a fresh gem every time!
                </p>
              </div>
            </div>
          </div>

          {/* Daily Inspiration Section */}
          <div className="bg-gray-200 rounded-3xl px-24 pb-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-4xl font-bold">Daily Inspiration</h3>
                <p className="text-gray-600 text-lg">
                  Receive a daily poem notification and start your day with a timeless verse from Tamil literature.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="/images/screenshots/daily-notifications.png" 
                  alt="Daily Notifications" 
                  className="w-full max-w-[450px]"
                />
              </div>
            </div>
          </div>

          {/* Beautiful Themes Section */}
          <div className="bg-gray-200 rounded-3xl px-20 py-12 shadow-sm">
            <div className="flex flex-col gap-12">
              
            <div className="space-y-4">
                <h3 className="text-4xl text-center font-bold">Themes</h3>
                <p className="text-gray-600 text-center text-lg">
                  Choose from light, dark, and multi-color themes to customize your reading experience.
                </p>
              </div>

              <div>
                <img 
                  src="/images/screenshots/themes.png" 
                  alt="Theme Options" 
                  className="w-full"
                />
              </div>
              

            </div>
          </div>

          {/* Accessibility Section */}

          

        </section>

        <section className="pb-20 space-y-8">
        <h2 className="text-4xl font-bold text-center mb-10">Accessibility-Driven Reading Experience </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="bg-gray-200 rounded-3xl px-8 py-8 shadow-sm text-center space-y-4">
              <svg className="w-12 h-12 mx-auto text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7V4h16v3M9 20h6M12 4v16m-5-4 5-5 5 5" />
              </svg>
              <h4 className="text-xl font-bold">Font Scaling</h4>
              <p className="text-gray-600">
              Adjust text size for your preferred reading comfort.
              </p>
            </div>

            <div className="bg-gray-200 rounded-3xl px-8 py-8 shadow-sm text-center space-y-4">
              <svg className="w-12 h-12 mx-auto text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
              <h4 className="text-xl font-bold">Text to Speech</h4>
              <p className="text-gray-600">
                Listen to poems and explanations with the built-in text-to-speech.
              </p>
            </div>

            <div className="bg-gray-200 rounded-3xl px-8 py-8 shadow-sm text-center space-y-4">
              <svg className="w-12 h-12 mx-auto text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              <h4 className="text-xl font-bold">Reading Progress</h4>
              <p className="text-gray-600">
                Track your reading progress from the home screen tiles.
                
              </p>
            </div>
          </div>
        </section>
        
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 mt-16">
        <div className="max-w-[1024px] mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 TamilLit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
