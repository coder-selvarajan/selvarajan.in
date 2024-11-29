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
          <div className="flex gap-6 text-gray-600 text-2xl">
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
          <div className="pt-6">
            <Link 
              to="/tamil-lit" 
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              View My Work
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full max-w-[400px] mx-auto">
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
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <h2 className="text-5xl font-bold text-center mb-12">My Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/tamil-lit" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-12">
                <img 
                  src="/images/screenshots/Tamil-lit-home.png" 
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

          <Link to="/board-brain" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-12">
                <img 
                  src="/images/screenshots/Tamil-lit-home.png" 
                  alt="BoardBrain App"
                  className="w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">BoardBrain</h3>
                <p className="text-gray-600">
                  A digital whiteboard app for brainstorming and organizing ideas with intuitive drawing tools.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/vocabulary-buddy" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-12">
                <img 
                  src="/images/screenshots/Tamil-lit-home.png" 
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
          </Link>
        </div>
        
      </section>
    </main>
  );
};

export default Home; 