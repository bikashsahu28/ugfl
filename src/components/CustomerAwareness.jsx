const CustomerAwareness = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-8 px-6">
          <h1 className="text-3xl font-extrabold text-center">Customer Awareness</h1>
          <p className="text-center text-amber-100 mt-2">
            Customer Awareness on Classification of Loan Account as SMA and NPA
          </p>
        </div>

        <div className="p-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            This communication is to increase the awareness of our customers on the concepts of date of overdue, SMA and NPA classification and upgradation, with specific reference to day-end process in line with the RBI Regulations.
          </p>

          <p>
            Pursuant to the Reserve Bank of India (RBI) guidelines on "Prudential norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances – Clarifications" as notified vide circulars dated November 12, 2021 and February 15, 2022, the RBI has clarified the concepts of Overdue dates and Special Mention Account (SMA) / Non Performing Asset (NPA) classification and upgradation of accounts, as mentioned below, to ensure uniformity across all lending institutions.
          </p>

          <h2 className="text-xl font-bold text-amber-700 mt-6">Due date/repayment date:</h2>
          <p>
            It is the date on which the installment comprising of principal / interest billed on the loan account are payable as mentioned in sanction terms/loan agreement.
          </p>

          <h2 className="text-xl font-bold text-amber-700 mt-6">Overdue (default) accounts:</h2>
          <p>
            An account shall be in default when principal / arrears of interest is not paid in full as seen on the respective due date mentioned in sanction terms/loan agreement, such account shall be specified as overdue loan account. The Company shall flag the Loan account as overdue as part of the day-end processes for the due date, irrespective of the time of running such processes.
          </p>

          <h2 className="text-xl font-bold text-amber-700 mt-6">Basis for classification of loans:</h2>
          <p>
            For better understanding, the basis for classification of a loan account as SMA and NPA and an example for the same as mentioned below:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>SMA 0: Up to 30 days</li>
            <li>SMA 1: from 31 to 60 days</li>
            <li>SMA 2: from 61 to 90 days</li>
            <li>NPA: more than 180/ 150/ 120/ 90 days (Considering the applicable norm to company for NPA classification)</li>
          </ul>
          <p>
            Classification of loan accounts as SMA or NPA is done as part of the day-end process of the Company for the relevant date and the SMA or NPA classification date shall be the calendar date for which the day end process is run by the Company.
          </p>

          <h2 className="text-xl font-bold text-amber-700 mt-6">Example for SMA/NPA classification:</h2>
          <p>
            If the due date of a loan account is March 31, 2021, and full dues are not received before the Company runs the day-end process for this date, the date of overdue shall be March 31, 2021. If it continues to remain overdue, then this account shall get tagged as SMA-1 upon running the day-end process on April 30, 2021, i.e., upon completion of 30 days of being continuously overdue. Accordingly, the date of SMA-1 classification for that account shall be April 30, 2021.
          </p>
          <p>
            Similarly, if the account continues to remain overdue, it shall get tagged as SMA-2 upon running day-end process on May 30, 2021 and if continues to remain overdue further, it shall get classified as NPA upon running day-end process as per extant asset classification norms. As per the RBI notification dated November 12, 2021 a loan account classified as NPA will be upgraded as standard asset only if the entire outstanding arrears of principal, interest and/or other amounts due and payable therein are paid by you in full [here the expression "standard asset" means and refers to a loan account which is not required to be classified as SMA or NPA].
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
            <p className="font-semibold text-amber-800">
              In the light of the above, the Company advises all its customers to pay the installments and other amounts, if any, on or before the respective due dates without any delay or default and avoid classification of their accounts as SMA or NPA.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
            <h3 className="font-bold text-blue-800 text-lg">Important Note:</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Pay your installments on time which helps you build your Credit Score</li>
              <li>Higher Credit Score may help you get higher loan value with lower interest rates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAwareness;