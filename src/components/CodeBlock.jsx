// Import useState from React.
// useState lets us store and track state inside a functional component.
// In this case, we'll track whether the code has been copied.
import { useState } from "react";

// Import the CSS specific to this component.
import "../css/codeblock.css";

// CodeBlock is a reusable component that:
// - Receives a string of code via the "code" prop
// - Displays it inside a styled <pre><code> block
// - Provides a "Copy" button to copy the code to the clipboard
function CodeBlock({ code }) {
  /* ───────────────────────────────────────────────
     1. COPY STATE
     - copied: boolean that tracks whether the user has clicked "Copy"
     - setCopied: function to update copied
     - Initially false, meaning nothing has been copied yet.
     ─────────────────────────────────────────────── */
  const [copied, setCopied] = useState(false);

  /* ───────────────────────────────────────────────
     2. HANDLE COPY FUNCTION
     This function executes when the "Copy" button is clicked.
     - navigator.clipboard.writeText(code): writes the code string to the system clipboard.
     - setCopied(true): updates state so the UI shows feedback.
     - setTimeout(() => setCopied(false), 2000): resets the feedback after 2 seconds.
       This ensures the "Copied!" message disappears automatically.
     
     Note: navigator.clipboard is asynchronous and may require HTTPS in browsers.
     ─────────────────────────────────────────────── */
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ───────────────────────────────────────────────
     3. RENDER
     - <div className="codeblock">: wrapper for styling and positioning
     - <button>: triggers handleCopy, shows "Copy" or "Copied!" depending on state
     - <pre><code>: preserves whitespace and monospaced font for proper code display
     
     Key points:
     - <pre> preserves formatting (newlines, spaces)
     - <code> semantically represents code
     - The "copied" state triggers visual feedback without a page reload
     ─────────────────────────────────────────────── */
  return (
    <div className="codeblock">
      {/* Copy button */}
      <button className="copy-button" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Code display area */}
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Export CodeBlock so it can be imported into WeekPage or anywhere else
export default CodeBlock;
