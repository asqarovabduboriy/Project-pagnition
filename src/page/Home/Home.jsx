import React from 'react'
import Hero from '../../components/Hero/Hero'
import Main from '../../components/Main/Main'
import Product from '../../components/product/Product'
import Loader from '../../components/loader/Loader'
import Users from '../../components/users/Users'

const Home = () => {
  return (
    <>
      <Hero/>
      <Main/>
      <Product/>
      <Users/>
    </>
  )
}

export default Home