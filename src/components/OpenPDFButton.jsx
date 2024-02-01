import React from 'react';

const OpenPDFButton = () => {
  const openPDF = () => {
    const pdfPath = process.env.PUBLIC_URL + '/Resume.pdf';
    console.log('Opening PDF at path:', pdfPath);
    window.open(pdfPath, '_blank');
  };

  return (
    <button onClick={openPDF}>
      Open Resume
    </button>
  );
};

export default OpenPDFButton;
