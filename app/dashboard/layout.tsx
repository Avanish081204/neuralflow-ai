'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoSVG from '../../components/svgs/LogoSVG';

const SIDEBAR_LINKS = [
  { label: 'Overview', href: '/dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  { label: 'Assets', href: '/dashboard/assets', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
  { label: 'AI Search', href: '/dashboard/search', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { label: 'Maintenance', href: '/dashboard/maintenance', icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.41-1.41l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77a1 1 0 0 0 0 1.4z' },
  { label: 'Settings', href: '/dashboard/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="dashboard-layout">
      <style>{`
        .dashboard-layout {
          display: flex;
          height: 100vh;
          background: #050505;
          color: var(--color-text-primary);
          overflow: hidden;
        }
        .dashboard-sidebar {
          width: 280px;
          background: var(--color-surface);
          border-right: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          flex-shrink: 0;
        }
        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-text-primary);
          text-decoration: none;
          margin-bottom: 2.5rem;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          border-radius: 10px;
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: background var(--dur-micro), color var(--dur-micro);
        }
        .sidebar-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-text-primary);
        }
        .sidebar-link.active {
          background: rgba(255, 59, 143, 0.1);
          color: var(--color-primary);
          font-weight: 600;
        }
        .sidebar-icon {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .sidebar-user {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
        }
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), #ff8a00);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
          font-family: var(--font-display);
        }
        .user-info {
          display: flex;
          flex-direction: column;
        }
        .user-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
        .user-role {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .dashboard-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          position: relative;
        }
        .dashboard-header {
          padding: 1.5rem 2.5rem;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .header-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
        }
        .header-actions {
          display: flex;
          gap: 1rem;
        }
        .action-btn {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: var(--color-text-primary);
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.85rem;
          transition: border-color var(--dur-micro);
        }
        .action-btn:hover {
          border-color: var(--color-primary);
        }
        .dashboard-content {
          padding: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .dashboard-sidebar {
            display: none;
          }
        }
      `}</style>
      
      <aside className="dashboard-sidebar">
        <Link href="/" className="sidebar-logo">
          <LogoSVG width={28} height={28} />
          NeuralFlow<span style={{ color: 'var(--color-primary)' }}> AI</span>
        </Link>

        <nav className="sidebar-nav">
          {SIDEBAR_LINKS.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`sidebar-link ${pathname === link.href ? 'active' : ''}`}
            >
              <svg className="sidebar-icon" viewBox="0 0 24 24">
                <path d={link.icon}></path>
                {link.label === 'Settings' && <circle cx="12" cy="12" r="3"></circle>}
                {link.label === 'Overview' && <polyline points="9 22 9 12 15 12 15 22"></polyline>}
              </svg>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">AS</div>
          <div className="user-info">
            <span className="user-name">Avanish Shukla</span>
            <span className="user-role">Operations Manager</span>
          </div>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1 className="header-title">
            {SIDEBAR_LINKS.find(l => l.href === pathname)?.label || 'Dashboard'}
          </h1>
          <div className="header-actions">
            <button className="action-btn">Export Report</button>
            <button className="action-btn" style={{ background: 'var(--color-primary)', borderColor: 'var(--color-primary)', color: 'white' }}>
              + New Query
            </button>
          </div>
        </header>
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
}
