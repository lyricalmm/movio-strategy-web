import React from 'react';
import { Instagram, Linkedin, Facebook, Users } from 'lucide-react';

export default function TeamView() {
  const currentResponses = 14; 
  const targetResponses = 100;
  const progress = (currentResponses / targetResponses) * 100;

  return (
    <div className="fade-in">
      <div className="section-label">Rolul 04</div>
      <h2 className="text-teal" style={{ marginBottom: '8px' }}>Comunicare & Comunitate</h2>
      <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '48px', maxWidth: '800px' }}>
        Atragerea primilor utilizatori timpurii, gestionarea rețelelor sociale și dovedirea cererii printr-un flux constant de validări.
      </p>

      {/* Tracker Validari */}
      <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Target Formulări Validare Piață</h3>
      <div className="card" style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700 }}>{currentResponses} strânse din {targetResponses} (Obiectiv MVP)</span>
          <span style={{ fontSize: '14px', color: 'var(--teal)' }}>{progress.toFixed(0)}% Complet</span>
        </div>
        <div style={{ width: '100%', height: '12px', background: 'var(--bg)', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border)' }}>
           <div style={{ width: `${progress}%`, height: '100%', background: 'var(--teal)', transition: 'width 1s' }}></div>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '12px' }}>
          Juriul și sponsorii vor dovezi. Un singur PDF care conține 100 de răspunsuri unice de la studenți care spun „Aș plăti 20 lei” bate orice slide fancy. Distuie link-ul în grupuri FB zilnic!
        </p>
      </div>

      <div className="grid-stack grid-3" style={{ marginBottom: '48px' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Instagram color="#E1306C" />
            <strong style={{ fontSize: '18px' }}>Instagram (Prioritate 1)</strong>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--muted)', flex: 1 }}>Audiența studenților UTCN/USAMV e aici. Postează exclusiv <b>Reels</b> (Ex: Ce facem la atelierele TCM) și <b>Stories</b> zilnice.</p>
        </div>
        
        <div className="card" style={{ display: 'flex', flexDirection: 'column', borderLeft: '3px solid #0A66C2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Linkedin color="#0A66C2" />
            <strong style={{ fontSize: '18px' }}>LinkedIn (Prioritate 2)</strong>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--muted)', flex: 1 }}>Sponsorii sunt aici. Postează articole despre antreprenoriatul din cadrul UTCN, victoriile noastre locale și nevoia orașului.</p>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Users color="#1877F2" />
            <strong style={{ fontSize: '18px' }}>Facebook Grupuri (P 3)</strong>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--muted)', flex: 1 }}>Nu facem pagină, folosim traficul existent. Grupuri oficiale: "Studenți UTCN Cluj" etc. Exclusiv form-uri.</p>
        </div>
      </div>

      <div className="grid-stack grid-2">
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Calendar Conținut (Săpt 1-2)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
             <div style={{ padding: '12px', background: 'var(--surface)', borderLeft: '3px solid #E1306C', borderRadius: '4px', fontSize: '13px' }}>
               <b>Luni (IG Story):</b> "Ești student în Cluj?" + Sondaj DA/NU + Link Bio.
             </div>
             <div style={{ padding: '12px', background: 'var(--surface)', borderLeft: '3px solid #0A66C2', borderRadius: '4px', fontSize: '13px' }}>
               <b>Miercuri (LI Post):</b> Povestea locului 2 la RAF. Tone: Profesional dar studențesc. Poze cu echipa la premiere.
             </div>
             <div style={{ padding: '12px', background: 'var(--surface)', borderLeft: '3px solid #E1306C', borderRadius: '4px', fontSize: '13px' }}>
               <b>Vineri (IG Reel):</b> Punctăm problema Cluj Bike (Stații ruginite etc) vs design-ul UTCN Movio modular.
             </div>
          </div>
          <div className="tip-box">
            <b>Regula de Press PR:</b> Nu da email la știri până nu montăm un Hub demonstrativ, nu există nicio știre înainte „doar că testăm o idee”.
          </div>
        </div>

        <div>
           <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Workflow Săptămânal</h3>
           <div className="task-card">
              <span className="badge active" style={{ float: 'right' }}>Săpt 1-2</span>
              <h4 style={{ marginBottom: '8px' }}>Set-up & Profiling</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
                <li>Creează IG @movio.cluj și Pagina LikedIn.</li>
                <li>Scrie Formul de Market Validation pe Google Forms (Max 5 întrebări).</li>
                <li>Postează form-ul masiv în grupurile studențești.</li>
              </ul>
           </div>
           <div className="task-card">
              <span className="badge waiting" style={{ float: 'right' }}>Săpt 3-4</span>
              <h4 style={{ marginBottom: '8px' }}>Engagement Feedback</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
                <li>Extrage datele strânse din Formular și transmite-le colegei de la Research (Rol 03).</li>
                <li>Găsește 3 Micro-influenceri locali studenți.</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
