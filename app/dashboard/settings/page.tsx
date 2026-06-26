export default function SettingsPage() {
  return (
    <div className="settings-page">
      <style>{`
        .settings-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 800px;
        }
        .page-header {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .settings-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .settings-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .settings-label {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        .settings-input {
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--color-border);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: var(--color-text-primary);
          font-family: var(--font-body);
          font-size: 0.95rem;
        }
        .settings-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .save-btn {
          background: linear-gradient(135deg, var(--color-primary), #ff8a00);
          border: none;
          padding: 0.875rem 2rem;
          border-radius: 8px;
          color: white;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          align-self: flex-start;
          margin-top: 1rem;
        }
      `}</style>
      
      <h2 className="page-header">User Settings</h2>
      
      <div className="settings-card">
        <div className="settings-group">
          <label className="settings-label">Full Name</label>
          <input type="text" className="settings-input" defaultValue="Avanish Shukla" />
        </div>
        
        <div className="settings-group">
          <label className="settings-label">Email Address</label>
          <input type="email" className="settings-input" defaultValue="avanish@company.com" />
        </div>
        
        <div className="settings-group">
          <label className="settings-label">Role / Department</label>
          <input type="text" className="settings-input" defaultValue="Operations Manager" disabled style={{ opacity: 0.6 }} />
        </div>
        
        <div className="settings-group">
          <label className="settings-label">Notification Preferences</label>
          <select className="settings-input">
            <option>All Critical & Warning Alerts</option>
            <option>Critical Alerts Only</option>
            <option>Mute All</option>
          </select>
        </div>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
}
