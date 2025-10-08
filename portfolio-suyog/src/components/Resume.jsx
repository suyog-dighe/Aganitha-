import { useState, useEffect } from 'react';
import marksheetPdf from '../assets/Graduation_Final_Result.pdf';
import certificatePdf from '../assets/Passing_Certificate.pdf';

const Resume = () => {
  const [resumePdf, setResumePdf] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewDocumentUrl, setViewDocumentUrl] = useState(null);
  const [viewDocumentTitle, setViewDocumentTitle] = useState('');
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const CORRECT_PASSCODE = '9960';

  // Load resume from localStorage on component mount
  useEffect(() => {
    const savedResume = localStorage.getItem('resumePdf');
    if (savedResume) {
      setResumePdf(savedResume);
    }
  }, []);

  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Sanjivani College of Engineering, Kopargaon',
      period: 'Dec 2021 - Jun 2025',
      cgpa: '8.5 CGPA',
      honors: 'Honours in Cyber Security',
      description: 'Specialized in Information Technology with a focus on Software Development, Web Technologies, and Cyber Security.',
    },
  ];

  const certifications = [
    {
      title: 'Data Base Management System',
      issuer: 'IIT Kharagpur on NPTEL',
      link: 'https://drive.google.com/file/d/1ria9wkRIgelhUZbcY2_CxHakT070eJo_/view?usp=sharing',
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Meta on Coursera',
      link: 'https://drive.google.com/file/d/1R7O3X5D431UjTpAnuVyJHhhxDxFa7ITy/view?usp=sharing',
    },
    {
      title: 'GitHub Fundamentals',
      issuer: 'GitHub',
      link: 'https://drive.google.com/file/d/1cXY07qdshWYkmOo7wpTZBTdspQfRQWH-/view?usp=sharing',
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      link: 'https://drive.google.com/file/d/1gNahkgEru_Ll6HbHHYZCrEQfFd978OKR/view?usp=sharing',
    },
  ];

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect passcode. Please try again.');
      setPasscode('');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setResumePdf(base64String);
        localStorage.setItem('resumePdf', base64String); // Save to localStorage
        setUploadSuccess(true);
        setTimeout(() => {
          setShowUploadModal(false);
          setIsAuthenticated(false);
          setPasscode('');
          setUploadSuccess(false);
        }, 2000);
      };
      reader.readAsDataURL(file);
    } else {
      setError('Please upload a valid PDF file.');
    }
  };

  const openUploadModal = () => {
    setShowUploadModal(true);
    setIsAuthenticated(false);
    setPasscode('');
    setError('');
  };

  const closeModal = () => {
    setShowUploadModal(false);
    setIsAuthenticated(false);
    setPasscode('');
    setError('');
    setUploadSuccess(false);
  };

  const openDocument = (url, title) => {
    setViewDocumentUrl(url);
    setViewDocumentTitle(title);
    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setShowViewModal(false);
    setViewDocumentUrl(null);
    setViewDocumentTitle('');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            My educational background and certifications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {resumePdf ? (
              <>
                <button
                  onClick={() => openDocument(resumePdf, 'Resume')}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Resume
                </button>
                <a
                  href={resumePdf}
                  download="Suyog_Dighe_Resume.pdf"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </>
            ) : (
              <div className="text-gray-500 dark:text-gray-400 italic">
                No resume uploaded yet
              </div>
            )}
            <button
              onClick={openUploadModal}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Upload Resume
            </button>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Upload Resume
              </h3>

              {!isAuthenticated ? (
                <form onSubmit={handlePasscodeSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Enter Passcode
                    </label>
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      maxLength={4}
                      placeholder="Enter 4-digit passcode"
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white text-center text-2xl tracking-widest"
                      autoFocus
                    />
                    {error && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {error}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Verify Passcode
                  </button>
                </form>
              ) : uploadSuccess ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <p className="text-xl font-semibold text-green-600 dark:text-green-400">
                    Resume Uploaded Successfully!
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔓</div>
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
                      Passcode Verified!
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Select PDF File
                    </label>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer"
                    />
                    {error && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {error}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <span className="text-4xl mr-3">🎓</span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white dark:bg-gray-900 rounded-lg text-sm text-gray-700 dark:text-gray-300 font-medium">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg text-sm font-semibold">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      {edu.cgpa}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      {edu.honors}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Academic Documents Card */}
            <div className="mt-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-600">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Academic Documents
              </h4>
              <div className="flex gap-3">
                <button
                  onClick={() => openDocument(marksheetPdf, 'Marksheet')}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all text-center"
                >
                  View Marksheet
                </button>
                <button
                  onClick={() => openDocument(certificatePdf, 'Certificate')}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all text-center"
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <span className="text-4xl mr-3">📜</span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View Document Modal */}
      {showViewModal && viewDocumentUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{viewDocumentTitle} Preview</h3>
              <button
                onClick={closeViewModal}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={viewDocumentUrl}
                className="w-full h-full"
                title={`${viewDocumentTitle} PDF`}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
