import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: players } = await supabase.from('players').select()

  return (
    <ul>
      {
        players?.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))
      }
    </ul>
  )
}
