import gql from "graphql-tag";

export const MATCHES_QUERY = gql`
  query getAllMatches {
    matches {
      data {
        id
        attributes {
        layerName
          teams {
            data {
              attributes {
                teamName
                teamID
                killCount
                deathCount
                incapCount
                deathCount
                squads  {
                  data {
                    attributes {
                      squadID
                      squadName
                      killCount
                      deathCount
                      incapCount
                      reviveCount
                      players {
                        data {
                          attributes {
                            name
                            playerID
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const PLAYERS_QUERY = gql`
query getAllPlayers {
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
`