import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaHandshake, FaGem, FaShieldAlt, FaChartLine, FaLinkedin, FaEnvelope, FaTwitter, FaUserTie } from 'react-icons/fa';

function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: t('team.member1.name'),
      position: t('team.member1.position'),
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: t('team.member1.bio'),
      linkedin: "#",
      email: "team1@example.com"
    },
    {
      id: 2,
      name: t('team.member2.name'),
      position: t('team.member2.position'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: t('team.member2.bio'),
      linkedin: "#",
      email: "team2@example.com"
    },
    {
      id: 3,
      name: t('team.member3.name'),
      position: t('team.member3.position'),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: t('team.member3.bio'),
      linkedin: "#",
      email: "team3@example.com"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white"> 

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Trusted Team</h1>
          <p className="text-lg">Meet the experienced professionals behind Unigold Finance who ensure your gold assets are in safe hands</p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-lg text-gray-700">At Unigold Finance, we combine financial expertise with ethical practices to provide the best gold loan experience</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white shadow rounded">
              <FaHandshake size={40} className="text-primary mx-auto mb-3" />
              <h4 className="text-xl font-semibold">Integrity</h4>
              <p>Honest valuations and transparent transactions</p>
            </div>
            <div className="text-center p-6 bg-white shadow rounded">
              <FaGem size={40} className="text-primary mx-auto mb-3" />
              <h4 className="text-xl font-semibold">Expertise</h4>
              <p>Certified professionals with gold valuation expertise</p>
            </div>
            <div className="text-center p-6 bg-white shadow rounded">
              <FaShieldAlt size={40} className="text-primary mx-auto mb-3" />
              <h4 className="text-xl font-semibold">Security</h4>
              <p>Bank-grade vaults with 24/7 surveillance</p>
            </div>
            <div className="text-center p-6 bg-white shadow rounded">
              <FaChartLine size={40} className="text-primary mx-auto mb-3" />
              <h4 className="text-xl font-semibold">Growth</h4>
              <p>Helping customers achieve financial flexibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
          <p className="text-gray-600 mb-12">
            Our management team brings decades of experience in banking, finance, and precious metals.<br />
            The leadership behind Unigold Finance powering trustworthy gold loan services across India.
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.slice(0, 3).map((member) => (
              <motion.div
                key={member.id}
                variants={item}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a href={member.linkedin}><FaLinkedin className="text-blue-600" /></a>
                    <a href={`mailto:${member.email}`}><FaEnvelope className="text-red-500" /></a>
                    <a href="#"><FaTwitter className="text-sky-400" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operational Team */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Operational Excellence</h2>
          <p className="text-gray-600 mb-12">Meet the professionals who ensure our day-to-day operations meet the highest standards</p>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Placeholder for more team members */}
            {teamMembers.slice(3).map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
            <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-6">
              <FaUserTie size={40} className="text-primary mb-4" />
              <h5 className="text-xl font-semibold mb-1">Join Our Team</h5>
              <p className="text-gray-500 mb-2">We're always looking for talent</p>
              <p className="text-sm text-gray-600">Be part of a growing financial services leader</p>
              <a href="/careers" className="mt-4 inline-block px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">View Openings</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl font-semibold mb-6 md:mb-0">Ready to get a gold loan with confidence?</h3>
          <a href="/apply" className="bg-white text-primary font-bold px-6 py-3 rounded hover:bg-gray-100 transition">Apply Now</a>
        </div>
      </section>
    </div>
  );
}

export default Team;
