export default function AssetsPage() {
  return (
    <div className="assets-page">
      <style>{`
        .assets-page {
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
        .assets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .asset-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .asset-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .asset-status {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          width: fit-content;
        }
        .status-healthy { background: rgba(34, 197, 94, 0.15); color: #22c55e; }
        .status-warning { background: rgba(250, 173, 20, 0.15); color: #faad14; }
        .asset-details {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
      `}</style>
      
      <h2 className="page-header">Asset Inventory</h2>
      
      <div className="assets-grid">
        <div className="asset-card">
          <div className="asset-title">Centrifugal Pump A</div>
          <div className="asset-status status-warning">Warning</div>
          <div className="asset-details">
            Location: Plant 1, Sector A<br/>
            Last Maintenance: 12 days ago<br/>
            Uptime: 98.2%
          </div>
        </div>
        
        <div className="asset-card">
          <div className="asset-title">Compressor C3</div>
          <div className="asset-status status-healthy">Healthy</div>
          <div className="asset-details">
            Location: Plant 1, Sector B<br/>
            Last Maintenance: 2 months ago<br/>
            Uptime: 99.9%
          </div>
        </div>

        <div className="asset-card">
          <div className="asset-title">Heat Exchanger #4</div>
          <div className="asset-status status-warning">Warning</div>
          <div className="asset-details">
            Location: Plant 2, Sector A<br/>
            Last Maintenance: 5 months ago<br/>
            Uptime: 94.5%
          </div>
        </div>
        
        <div className="asset-card">
          <div className="asset-title">Conveyor Belt System</div>
          <div className="asset-status status-healthy">Healthy</div>
          <div className="asset-details">
            Location: Logistics Bay<br/>
            Last Maintenance: 1 week ago<br/>
            Uptime: 99.1%
          </div>
        </div>
      </div>
    </div>
  );
}
