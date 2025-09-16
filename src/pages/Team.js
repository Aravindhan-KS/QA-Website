import React from 'react';
import MemberCard from '../components/MemberCard';

const Team = () => {
  // Team members organized by hierarchy
  const heads = [
    {
      id: 1,
      name: "Jaison Jecinth Vincent",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/jaison.png",
      designation: "President",
      year: "3rd Year",
      department: "Computer Science Engineering"
    },
    {
      id: 2,
      name: "Visvam Srinivasan",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/visvam.png",
      designation: "Vice President",
      year: "3rd Year",
      department: "Computer Science Engineering"
    },
    {
      id: 3,
      name: "Mikul Ramesh",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/mikul.png",
      designation: "Co-Heads of Curation",
      year: "4th Year",
      department: "Mechanical Engineering",
    },
    {
      id: 4,
      name: "Akash P S",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/akash.png",
      designation: "Co-Heads of Curation",
      year: "4th Year",
      department: "Mechanical Engineering",
    },
    {
      id: 5,
      name: "Girish Sai D",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/girish.png",
      designation: "Co-Heads of Curation",
      year: "4th Year",
      department: "Information technology",
    },
     {
      id: 6,
      name: "Manoranjan U",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/mano.png",
      designation: "Head of Operations",
      year: "3rd Year",
      department: "Electronics & Communication Engineering",
    },
     {
      id: 7,
      name: "Sasi Kiran L",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/sasi.png",
      designation: "Co-Heads of Marketing",
      year: "3rd Year",
      department: "Computer Science Engineering",
    },
     {
      id: 8,
      name: "Shushmita K",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/sushmitha.png",
      designation: "Co-Heads of Marketing",
      year: "3rd Year",
      department: "Biomedical Engineering",
    },
     {
      id: 9,
      name: "Mohamed Jasim J",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/jasim.png",
      designation: "Head of Contents",
      year: "3rd Year",
      department: "Computer Science Engineering",
    },
     {
      id: 10,
      name: "Sudarshan V",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/Heads/sudharshan.png",
      designation: "Head of Design",
      year: "3rd Year",
      department: "Electronics & Communication Engineering",
    },
  ];

  const seniorCoordinators = [
    {
      id: 11,
      name: "Abhishek S",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/abhishek.png",
      designation: "Operations",
      year: "3rd Year",
      department: "Computer Science Engineering",
    },
    {
      id: 12,
      name: "Manesh Ram",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/manesh.png",
      designation: "Operations",
      year: "3rd Year",
      department: "Computer Science Engineering",
    },
    {
      id: 13,
      name: "Ragotma",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/ragotma.png",
      designation: "Operations",
      year: "3rd Year",
      department: "Computer Science Engineering",
    },
    {
      id: 14,
      name: "Samyuktha Venkatasamy",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/samyuktha.png",
      designation: "Operations",
      year: "3rd Year",
      department: "Industrial Engineering",
    },
    {
      id: 15,
      name: "Jeffrey Samuel Raj P",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/Jeffrey.png",
      designation: "Marketing",
      year: "3rd Year",
      department: "Electronics & Communication Engineering",
    },
    {
      id: 16,
      name: "Parthasarathi N S",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/parthasarathy.png",
      designation: "Contents",
      year: "2nd Year",
      department: "Medical Physics",
    },
    {
      id: 17,
      name: "Suvi Sharon",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/suvi.png",
      designation: "Contents",
      year: "3rd Year",
      department: "Computer Science Engineering",
    },
    {
      id: 18,
      name: "Nagarajan S",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/nagarajan.png",
      designation: "Design",
      year: "3rd Year",
      department: "Mechanical Engineering",
    },
    {
      id: 19,
      name: "Roshon R",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/roshon.png",
      designation: "Design",
      year: "3rd Year",
      department: "Biomedical Engineering",
    },
    {
      id: 20,
      name: "A Mohammed Saalih",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/saalih.png",
      designation: "Design",
      year: "3rd Year",
      department: "Computer Science Engineering",
    },
    {
      id: 21,
      name: "Aravindhan S",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/SCs/aravindhan.png",
      designation: "Tech",
      year: "3rd Year",
      department: "Computer Science Engineering",
    },
  ];

  const juniorCoordinators = [
    {
      id: 22,
      name: "Arunprasath M",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/JCs/arunprasath.png",
      designation: "Operations",
      year: "2nd Year",
      department: "Mechanical Engineering",
    },
    {
      id: 23,
      name: "Srivishnu Rajkrishna",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/JCs/shrivishnu.png",
      designation: "Marketing",
      year: "2nd Year",
      department: "Computer Science Engineering",
    },
    {
      id: 24,
      name: "Sachin C K S",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/JCs/sachin.png",
      designation: "Contents",
      year: "2nd Year",
      department: "Mechanical Engineering",
    },
    {
      id: 25,
      name: "Kaviya",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/JCs/kaviya.png",
      designation: "Design",
      year: "2nd Year",
      department: "Computer Science Engineering",
    },
    {
      id: 26,
      name: "Ramkumar R",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/JCs/ramkumar.png",
      designation: "Design",
      year: "2nd Year",
      department: "Mechanical Engineering",
    },
    {
      id: 27,
      name: "Sujitha",
      photo: "https://8hyelfuh7tofazza.public.blob.vercel-storage.com/JCs/sujitha.png",
      designation: "Design",
      year: "2nd Year",
      department: "Electrical & Communication Engineering",
    }
  ];

  const allMembers = [...heads, ...seniorCoordinators, ...juniorCoordinators];

  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Our Team</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Meet the passionate individuals behind Quizzers Anonymous. Our diverse team brings together 
            students from various departments, united by a shared love for knowledge and learning.
          </p>
        </div>

        {/* Heads Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Heads</h2>
            <div className="w-24 h-1 bg-accent-yellow mx-auto"></div>
            <p className="text-dark-text-secondary mt-4 max-w-2xl mx-auto">
              The leadership team that guides our vision and strategic direction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heads.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Senior Coordinators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Senior Coordinators</h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
            <p className="text-dark-text-secondary mt-4 max-w-2xl mx-auto">
              Experienced members who manage specialized areas and mentor junior coordinators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seniorCoordinators.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Junior Coordinators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Junior Coordinators</h2>
            <div className="w-24 h-1 bg-accent-green mx-auto"></div>
            <p className="text-dark-text-secondary mt-4 max-w-2xl mx-auto">
              Our enthusiastic newer members who bring fresh ideas and energy to the team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {juniorCoordinators.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-accent-yellow mb-2">{heads.length}</div>
            <div className="text-dark-text-secondary">Heads</div>
          </div>
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">{seniorCoordinators.length}</div>
            <div className="text-dark-text-secondary">Senior Coordinators</div>
          </div>
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-accent-green mb-2">{juniorCoordinators.length}</div>
            <div className="text-dark-text-secondary">Junior Coordinators</div>
          </div>
          <div className="bg-dark-card rounded-lg border border-dark-border p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{allMembers.length}</div>
            <div className="text-dark-text-secondary">Total Members</div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-dark-surface to-dark-card rounded-lg border border-dark-border p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-dark-text">Want to Join Our Team?</h2>
          <p className="text-xl mb-6 text-dark-text-secondary">
            We're always looking for passionate individuals who share our love for knowledge and quizzing. 
            Join us and be part of an amazing community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-accent-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a 
              href="https://www.instagram.com/cegquizclub"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent-cyan text-accent-cyan px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan hover:text-black transition-colors duration-200"
            >
              Follow Us
            </a>
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Our Alumni</h2>
            <p className="text-dark-text-secondary max-w-2xl mx-auto">
              We're proud of our alumni who have gone on to achieve great things in their careers 
              while maintaining their passion for learning and knowledge sharing.
            </p>
          </div>
          
          <div className="bg-dark-card rounded-lg border border-dark-border p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-dark-text mb-2">100+</div>
                <div className="text-dark-text-secondary">Alumni Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-dark-text mb-2">25+</div>
                <div className="text-dark-text-secondary">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-dark-text mb-2">15+</div>
                <div className="text-dark-text-secondary">Countries</div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-dark-text-secondary mb-4">
                Our alumni network spans across top companies like Google, Microsoft, Amazon, and many more. 
                Stay connected with us through our alumni network.
              </p>
              <a 
                href="mailto:quizzersanonymous@gmail.com?subject=Alumni%20Network"
                className="inline-flex items-center space-x-2 bg-accent-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Join Alumni Network</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;