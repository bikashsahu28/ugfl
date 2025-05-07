import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown, FaBriefcase } from 'react-icons/fa';
function Career() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Gold Loan Officer",
      type: "Full-time",
      location: "Mumbai, Delhi, Bangalore",
      description: "We're looking for customer-focused individuals to join our gold loan operations team.",
      responsibilities: [
        "Evaluate gold items for loan eligibility",
        "Process loan applications and documentation",
        "Provide excellent customer service",
        "Maintain accurate records of transactions"
      ],
      requirements: [
        "Bachelor's degree in any field",
        "1+ years in banking/financial services (preferred)",
        "Strong communication skills",
        "Basic computer proficiency"
      ]
    },
    {
      id: 2,
      title: "Gold Valuation Expert",
      type: "Full-time",
      location: "Mumbai",
      description: "Join our team of certified gold valuation professionals.",
      responsibilities: [
        "Accurately assess gold purity and weight",
        "Use specialized equipment for testing",
        "Maintain valuation records",
        "Stay updated on gold market trends"
      ],
      requirements: [
        "Certification in gold valuation (required)",
        "3+ years experience in gold appraisal",
        "Knowledge of hallmarking standards",
        "Attention to detail"
      ]
    },
    {
      id: 3,
      title: "Branch Manager",
      type: "Full-time",
      location: "Multiple Locations",
      description: "Lead our gold loan branch operations and team.",
      responsibilities: [
        "Oversee daily branch operations",
        "Manage loan portfolio and targets",
        "Lead and motivate branch staff",
        "Ensure regulatory compliance"
      ],
      requirements: [
        "5+ years in banking/financial services",
        "2+ years in managerial role",
        "Strong leadership skills",
        "Knowledge of RBI regulations"
      ]
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      type: "Full-time",
      location: "Mumbai (Remote possible)",
      description: "Drive our online presence and customer acquisition.",
      responsibilities: [
        "Develop and execute digital campaigns",
        "Manage social media channels",
        "Optimize website for lead generation",
        "Analyze campaign performance"
      ],
      requirements: [
        "3+ years digital marketing experience",
        "Proficiency in SEO/SEM",
        "Experience with analytics tools",
        "Creative content creation skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaBriefcase size={30} className="text-primary" />,
      title: "Career Growth",
      description: "Clear progression paths in a growing industry"
    },
    {
      icon: <FaGraduationCap size={30} className="text-primary" />,
      title: "Learning & Development",
      description: "Regular training and skill enhancement programs"
    },
    {
      icon: <FaUsers size={30} className="text-primary" />,
      title: "Team Culture",
      description: "Collaborative and supportive work environment"
    },
    {
      icon: <FaLightbulb size={30} className="text-primary" />,
      title: "Innovation",
      description: "Opportunity to implement new ideas and processes"
    },
    {
      icon: <FaHandshake size={30} className="text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible policies to support your wellbeing"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">Build Your Career With Us</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Join Unigold Finance and be part of a team that's transforming gold loans with innovation and integrity
      </p>
 {/* Benefits */}
<section className="why-join py-16 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="grid md:grid-cols-3 gap-8">
{benefits.map((benefit, index) => (
<div
className="benefit-card text-center p-6 rounded-lg shadow hover:shadow-lg transition-shadow h-full bg-white"
key={index}
>
<div className="benefit-icon mb-4 flex justify-center">
{benefit.icon}
</div>
<h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
<p className="text-gray-600">{benefit.description}</p>
</div>
))}
      {/* Extra Benefit: Compensation */}
      <div className="benefit-card text-center p-6 rounded-lg shadow hover:shadow-lg transition-shadow h-full bg-white">
        <div className="benefit-icon mb-4">
          <div className="text-primary text-3xl font-bold">₹</div>
        </div>
        <h4 className="text-xl font-semibold mb-2">Competitive Compensation</h4>
        <p className="text-gray-600">Attractive salary packages with performance incentives</p>
      </div>
    </div>
  </div>
</section>
<div className="w-full bg-gray-100 py-16">
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className="max-w-6xl mx-auto px-4"
  >
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Current Openings</h2>
      <p className="text-lg text-gray-600">
        Explore opportunities to join our growing team across India
      </p>
    </div>

    <div className="space-y-6">
      {jobOpenings.map((job, index) => (
        <Disclosure key={job.id}>
          {({ open }) => (
            <motion.div
              variants={item}
              className="bg-white rounded-lg shadow-lg transition-shadow"
            >
              <Disclosure.Button className="w-full px-6 py-5 flex justify-between items-center text-left text-xl font-semibold">
                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-primary text-2xl" />
                  <span>{job.title}</span>
                </div>
                <FaChevronDown
                  className={`text-gray-500 transform transition-transform ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-6 pb-6 text-gray-700 text-base">
                <p className="mb-4">{job.description}</p>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h6 className="font-semibold mb-2 text-lg">Responsibilities:</h6>
                    <ul className="list-disc list-inside">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold mb-2 text-lg">Requirements:</h6>
                    <ul className="list-disc list-inside">
                      {job.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href={`/apply?position=${encodeURIComponent(job.title)}`}
                    className="inline-block px-8 py-3 mt-4 text-white bg-primary hover:bg-primary-dark rounded-lg text-base font-medium"
                  >
                    Apply Now
                  </a>
                </div>
              </Disclosure.Panel>
            </motion.div>
          )}
        </Disclosure>
      ))}

      <div className="text-center mt-12">
        <p className="mb-4 text-lg font-medium">Don't see your perfect role?</p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium"
        >
          Contact Us About Future Opportunities
        </a>
      </div>
    </div>
  </motion.div>
</div>
 {/* Culture Section */}
{/* <section class="culture-section py-5 bg-light">
  <div class="container">
    <div class="row align-items-center">

      <div class="col-lg-6 mb-4 mb-lg-0">
        <img 
          src="/images/careers/team-culture.jpg" 
          alt="Our Team Culture" 
          class="img-fluid rounded-3 shadow-sm"
        />
      </div>
      <div class="col-lg-6">
        <h2 class="fw-bold mb-4 text-primary">Our Work Culture</h2>
        <p class="lead text-dark mb-3">
          At Unigold Finance, we believe our people are our greatest asset.
        </p>
        <p class="text-muted mb-4">
          We foster a workplace that values collaboration, innovation, and mutual respect. Here's what makes our culture special:
        </p>
        <ul class="list-unstyled">
          <li class="d-flex align-items-start mb-3">
            <i class="bi bi-people-fill text-primary me-2 fs-5"></i>
            <span>Regular team-building activities and events</span>
          </li>
          <li class="d-flex align-items-start mb-3">
            <i class="bi bi-chat-dots-fill text-primary me-2 fs-5"></i>
            <span>Open communication channels with leadership</span>
          </li>
          <li class="d-flex align-items-start mb-3">
            <i class="bi bi-lightbulb-fill text-primary me-2 fs-5"></i>
            <span>Opportunities to contribute ideas and solutions</span>
          </li>
          <li class="d-flex align-items-start mb-3">
            <i class="bi bi-award-fill text-primary me-2 fs-5"></i>
            <span>Recognition programs for outstanding performance</span>
          </li>
          <li class="d-flex align-items-start mb-3">
            <i class="bi bi-globe-asia-australia text-primary me-2 fs-5"></i>
            <span>Community involvement and outreach initiatives</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section> */}
{/* Culture Section */}
<section className="culture-section py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Image */}
      <div>
        <img
          src="/images/careers/team-culture.jpg"
          alt="Our Team Culture"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-6">Our Work Culture</h2>
        <p className="text-lg text-gray-700 mb-4">
          At Unigold Finance, we believe our people are our greatest asset.
        </p>
        <p className="text-gray-600 mb-6">
          We foster a workplace that values collaboration, innovation, and mutual respect. Here's what makes our culture special:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <i className="bi bi-people-fill text-primary text-xl mr-3 mt-1"></i>
            <span className="text-gray-700">Regular team-building activities and events</span>
          </li>
          <li className="flex items-start">
            <i className="bi bi-chat-dots-fill text-primary text-xl mr-3 mt-1"></i>
            <span className="text-gray-700">Open communication channels with leadership</span>
          </li>
          <li className="flex items-start">
            <i className="bi bi-lightbulb-fill text-primary text-xl mr-3 mt-1"></i>
            <span className="text-gray-700">Opportunities to contribute ideas and solutions</span>
          </li>
          <li className="flex items-start">
            <i className="bi bi-award-fill text-primary text-xl mr-3 mt-1"></i>
            <span className="text-gray-700">Recognition programs for outstanding performance</span>
          </li>
          <li className="flex items-start">
            <i className="bi bi-globe-asia-australia text-primary text-xl mr-3 mt-1"></i>
            <span className="text-gray-700">Community involvement and outreach initiatives</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
    </div>
  );
}

export default Career;
