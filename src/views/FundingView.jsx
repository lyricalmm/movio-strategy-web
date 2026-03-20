import React from 'react';

export default function FundingView() {
  const componente = [
    {
      categorie: "Hub Fizic", status: "În lucru", culoare: "active",
      items: [
        { task: "Design stâlp modular (2 biciclete)", status: "done", detaliu: "Dimensiuni: 2m x 60cm, oțel galvanizat. Producție ateliere TCM." },
        { task: "Render 3D pentru prezentări", status: "active", detaliu: "Blender / Canva 3D. Logo sponsor pe stâlp obligatoriu." },
        { task: "Prototip fizic la scară redusă", status: "waiting", detaliu: "Printare 3D la UTCN. Pentru JA BizzFactory." },
        { task: "Mecanism blocare RFID", status: "active", detaliu: "U-lock electromagnetic + microcontroller. Așteaptă decizie achiziție." }
      ]
    },
    {
      categorie: "Site Demo Prezentare", status: "Fix-uri Necesare", culoare: "urgent",
      items: [
        { task: "Harta interactivă 15 stații", status: "done", detaliu: "Leaflet.js implementat." },
        { task: "Mobile Responsiveness", status: "urgent", detaliu: "CRITIC: Grid-urile se sparg pe sub 640px. Fix CSS imediat." },
        { task: "Calculator live (fără onclick)", status: "active", detaliu: "Folosește addEventListener pe input." },
      ]
    },
    {
      categorie: "Aplicația MVP Telefon", status: "Planificare", culoare: "waiting",
      items: [
        { task: "SaaS vs Custom", status: "urgent", detaliu: "Decizie echipă: SaaS white-label (300€/lună) vs App React Native." },
        { task: "Sistem QR pe hub", status: "waiting", detaliu: "Generare cod QR static + validare pe server." }
      ]
    }
  ];

  return (
    <div className="fade-in">
      <div className="section-label">Rolul 02</div>
      <h2 className="text-teal" style={{ marginBottom: '8px' }}>Produs & Tehnologie (TCM)</h2>
      <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '48px', maxWidth: '800px' }}>
        Responsabil cu ingineria hub-ului fizic, prototiparea sudurilor / integrărilor IT și UX-ul aplicațiilor software.
      </p>

      <div className="grid-stack grid-3" style={{ marginBottom: '48px' }}>
        {componente.map((comp, idx) => (
          <div key={idx} style={{ padding: '16px', background: 'var(--surface)', borderRadius: '8px', borderTop: `4px solid ${comp.culoare === 'active' ? 'var(--teal)' : comp.culoare === 'urgent' ? 'var(--red)' : 'var(--yellow)'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px' }}>{comp.categorie}</h3>
              <span className={`badge ${comp.culoare}`}>{comp.status}</span>
            </div>
            {comp.items.map((it, i) => (
              <div key={i} style={{ marginBottom: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '13px' }}>{it.task}</strong>
                  <span className={`badge ${it.status}`} style={{ transform: 'scale(0.8)', transformOrigin: 'right' }}>{it.status.toUpperCase()}</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{it.detaliu}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="grid-stack grid-2">
        <div>
           <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>BOM & Specificații Hub v1.0</h3>
           <div className="card" style={{ fontSize: '14px' }}>
             <strong className="text-teal">Componente Fizice:</strong>
             <ul style={{ marginLeft: '20px', color: 'var(--muted)', marginBottom: '16px' }}>
                <li>Profil oțel 40x40 (Galvanizat) - Asamblare UTCN</li>
                <li>U-Lock Electromagnetic (x2 pt 2 biciclete)</li>
                <li>Panou solar 10W integrat + Baterie Li-Ion</li>
             </ul>
             <strong className="text-yellow">Cost Producție Estimat (România):</strong>
             <ul style={{ marginLeft: '20px', color: 'var(--muted)', marginBottom: '16px' }}>
                <li>Material brut (oțel): ~80€</li>
                <li>Sistem electronic: ~60€</li>
                <li>Manoperă: IN-HOUSE (Echipa studenți TCM)</li>
                <li style={{ color: 'var(--text)', fontWeight: 'bold' }}>Total Estimativ: ~140-150€ / Unitate</li>
             </ul>
           </div>
        </div>

        <div>
           <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Workflow Săptămânal</h3>
           <div className="task-card">
              <span className="badge active" style={{ float: 'right' }}>Săpt 1-2</span>
              <h4 style={{ marginBottom: '8px' }}>Finalizare MVP Demo</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
                <li>Rezolvă erorile de Responsive Mobile pe index.html.</li>
                <li>Wireframing interfață 5 ecrane în Figma.</li>
              </ul>
           </div>
           <div className="task-card">
              <span className="badge waiting" style={{ float: 'right' }}>Săpt 3-4</span>
              <h4 style={{ marginBottom: '8px' }}>Prototipul Hardware</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
                <li>Render final al stâlpului.</li>
                <li>Calcul final necesar materiale pt oțelăriile locale.</li>
              </ul>
           </div>
           <div className="warn-box">Testează site-ul ÎNTOTDEAUNA pe propriul telefon. Dacă Figma depășește termenul limită, folosește Mockup-uri simple cu pixul. Tot ce construiești trebuie să aibă focus pe fabricația in-house (avantajul tău major de la TCM).</div>
        </div>
      </div>
    </div>
  );
}
