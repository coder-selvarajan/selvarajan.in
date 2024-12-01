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
                <img src="/images/vocabularybuddy/vb_logo.png" alt="Vocabulary Buddy Logo" className="w-8 rounded-md" />
                Vocabulary Buddy
            </h1>
            <h2 className="text-4xl leading-tight font-bold tracking-tight">
              App made for <br/>
              <span className="text-indigo-500 text-4xl font-bold">English</span>
              <br/>
              Learners
              </h2>
            <p className="text-lg text-gray-600">
            VocabularyBuddy is designed for English learners of all levels to improve their vocabulary skills effortlessly. 
            Whether you want to expand your vocabulary, bookmark words for easy reference, or practice in a gamified way, this app has everything you need.
            </p>
            {/* App Store Button */}
            <div className="pt-4 flex gap-8">
              <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse">
                Coming Soon on App Store
              </button>
            </div>
          </div>
          
          {/* Right Column - App Preview */}
          <div className="w-full md:w-1/2 text-center space-y-8">
            <img 
              src="/images/vocabularybuddy/home.png" 
              alt="TamilLit App Interface" 
              className="w-full max-w-[700px] mx-auto rounded-3xl"
            />
              <a 
                href="https://github.com/coder-selvarajan/VocabularyBuddy" 
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-indigo-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                VocabularyBuddy on Github
              </a>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="pt-10 pb-5 mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">Screen Shots </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/images/vocabularybuddy/01.png", alt: "Vai Raja Vai Screenshot 1" },
              { src: "/images/vocabularybuddy/02.png", alt: "Vai Raja Vai Screenshot 2" },
              { src: "/images/vocabularybuddy/03.png", alt: "Vai Raja Vai Screenshot 3" },
              { src: "/images/vocabularybuddy/04.png", alt: "Vai Raja Vai Screenshot 4" },
              { src: "/images/vocabularybuddy/05.png", alt: "Vai Raja Vai Screenshot 5" },
              { src: "/images/vocabularybuddy/08.png", alt: "Vai Raja Vai Screenshot 8" }
            ].map((image, index) => (
              <div key={index} className="space-y-5 p-4">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-[90%] mx-auto rounded-3xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className=" border-t border-gray-100 py-8 mt-5">
        <div className="max-w-[1024px] mx-auto px-4 text-center text-gray-600">
        
          <div className="space-y-8">
            <div className="text-gray-600 text-md space-y-4 text-center">
              <p>
                Vocabulary Buddy is a <span className="text-indigo-500">free</span> app, will be available soon on the iOS App Store. 
                It is built using <span className="text-indigo-500">SwiftUI</span> for the user interface and <span className="text-indigo-500">Core Data</span> for data storage.
                The source code for this project is available <a href="https://github.com/coder-selvarajan/vocabularybuddy" target="_blank" className="text-indigo-500 hover:underline">here</a>
              </p>
            </div>
            <hr className="my-10 border-gray-300" />
            <div className="flex justify-center space-x-6">
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target='_blank' className="text-gray-600 hover:text-yellow-600">Terms of Use</a>
              <a href="mailto:selvarajan2006@gmail.com" target='_blank' className="text-gray-600 hover:text-yellow-600">Contact</a>

              <p className="text-sm">Built with ❤️ by <a href="https://www.linkedin.com/in/selvarajan-t" target='_blank' className="hover:text-yellow-600">Selvarajan Thangavel</a></p>
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