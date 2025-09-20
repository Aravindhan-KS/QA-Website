import React from 'react';
import MemberCard from '../components/MemberCard';
import teamData from '../data/team.json';

const Team = () => {
  const { heads, seniorCoordinators, juniorCoordinators } = teamData;
  const allMembers = [...heads, ...seniorCoordinators, ...juniorCoordinators];

  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text mb-4">Our Team</h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto">
            Meet the Team Anonymous, the ones behind the trivia and fun!
          </p>
        </div>

        {/* Heads Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Heads</h2>
            <div className="w-24 h-1 bg-accent-yellow mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heads.map((member) => (
              <MemberCard key={member.id} member={member} role="head" />
            ))}
          </div>
        </div>

        {/* Senior Coordinators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Senior Coordinators</h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seniorCoordinators.map((member) => (
              <MemberCard key={member.id} member={member} role="senior" />
            ))}
          </div>
        </div>

        {/* Junior Coordinators Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-text mb-4">Junior Coordinators</h2>
            <div className="w-24 h-1 bg-accent-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {juniorCoordinators.map((member) => (
              <MemberCard key={member.id} member={member} role="junior" />
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
      </div>
    </div>
  );
};

export default Team;
