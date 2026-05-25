import PublicNav from '../components/PublicNav'

export default function Home() {
  return (
    <>
      <PublicNav />
      <main style={{ paddingTop: 64, fontFamily: 'Inter, sans-serif' }}>

        {/* Hero */}
        <section style={{
          background: '#1A3F5C', color: '#fff',
          padding: '120px 24px', textAlign: 'center'
        }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#93C5FD', margin: '0 0 20px' }}>
              ABA Clinic Management
            </p>
            <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', margin: '0 0 24px' }}>
              Scheduling that works as hard as you do.
            </h1>
            <p style={{ fontSize: 20, color: '#CBD5E1', lineHeight: 1.6, margin: '0 0 40px' }}>
              Summit Client is the all-in-one platform built for ABA clinics — intelligent scheduling, staff matching, and client management in one place.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/signup" style={{
                background: '#fff', color: '#1A3F5C',
                padding: '14px 32px', borderRadius: 8,
                fontWeight: 800, fontSize: 16, textDecoration: 'none'
              }}>
                Get started free
              </a>
              <a href="#product" style={{
                border: '2px solid rgba(255,255,255,0.3)', color: '#fff',
                padding: '14px 32px', borderRadius: 8,
                fontWeight: 600, fontSize: 16, textDecoration: 'none'
              }}>
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section id="product" style={{ padding: '80px 24px', background: '#F8FAFC' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, textAlign: 'center', color: '#1A3F5C', letterSpacing: '-1px', margin: '0 0 56px' }}>
              Everything your clinic needs.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
              {[
                { title: 'AI-Powered Matching', desc: 'Instantly match clients with the right clinician based on availability, specialty, and fit.' },
                { title: 'Recurring Schedules', desc: 'Book weeks of sessions in one flow. Conflicts caught before they happen.' },
                { title: 'Role-Based Access', desc: 'Admins, clinicians, staff, and families each see exactly what they need.' },
                { title: 'Real-Time Calendar', desc: 'A live view of your entire clinic — filterable by staff, client, or session type.' },
              ].map(f => (
                <div key={f.title} style={{
                  background: '#fff', borderRadius: 12, padding: 32,
                  border: '1px solid #E2E8F0'
                }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A3F5C', margin: '0 0 12px' }}>{f.title}</h3>
                  <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA footer */}
        <section style={{ padding: '100px 24px', textAlign: 'center', background: '#fff' }}>
          <h2 style={{ fontSize: 48, fontWeight: 900, color: '#1A3F5C', letterSpacing: '-1.5px', margin: '0 0 16px' }}>
            Ready to streamline your clinic?
          </h2>
          <p style={{ fontSize: 18, color: '#64748B', margin: '0 0 36px' }}>
            Join clinics already using Summit Client to save hours every week.
          </p>
          <a href="/signup" style={{
            background: '#1A3F5C', color: '#fff',
            padding: '16px 40px', borderRadius: 8,
            fontWeight: 800, fontSize: 17, textDecoration: 'none'
          }}>
            Get started free
          </a>
        </section>

      </main>
    </>
  )
}