export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <style>{`
        .dashboard-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        /* KPI Grid */
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .kpi-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .kpi-title {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }
        .kpi-value {
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }
        .kpi-trend {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .trend-up { color: var(--color-success); }
        .trend-down { color: #ff4d4f; }
        
        /* AI Search Section */
        .ai-search-section {
          background: linear-gradient(145deg, var(--color-surface), rgba(108,99,255,0.05));
          border: 1px solid var(--color-primary);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 12px 32px rgba(108,99,255,0.1);
        }
        .ai-search-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .ai-search-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
        }
        .ai-search-bar {
          display: flex;
          gap: 1rem;
        }
        .ai-input {
          flex: 1;
          background: rgba(0,0,0,0.3);
          border: 1px solid var(--color-border);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          color: var(--color-text-primary);
          font-family: var(--font-body);
          font-size: 1rem;
        }
        .ai-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        .ai-button {
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
        .ai-suggestion {
          margin-top: 1rem;
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--color-text-muted);
          display: flex;
          gap: 1rem;
        }
        .ai-suggestion-pill {
          background: rgba(255,255,255,0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          cursor: pointer;
        }
        .ai-suggestion-pill:hover {
          background: rgba(255,255,255,0.1);
        }
        
        /* Alerts Table */
        .alerts-section {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          overflow: hidden;
        }
        .alerts-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--color-border);
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
        }
        .alerts-table {
          width: 100%;
          border-collapse: collapse;
        }
        .alerts-table th, .alerts-table td {
          padding: 1rem 1.5rem;
          text-align: left;
          font-family: var(--font-body);
          border-bottom: 1px solid var(--color-border);
        }
        .alerts-table th {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          background: rgba(0,0,0,0.2);
        }
        .alerts-table td {
          font-size: 0.95rem;
        }
        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .status-critical { background: rgba(255, 77, 79, 0.15); color: #ff4d4f; }
        .status-warning { background: rgba(250, 173, 20, 0.15); color: #faad14; }
        .status-info { background: rgba(24, 144, 255, 0.15); color: #1890ff; }
      `}</style>

      {/* KPI Cards */}
      <section className="kpi-grid">
        <div className="kpi-card">
          <span className="kpi-title">Overall Asset Utilization</span>
          <span className="kpi-value">94.2%</span>
          <span className="kpi-trend trend-up">↑ 2.1% from last week</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-title">Active Maintenance Alerts</span>
          <span className="kpi-value">3</span>
          <span className="kpi-trend trend-down">↓ 1 resolved today</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-title">Knowledge Queries (Today)</span>
          <span className="kpi-value">124</span>
          <span className="kpi-trend trend-up">↑ 12% faster resolution</span>
        </div>
      </section>

      {/* AI Search */}
      <section className="ai-search-section">
        <div className="ai-search-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span className="ai-search-title">Ask NeuralFlow AI</span>
        </div>
        <div className="ai-search-bar">
          <input type="text" className="ai-input" placeholder="e.g., What is the lockout/tagout procedure for Centrifugal Pump B?" />
          <button className="ai-button">Search SOPs</button>
        </div>
        <div className="ai-suggestion">
          Suggested:
          <span className="ai-suggestion-pill">Compressor C3 manual</span>
          <span className="ai-suggestion-pill">Recent failure logs</span>
          <span className="ai-suggestion-pill">Oil replacement interval</span>
        </div>
      </section>

      {/* Maintenance Alerts Table */}
      <section className="alerts-section">
        <div className="alerts-header">Intelligent Maintenance Recommendations</div>
        <table className="alerts-table">
          <thead>
            <tr>
              <th>ASSET</th>
              <th>PREDICTION / ALERT</th>
              <th>CONFIDENCE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Centrifugal Pump A</strong></td>
              <td>High vibration detected. Bearing failure likely in 4 days.</td>
              <td>92%</td>
              <td><span className="status-badge status-critical">Critical</span></td>
            </tr>
            <tr>
              <td><strong>Heat Exchanger #4</strong></td>
              <td>Pressure drop variance indicating potential fouling.</td>
              <td>78%</td>
              <td><span className="status-badge status-warning">Warning</span></td>
            </tr>
            <tr>
              <td><strong>Conveyor Belt System</strong></td>
              <td>Motor temp running 5% above baseline. Monitor closely.</td>
              <td>64%</td>
              <td><span className="status-badge status-info">Info</span></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
