import { ApolloClient, InMemoryCache } from '@apollo/client'
import { REACT_APP_API_URI } from '@env'

const cache = new InMemoryCache()

const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI1LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU2NzU3MDk0LCJleHAiOjE2NTczNjE4OTR9.DMW2VoZzDuZjPH1xPzRSoO3Hp_rZ7IWTrGwceX_fRPi7F8PzzZj_0h3kCX4DggpSiSD5Lml6w9NXa0IZ4h7BObEKmWml1uwb-XYTrful3WsN5fnzbrAYpne110HeGcbHy1-n5K4U511lE6ZhsrFkdiSoR1o_7klaLvcHZo19N3nEq2wJQW788Ky_Mg7J6Lq43a-906iSpG3BUzlgJMXFCOEQUyhb4t1NnRkpI54IDQjphC5i2mOIC2jjiyw0ZT31ub1TzEoTE3tKdnwDZhO0wgKfM75GJn_YhgMI5EkRXVRQx75rSvUPL6SAiMWKv5k6Yzc6ZRlKQShQqxoTe9pwFA"

export const client = new ApolloClient({
    uri: REACT_APP_API_URI,
    headers: {
        Authorization: `Bearer ${token}`,
    },
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
})

