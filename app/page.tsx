import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { MATCHES_QUERY, PLAYERS_QUERY } from '@/graphql/queries'
import { getClient } from '@/lib/withApollo'
import { MatchEntity, PlayerEntity, TeamEntity } from '@/generated'

const inter = Inter({ subsets: ['latin'] })

const query = PLAYERS_QUERY;

export default async function Home() {
  const client = getClient();
  
  const { data } = await client.query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      }
    }
  });
  return (
    <main className={styles.main}>
     {data.players.data.map((player: PlayerEntity) => <div key={player.id}>
      {player.attributes?.name} || {player.attributes?.steamID} || {String(player.attributes?.isPlaying)} || {player.attributes?.deathCount}
     </div>)}
    </main>
  )
}
// data {
//   id
//   attributes {
//     layerName
//     teams {
//       data {
//         attributes {
//           teamName
//           teamID
//           killCount
//           deathCount
//           incapCount
//           deathCount