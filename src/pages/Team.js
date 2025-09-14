import React from 'react';
import MemberCard from '../components/MemberCard';

const Team = () => {
  // Mock team members data
  const teamMembers = [
    {
      id: 1,
      name: "Arjun Krishnamurthy",
      photo: "/api/placeholder/300/300",
      designation: "President",
      year: "4th Year",
      department: "Computer Science Engineering",
      instagram: "https://instagram.com/arjunk",
      linkedin: "https://linkedin.com/in/arjunk"
    },
    {
      id: 2,
      name: "Priya Rajesh",
      photo: "/api/placeholder/300/300",
      designation: "Vice President",
      year: "3rd Year",
      department: "Electronics & Communication Engineering",
      instagram: "https://instagram.com/priyar",
      linkedin: "https://linkedin.com/in/priyar"
    },
    {
      id: 3,
      name: "Vikram Suresh",
      photo: "/api/placeholder/300/300",
      designation: "Secretary",
      year: "3rd Year",
      department: "Mechanical Engineering",
      instagram: "https://instagram.com/vikrams",
      linkedin: "https://linkedin.com/in/vikrams"
    },
    {
      id: 4,
      name: "Divya Menon",
      photo: "/api/placeholder/300/300",
      designation: "Treasurer",
      year: "2nd Year",
      department: "Civil Engineering",
      instagram: "https://instagram.com/divyam",
      linkedin: "https://linkedin.com/in/divyam"
    },
    {
      id: 5,
      name: "Rahul Sharma",
      photo: "/api/placeholder/300/300",
      designation: "Quiz Master",
      year: "4th Year",
      department: "Information Technology",
      instagram: "https://instagram.com/rahuls",
      linkedin: "https://linkedin.com/in/rahuls"
    },
    {
      id: 6,
      name: "Sneha Patel",
      photo: "/api/placeholder/300/300",
      designation: "Content Head",
      year: "3rd Year",
      department: "Biomedical Engineering",
      instagram: "https://instagram.com/snehap",
      linkedin: "https://linkedin.com/in/snehap"
    },
    {
      id: 7,
      name: "Karthik Raman",
      photo: "/api/placeholder/300/300",
      designation: "Events Coordinator",
      year: "2nd Year",
      department: "Electrical & Electronics Engineering",
      instagram: "https://instagram.com/karthikr",
      linkedin: "https://linkedin.com/in/karthikr"
    },
    {
      id: 8,
      name: "Aishwarya Nair",
      photo: "/api/placeholder/300/300",
      designation: "Design Head",
      year: "2nd Year",
      department: "Architecture",
      instagram: "https://instagram.com/aishwaryan",
      linkedin: "https://linkedin.com/in/aishwaryan"
    },
    {
      id: 9,
      name: "Adithya Venkat",
      photo: "/api/placeholder/300/300",
      designation: "Technical Lead",
      year: "3rd Year",
      department: "Computer Science Engineering",
      instagram: "https://instagram.com/adithyav",
      linkedin: "https://linkedin.com/in/adithyav"
    },
    {
      id: 10,
      name: "Meera Krishnan",
      photo: "/api/placeholder/300/300",
      designation: "Social Media Manager",
      year: "1st Year",
      department: "Chemical Engineering",
      instagram: "https://instagram.com/meerak",
      linkedin: "https://linkedin.com/in/meerak"
    },
    {
      id: 11,
      name: "Rohan Das",
      photo: "/api/placeholder/300/300",
      designation: "Research Coordinator",
      year: "2nd Year",
      department: "Metallurgical Engineering",
      instagram: "https://instagram.com/rohand",
      linkedin: "https://linkedin.com/in/rohand"
    },
    {
      id: 12,
      name: "Kavya Subramanian",
      photo: "/api/placeholder/300/300",
      designation: "Public Relations",
      year: "1st Year",
      department: "Textile Technology",
      instagram: "https://instagram.com/kavyas",
      linkedin: "https://linkedin.com/in/kavyas"
    }
  ];

  // Separate core team (first 4 members) from other members
  const coreTeam = teamMembers.slice(0, 4);
  const otherMembers = teamMembers.slice(4);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind Quizzers Anonymous. Our diverse team brings together 
            students from various departments, united by a shared love for knowledge and learning.
          </p>
        </div>

        {/* Core Team Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Team</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Members</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{teamMembers.length}</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4</div>
            <div className="text-gray-600">Academic Years</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Events Organized</div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-6 text-gray-200">
            We're always looking for passionate individuals who share our love for knowledge and quizzing. 
            Join us and be part of an amazing community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a 
              href="https://instagram.com/quizzersanonymous"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Follow Us
            </a>
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Alumni</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud of our alumni who have gone on to achieve great things in their careers 
              while maintaining their passion for learning and knowledge sharing.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Alumni Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600 mb-4">
                Our alumni network spans across top companies like Google, Microsoft, Amazon, and many more. 
                Stay connected with us through our alumni network.
              </p>
              <a 
                href="mailto:quizzersanonymous@gmail.com?subject=Alumni%20Network"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
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