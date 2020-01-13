import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import First from '../components/first'
import Post from '../components/post'

const Home = () => (
  <div>
    <Head>
      <title>NextJS with ReactJS</title>
    </Head>
    <First name="Mehedi Hasan" age="27"/>
    <First name="Nahid Hasan" age="20"/>

    <Post/>

   
  </div>
)

export default Home