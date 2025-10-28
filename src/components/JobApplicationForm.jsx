import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaRedo } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    salary: '',
    education: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const validateFile = (file) => {
    if (!file) return false;
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    return validTypes.includes(file.type) && file.size <= maxSize;
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.education) newErrors.education = 'Please select education level';
    if (!formData.experience) newErrors.experience = 'Please select experience level';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    else if (!validateFile(formData.resume)) newErrors.resume = 'Please upload a valid PDF or DOC file (max 5MB)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));

    if (errors.resume) {
      setErrors(prev => ({
        ...prev,
        resume: ''
      }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!formData.fullName || !formData.email || !formData.phone || !formData.position) {
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please fill all required fields before submitting!",
      confirmButtonColor: "#3085d6",
    });
    return;
  }

  try {
    // Create FormData to handle file upload
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("location", formData.location);
    data.append("position", formData.position);
    data.append("salary", formData.salary);
    data.append("education", formData.education);
    data.append("experience", formData.experience);
    data.append("coverLetter", formData.coverLetter);
    data.append("resume", formData.resume); // File input

    // Send data to backend
    const res = await axios.post("http://localhost:3000/api/postjob", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.status === 200 || res.status === 201) {
      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "Your application has been submitted successfully.",
        confirmButtonColor: "#3085d6",
      });
      resetForm(); // clear form
    } else {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    Swal.fire({
      icon: "error",
      title: "Server Error",
      text: "An error occurred while submitting your application.",
      confirmButtonColor: "#d33",
    });
  }
};

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      position: '',
      salary: '',
      education: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
    setErrors({});
    
    // Reset file input
    const fileInput = document.getElementById('resume-upload');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Join Our Team at <span className="text-yellow-600">Unigold Finance</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're looking for talented individuals to help us provide exceptional gold loan services to our customers.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Job Application Form</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FaUser className="mr-2 text-yellow-600" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+1234567890"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Current City *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full pl-10 px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                        errors.location ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="New York, USA"
                    />
                  </div>
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>
              </div>
            </div>

            {/* Position Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FaBriefcase className="mr-2 text-yellow-600" />
                Position Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Position */}
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                      errors.position ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a position</option>
                    <option value="loan-officer">Loan Officer</option>
                    <option value="gold-appraiser">Gold Appraiser</option>
                    <option value="customer-service">Customer Service Representative</option>
                    <option value="branch-manager">Branch Manager</option>
                    <option value="it-specialist">IT Specialist</option>
                    <option value="marketing">Marketing Executive</option>
                  </select>
                  {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                </div>

                {/* Salary */}
                <div>
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Salary (USD)
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="e.g. ₹40,000 - ₹50,000"
                  />
                </div>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="mb-8">
              <div className="space-y-6">
<div className="mb-8">
  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
    <FaGraduationCap className="mr-2 text-yellow-600" />
    Education & Experience
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Education */}
    <div>
      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
        Highest Education Level *
      </label>
      <select
        id="education"
        name="education"
        value={formData.education}
        onChange={handleInputChange}
        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
          errors.education ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="">Select education level</option>
        <option value="high-school">High School Diploma</option>
        <option value="associate">Associate Degree</option>
        <option value="bachelor">Bachelor's Degree</option>
        <option value="master">Master's Degree</option>
        <option value="phd">PhD</option>
        <option value="other">Other</option>
      </select>
      {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
    </div>

    {/* Experience */}
    <div>
      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
        Years of Relevant Experience *
      </label>
      <select
        id="experience"
        name="experience"
        value={formData.experience}
        onChange={handleInputChange}
        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
          errors.experience ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="">Select experience</option>
        <option value="0-1">0-1 years</option>
        <option value="2-4">2-4 years</option>
        <option value="5-7">5-7 years</option>
        <option value="8-10">8-10 years</option>
        <option value="10+">10+ years</option>
      </select>
      {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
    </div>
  </div>
</div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume-upload" className="block text-sm font-medium text-gray-700 mb-1">
                    Resume/CV *
                  </label>
                  <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 rounded-md ${
                    errors.resume ? 'border-red-500' : 'border-gray-300 border-dashed'
                  }`}>
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="resume-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input 
                            id="resume-upload" 
                            name="resume" 
                            type="file" 
                            onChange={handleFileChange}
                            className="sr-only" 
                            accept=".pdf,.doc,.docx"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                      {formData.resume && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>
                  {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Tell us why you'd be a great fit for this position..."
                ></textarea>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white font-medium rounded-md hover:from-yellow-700 hover:to-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300"
              >
                Submit Application
              </button>
              
              <button
                type="button"
                onClick={resetForm}
                className="px-8 py-3 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 flex items-center"
              >
                <FaRedo className="mr-2" />
                Reset Form
              </button>
            </div>
          </form>
        </div>
{/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline">Your application has been submitted successfully.</span>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for applying to Unigold Finance. We'll review your application 
              and contact you within 5-7 business days.
            </p>
          </div>
        )}
        {/* Company Info Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Unigold Finance | HR Department</p>
          <p className="mt-1">We'll contact you within 5-7 business days after reviewing your application.</p>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;