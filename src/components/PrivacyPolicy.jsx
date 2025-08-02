import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-8 px-6">
          <h1 className="text-3xl font-extrabold text-center">Privacy Policy</h1>
          <p className="text-center text-amber-100 mt-2">Last updated: 05-December-2022</p>
        </div>

        <div className="p-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>Unigold Finance</strong> (“us”, “we”, or “our”) operates the{" "}
            <a
              href="http://www.unigoldfinance.com"
              className="text-amber-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unigold Finance
            </a>{" "}
            website (the “Service”).
          </p>

          <p>
            This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service.
          </p>

          <p>We will not use or share your information with anyone except as described in this Privacy Policy.</p>

          <p>
            We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our{" "}
            <a
              href="http://www.unigoldfinance.com/terms"
              className="text-amber-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Information Collection And Use</h2>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Telephone number</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Log Data</h2>
          <p>
            We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Cookies</h2>
          <p>
            Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer’s hard drive.
          </p>
          <p>
            We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Service Providers</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.
          </p>
          <p>
            These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Security</h2>
          <p>
            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Links To Other Sites</h2>
          <p>
            Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
          <p>
            We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Children’s Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 18 (“Children”).
          </p>
          <p>
            We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Compliance With Laws</h2>
          <p>
            We will disclose your Personal Information where required to do so by law or subpoena.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Changes To This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please{" "}
            <a
              href="mailto:info@unigoldfinance.com"
              className="text-amber-600 hover:underline"
            >
              contact us
            </a>
            .
          </p>
        </div>

        <div className="bg-gray-100 px-8 py-6 text-center text-sm text-gray-500 border-t">
          &copy; {new Date().getFullYear()} Unigold Finance. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;