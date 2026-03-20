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

      {/* Prototip functional Elaborated - No horizontal scroll ASCII */}
      <h3 style={{ fontSize: '24px', marginBottom: '24px', marginTop: '64px', color: 'var(--teal)' }}>Prototip Funcțional (Arhitectură Hardware)</h3>
      <div className="grid-stack grid-2">
        <div className="card" style={{ borderLeft: '4px solid var(--teal)' }}>
          <h4 style={{ marginBottom: '16px', fontSize: '18px', color: 'var(--cream)' }}>Sistem IoT de Blocare (Open-Source)</h4>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '16px', lineHeight: '1.6' }}>
            Hub-ul este dotat cu un stâlp IoT compact gestionat de o placă de dezvoltare <strong>ESP32</strong> (care acționează ca server HTTP local).
            Când utilizatorul scanează codul QR, telefonul trimite o cerere HTTP de validare. 
            Microcontrollerul acționează mai apoi un motor <strong>stepper (NEMA 17)</strong> care comandă fizic zăvorul mecanic ce reține bicicleta.
            <br/><br/>
            Timpul total de latență este <strong>sub 2 secunde</strong>, garantând un flux de preluare instantaneu fără software greoi.
          </p>
          <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ display: 'block', color: 'var(--amber)', marginBottom: '12px', fontSize: '14px', letterSpacing: '0.5px' }}>⚡ FLUX DE DEBLOCARE (SCAN QR)</strong>
            <ul style={{ fontSize: '13px', color: 'var(--cream)', margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
              <li><strong>Pas 1:</strong> Utilizatorul scanează QR unic</li>
              <li><strong>Pas 2:</strong> HTTP GET de la telefon la ESP32</li>
              <li><strong>Pas 3:</strong> ESP32 verifică token-ul intern</li>
              <li><strong>Pas 4:</strong> Stepper-ul eliberează zăvorul mecanic</li>
              <li><strong>Pas 5:</strong> LED status devine Albastru (Liber)</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{ borderLeft: '4px solid var(--yellow)' }}>
          <h4 style={{ marginBottom: '16px', fontSize: '18px', color: 'var(--cream)' }}>Autonomie Energetică 100% (Off-Grid)</h4>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '16px', lineHeight: '1.6' }}>
            Stațiile noastre nu necesită excavații sau racordare la curentul publicistic. 
            Capacul superior al fiecărui stâlp modular este dotat cu un mini <strong>Panou Solar de 1W/5V</strong> perfect vizibil și estetic.
            <br/><br/>
            Acesta încarcă continuu o baterie <strong>LiPo/Li-Ion</strong> integrată, capabilă să asigure energia necesară plăcii ESP32 și motorului, generând o independență operațională totală a hub-urilor indiferent de locul amplasării.
          </p>
          <div style={{ padding: '16px', background: 'rgba(4,88,140,0.15)', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong style={{ display: 'block', color: 'var(--teal)', marginBottom: '12px', fontSize: '14px', letterSpacing: '0.5px' }}>🔧 ARHITECTURA FIZICĂ (TOP-DOWN)</strong>
            <ul style={{ fontSize: '13px', color: '#00ffcc', margin: 0, paddingLeft: '20px', lineHeight: 1.8, listStyleType: "square" }}>
              <li><strong>TOP:</strong> Panou Solar Monocristalin 1W</li>
              <li><strong>Nivel Mediu:</strong> Scan QR &amp; LED RGB la 160cm</li>
              <li><strong>Interior Miez:</strong> ESP32 + Baterii LiPo izolate</li>
              <li><strong>Bază Activă:</strong> Brațe fizice acționate de NEMA 17</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
