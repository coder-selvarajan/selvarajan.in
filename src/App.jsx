import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Simple Header */}
      <header className="bg-transparent border-b border-gray-100">
        <nav className="max-w-[1024px] mx-auto px-4 py-6 flex items-center justify-between">
          <h1 className="text-4xl font-semibold font-sans flex items-center gap-2">
            <img src="/images/icons/logo.png" alt="TamilLit Logo" className="w-16" />
            TamilLit
          </h1>
          <ul className="flex space-x-8 text-gray-600">
            <li><a href="#" className="hover:text-orange-600">Download</a></li>
            <li><a href="#" className="hover:text-orange-600">Press Kit</a></li>
            <li><a href="#" className="hover:text-orange-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with App Preview */}
      <main className="max-w-[1024px] mx-auto px-4">
        <section className="py-16 flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-left space-y-6">
            <h2 className="text-6xl leading-normal font-extrabold tracking-tight">Introducing <br/><span className="text-orange-600 animate-pulse">TamilLit</span> App</h2>
            <p className="text-xl text-gray-600">
              Your comprehensive gateway to the timeless beauty of classical Tamil poems and their interpretations. 
              Discover, learn, and immerse yourself in the profound world of Tamil literature.
            </p>
            {/* App Store Button */}
            <div className="pt-4">
              <a href="#" className="w-[200px] hover:opacity-80 transition-opacity inline-block">
                <img 
                  src="/app_store_badge.svg" 
                  alt="Download on App Store" 
                  className="w-[200px]"
                />
              </a>
            </div>
          </div>
          
          {/* Right Column - App Preview */}
          <div className="flex-1">
            <img 
              src="/images/screenshots/hero-section-image.png" 
              alt="TamilLit App Interface" 
              className="w-full max-w-[500px] mx-auto rounded-3xl"
            />
          </div>
        </section>

        {/* Literature Collection Section */}
        <section className="pt-16 pb-5 bg-white rounded-3xl px-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-16">10 Renowned Literature Books</h2>
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
                  className="w-full bg-gray-100 rounded-lg shadow-md mb-5 p-6"
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
          <h2 className="text-3xl font-bold text-center mb-16">Features </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Bookmark Share Snap Speak */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/images/screenshots/share-options.png" 
                  alt="Share Options" 
                  className="w-full rounded-3xl shadow-lg mb-10 px-6 pt-10 bg-white"
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
                  className="w-full rounded-3xl shadow-lg mb-10 px-6 pt-10 bg-white"
                />
                <div className="absolute inset-x-0 text-center mb-0">
                  <h3 className="text-2xl font-bold">Easy Category</h3>
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
                  className="w-full rounded-3xl shadow-lg mb-10 px-6 pt-10 bg-white"
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
        <section className="py-20 space-y-8">
          {/* Random Poems Section */}
          <div className="bg-gray-200 rounded-3xl px-20 pt-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <img 
                  src="/images/screenshots/random-poem.png" 
                  alt="Random Poems Feature" 
                  className="w-full max-w-[350px]"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-4xl font-bold">Random Poems</h3>
                <p className="text-gray-600 text-lg">
                  Discover new poems daily with our random poem feature. Perfect for daily inspiration and learning.
                </p>
              </div>
            </div>
          </div>

          {/* Daily Inspiration Section */}
          <div className="bg-gray-200 rounded-3xl px-20 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-4xl font-bold">Daily Inspiration</h3>
                <p className="text-gray-600 text-lg">
                  Get daily notifications with handpicked poems to start your day with Tamil wisdom.
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
          <div className="bg-white rounded-3xl px-8 py-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <img 
                  src="/images/screenshots/theme-options.png" 
                  alt="Theme Options" 
                  className="w-full max-w-[200px] "
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-2xl font-bold">Beautiful Themes</h3>
                <p className="text-gray-600 text-lg">
                  Choose from light, dark, and sepia themes to customize your reading experience.
                </p>
              </div>
            </div>
          </div>

          {/* Accessibility Section */}
          <div className="bg-white rounded-3xl px-8 py-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <img 
                  src="/images/screenshots/accessibility.png" 
                  alt="Accessibility Features" 
                  className="w-full max-w-[250px] mx-auto rounded-3xl shadow-lg"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-2xl font-bold">Accessibility First</h3>
                <p className="text-gray-600 text-lg">
                  Adjustable text size, high contrast mode, and VoiceOver support for all users.
                </p>
              </div>
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
