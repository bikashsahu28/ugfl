const BoardOfDirectors = () => {
  const directors = [
    { sr: 1, name: "Mr. RIJU GOYAL", designation: "Non Executive Director", din: "11036851" },
    { sr: 2, name: "Mr. AJAY JAIN", designation: "Whole-time Director", din: "01162102" },
    { sr: 3, name: "Mr. AMIT ROY", designation: "Executive Director", din: "10049527" },
    { sr: 4, name: "Mr. POONAM JAIN", designation: "Non Executive Director", din: "02551702" },
    { sr: 5, name: "Mr. AJEET MODI", designation: "Independent Director", din: "09407270" },
    { sr: 6, name: "Mr. VENKATESH G HEGDE", designation: "Independent Director", din: "10274329" },
    { sr: 7, name: "Mr. SUWALAL JAIN MAHAVEER", designation: "Director", din: "00888017" },
  ];

  const keyPersonnel = [
    { name: "N P Sarangi", designation: "Chief Executive Officer" },
    { name: "Milroy Fernandes", designation: "Chief Financial Officer" },
    { name: "Vinita Rathod", designation: "Company Secretary" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-8 px-6">
          <h1 className="text-3xl font-extrabold text-center">Board of Directors</h1>
          <p className="text-center text-amber-100 mt-2">UNIGOLD FINANCE LIMITED</p>
        </div>

        {/* Directors Table */}
        <div className="p-8 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-4">Board Members</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead className="bg-amber-100 text-amber-800">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Sr. No</th>
                    <th className="py-3 px-4 text-left border-b">Name</th>
                    <th className="py-3 px-4 text-left border-b">Designation</th>
                    <th className="py-3 px-4 text-left border-b">DIN</th>
                  </tr>
                </thead>
                <tbody>
                  {directors.map((director) => (
                    <tr key={director.sr} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{director.sr}</td>
                      <td className="py-3 px-4 border-b font-medium">{director.name}</td>
                      <td className="py-3 px-4 border-b">{director.designation}</td>
                      <td className="py-3 px-4 border-b">{director.din}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Managerial Personnel */}
          <section>
            <h2 className="text-2xl font-bold text-amber-700 mb-4">Key Managerial Personnel</h2>
            <ul className="divide-y divide-gray-200">
              {keyPersonnel.map((person, index) => (
                <li key={index} className="py-3 flex justify-between">
                  <span className="font-medium">{person.name}</span>
                  <span className="text-gray-600">{person.designation}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
