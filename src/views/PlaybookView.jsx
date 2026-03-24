import React from 'react';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';

const stations = [
  { id: 1, name: "Complex camin marasti 1F", lat: 46.7830, lng: 23.6227, capacity: 20, type: "hub", zone: "residential", nota: "NOU — propus de echipă. ~3.000 studenți rezidenți." },
  { id: 2, name: "Facultatea IIRMP de la UTCN, Blvd. Muncii", lat: 46.7959, lng: 23.6562, capacity: 15, type: "hub", zone: "university", nota: "Trafic ingineresc intens (Ateliere TCM)." },
  { id: 3, name: "Complexul de natatie UTCN", lat: 46.7684, lng: 23.5714, capacity: 10, type: "micro", zone: "sport", nota: "NOU — propus de echipă. Locație sport = brand fit." },
  { id: 4, name: "UTCN Hub de pe Baritiu", lat: 46.7738, lng: 23.5905, capacity: 25, type: "hub", zone: "central", nota: "Zonă Centrală de debarcare. Trafic pietonal imens." },
  { id: 5, name: "Campus Observator", lat: 46.7570, lng: 23.5850, capacity: 20, type: "hub", zone: "residential", nota: "Punctul de Start Obligatoriu (Mii de studenți)." },
  { id: 6, name: "Sediu OSUT", lat: 46.7565, lng: 23.5855, capacity: 10, type: "standard", zone: "university", nota: "Sediu partener implementare." }
];

