import React from 'react';
import { Mail, Globe, Instagram, Twitter, Linkedin, MapPin, Briefcase, Heart, Star } from 'lucide-react';
import abbieePhoto from './assets/abbiee.jpg';

const AbbieesPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* First Section - A Legal Engineer */}
      <section className="min-h-screen bg-white flex items-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-2xl text-gray-700 max-w-md font-serif font-semibold flex items-center justify-end">
                  Hi everyone, my name is
                </p>
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 font-serif flex items-center justify-center">Abigail</div>
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 font-serif flex items-center justify-center">Ebiware</div>
                <h1 className="text-4xl md:text-4xl font-bold font-serif text-green-500 leading-tight flex items-center justify-center">
                  I am a Legal Engineer
                </h1>
              </div>
            </div>

            {/* Right Side - Hannah's Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-100 h-96 lg:w-120 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                <img
                  src={abbieePhoto}
                  alt="Abigail Ebiware"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-2xl font-bold">
              A Quick Background
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-center">
                  <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">I'm based in</h3>
                  <p className="text-gray-700 font-semibold text-lg leading-relaxed">
                    Abuja,<br />
                    The Federal Capital Territory,<br />
                    Nigera
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-center">
                  <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">I work at</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 font-semibold text-lg">
                      LAWYERED UP<br />
                      <span className="text-green-600">(The Best LegalTech Company)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Roles Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="text-center">
                  <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">My role is</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-semibold text-lg">
                      LEGAL<br />
                      ENGINEER
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Here's a showcase of my
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400">
              creative work!
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="group">
                <div className={`aspect-square rounded-3xl overflow-hidden ${i % 3 === 0 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                    i % 3 === 1 ? 'bg-gradient-to-br from-gray-700 to-black' :
                      'bg-gradient-to-br from-green-500 to-green-700'
                  } hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star size={24} />
                      </div>
                      <p className="text-lg font-semibold">Portfolio Piece {i + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-black text-white px-8 py-4 rounded-full text-2xl md:text-3xl font-bold">
              Three Fun Facts
            </div>
          </div>

          <div className="space-y-16">
            {/* Fact 1 - Freelancer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-green-50 rounded-3xl p-8 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  I learnt how to code while in university.
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  While studying Law, I started to learn how to code using a booked called "Coding for Dummies"
                </p>
              </div>
              <div className="h-64 lg:h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Briefcase size={48} />
                  <p className="text-xl font-bold mt-4">A Lawyer that Codes</p>
                </div>
              </div>
            </div>

            {/* Fact 2 - Blog */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-64 lg:h-80 bg-gradient-to-br from-gray-800 to-black rounded-3xl flex items-center justify-center order-2 lg:order-1">
                <div className="text-white text-center">
                  <Globe size={48} />
                  <p className="text-xl font-bold mt-4">A LegalTech Organization</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  I founded a legal tech organization.
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  At Lawyers Who Code, we equip lawyers with technical skills to solve problems within the legal industry.
                </p>
              </div>
            </div>

            {/* Fact 3 - Art Materials */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-green-50 rounded-3xl p-8 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  I love reading.
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  As at today, I have read 65 books in 2025.
                </p>
              </div>
              <div className="h-64 lg:h-80 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Heart size={48} />
                  <p className="text-xl font-bold mt-4">A Book Nerd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Things I Love Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Things I Love
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              These are just some of the things that make me feel alive!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: 'Law', icon: Heart, color: 'from-green-400 to-green-600' },
              { name: 'Tech', icon: Star, color: 'from-gray-600 to-gray-800' },
              { name: 'Anime', icon: Heart, color: 'from-green-500 to-green-700' },
              { name: 'Research', icon: Star, color: 'from-gray-700 to-gray-900' },
              { name: 'Reading', icon: Heart, color: 'from-green-600 to-green-800' },
              { name: 'Dresses', icon: Star, color: 'from-gray-800 to-black' },
              { name: 'Innovation', icon: Heart, color: 'from-green-400 to-green-700' },
              { name: 'Writing', icon: Star, color: 'from-gray-600 to-gray-900' }
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300`}
                >
                  <IconComponent size={24} className="text-white mb-2" />
                  <p className="text-white font-semibold text-center text-sm">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact/Closing Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Looking forward to working with you!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-white" size={28} />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">LAWYERED UP</p>
            </div>

            {/* Email */}
            <div className="bg-black rounded-3xl p-8 text-center shadow-xl">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Address</h3>
              <p className="text-green-400 font-semibold text-sm break-all">abigailtariere@gmail.com</p>
            </div>

            {/* Website */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">My Website</h3>
              <p className="text-gray-700 font-semibold">abigailebiware.com</p>
            </div>

            {/* Socials */}
            <div className="bg-black rounded-3xl p-8 text-center shadow-xl">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">My Socials</h3>
              <div className="flex justify-center space-x-4">
                <Instagram className="text-green-400 hover:text-green-300 cursor-pointer" size={24} />
                <Twitter className="text-green-400 hover:text-green-300 cursor-pointer" size={24} />
                <Linkedin className="text-green-400 hover:text-green-300 cursor-pointer" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbbieesPortfolio;