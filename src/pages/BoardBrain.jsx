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
            <div className="pt-4 flex gap-8">
              <a href="https://apps.apple.com/in/app/board-brain/id6482852806" target='_blank' className="w-[200px] hover:opacity-80 transition-opacity inline-block">
                <img 
                  src="/app_store_badge.svg" 
                  alt="Download on App Store" 
                  className="w-[200px]"
                />
              </a>
              {/* <a 
                href="https://github.com/coder-selvarajan/boardbrain" 
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-yellow-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                BoardBrain on Github
              </a> */}
            </div>
          </div>
          
          {/* Right Column - App Preview */}
          <div className="w-full md:w-1/2 text-center space-y-8">
            <img 
              src="/images/boardbrain/01.png" 
              alt="TamilLit App Interface" 
              className="w-full max-w-[700px] mx-auto rounded-3xl"
            />
              <a 
                href="https://github.com/coder-selvarajan/boardbrain" 
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-yellow-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                BoardBrain on Github
              </a>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="pt-10 pb-5 mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">Training Modules </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="relative bg-gray-200 rounded-3xl px-6 pt-10 pb-6 overflow-hidden">
              <div className="absolute top-2 left-2 w-7 h-7 bg-white rounded-full flex items-center justify-center font-bold text-yellow-500">
                  1
                </div>
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold">Board Coordinates</h3>
                  <p className="text-gray-600 pt-5">
                  Learn and practice identifying the correct coordinates on the chessboard
                  </p>
                </div>
                <img 
                  src="/images/boardbrain/02.png" 
                  alt="Share Options" 
                  className="w-full rounded-3xl -mb-14"
                />
              </div>
            </div>
            
            {/* Easy Category Navigation */}
            <div className="space-y-6">
              <div className="relative bg-gray-200 rounded-3xl px-6 pt-10 pb-6 overflow-hidden">
              <div className="absolute top-2 left-2 w-7 h-7 bg-white rounded-full flex items-center justify-center font-bold text-yellow-500">
                  2
                </div>
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold">Piece Movement</h3>
                  <p className="text-gray-600 pt-5">
                  Explore various piece movements in an interactive format.
                  </p>
                </div>
                <img 
                  src="/images/boardbrain/03.png" 
                  alt="Category Navigation" 
                  className="w-full rounded-3xl -mb-16"
                />
              </div>
            </div>

            {/* Easy Search */}
            <div className="space-y-6">
              <div className="relative bg-gray-200 rounded-3xl px-6 pt-10 pb-6 overflow-hidden">
              <div className="absolute top-2 left-2 w-7 h-7 bg-white rounded-full flex items-center justify-center font-bold text-yellow-500">
                  3
                </div>
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold">Square Colors</h3>
                  <p className="text-gray-600 pt-5">
                  Enhance your ability to quickly recognize the color of different squares on the chessboard.
                  </p>
                </div>
                <img 
                  src="/images/boardbrain/04.png" 
                  alt="Poem Search" 
                  className="w-full rounded-3xl -mb-16"
                />
              </div>
            </div>
          </div>
        </section>

        
        <section className="pb-10 space-y-16">
          <h2 className="text-4xl font-bold text-center mb-16">Highlights </h2>
          <div className="bg-gray-200 rounded-3xl px-20 py-14 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/3">
                <img 
                  src="/images/boardbrain/score.png" 
                  alt="Random Poems Feature" 
                  className="w-full max-w-[200px] rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-3xl font-bold">Score Tracking</h3>
                <p className="text-gray-600 text-lg">
                  <span className="flex items-center gap-2">
                    Track your progress with detailed scoring for each training session. View your earned points, average scores, 
                    and personal bests for both sides of the board.
                  </span>
                  <br/>
                  <span className="flex items-center gap-2">
                    Share your achievements on social media and challenge friends to beat your scores!
                  </span>
                </p>
              </div>
            </div>

            <hr className="my-10 border-gray-300" />
          
            <div className="flex flex-col md:flex-row items-center gap-16 mt-14">
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-3xl font-bold">Response Time Capture</h3>
                <p className="text-gray-600 text-lg">
                  Response time is tracked for each move, allowing you to review and analyze your speed. Track your progress as average response times are displayed in your score card, helping you improve your skills over time.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="/images/boardbrain/resp-time.png" 
                  alt="Random Poems Feature" 
                  className="w-full max-w-[200px] rounded-xl shadow-lg"
                />
              </div>
            </div>
          
            <hr className="my-10 border-gray-300" />
          
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/3">
                <img 
                  src="/images/boardbrain/settings.png" 
                  alt="Random Poems Feature" 
                  className="w-full max-w-[200px] rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-4xl font-bold">Personalization</h3>
                <p className="text-gray-600 text-lg">
                  Customize your learning experience with various personalization options:
                </p>
                <ul className="text-gray-600 text-lg list-disc pl-6 mt-4 space-y-2">
                  <li>Choose from multiple chessboard skins to match your visual preferences</li>
                  <li>Enable haptic feedback for a more immersive gaming experience</li>
                  <li>Reset module scores anytime to restart your learning journey from scratch</li>
                </ul>
              </div>
            </div>
          </div>
          
        </section>

      </main>

      <footer className=" border-t border-gray-100 py-8 mt-5">
        <div className="max-w-[1024px] mx-auto px-4 text-center text-gray-600">
        
          <div className="space-y-8">
            <div className="text-gray-600 text-md space-y-4 text-center">
              <p>
                BoardBrain is a <span className="text-yellow-600">free</span> app available on the iOS App Store. It is built using <span className="text-yellow-600">SwiftUI</span>, Apple's modern framework for building user interfaces.
                The source code of this project can be found <a href="https://github.com/coder-selvarajan/boardbrain" target="_blank" className="text-yellow-600 hover:underline">here</a>.
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