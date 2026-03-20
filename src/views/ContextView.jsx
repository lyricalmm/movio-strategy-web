import React, { useState } from 'react';
import { Copy, Calculator } from 'lucide-react';

export default function ContextView() {
  const [ca, setCa] = useState(1000000);
  const [profit, setProfit] = useState(100000);

  const calcLimita1 = ca * 0.0075;
  const calcLimita2 = profit * 0.20;
  const sponsorizareMax = Math.min(calcLimita1, calcLimita2).toLocaleString('ro-RO');

  const sponsori = [
    {
      companie: "Kaufland România",
      contact: "startong.ro",
      suma: "5k–20k €",
      pachet: "Grant",
      statusC: "waiting", status: "În așteptare",
      deadline: "Mai 2026",
      actiune: "Formular dosar",
    },
    {
      companie: "Banca Transilvania",
      contact: "csr@bancatransilvania.ro",
      suma: "10k–30k RON",
      pachet: "Silver",
      statusC: "active", status: "În Lucru",
      deadline: "30 zile",
      actiune: "Propunere directă",
    },
    {
      companie: "NTT Data Romania",
      contact: "LinkedIn HR Dir",
      suma: "10k–25k RON",
      pachet: "Silver",
      statusC: "active", status: "În Lucru",
      deadline: "30 zile",
      actiune: "Mesaj LinkedIn",
    },
    {
      companie: "Fix Cluj",
      contact: "fixcluj.eu",
      suma: "Grant incub.",
      pachet: "Incubator",
      statusC: "urgent", status: "URGENT",
      deadline: "Acum",
      actiune: "Aplică online",
    }
  ];

  return (
    <div className="fade-in">
      <div className="section-label">Rolul 01</div>
      <h2 className="text-teal" style={{ marginBottom: '8px' }}>Business Development & Funding</h2>
      <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '48px', maxWidth: '800px' }}>
        Responsabil cu atragerea partenerilor privați, aplicarea la incubatoare și construirea modelului de finanțare.
      </p>

      {/* Argumentar Privat */}
      <div className="grid-stack grid-3" style={{ marginBottom: '48px' }}>
        <div className="card">
          <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>1. Viteza Execuției</h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}><b>Primărie:</b> licitație + caiet sarcini = 6-18 luni minim.<br/><b>Privat:</b> negociere + contract CSR = 2-4 săptămâni.</p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>2. Flexibilitatea</h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Primăria impune locații și reguli stricte. Sponsorul vrea doar vizibilitate, lăsându-ne libertatea operațională totală.</p>
        </div>
        <div className="card" style={{ border: '1px solid var(--yellow)' }}>
          <h3 style={{ fontSize: '18px', color: 'var(--yellow)', marginBottom: '16px' }}>3. Mecanismul 20%</h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Legea 32/1994 + Art. 25: Companiile deduc integral sponsorul din impozitul pe profit (în limitele legale). Nu le costă bani net, ci direcționează taxele statului către noi.</p>
        </div>
      </div>

      {/* Calculator Fiscal */}
      <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Calculator Deductibilitate Fiscală Sponsorizat</h3>
      <div className="card" style={{ marginBottom: '48px', backgroundColor: 'rgba(244,168,39,0.05)', display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>Cifra de Afaceri (RON)</label>
          <input type="number" value={ca} onChange={(e)=>setCa(e.target.value)} style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', padding: '12px', borderRadius: '4px' }} />
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <label style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>Impozit Profit Estimat (RON)</label>
          <input type="number" value={profit} onChange={(e)=>setProfit(e.target.value)} style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', color: 'white', padding: '12px', borderRadius: '4px' }} />
        </div>
        <div style={{ flex: '1 1 300px', backgroundColor: 'var(--bg)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--yellow)' }}>
          <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Limita Maximă Deductibilă:</div>
          <div style={{ fontSize: '28px', color: 'var(--yellow)', fontWeight: 800 }}>{sponsorizareMax} RON</div>
        </div>
      </div>

      {/* Sponsor Tracker */}
      <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Tracker Sponsori (Cluj-Napoca)</h3>
      <div style={{ overflowX: 'auto', marginBottom: '48px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>
              <th style={{ padding: '12px' }}>Companie</th>
              <th style={{ padding: '12px' }}>Suma Estimată</th>
              <th style={{ padding: '12px' }}>Pachet</th>
              <th style={{ padding: '12px' }}>Status</th>
              <th style={{ padding: '12px' }}>Următoarea Acțiune</th>
            </tr>
          </thead>
          <tbody>
            {sponsori.map((s,i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px', fontWeight: 600 }}>{s.companie}<br/><span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 400 }}>{s.contact}</span></td>
                <td style={{ padding: '12px' }}>{s.suma}</td>
                <td style={{ padding: '12px' }}>{s.pachet}</td>
                <td style={{ padding: '12px' }}><span className={`badge ${s.statusC}`}>{s.status}</span></td>
                <td style={{ padding: '12px', color: 'var(--muted)' }}>{s.actiune}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid-stack grid-2">
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Template Cold Email (B2B)</h3>
          <div className="card" style={{ position: 'relative', fontSize: '13px', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
            {`Subiect: Parteneriat Movio × [Companie] — vizibilitate campus UTCN/USAMV\n\nBună ziua,\n\nSuntem Movio, echipa de la UTCN loc 2 la Innovation Day RAF. Lansăm în toamnă 4 hub-uri pilot bike-sharing pentru ~100.000 studenți.\n\nVă propunem un parteneriat CSR:
→ Brand vizibil pe hub stradal
→ Date raportare ESG/CO2 lunar
→ Deductibilitate fiscală conform Legii 32 (Zero cost net)

Am putea programa un call de 15 min joi/vineri? Mulțumesc.`}
          </div>
          <div className="tip-box">Vorbește 80% despre ce primește sponsorul (Deducere, ESG, PR) și 20% despre tine. Nu trimite la info@, caută Director CSR / HR pe LinkedIn!</div>
        </div>

        <div>
           <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Workflow Săptămânal</h3>
           <div className="task-card">
              <span className="badge active" style={{ float: 'right' }}>Săpt 1-2</span>
              <h4 style={{ marginBottom: '8px' }}>Contactare Frontline</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
                <li>Actualizează tracker-ul de mai sus.</li>
                <li>Trimite mailurile BT / NTT Data.</li>
                <li>Verifică formular fixcluj.eu.</li>
              </ul>
           </div>
           <div className="task-card">
              <span className="badge waiting" style={{ float: 'right' }}>Săpt 3-4</span>
              <h4 style={{ marginBottom: '8px' }}>Follow-up & Negociere</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
                <li>Regula celor 3 Touch-uri: Mail 1, Follow-up ziua 7, Mesaj LinkedIn ziua 14.</li>
                <li>Scrie propunerea PDF detaliată (2 pagini).</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
