'use client';

import { Download, FileText, ExternalLink } from 'lucide-react';

const RESUME_PDF = '/Neo_Dela_Torre_Resume (1).pdf';
const RESUME_DOWNLOAD_NAME = 'Neo Dela Torre - Software Developer Resume.pdf';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PDF;
    link.download = RESUME_DOWNLOAD_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="bg-white dark:bg-black">
      {/* Professional Header Section */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-4">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Professional Resume</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-3 leading-tight">
                Curriculum Vitae
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                View my complete professional background, experience, and qualifications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <a
                href={encodeURI(RESUME_PDF)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white font-semibold rounded-lg hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-8 sm:py-12 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Professional PDF Container */}
          <div className="bg-white dark:bg-gray-950 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* PDF Embed Container */}
            <div className="relative bg-gray-100 dark:bg-gray-900">
              <div
                className="w-full bg-white dark:bg-gray-950"
                style={{
                  height: 'calc(100vh - 300px)',
                  minHeight: '900px',
                  maxHeight: '1200px'
                }}
              >
                <iframe
                  src={`${encodeURI(RESUME_PDF)}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="w-full h-full border-0"
                  title="Neo Dela Torre Resume PDF"
                  style={{ minHeight: '900px' }}
                  allow="fullscreen"
                >
                  <div className="p-12 text-center">
                    <div className="max-w-md mx-auto">
                      <FileText className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                        Unable to display PDF
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Your browser may not support embedded PDFs. Please download the file to view it.
                      </p>
                      <button
                        onClick={handleDownload}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                      >
                        <Download className="w-5 h-5" />
                        Download Resume PDF
                      </button>
                    </div>
                  </div>
                </iframe>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Need a copy for your records?
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Download the PDF version for offline viewing or printing
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-black font-semibold rounded-lg hover:bg-black dark:hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none;
          }
          iframe {
            height: 100vh !important;
            min-height: 100vh !important;
          }
        }
      `}</style>
    </main>
  );
}
