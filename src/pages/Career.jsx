import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown, FaBriefcase } from 'react-icons/fa';
import { ArrowRight, Clock, DollarSign, MapPin } from 'lucide-react';
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
  // ==============================================================================
const jobs = [
    {
      id: 1,
      title: "Branch Manager",
      department: "Operations",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      salary: "₹8-12 LPA",
      experience: "5+ years",
      posted: "2 days ago",
      description: "Lead and manage branch operations, drive business growth, and ensure exceptional customer service.",
      responsibilities: [
        "Oversee daily branch operations and staff management",
        "Achieve business targets and revenue goals",
        "Maintain compliance with regulatory requirements",
        "Develop customer relationships and expand business"
      ],
      requirements: [
        "Bachelor's degree in Finance, Business Administration, or related field",
        "5+ years of experience in financial services",
        "Strong leadership and team management skills",
        "Excellent communication and customer service abilities"
      ]
    },
    {
      id: 2,
      title: "Loan Officer",
      department: "Sales",
      location: "Delhi, NCR",
      type: "Full-time",
      salary: "₹4-7 LPA",
      experience: "2+ years",
      posted: "1 week ago",
      description: "Process gold loan applications, evaluate collateral, and provide exceptional customer service.",
      responsibilities: [
        "Process loan applications and documentation",
        "Evaluate gold collateral and determine loan amounts",
        "Provide excellent customer service and support",
        "Meet sales targets and business goals"
      ],
      requirements: [
        "Diploma or degree in Finance, Banking, or related field",
        "2+ years of experience in lending or financial services",
        "Strong attention to detail and organizational skills",
        "Excellent interpersonal and communication skills"
      ]
    },
    {
      id: 3,
      title: "Senior Gold Appraiser",
      department: "Operations",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      salary: "₹6-9 LPA",
      experience: "3+ years",
      posted: "3 days ago",
      description: "Conduct professional gold appraisal, ensure accurate valuation, and maintain quality standards.",
      responsibilities: [
        "Perform accurate gold appraisal and valuation",
        "Ensure quality standards and consistency",
        "Train junior appraisers and support staff",
        "Maintain appraisal records and documentation"
      ],
      requirements: [
        "Certified Gold Appraiser qualification",
        "3+ years of experience in gold appraisal",
        "In-depth knowledge of gold purity and market trends",
        "Attention to detail and precision in work"
      ]
    },
    {
      id: 4,
      title: "Customer Service Executive",
      department: "Customer Support",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      salary: "₹3-5 LPA",
      experience: "1+ years",
      posted: "5 days ago",
      description: "Handle customer inquiries, resolve issues, and provide exceptional service to our valued customers.",
      responsibilities: [
        "Handle customer calls and inquiries",
        "Resolve customer issues and complaints",
        "Process account updates and information requests",
        "Maintain customer satisfaction and loyalty"
      ],
      requirements: [
        "Diploma or degree in any discipline",
        "1+ years of experience in customer service",
        "Excellent communication and problem-solving skills",
        "Proficiency in English and regional languages"
      ]
    },
    {
      id: 5,
      title: "Field Executive",
      department: "Sales",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      salary: "₹3.5-6 LPA",
      experience: "1+ years",
      posted: "4 days ago",
      description: "Generate leads, conduct field visits, and promote our gold loan services to potential customers.",
      responsibilities: [
        "Generate leads and prospects for gold loans",
        "Conduct field visits and customer meetings",
        "Promote company services and products",
        "Achieve sales targets and business goals"
      ],
      requirements: [
        "Diploma or degree in any discipline",
        "1+ years of field sales experience",
        "Own vehicle and valid driving license",
        "Excellent communication and persuasion skills"
      ]
    },
    {
      id: 6,
      title: "Operations Manager",
      department: "Operations",
      location: "Pune, Maharashtra",
      type: "Full-time",
      salary: "₹7-10 LPA",
      experience: "4+ years",
      posted: "1 week ago",
      description: "Oversee operations across multiple branches, ensure efficiency, and implement process improvements.",
      responsibilities: [
        "Manage operations across multiple branches",
        "Implement process improvements and efficiency measures",
        "Ensure compliance with operational standards",
        "Develop and train operations staff"
      ],
      requirements: [
        "Bachelor's degree in Business, Operations, or related field",
        "4+ years of operations management experience",
        "Strong analytical and problem-solving skills",
        "Leadership and team development abilities"
      ]
    }
  ];

  // const [activeTab, setActiveTab] = useState('all');
  // const [selectedJob, setSelectedJob] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   position: '',
  //   experience: '',
  //   resume: null
  // });
  // const handleJobClick = (job) => {
  //   setSelectedJob(job);
  //   setFormData(prev => ({ ...prev, position: job.title }));
  //   setIsModalOpen(true);
  // };

  // const departments = ["all", "operations", "sales", "customer-support", "finance"];


  // ==============================================================================


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
      {/* Hero Section */}
<div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-center overflow-hidden">
  <div className="absolute inset-0 opacity-20">
    <div 
      className="absolute top-0 left-0 w-full h-full bg-repeat" 
      style={{ 
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" 
      }}
      
    ></div>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
      Build Your Career With Us
    </h1>
    <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
      Join Unigold Finance and be part of a team that's transforming gold loans with innovation and integrity
    </p>
  </div>
</div>
    <div className="max-w-7xl mx-auto px-4 py-16">    
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


<section id="jobs" className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h3>
            <p className="text-lg text-gray-600">Find your perfect role in our growing organization</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <div 
            key={job.id} 
            className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                  <p className="text-amber-600 font-semibold">{job.department}</p>
                </div>
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-amber-600" />
                  {job.salary}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  {job.experience}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{job.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{job.posted}</span>
                <button
                  onClick={() => handleJobClick(job)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
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
