// import React from "react";

// export default function HazelPortfolio() {
//   return (
//     <div className="w-full font-['Forum',serif] text-black">
//       <WhiteHeader />
//       <CoralTopHero />
//       <CoralHero />
//       <WhiteBlog />
//       <PeachEvents />
//     </div>
//   );
// }

// function WhiteHeader() {
//   return (
//     <header className="bg-white text-black flex justify-between items-center px-8 py-6 shadow-sm">
//       <nav className="flex gap-6 text-sm">
//         <a href="#" className="hover:underline">Blog</a>
//         <a href="#" className="hover:underline">Speaking Events</a>
//       </nav>
//       <h1 className="text-lg font-semibold">Hazel</h1>
//       <button className="border px-4 py-1 rounded hover:bg-gray-100 text-sm">Contact Me</button>
//     </header>
//   );
// }

// function CoralTopHero() {
//   return (
//     <div className="bg-[#f08e80] w-full px-8 py-6 flex justify-between items-center text-white">
//       <nav className="flex gap-6 text-sm opacity-90">
//         <a href="#" className="hover:underline">Blog</a>
//         <a href="#" className="hover:underline">Speaking Events</a>
//       </nav>
//       <h1 className="text-lg font-semibold">Hazel</h1>
//       <button className="border border-white px-4 py-1 rounded text-sm hover:bg-white hover:text-[#f08e80] transition">Contact Me</button>
//     </div>
//   );
// }

// function CoralHero() {
//   return (
//     <section className="bg-[#f08e80] text-white px-8 py-24">
//       <h2 className="text-4xl md:text-5xl font-light max-w-3xl leading-snug">
//         I’m a <span className="italic font-semibold">Scientist</span> and <span className="italic font-semibold">Speaker</span> who is interested in the psychology of greed.
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
//         <div>
//           <h3 className="font-semibold mb-4">My Mission</h3>
//           <p className="leading-relaxed max-w-md">
//             This is my mission. Maecenas a varius odio egestas auctor. Praesent facilisis, ex a gravida ultricies.
//           </p>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-4">Specialties</h3>
//           <div className="grid grid-cols-2 gap-2 text-sm">
//             <span>Public Speaking</span>
//             <span>Data Analysis</span>
//             <span>Strategic Planning</span>
//             <span>User Interviews</span>
//             <span>Writing & Editing</span>
//             <span>Analytics & Data</span>
//             <span>Front-End Dev</span>
//             <span>Programming</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function WhiteBlog() {
//   return (
//     <section className="bg-white text-black px-8 py-20">
//       <h2 className="text-xl font-semibold mb-10">Tech Blog</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm leading-relaxed">
//         <BlogCard title="This Is Your Brain On Helium" date="May 18, 2023" />
//         <BlogCard title="In Search Of Intelligence" date="March 12, 2023" />
//         <BlogCard title="Should Public Transit Be Free?" date="March 2, 2023" />
//       </div>
//     </section>
//   );
// }

// function BlogCard({ title, date }) {
//   return (
//     <div>
//       <h4 className="font-semibold mb-2">{title}</h4>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//       <p className="text-xs mt-2 text-gray-500">{date}</p>
//     </div>
//   );
// }

// function PeachEvents() {
//   return (
//     <section className="bg-[#fdf0e6] text-black px-8 py-20">
//       <h2 className="text-xl font-semibold mb-10">Speaking Events</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm leading-relaxed">
//         <EventCard title="NY Economics Forum" place="New York, NY" date="August 22nd, 2023 - 7:00pm" />
//         <EventCard title="Emerging Tech Meet-Up" place="San Francisco, CA" date="August 29th, 2023 - 7:00pm" />
//         <EventCard title="Creative Code Meetup" place="Denver, CO" date="August 24th, 2023 - 7:00pm" />
//       </div>
//     </section>
//   );
// }

// function EventCard({ title, place, date }) {
//   return (
//     <div>
//       <h4 className="font-semibold">{title}</h4>
//       <p>{place}</p>
//       <p className="text-xs text-gray-500">{date}</p>
//     </div>
//   );
// }
