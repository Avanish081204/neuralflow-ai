export default function SearchPage() {
  return (
    <div className="search-page">
      <style>{`
        .search-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: 100%;
        }
        .page-header {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .chat-container {
          flex: 1;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-height: 500px;
        }
        .chat-history {
          flex: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          overflow-y: auto;
        }
        .message {
          max-width: 80%;
          display: flex;
          gap: 1rem;
        }
        .message-user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }
        .avatar-ai { background: linear-gradient(135deg, var(--color-primary), #ff8a00); color: white; }
        .avatar-user { background: rgba(255,255,255,0.1); color: var(--color-text-primary); }
        .bubble {
          background: rgba(255,255,255,0.05);
          padding: 1rem 1.25rem;
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--color-text-primary);
          line-height: 1.5;
        }
        .message-user .bubble {
          background: rgba(255, 59, 143, 0.1);
          border: 1px solid rgba(255, 59, 143, 0.2);
        }
        .chat-input-area {
          padding: 1.5rem;
          border-top: 1px solid var(--color-border);
          background: rgba(0,0,0,0.2);
          display: flex;
          gap: 1rem;
        }
        .chat-input {
          flex: 1;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          color: var(--color-text-primary);
          font-family: var(--font-body);
          font-size: 1rem;
        }
        .chat-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .chat-button {
          background: linear-gradient(135deg, var(--color-primary), #ff8a00);
          border: none;
          padding: 0 2rem;
          border-radius: 12px;
          color: white;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
      
      <h2 className="page-header">Knowledge Base Search</h2>
      
      <div className="chat-container">
        <div className="chat-history">
          <div className="message message-user">
            <div className="avatar avatar-user">U</div>
            <div className="bubble">What is the standard procedure to replace the impeller on Centrifugal Pump A?</div>
          </div>
          <div className="message message-ai">
            <div className="avatar avatar-ai">AI</div>
            <div className="bubble">
              Based on the <strong>Pump-A Maintenance Manual (v3.2)</strong>, here is the procedure:
              <br/><br/>
              1. <strong>Lockout/Tagout (LOTO):</strong> Ensure all power to the pump motor is isolated.<br/>
              2. <strong>Drain:</strong> Close suction and discharge valves. Drain the casing completely.<br/>
              3. <strong>Disassembly:</strong> Remove the casing bolts and slide out the back pull-out assembly.<br/>
              4. <strong>Impeller Removal:</strong> Loosen the impeller nut (reverse thread) and slide the impeller off the shaft.<br/>
              5. <strong>Inspection:</strong> Check the mechanical seal and wear rings before installing the new impeller.<br/>
              <br/>
              <em>Source: Section 4.2, Page 45 - Centrifugal Pump Maintenance SOP.</em>
            </div>
          </div>
        </div>
        <div className="chat-input-area">
          <input type="text" className="chat-input" placeholder="Ask a question about your manuals, logs, or SOPs..." />
          <button className="chat-button">Search</button>
        </div>
      </div>
    </div>
  );
}
