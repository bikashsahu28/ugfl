const RBIDisclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-8 px-6">
          <h1 className="text-3xl font-extrabold text-center">RBI Disclaimer</h1>
          <p className="text-center text-amber-100 mt-2">Last updated: 05-December-2022</p>
        </div>

        <div className="p-8 space-y-6 text-gray-700 leading-relaxed">
            Unigold Finance Limited. The Company is having a valid Certificate of Registration bearing registration Number B-07.00519 issued by the Reserve Bank of India under section 45-IA of the Reserve Bank of India Act, 1934.
            However, the Reserve Bank of India does not accept any responsibility or guarantee about the present position as to the financial soundness of the Company or 
            for the correctness of any of the statements or representations made or opinions expressed by the company and for repayment of deposits/discharge of the liabilities by the Company.
          </div>

        {/* <div className="bg-gray-100 px-8 py-6 text-center text-sm text-gray-500 border-t">
          &copy; {new Date().getFullYear()} Unigold Finance. All rights reserved.
        </div> */}
      </div>
    </div>
  );
};

export default RBIDisclaimer;