
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsComponent from './components/NewsComponent'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <NewsComponent/>
      </>
    )
  }
}
