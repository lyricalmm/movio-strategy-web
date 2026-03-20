import React from 'react';
import { Target, Flag, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function OverviewView() {
  const milestones = [
    { data: "Astăzi — Martie 2026", task: "Lansare Dashboard Operativ & Machete Hub", done: true },
    { data: "Sf. Martie 2026", task: "100 Formulări Validare Piață & Primele Pitch-uri", done: false },
    { data: "17 Aprilie 2026", task: "DEADLINE: Predare Plan Afaceri DreamShaper", done: false, urgent: true },
    { data: "21 Mai 2026", task: "Virtual Expo Internațional GEN-E Europe (Online)", done: false },
    { data: "27 Mai 2026", task: "Finala Națională BizzFactory (București)", done: false, urgent: true },
    { data: "Vara 2026", task: "Producție 4 Hub-uri în Lab TCM (UTCN) & Lansare Pilot", done: false }
  ];

  return (
    <div className="fade-in">
      <div className="section-label">Movio HQ</div>
      <h2 className="text-teal" style={{ marginBottom: '8px' }}>Context General & Timeline</h2>
      <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '48px', maxWidth: '800px' }}>
        Bine ați venit în centrala operațională Movio. Aceasta este singura sursă de adevăr pentru strategia și execuția echipei.
      </p>

      <div className="grid-stack grid-2" style={{ marginBottom: '48px' }}>
        <div className="card" style={{ borderLeft: '3px solid var(--teal)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Target color="var(--teal)" />
            <strong style={{ fontSize: '18px' }}>Misiunea Echipei (UTCN)</strong>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '16px' }}>
            Suntem studenți la TCM, capabili să transformăm oțelul în soluții de mobilitate scalabile. Nu suntem doar o idee software; avem **capacitate de fabricație in-house**.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
            Rezolvăm eșecul Cluj Bike nu prin subvenții de la stat, ci prin **CSR privat** și un pilot curajat pe teritoriul privat al universităților noastre.
          </p>
        </div>

        <div className="card" style={{ borderLeft: '3px solid var(--yellow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Flag color="var(--yellow)" />
            <strong style={{ fontSize: '18px' }}>Obiectivul Imediat: JA BizzFactory</strong>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '16px' }}>
            Toate cele 4 roluri lucrează pentru validarea pieței, rafinarea planului de afaceri și obținerea primelor angajamente financiare pentru a câștiga faza Națională din Mai.
          </p>
        </div>
      </div>

      <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Calendar Competiție & Milestones</h3>
      <div className="card" style={{ padding: '0' }}>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ 
                display: 'flex', alignItems: 'center', padding: '16px 24px', 
                borderBottom: i === milestones.length - 1 ? 'none' : '1px solid var(--border)',
                background: m.urgent ? 'rgba(218,54,51,0.05)' : 'transparent'
              }}>
                <div style={{ width: '40px', display: 'flex', justifyContent: 'center' }}>
                  {m.done ? <CheckCircle2 color="var(--teal)" size={20} /> : m.urgent ? <AlertCircle color="var(--red)" size={20} /> : <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--muted)' }}></div>}
                </div>
                <div style={{ paddingLeft: '16px', flex: 1 }}>
                  <div style={{ fontSize: '12px', color: m.urgent ? 'var(--red)' : 'var(--yellow)', fontWeight: 700, letterSpacing: '1px', marginBottom: '4px' }}>
                    {m.data.toUpperCase()}
                  </div>
                  <div style={{ fontSize: '15px', color: m.done ? 'var(--muted)' : 'var(--text)', textDecoration: m.done ? 'line-through' : 'none' }}>
                    {m.task}
                  </div>
                </div>
                {m.urgent && <span className="badge urgent">CRITIC</span>}
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
