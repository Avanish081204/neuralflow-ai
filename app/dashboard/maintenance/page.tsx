export default function MaintenancePage() {
  return (
    <div className="maintenance-page">
      <style>{`
        .maintenance-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .page-header {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .alerts-section {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          overflow: hidden;
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
        .action-link {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
        }
        .action-link:hover { text-decoration: underline; }
      `}</style>
      
      <h2 className="page-header">Maintenance Alerts & Predictions</h2>
      
      <div className="alerts-section">
        <table className="alerts-table">
          <thead>
            <tr>
              <th>ASSET</th>
              <th>PREDICTION / ALERT</th>
              <th>CONFIDENCE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Centrifugal Pump A</strong></td>
              <td>High vibration detected. Bearing failure likely in 4 days.</td>
              <td>92%</td>
              <td><span className="status-badge status-critical">Critical</span></td>
              <td><a href="#" className="action-link">Create Work Order</a></td>
            </tr>
            <tr>
              <td><strong>Heat Exchanger #4</strong></td>
              <td>Pressure drop variance indicating potential fouling.</td>
              <td>78%</td>
              <td><span className="status-badge status-warning">Warning</span></td>
              <td><a href="#" className="action-link">View Logs</a></td>
            </tr>
            <tr>
              <td><strong>Conveyor Belt System</strong></td>
              <td>Motor temp running 5% above baseline. Monitor closely.</td>
              <td>64%</td>
              <td><span className="status-badge status-info">Info</span></td>
              <td><a href="#" className="action-link">Acknowledge</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
