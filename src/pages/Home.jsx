import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="max-w-[1024px] mx-auto px-4">
      <section className="py-20 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Hero Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-quicksand font-bold leading-tight">
            Hi, I'm <span className="text-orange-600">Selvarajan</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            An app <span className="text-orange-600">developer</span> by profession, a self-taught <span className="text-orange-600">artist</span> by passion, and a spiritual <span className="text-orange-600">seeker</span> by instinct. 
            My journey blends creativity with technology, crafting digital experiences that resonate with both beauty and purpose.
          </p>
          
          <div className="pt-6 flex gap-4">
            <a 
              href="https://github.com/coder-selvarajan" 
              target="_blank"
              className="inline-flex items-center gap-2 bg-gray-300 px-5 py-3 rounded-lg hover:text-orange-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/selvarajan-t"
              target="_blank" 
              className="inline-flex items-center gap-2 bg-gray-300 px-5 py-3 rounded-lg hover:text-orange-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full max-w-[350px] mx-auto mb-8">
            <img 
              src="/images/me.png"
              alt="Developer Color" 
              className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] hover:rotate-1 [filter:saturate(0)_brightness(1.3)_contrast(1.1)]"
            />
            <img
              src="/images/me.png"
              alt="Developer Original"
              className="absolute inset-0 w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] hover:rotate-1 opacity-0 hover:opacity-100"
            />
          </div>

          <div className="flex justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              <span className="text-lg">Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
              <span className="text-lg">Artist</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span className="text-lg">Seeker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <h2 className="text-5xl font-quicksand font-bold text-center mb-12">My Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link to="/tamil-lit" className="group h-full" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="p-12 flex-1">
                <img 
                  src="/images/tamillit/Tamil-lit-home.png" 
                  alt="Tamil Lit App" 
                  className="w-full object-contain" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">Tamil Lit</h3>
                <p className="text-gray-600">
                  An iOS app for Tamil literature enthusiasts, featuring classical Tamil poems and their interpretations.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/board-brain" className="group h-full" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="p-12 flex-1">
                <img 
                  src="/images/boardbrain/01.png" 
                  alt="BoardBrain App"
                  className="w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">BoardBrain</h3>
                <p className="text-gray-600">
                  An iOS app for chess lovers, offers interactive games and exercises to improve their chess vision.
                </p>
              </div>
            </div>
          </Link>

          {/* <Link to="/vocabulary-buddy" className="group h-full">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="p-12 flex-1">
                <img 
                  src="/images/tamillit/Tamil-lit-home.png" 
                  alt="Vocabulary Buddy App"
                  className="w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">Vocabulary Buddy</h3>
                <p className="text-gray-600">
                  An interactive vocabulary learning app with spaced repetition and contextual examples.
                </p>
              </div>
            </div>
          </Link> */}
        </div>
        
      </section>
    </main>
  );
};

export default Home; 