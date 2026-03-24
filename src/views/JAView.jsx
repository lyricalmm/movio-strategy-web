import React, { useState } from 'react';

export default function JAView() {
  const [qOpen, setQOpen] = useState(null);

  const planAfaceri = [
    { cap: "1. Rezumat Executiv (1 pag)", status: "De Scris", b: "waiting" },
    { cap: "2. Misiune, Viziune & Valori", status: "În Lucru", b: "active" },
    { cap: "3. Analiza Pieței (TAM/SAM/SOM)", status: "De Cercetat", b: "urgent" },
    { cap: "4. MVP și Specificații Tehnice", status: "Așteaptă TCM", b: "waiting" },
    { cap: "5. Modelul de Business & Scalare", status: "Date Aprobate", b: "done" },
    { cap: "6. Analiza Financiara", status: "În formatare", b: "active" },
    { cap: "7. Analiza Riscurilor", status: "Completat", b: "done" }
  ];

  const surse = [
    { text: "1,6% clujeni merg zilnic pe bicicletă", sursa: "Studiu ZMC 2010 (PMUD)", l: "freerider.ro" },
    { text: "29,2% dispuși să închirieze o bicicletă", sursa: "ZMC 2010 (PMUD)", l: "freerider.ro" },
    { text: "Cluj Bike: 35.000 useri, 1.500/zi (An 1)", sursa: "Contract Primărie 2024", l: "jurnalul.ro" },
    { text: "Sponsorizare 20% deducere", sursa: "Legea 32/1994", l: "avocatnet.ro" }
  ];

  const fqas = [
    { q: "Există deja Cluj Bike. De ce ați reuși voi?", a: "Cluj Bike a eșuat operațional, nu conceptual. Cererea exista (1500 curse/zi). Echipamentul este din 2013 și slab mentenat. Movio promite hardware modern UTCN și mentenanță garantată SLA 4h." },
    { q: "Există trotinete Bolt/Lime. De ce bicicleta?", a: "Trotinete: 0,25 lei/min. Ab. Lunar ~75 lei. Movio: 20 lei/AN. Diferența e enormă pentru bugetul unui student. În plus avem disponibilitate garantată la stații fixe." },
    { q: "Clujul are topografie dificilă (dealuri).", a: "Faza 1 e strict pe rutele plate (USAMV - Centru - UTCN Mărăști). E-bikes cu asistare intervin doar în Faza 2 pentru axa Observator." }
  ];

  return (
    <div className="fade-in">
      <div className="section-label">Rolul 03</div>
      <h2 className="text-teal" style={{ marginBottom: '8px' }}>Research, Date & Prezentare</h2>
      <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '48px', maxWidth: '800px' }}>
        Responsabil cu planul de afaceri JA BizzFactory, PPT-ul Movio oficial și validarea cifrelor din surse sigure.
      </p>

      <div className="grid-stack grid-2" style={{ marginBottom: '48px' }}>
        <div className="card">
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Tracker Plan de Afaceri BizzFactory</h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>Viabilitatea e mai importantă decât inovația pură. Platformă curentă: DreamShaper.</p>
          {planAfaceri.map((p,i) => (
             <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
               <span style={{ fontSize: '14px' }}>{p.cap}</span>
               <span className={`badge ${p.b}`}>{p.status}</span>
             </div>
          ))}
        </div>

        <div>
           <div className="card" style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Baza de Date: Surse Verificate</h3>
              {surse.map((s,i) => (
                 <div key={i} style={{ marginBottom: '12px', fontSize: '13px' }}>
                   <strong className="text-teal">{s.text}</strong><br/>
                   <span style={{ color: 'var(--muted)' }}><b>Sursă:</b> {s.sursa} | <a href="#" style={{ color: 'var(--yellow)', textDecoration: 'underline' }}>{s.l}</a></span>
                 </div>
              ))}
              <div className="warn-box">Nu folosi DATE FĂRĂ SURSĂ în PPT! Juriul BizzFactory sancționează afirmațiile nefundamentate. Dacă nu poți dovedi, nu zice.</div>
           </div>
        </div>
      </div>

      <div className="grid-stack grid-2" style={{ marginBottom: '48px' }}>
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Ghid Obiecții Juriu (Defensive Q&A)</h3>
          {fqas.map((f,i) => (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', marginBottom: '12px' }}>
              <div 
                style={{ padding: '16px', fontWeight: 600, cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
                onClick={() => setQOpen(qOpen === i ? null : i)}
              >
                <span className="text-yellow">Q: {f.q}</span>
                <span>{qOpen === i ? '▲' : '▼'}</span>
              </div>
              {qOpen === i && (
                <div style={{ padding: '0 16px 16px 16px', color: 'var(--muted)', fontSize: '14px' }}>
                  <b>Răspuns:</b> {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
           <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Workflow Săptămânal</h3>
           <div className="task-card" style={{ marginBottom: '16px' }}>
              <span className="badge active" style={{ float: 'right' }}>Azi - 31 Mar</span>
              <h4 style={{ marginBottom: '8px' }}>Sprint Final DreamShaper (100%)</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
                <li>Finalizare secțiuni 1-7 pe DreamShaper (Condiție Semifinală).</li>
                <li>Creare <b>JA Business Team Account</b> (Gen-E Expo) cu adresă email comună.</li>
                <li>Participare webinarii curente pe <a href="https://jar.ro/webinar-incubator-2026" target="_blank" rel="noreferrer" style={{ color: 'var(--teal)' }}>jar.ro/webinar-incubator-2026</a>.</li>
              </ul>
           </div>
           <div className="task-card">
              <span className="badge waiting" style={{ float: 'right' }}>1-17 Aprilie</span>
              <h4 style={{ marginBottom: '8px' }}>Webinarii & Pitch (Semifinale)</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
                <li>Participare Webinarii: Mgmt Riscului (31 Mar), Prezentare Plan (1 Apr), Fiscalitate (2 Apr).</li>
                <li>Repetare Pitch (Q&A BizzFactory) pregătire pentru Semifinale.</li>
                <li>Participare la Ultimul Office Hours (17 Aprilie) pentru lămuriri finale.</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
