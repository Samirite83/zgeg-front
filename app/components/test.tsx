import { graphql } from '@/gql';
import { graphqlClient } from '@/lib/graphql-client';
// import { Inter } from 'next/font/google'
import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

const GetAllPlayersDocument = graphql(`
query GetAllPlayers {
  players {
    data {
      id
      attributes {
        name
        steamID
        isPlaying
        deathCount
      }
    }
  }
}
`);

const revalidate = 1000;

export default async function Test() {
  
  const { players } = await graphqlClient.request(GetAllPlayersDocument);
  
  return (
    <main className={styles.main}>
      {players?.data.map((player) => <div key={player.id}>{player.attributes?.name} || 
      {player.attributes?.steamID} || 
      {String(player.attributes?.isPlaying)} || 
      {player.attributes?.deathCount} || 
      </div>)}
    </main>
  )
}
