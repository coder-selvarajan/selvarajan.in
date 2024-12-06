import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="max-w-[1024px] mx-auto px-4">
      <section className="py-8 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Hero Content */}
        <div className="w-full md:w-1/2 space-y-6 pl-4">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              <span className="text-md">Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
              <span className="text-md">Artist</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span className="text-md">Seeker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <h2 className="text-4xl font-quicksand font-bold text-center mb-12">My Apps</h2>
        <div className="grid grid-cols-1 gap-12">
          {/* Full-width Tamil Lit Box */}
          <Link to="/tamil-lit" className="group" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 px-8 md:px-16 py-10 md:py-14">
                  <img 
                    src="/images/tamillit/Tamil-lit-home.png" 
                    alt="Tamil Lit App" 
                    className="w-full object-contain" 
                  />
                </div>
                <div className="md:w-1/2 px-6 md:px-16 py-10 md:py-14 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold group-hover:text-orange-600 transition-colors flex items-center justify-between">
                    Tamil Lit
                    <div className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-gray-400" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    </div>
                  </h3>
                  <p className="pb-2">
                    <span className="text-sm text-gray-500">Released in Sep 2024</span>
                  </p>
                  <p className="text-lg text-gray-600 pt-5">
                  Tamil Lit is a free iOS app offering rich insights into Tamil literature, providing a comprehensive gateway 
                  to the timeless beauty of classical Tamil poems and their interpretations.
                  <br/><br/>
                  <span className="text-md text-gray-500">Technologies used: SwiftUI & Core Data</span>
                  </p>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <Link to="/tamil-lit" className="text-lg text-orange-600 hover:text-orange-700" onClick={() => window.scrollTo(0, 0)}>More details →</Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid for remaining apps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Link to="/board-brain" className="group h-full" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="px-7 pt-10 pb-1 flex-1">
                  <img 
                    src="/images/boardbrain/01.png" 
                    alt="BoardBrain App"
                    className="w-full object-contain"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold group-hover:text-orange-600 transition-colors flex items-center justify-between">
                    Board Brain
                    <div className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-gray-400" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    </div>
                  </h3>
                  <p className="pb-2">
                    <span className="text-sm text-gray-500">Released in Jul 2024</span>
                  </p>
                  <p className="text-gray-600 pt-2">
                    An iOS app for chess lovers, offers interactive games and exercises to improve their chess vision.
                    <br/><br/>
                    <span className="text-sm text-gray-500">Technology: SwiftUI</span>
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <Link to="/board-brain" className="text-sm text-orange-600 hover:text-orange-700">More details →</Link>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/vai-raja-vai" className="group h-full" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="px-7 pt-10 pb-1 flex-1">
                  <img 
                    src="/images/vairajavai/home2.png" 
                    alt="Vai Raja Vai App"
                    className="w-full object-contain"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold group-hover:text-orange-600 transition-colors flex items-center justify-between">
                    Vai Raja Vai
                    <div className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-gray-400" viewBox="0 0 448 512"><path d="M89.6 204.5v115.8c0 15.4-12.1 27.7-27.5 27.7-15.3 0-30.1-12.4-30.1-27.7V204.5c0-15.1 14.8-27.5 30.1-27.5 15.1 0 27.5 12.4 27.5 27.5zm10.8 157c0 16.4 13.2 29.6 29.6 29.6h19.9l.3 61.1c0 36.9 55.2 36.6 55.2 0v-61.1h37.2v61.1c0 36.7 55.5 36.8 55.5 0v-61.1h20.2c16.2 0 29.4-13.2 29.4-29.6V182.1H100.4v179.4zm248-189.1H99.3c0-42.8 25.6-80 63.6-99.4l-19.1-35.3c-2.8-4.9 4.3-8 6.7-3.8l19.4 35.6c34.9-15.5 75-14.7 108.3 0L297.5 34c2.5-4.3 9.5-1.1 6.7 3.8L285.1 73c37.7 19.4 63.3 56.6 63.3 99.4zm-170.7-55.5c0-5.7-4.6-10.5-10.5-10.5-5.7 0-10.2 4.8-10.2 10.5s4.6 10.5 10.2 10.5c5.9 0 10.5-4.8 10.5-10.5zm113.4 0c0-5.7-4.6-10.5-10.2-10.5-5.9 0-10.5 4.8-10.5 10.5s4.6 10.5 10.5 10.5c5.6 0 10.2-4.8 10.2-10.5zm94.8 60.1c-15.1 0-27.5 12.1-27.5 27.5v115.8c0 15.4 12.4 27.7 27.5 27.7 15.4 0 30.1-12.4 30.1-27.7V204.5c0-15.4-14.8-27.5-30.1-27.5z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-gray-400" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    </div>
                  </h3>
                  <p className="pb-2">
                    <span className="text-sm text-gray-500">Released in Feb 2023</span>
                  </p>
                  <p className="text-gray-600 pt-2">
                    A mobile app that helps friends and family split money while enjoying card games together seamlessly.
                    <br/><br/>
                    <span className="text-sm text-gray-500">Technology: Flutter & Isar DB</span>
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <Link to="/vai-raja-vai" className="text-sm text-orange-600 hover:text-orange-700" >More details →</Link>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/vocabulary-buddy" className="group h-full" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="px-7 pt-10 pb-1 flex-1">
                  <img 
                    src="/images/vocabularybuddy/home.png" 
                    alt="Vocabulary Buddy App"
                    className="w-full object-contain"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold group-hover:text-orange-600 transition-colors flex items-center justify-between">
                    Vocabulary Buddy
                    <div className="flex gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-gray-400" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    </div>
                  </h3>
                  <p className="pb-2">
                    <span className="text-sm text-gray-500">Under Development</span>
                  </p>
                  <p className="text-gray-600 pt-2">
                    An iOS app designed for English learners of all levels to improve their vocabulary skills effortlessly.
                    <br/><br/>
                    <span className="text-sm text-gray-500">Technology: SwiftUI & Core Data</span>
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <Link to="/vocabulary-buddy" className="text-sm text-orange-600 hover:text-orange-700">More details →</Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
      </section>

      <section className="py-4 md:py-16">
        <h2 className="text-4xl font-quicksand font-bold mb-4 text-center">My Recent Artworks</h2>
        {/* <p className="text-center text-gray-600 mb-12">Goto <a href="https://art.selvarajan.in" target="_blank" className="text-orange-600 hover:text-orange-700">art.selvarajan.in</a> to view my full portfolio</p> */}
        <div className="text-center mb-10">
          <a 
            href="/#/artfolio" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
          >
            View Full Portfolio →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            {
              src: "/images/artfolio/01.png",
              title: "Sunset Dreams",
              medium: "Digital Art",
              date: "2024"
            },
            {
              src: "/images/artfolio/02.png", 
              title: "Urban Rhythm",
              medium: "Acrylic on Canvas",
              date: "2023"
            },
            {
              src: "/images/artfolio/03.png",
              title: "Nature's Whisper",
              medium: "Watercolor",
              date: "2023"
            },
            {
              src: "/images/artfolio/04.png",
              title: "Abstract Flow",
              medium: "Digital Art",
              date: "2023"
            },
            {
                src: "/images/artfolio/05.png",
              title: "Mystic Garden",
              medium: "Mixed Media",
              date: "2023"
            },
            {
              src: "/images/artfolio/06.png",
              title: "Sunset Dreams",
              medium: "Digital Art",
              date: "2024"
            },
            {
              src: "/images/artfolio/07.png", 
              title: "Urban Rhythm",
              medium: "Acrylic on Canvas",
              date: "2023"
            },
            {
              src: "/images/artfolio/08.jpg",
              title: "Nature's Whisper",
              medium: "Watercolor",
              date: "2023"
            },
            {
              src: "/images/artfolio/09.png",
              title: "Abstract Flow",
              medium: "Digital Art",
              date: "2023"
            },
            {
                src: "/images/artfolio/10.png",
              title: "Mystic Garden",
              medium: "Mixed Media",
              date: "2023"
            },
          ].map((artwork, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artwork.src}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 [filter:grayscale(25%)] group-hover:[filter:grayscale(0%)]"
                  />
                </div>
                {/* <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {artwork.medium} • {artwork.date}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        
      </section>

      <footer className=" border-t border-gray-100 py-8 mt-5">
        <div className="max-w-[1024px] mx-auto px-4 text-center text-gray-600">
        
          <div className="space-y-8">
            
            <hr className="my-10 border-gray-300" />
            <div className="flex justify-center space-x-6">
              <a href="mailto:selvarajan2006@gmail.com" target='_blank' className="text-gray-600 hover:text-yellow-600">Contact</a>
              
              <a href="https://linkedin.com/in/selvarajan-t" className="hover:text-orange-600" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/coder-selvarajan" className="hover:text-orange-600" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/selvarajan.t/" className="hover:text-orange-600" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com/selvarajan_t" className="hover:text-orange-600" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home; 
