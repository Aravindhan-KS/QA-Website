import React from 'react';
import MemberCard from '../components/MemberCard';
import teamData from '../data/team.json';

const Team = () => {
  const { heads, seniorCoordinators, juniorCoordinators } = teamData;
  const allMembers = [...heads, ...seniorCoordinators, ...juniorCoordinators];

  return (
    <div className="min-h-screen relative overflow-hidden py-8">
      {/* Global grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the Team Anonymous, the ones behind the trivia and fun!
          </p>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Heads Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Heads</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heads.map((member) => (
              <MemberCard key={member.id} member={member} role="head" />
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Senior Coordinators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Senior Coordinators</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorCoordinators.map((member) => (
              <MemberCard key={member.id} member={member} role="senior" />
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 my-6"></div>

        {/* Junior Coordinators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Junior Coordinators</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {juniorCoordinators.map((member) => (
              <MemberCard key={member.id} member={member} role="junior" />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-yellow mb-2">{heads.length}</div>
            <div className="text-gray-300">Heads</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">{seniorCoordinators.length}</div>
            <div className="text-gray-300">Senior Coordinators</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-green mb-2">{juniorCoordinators.length}</div>
            <div className="text-gray-300">Junior Coordinators</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{allMembers.length}</div>
            <div className="text-gray-300">Total Members</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
