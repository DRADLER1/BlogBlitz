'use client'

import {useEffect, useState} from "react";
import styles from "./page.module.css";
import useSWR from 'swr'


const Dashboard = () => {
  // const [data , setData] = useState([])
  // const [err , setErr] = useState(false)
  // const [isLoading , setIsLoading] = useState(false)


  // useEffect(() => {
  //   const getData = async() => {
  //     setIsLoading(true)
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts` ,{next : {cache: 'no store'}});

  //     if(!res.ok){
  //       setErr(true);
  //     }
  //     setData(await res.json());
  //     setIsLoading(false);
  //   }

  //   getData()
  // } , [])


  //next js SWR hook 

  // console.log(data)


  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const {data , error , isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts' , fetcher)

  console.log(data)

  return <div className={styles.container}> Dashboard</div>;
};

export default Dashboard;
