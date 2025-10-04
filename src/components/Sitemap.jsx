import { Link } from "react-router-dom";
import { Home, Info, Phone, Briefcase, FileText, Mail } from "lucide-react";
import { FaBullseye, FaLocationDot, FaUsers } from "react-icons/fa6";
import { FaCalculator, FaHistory } from "react-icons/fa";
import { VscGitStashApply } from "react-icons/vsc";
import { SiJordan } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";

const Sitemap = () => {
  const sitemapLinks = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", path: "/", icon: <Home size={18} /> },
        { name: "About Us", path: "/about/company", icon: <Info size={18} /> },
        { name: "Services", path: "/services/loans", icon: <Briefcase size={18} /> },
        // { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
        { name: "History", path: "/about/history", icon: <FaHistory size={18} /> },
        { name: "Mission & Vision", path: "/about/mission", icon: <FaBullseye size={18} /> },
        { name: "Leadership", path: "/about/leadership", icon: <FaUsers size={18} /> },
        { name: "Team", path: "/team", icon: <RiTeamFill size={18} /> },
      ],
    },  
    {
      category: "Resources",
      links: [
        { name: "Gallery", path: "/gallery", icon: <GrGallery /> },
        // { name: "Blog", path: "/blog", icon: <FileText size={18} /> },
        { name: "Careers", path: "/career", icon: <Briefcase size={18} /> },
        { name: "Support", path: "/support", icon: <Mail size={18} /> },
        { name: "Branch Location", path: "/branch-locator", icon: <FaLocationDot size={18} /> },
        { name: "Calculators", path: "/calculators", icon: <FaCalculator size={18} /> },
        { name: "Loan Application Form", path: "/LoanApplicationForm", icon: <VscGitStashApply size={18} /> },
        { name: "Job Application", path: "/job-application", icon: <SiJordan size={18} /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Sitemap
        </h1>
        <p className="text-center text-gray-600 mb-14">
          Explore all the pages of our website in one place.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {sitemapLinks.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-amber-700 mb-4">
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    >
                      <span className="text-amber-600">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Unigold Finance. All Rights Reserved.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Sitemap;
