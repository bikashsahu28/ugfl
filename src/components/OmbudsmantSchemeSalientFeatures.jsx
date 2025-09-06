
import React, { useState } from 'react';
import { IoDocumentOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

const OmbudsmantSchemeSalientFeatures = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  
  // Sample PDF data - replace with your actual PDF files
  const pdfFiles = [
    { id: 1, name: 'Ombudsman-Scheme-Salient-Features-Eng', language: 'English', url: '../PoshPolicy/Ombudsman-Scheme-Salient-Features-Eng.pdf', icon: 'EN' },
    { id: 2, name: 'Ombudsman-Scheme-Salient-Features-Hindi', language: 'हिंदी', url: '../PoshPolicy/Ombudsman-Scheme-Salient-Features-Hindi.pdf', icon: 'हि' },
    { id: 3, name: 'Ombudsman-Scheme-Salient-Features-Odiya', language: 'ଓଡ଼ିଆ', url: '../PoshPolicy/Ombudsman-Scheme-Salient-Features-Odiya_compressed.pdf', icon: 'ଓଡ଼' },
    { id: 4, name: 'Ombudsman-Scheme-Salient-Features-Telugu', language: 'తెలుగు', url: '../PoshPolicy/OMbudsman-Scheme-Salient-Features-Telugu_compressed.pdf', icon: 'తె' },
  ];

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  const closePdfViewer = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
        <div className="p-8">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
              <IoDocumentOutline className="h-6 w-6 text-white" />

            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Ombudsman Scheme Salient Features</h1>
              <p className="text-gray-600 mt-1">Access official documents in multiple languages</p>
            </div>
          </div>
          
          {!selectedPdf ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pdfFiles.map((pdf) => (
                <div 
                  key={pdf.id} 
                  className="bg-white rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 hover:border-yellow-200 group"
                  onClick={() => handlePdfClick(pdf)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-yellow-500 group-hover:to-red-600 transition-all duration-300">
                    <span className="text-white font-bold text-sm">{pdf.icon}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">{pdf.name.replace(/-/g, ' ')}</h3>
                  <p className="text-red-600 text-xs font-medium">{pdf.language}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">PDF Document</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-yellow-500 to-red-600 text-white">
                <div>
                  <h2 className="text-xl font-semibold">{selectedPdf.name.replace(/-/g, ' ')}</h2>
                  <p className="text-yellow-100 text-sm mt-1">{selectedPdf.language} Document</p>
                </div>
                <button
                  onClick={closePdfViewer}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
                >
                  <RxCross2 className="h-5 w-5" />

                </button>
              </div>
              <div className="h-96 md:h-[600px] lg:h-[700px] bg-gray-900">
                <iframe
                  src={selectedPdf.url}
                  title={selectedPdf.name}
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Document: {selectedPdf.name}.pdf</span>
                  <span>Language: {selectedPdf.language}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OmbudsmantSchemeSalientFeatures;