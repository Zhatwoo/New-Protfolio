'use client';

import { Download, FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Grey Modern Company Resume.pdf';
    link.download = 'Grey Modern Company Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="bg-white">
      {/* Professional Header Section */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-4">
                <span className="text-sm font-semibold text-gray-700">Professional Resume</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-3 leading-tight">
                Curriculum Vitae
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                View my complete professional background, experience, and qualifications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <a
                href="/Grey Modern Company Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-black font-semibold rounded-lg hover:border-black hover:bg-gray-50 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Professional PDF Container */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            {/* PDF Embed Container */}
            <div className="relative bg-gray-100">
              <div 
                className="w-full bg-white" 
                style={{ 
                  height: 'calc(100vh - 300px)', 
                  minHeight: '900px',
                  maxHeight: '1200px'
                }}
              >
                <iframe
                  src="/Grey Modern Company Resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  className="w-full h-full border-0"
                  title="Neo Dela Torre Resume PDF"
                  style={{ minHeight: '900px' }}
                  allow="fullscreen"
                >
                  <div className="p-12 text-center">
                    <div className="max-w-md mx-auto">
                      <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg text-gray-700 mb-2 font-semibold">
                        Unable to display PDF
                      </p>
                      <p className="text-gray-600 mb-6">
                        Your browser may not support embedded PDFs. Please download the file to view it.
                      </p>
                      <button
                        onClick={handleDownload}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
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
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 mb-1">
                  Need a copy for your records?
                </p>
                <p className="text-xs text-gray-500">
                  Download the PDF version for offline viewing or printing
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-black transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
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
