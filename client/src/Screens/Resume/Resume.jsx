import React from 'react'
import "./Resume.css"
import pdf from "../Resume/EvanAResume.pdf"
import word from "../Resume/EvanAResume.docx"

export default function Resume() {
  return (
    <div className="resume-wrapper">
      <div className="resume-container">
        <embed className="pdf-import" src={pdf} />
        
        <h3 className="download-text">Download Resume:</h3>
        
      <div className="resume-downloads">
        <div className="pdf-wrapper"> 
          <a className="pdf-download"
            href={pdf}
            rel="noreferrer"
            target="_blank"
            filename="EvanAlvesResume.pdf" download>
              PDF
          </a>
        </div>
          
        <div className="word-wrapper">
          <a className="word-download"
            href={word}
            rel="noreferrer"
            target="_blank"
            filename="EvanAlvesResume.docx" download>
              Word
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}
