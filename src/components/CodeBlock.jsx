import { useState } from 'react'
import '../css/codeblock.css'

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="codeblock">
      <button className="copy-button" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock

