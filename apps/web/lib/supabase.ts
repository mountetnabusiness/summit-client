import { createBrowserClient } from '@supabase/ssr'

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookies: {
      getAll() {
        return document.cookie.split(';').map(c => {
          const [name, ...rest] = c.trim().split('=')
          return { name, value: rest.join('=') }
        })
      },
      setAll(cookies) {
        cookies.forEach(({ name, value, options }) => {
          let cookie = `${name}=${value}; path=${options?.path ?? '/'}; domain=${options?.domain ?? '.summitclient.io'}`
          if (options?.sameSite) cookie += `; SameSite=${options.sameSite}`
          if (options?.secure) cookie += `; Secure`
          if (options?.maxAge) cookie += `; Max-Age=${options.maxAge}`
          document.cookie = cookie
        })
      }
    }
  }
)