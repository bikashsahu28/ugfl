import {
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';
import {  FaBriefcase } from 'react-icons/fa';
import { ArrowRight, Clock, DollarSign, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Career() {


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

  const benefits = [
    {
      icon: <FaBriefcase size={30} className="text-white" />,
      title: "Career Growth",
      description: "Clear progression paths in a growing industry"
    },
    {
      icon: <FaGraduationCap size={30} className="text-white" />,
      title: "Learning & Development",
      description: "Regular training and skill enhancement programs"
    },
    {
      icon: <FaUsers size={30} className="text-white" />,
      title: "Team Culture",
      description: "Collaborative and supportive work environment"
    },
    {
      icon: <FaLightbulb size={30} className="text-white" />,
      title: "Innovation",
      description: "Opportunity to implement new ideas and processes"
    },
    {
      icon: <FaHandshake size={30} className="text-white" />,
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
    <div className="max-w-7xl mx-auto px-4 py-1">    
 {/* Benefits */}

<section className="why-join py-5 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
  {/* Background decorative elements */}

  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
    {/* Section Header */}
    {/* <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
        Why Partner With Us

        </span>
      </h2> */}
      {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Join India's fastest-growing gold loan network and unlock unlimited earning potential
      </p> */}
      {/* <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div> */}
    {/* </div> */}

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-4 gap-6">
      {/* Existing Benefits */}
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="benefit-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100"
        >          
          <div className="relative z-10">
            <div className="benefit-icon mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {benefit.title}
            </h4>
            
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
          
          {/* Hover effect border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-amber-500/0 group-hover:border-amber-500/30 transition-all duration-500"></div>
        </div>
      ))}

      {/* Compensation Card - Premium Style */}
      <div className="benefit-card group relative bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 text-white">
          <div className="benefit-icon mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl font-bold">₹</span>
            </div>
          </div>
          
          <h4 className="text-xl font-bold mb-3">
            Competitive Compensation
          </h4>
          
          <p className="text-white/90 leading-relaxed">
            Attractive salary packages with performance incentives
          </p>
        </div>
        
        {/* Premium badge */}
        <div className="absolute -top-3 -right-3 bg-white text-amber-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-500">
          BEST IN INDUSTRY
        </div>
      </div>
    </div>

    {/* CTA Section */}
    {/* <div className="text-center mt-16">
      <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        Start Earning Today
      </button>
    </div> */}
  </div>
</section>


{/* current openings  */}
<section id="jobs" className="py-20 bg-gradient-to-b  from-white to-white-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
Current Openings
        </span>
      </h3>
            {/* <h3 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h3> */}
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
                {/* <button
                  onClick={() => handleJobClick(job)}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </button> */}

                <Link
  to="/job-application"
  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
>
  Apply Now
  <ArrowRight className="h-4 w-4" />
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>


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
