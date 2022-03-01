import axios from "axios"
import React, { useEffect } from 'react'

const Index = () => {
  const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f931866bf7msh4779fe28087fc77p1c784bjsn86302e7811ea'
  }
  };
  
 useEffect(() => {
   axios.request(options).then(({data}) => {
      console.log(data);
    }).catch((error) => {
      console.error(error);
    });
 

 }, [])
 
  return (
    <div>hello</div>
  )
}
// export default Index
export default Index
// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': 'f931866bf7msh4779fe28087fc77p1c784bjsn86302e7811ea'
//   }
// };

