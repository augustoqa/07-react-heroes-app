import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className='container mt-2'>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/hero/:heroeId' component={HeroScreen} />
          <Route exact path='/dc/' component={DcScreen} />
          <Route exact path='/search' component={SearchScreen} />

          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  )
}
