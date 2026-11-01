import { FiDownload } from 'react-icons/fi'

export default function Resume() {
  return (
    <section className="wrap page">
      <h1>Resume</h1>
      <div className="row">
        <a className="btn primary" href="/DebasishSahu_Resume.pdf" download><FiDownload /> Download PDF</a>
        <a className="btn" href="/DebasishSahu_Resume.pdf" target="_blank" rel="noopener noreferrer">Open in new tab</a>
      </div>
      <object className="pdf" data="/DebasishSahu_Resume.pdf" type="application/pdf" aria-label="Resume PDF">
        <p>Your browser can't show the PDF here. Use the download button above.</p>
      </object>
    </section>
  )
}