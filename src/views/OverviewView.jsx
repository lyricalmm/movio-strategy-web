import React, { useState, useEffect } from 'react';
import { Target, Flag, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Papa from 'papaparse';

export default function OverviewView() {
  const [surveyStats, setSurveyStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/1cQjOC8ERunvSJ1DerklSJ5vtwmJsvnbNuuhmU6j-Gck/export?format=csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const data = results.data;
            const total = data.length;
            
            const adoptie = data.filter(r => {
              const ans = r["Dacă un hub Movio ar fi mai aproape de tine (campus, cămin, facultate), l-ai folosi?"];
              return ans && (ans.includes("Da, zilnic") || ans.includes("săptămână") || ans.includes("ocazional"));
            }).length;

            const nonAdoptie = total - adoptie;
            
            const cbUsers = data.filter(r => r["Știai că există Cluj Bike — sistemul public de biciclete din Cluj?"]?.includes("dar nu l-am folosit niciodată"));
            
            let scoreSum = 0;
            let nScores = 0;
            data.forEach(r => {
                const s = parseInt(r["Pe o scală de la 1 la 5, cât de utilă consideri ideea Movio pentru studenții din Cluj?"]);
                if (!isNaN(s)) { scoreSum += s; nScores++; }
            });
            const avgScore = nScores ? (scoreSum / nScores).toFixed(2) : 0;
            
            const readyToPay = data.filter(r => {
               const val = r["Cât ai fi dispus să plătești pentru un abonament anual Movio? Ia in considerare ca primele 60 de min ale fiecărei curse sunt gratuite."];
               return val && !val.includes("Nimic");
            }).length;
            const notReadyToPay = total - readyToPay;

            setSurveyStats({
                total,
                adoptiePercentage: ((adoptie/total)*100).toFixed(0),
                payPercentage: ((readyToPay/total)*100).toFixed(0),
                adoptieData: [
                    { name: 'Ar Folosi Movio', value: adoptie },
                    { name: 'Nu ar folosi', value: nonAdoptie }
                ],
                payData: [
                    { name: 'Dispuși să plătească', value: readyToPay },
                    { name: 'Preferă gratuit', value: notReadyToPay }
                ],
                avgScore,
                cbTotal: cbUsers.length
            });
            setLoading(false);
          }
        });
      })
      .catch(e => {
          console.error("Eroare la aducerea datelor:", e);
          setLoading(false);
      });
  }, []);

  const milestones = [
    { data: "17 Aprilie 2026", task: "DEADLINE: Predare Plan Afaceri DreamShaper & 100+ Validări", done: false, urgent: true },
    { data: "Aprilie 2026", task: "Calificare Regională/Universitară (De verificat)", done: false },
    { data: "21 Mai 2026", task: "Virtual Expo Internațional GEN-E Europe (Online)", done: false },
    { data: "27 Mai 2026", task: "Finala Națională BizzFactory (București + Stand Fizic)", done: false, urgent: true },
    { data: "Iulie 2026", task: "Finala Europeană GEN-E (Riga, Letonia)", done: false }
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

      <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Validare Piață (Live from Google Forms)</h3>
      <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '24px' }}>
         Aceste date sunt sincronizate automat cu formularul public de validare (Live CSV Fetching).
      </p>

      {loading ? (
        <div style={{ padding: '24px', textAlign: 'center', color: 'var(--muted)' }}>Se sincronizează datele din Google Forms...</div>
      ) : surveyStats ? (
        <div className="grid-stack grid-3" style={{ marginBottom: '48px' }}>
          
          <div className="card">
            <h4 style={{ marginBottom: '4px', fontSize: '16px', textAlign: 'center' }}>Rată de Adopție</h4>
            <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '12px', marginBottom: '16px' }}>{surveyStats.total} Respondenți</div>
            <div style={{ height: '220px', width: '100%', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: 700, color: 'var(--teal)'}}>{surveyStats.adoptiePercentage}%</div>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={surveyStats.adoptieData}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill="#2DD4BF" />
                    <Cell fill="#374151" />
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px', color: 'var(--muted)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <h4 style={{ marginBottom: '4px', fontSize: '16px', textAlign: 'center' }}>Disponibilitate de Plată</h4>
            <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '12px', marginBottom: '16px' }}>Pentru Abonament Anual</div>
            <div style={{ height: '220px', width: '100%', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: 700, color: 'var(--yellow)'}}>{surveyStats.payPercentage}%</div>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={surveyStats.payData}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill="#FBBF24" />
                    <Cell fill="#374151" />
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '12px', color: 'var(--muted)' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '8px' }}>Scor de Utilitate (1-5)</div>
               <div style={{ fontSize: '56px', color: 'var(--teal)', fontWeight: '800', lineHeight: 1 }}>{surveyStats.avgScore}</div>
            </div>
            <div style={{ height: '1px', width: '100%', backgroundColor: 'var(--border)', margin: '24px 0' }}></div>
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '8px' }}>Eșecul ClujBike validat:</div>
               <div style={{ fontSize: '28px', color: 'var(--red)', fontWeight: '700' }}>{surveyStats.cbTotal} Studenți</div>
               <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>știau de DB dar nu l-au folosit<br/>(proces greu, stații goale)</div>
            </div>
          </div>

        </div>
      ) : null}

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
