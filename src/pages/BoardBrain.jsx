const BoardBrain = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-[1024px] mx-auto px-4">
        
      <div className="min-h-screen bg-gray-100 text-gray-900">
      

      {/* Hero Section with App Preview */}
      <main className="max-w-[1024px] mx-auto px-4">
        <section className="pt-12 pb-16 flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 text-left space-y-8">
            <h1 className="text-xl font-bold font-quicksand flex items-center gap-3 py-2 bg-gray-200 rounded-lg px-4 w-fit">
                <img src="/images/boardbrain/logo-rounded.png" alt="TamilLit Logo" className="w-8" />
                Board Brain
            </h1>
            <h2 className="text-4xl leading-tight font-bold tracking-tight">
              App made for <br/>
              <span className="text-yellow-500 text-5xl font-bold">CHESS</span>
              <br/>
              Leaners
              </h2>
            <p className="text-lg text-gray-600">
            <span className="text-yellow-600">Board Brain</span> is a <span className="text-yellow-600">free</span> iOS app designed to help you improve your chess vision. 
            It offers interactive games and exercises that focus on mastering chessboard coordinates, understanding piece movement, and recognizing square colors. 
            </p>
            {/* App Store Button */}
            <div className="pt-4">
              <a href="https://apps.apple.com/in/app/board-brain/id6482852806" target='_blank' className="w-[200px] hover:opacity-80 transition-opacity inline-block">
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
              src="/images/boardbrain/01.png" 
              alt="TamilLit App Interface" 
              className="w-full max-w-[700px] mx-auto rounded-3xl"
            />
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="pt-10 pb-10 mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">Training Modules </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Bookmark Share Snap Speak */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/images/boardbrain/02.png" 
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
                  src="/images/boardbrain/03.png" 
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
                  src="/images/boardbrain/04.png" 
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
                  src="/images/tamillit/random-poem.png" 
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
                  src="/images/tamillit/daily-notifications.png" 
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
                  src="/images/tamillit/themes.png" 
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

      <footer className=" border-t border-gray-100 py-8 mt-5">
        <div className="max-w-[1024px] mx-auto px-4 text-center text-gray-600">
          <div className="space-y-4">
            <div className="flex justify-center space-x-6">
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target='_blank' className="text-gray-600 hover:text-orange-600">Terms of Use</a>
              <a href="mailto:selvarajan2006@gmail.com" target='_blank' className="text-gray-600 hover:text-orange-600">Contact</a>

              <p className="text-sm">Built with ❤️ by <a href="https://www.linkedin.com/in/selvarajan-t" target='_blank' className="hover:text-orange-600">Selvarajan Thangavel</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
      </main>
      {/* Keep the footer */}
    </div>
  );
};

export default BoardBrain; 