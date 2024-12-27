import React, { useState } from 'react';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: {
      title: 'Profile',
      content: {
        name: 'Karan Sabharwal',
        role: 'Security Engineer & Cloud Security Specialist',
        location: 'Bangalore, India',
        email: 'karan.sabharwal07@outlook.com',
        phone: '+91-98885-94509',
        summary: 'Distinguished Security Engineer with expertise in cloud security, application security testing, and blockchain technologies.'
      }
    },
    experience: {
      title: 'Experience',
      content: [
        {
          role: 'Senior Security Engineer',
          company: 'Zee Entertainment',
          period: 'January 2022 - Present',
          highlights: [
            'Architected cloud security framework with Prisma Cloud, PingSafe, Cortex XDR',
            'Engineered custom security tools for advanced penetration testing',
            'Led critical vulnerability assessments identifying zero-day vulnerabilities'
          ]
        },
        {
          role: 'Security Engineering Specialist',
          company: 'Deloitte',
          period: '2022 - January 2023',
          highlights: [
            'Spearheaded enterprise-level security assessments',
            'Engineered advanced OSINT methodologies',
            'Implemented enterprise-grade cloud security solutions'
          ]
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      content: {
        platforms: ['Prisma Cloud', 'PingSafe', 'Cortex XDR', 'AppSentinel'],
        development: ['Full Stack Development', 'Custom Security Tools'],
        languages: ['Python', 'Go', 'Solidity', 'JavaScript'],
        cloud: ['GCP', 'AWS', 'Azure'],
        specialties: ['Zero-Day Research', 'Custom Exploit Development']
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{sections.about.content.name}</h1>
          <h2 className="text-2xl mb-2">{sections.about.content.role}</h2>
          <div className="flex gap-4">
            <span>{sections.about.content.email}</span>
            <span>{sections.about.content.phone}</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`py-4 px-2 font-medium transition-colors ${
                  activeSection === section
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {sections[section].title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8">
        {activeSection === 'about' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed">
              {sections.about.content.summary}
            </p>
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="space-y-6">
            {sections.experience.content.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-600">{exp.role}</h3>
                <h4 className="text-lg text-gray-600 mb-2">{exp.company}</h4>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(sections.skills.content).map(([category, skills]) => (
                <div key={category} className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-600 capitalize mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Resume;