export default function PlaybookView() {
  return (
    <div className="fade-in">
      <div className="section-label">Movio HQ</div>
      <h2 className="text-teal" style={{ marginBottom: '8px' }}>Ghid de Abordare, Filosofie & B2B</h2>
      <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '48px', maxWidth: '800px' }}>
        Această pagină reprezintă "Biblia" mentală și tactică a echipei. Toți membrii trebuie să fie aliniați la această direcție înainte de a trimite orice pitch sau e-mail.
      </p>

      {/* Manifest */}
      <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>1. Direcția Movio (Manifestul Ingineresc)</h3>
      <div className="grid-stack grid-3" style={{ marginBottom: '48px' }}>
        <div className="card">
           <h4 className="text-teal" style={{ marginBottom: '12px', fontSize: '16px' }}>Parteneriat, nu Milă</h4>
           <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Nu suntem un ONG care cere donații. Suntem o echipă de ingineri (TCM) care **dezvoltă infrastructură**. Oferim un serviciu B2B de vizibilitate stradală și date CSR.</p>
        </div>
        <div className="card">
           <h4 className="text-yellow" style={{ marginBottom: '12px', fontSize: '16px' }}>Hardware-ul ne Validează</h4>
           <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Un site îl poate face oricine. Dar un stâlp IoT din oțel dovedește execuția. Atelierele TCM sunt marele nostru avantaj: printăm 3D prototipuri, sudăm gratuit.</p>
        </div>
        <div className="card" style={{ borderLeft: '3px solid var(--red)' }}>
           <h4 style={{ marginBottom: '12px', fontSize: '16px', color: 'var(--red)' }}>Bypass Birocrația</h4>
           <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Avizele Primăriei durează 18 luni. Ocolim sistemul public prin implementarea Pilotului exclusiv pe **terenul privat al facultăților UTCN**, cu bani CSR privați.</p>
        </div>
      </div>

      {/* B2B / Sponsori */}
      <div className="grid-stack grid-2" style={{ marginBottom: '48px' }}>
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>2. Cum funcționează Sponsorii (B2B)</h3>
          <div className="card">
            <h4 style={{ fontSize: '15px', marginBottom: '8px' }}>A. Deductibilitatea 20% (Legea 32/1994)</h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
              Firmele deduc sponsorizarea direct din impozitul pe profit. Dacă un hub costă 1.500€, firma dă 1.500€ din banii care oricum mergeau la Stat. **Costul real net pentru firmă este ZERO.**
            </p>
            
            <h4 style={{ fontSize: '15px', marginBottom: '8px' }}>B. Nevoia de Raportare ESG</h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
              Din 2024, normele UE obligă marile firme (Bosch, NTT Data) să raporteze inițiative Verzi (Environmental). Movio le oferă „Kg de CO2 Evitat” pe care să-l treacă direct în raportul lor anual.
            </p>

            <h4 style={{ fontSize: '15px', marginBottom: '8px' }}>C. Employer Branding Local</h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
              Studenții UTCN sunt viitorii ingineri ai acestor firme. Un hub Movio sponsorizat de Bosch pe Bulevardul Muncii înseamnă reclamă hi-tech directă în fața a zeci de mii de studenți valoroși.
            </p>
          </div>
        </div>

        <div>
           <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>3. Exclusivitate UTCN ("Pilotul Închis")</h3>
           <div className="card" style={{ borderLeft: '3px solid var(--teal)' }}>
             <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
               <strong style={{color: 'var(--teal)'}}>ATENȚIE: Sunt doar locații UTCN, iar parteneriatul în faza pilot se rezumă EXCLUSIV la UTCN!</strong> 
               Nu ne propunem să cucerim tot orașul în primul an. O rețea prea largă diluează densitatea bicicletelor. 
             </p>
             <ul style={{ paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)' }}>
               <li style={{ marginBottom: '8px' }}><b>Densitate uriașă:</b> Acoperim un traseu clar Observator - Centru - Mărăști/Muncii.</li>
               <li><b>Control Operațional:</b> Colaborarea cu OSUT ne oferă feedback constant.</li>
             </ul>
           </div>
        </div>
      </div>

      {/* UTCN Analysis */}
      <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>4. Analiza Proprietăților UTCN (Harta Pilotului)</h3>
      <div className="card" style={{ marginBottom: '48px', padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--muted)', backgroundColor: 'var(--bg)' }}>
              <th style={{ padding: '16px' }}>Locație UTCN</th>
              <th style={{ padding: '16px' }}>Rol Strategic în Navetă</th>
              <th style={{ padding: '16px' }}>Focus Sponsor Atras</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '16px' }}><b>Campus Observator & Sediu OSUT</b></td>
              <td style={{ padding: '16px', color: 'var(--muted)' }}>Punctul de Start Obligatoriu (Mii de studenți). Cerere maximă dimineața - necesită minim 3 module.</td>
              <td style={{ padding: '16px', color: 'var(--muted)' }}>Firme de FMCG/Telco (Kaufland, Orange)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '16px' }}><b>Sediul Central / Barițiu</b></td>
              <td style={{ padding: '16px', color: 'var(--muted)' }}>Zonă Centrală de debarcare curse scurte (Observator către Centru). Trafic pietonal imens.</td>
              <td style={{ padding: '16px', color: 'var(--muted)' }}>Firme IT & Hub-uri Tech (NTT Data)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '16px' }}><b>Complex Cămin Mărăști 1F & Natație</b></td>
              <td style={{ padding: '16px', color: 'var(--muted)' }}>Zonă sportivă și de rezidență nordică. Brand funcțional și trafic studențesc constant.</td>
              <td style={{ padding: '16px', color: 'var(--muted)' }}>Sponsori axați pe Health & Sport, Bănci</td>
            </tr>
            <tr>
              <td style={{ padding: '16px' }}><b>Campus B-dul Muncii</b></td>
              <td style={{ padding: '16px', color: 'var(--muted)' }}>Trafic ingineresc intens (Ateliere TCM). E o "cursă lungă" perfectă pentru a ocoli ambuteiajele.</td>
              <td style={{ padding: '16px', color: 'var(--muted)' }}>Firme de Inginerie Auto (Bosch, Porsche)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginBottom: '64px', padding: 0, overflow: 'hidden', height: '600px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <MapContainer center={[46.772, 23.600]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%', zIndex: 0 }}>
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">Carto</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            maxZoom={19}
          />
          {stations.map(s => {
            const color = '#0FC2C0'; // Movio Teal
            const opac = 0.85;
            const fillOpac = 0.5;
            return (
              <Circle
                key={s.id}
                center={[s.lat, s.lng]}
                radius={250}
                pathOptions={{
                  color: color,
                  fillColor: color,
                  weight: 2,
                  opacity: opac,
                  fillOpacity: fillOpac
                }}
              >
                <Tooltip>
                  <strong>{s.name}</strong><br/>
                  Capacitate: {s.capacity} biciclete<br/>
                  <i style={{color: '#F4A827'}}>{s.nota}</i>
                </Tooltip>
              </Circle>
            );
          })}
        </MapContainer>
      </div>

      {/* Reguli Pitch */}
      <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>5. Glosar B2B & Reguli De Aur la Pitch</h3>
      <div className="grid-stack grid-2">
        <div className="warn-box" style={{ margin: 0 }}>
          <strong style={{ display: 'block', marginBottom: '8px' }}>Focus 80% LOR / 20% NOI</strong>
          Când vorbim cu un sponsor, întrebarea constantă e „Cu ce te jut pe TINE această stație?”. Nu cere niciodată direct "Bani pentru a face biciclete". Oferi vizibilitate la mii de studenți pe 0 Cost Net.
        </div>
        <div className="tip-box" style={{ margin: 0 }}>
          <strong style={{ display: 'block', marginBottom: '8px' }}>Fără E-mail-uri "Targetate Orb"</strong>
          Sute de ONG-uri dau mail la office@companie.ro și mor în Spam-ul secretavei. Căutăm Directorul CSR / Employer Branding Lead exact pe orașul Cluj, exclusiv prin LinkedIn.
        </div>
      </div>

    </div>
  );
}
