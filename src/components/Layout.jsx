import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { BookOpen, Home, Briefcase, Cpu, FileSignature, Share2, CalendarDays } from 'lucide-react';

export default function Layout() {
  const links = [
    { to: "/", icon: <BookOpen size={20} />, label: "Biblia B2B & Filosofie" },
    { to: "/calendar", icon: <Home size={20} />, label: "Overview & Calendar" },
    { to: "/business", icon: <Briefcase size={20} />, label: "01. Business & Funding" },
    { to: "/funding", icon: <Cpu size={20} />, label: "02. Produs & Tech" },
    { to: "/ja-romania", icon: <FileSignature size={20} />, label: "03. Data & Prezentare" },
    { to: "/echipa", icon: <Share2 size={20} />, label: "04. Comms & Comunitate" }
  ];

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div style={{ padding: '32px 24px' }}>
          <h1 style={{ color: 'var(--teal)', margin: 0, fontSize: '28px' }}>
            Mov<span className="text-yellow">io</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '12px', marginTop: '4px' }}>
            Dashboard Operativ Echipă
          </p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 16px', flex: 1 }}>
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={({isActive}) => ({
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 16px', borderRadius: '8px',
                backgroundColor: isActive ? 'rgba(0, 180, 180, 0.1)' : 'transparent',
                color: isActive ? 'var(--teal)' : 'var(--text)',
                fontWeight: isActive ? 700 : 500,
                transition: 'all 0.2s'
              })}
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>
        
        {/* Footer Sidebar Sync */}
        <div style={{ padding: '24px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CalendarDays size={16} color="var(--yellow)" />
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '1px' }}>SYNC SĂPTĂMÂNAL</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--text)' }}>LUNI:</strong> Standup (30 min)<br/>
            <strong style={{ color: 'var(--text)' }}>VINERI:</strong> Review (1 oră)
          </div>
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
