import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setLoading(true)
    setError('')

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    // Fetch role from profiles table
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single()

    const role = profile?.role

    // Temporary hardcoded redirect until role_permissions table is built (ac1)
    if (role === 'admin' || role === 'scheduler') {
      window.location.href = 'https://scheduler.summitclient.io'
    } else if (role === 'clinician') {
      window.location.href = 'https://data.summitclient.io'
    } else if (role === 'staff') {
      window.location.href = 'https://employee.summitclient.io'
    } else if (role === 'client') {
      window.location.href = 'https://client.summitclient.io'
    } else {
      setError('No role assigned. Contact your administrator.')
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>Sign in to Summit Client</h1>

        {error && <p style={{ color: 'red', margin: 0, fontSize: 14 }}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ padding: '10px 12px', fontSize: 15, border: '1px solid #ccc', borderRadius: 6 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ padding: '10px 12px', fontSize: 15, border: '1px solid #ccc', borderRadius: 6 }}
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          style={{ padding: '10px 12px', fontSize: 15, background: '#1A3F5C', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>

        <p style={{ fontSize: 13, color: '#666', margin: 0 }}>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  )
}