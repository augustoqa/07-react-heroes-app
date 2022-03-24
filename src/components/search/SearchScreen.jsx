import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = ({ history }) => {
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const [values, handleInputChange] = useForm({ superhero: q })
  const { superhero } = values

  const heroesFilered = heroes

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${superhero}`)
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>

          <form onSubmit={handleSearch}>
            <input
              name='superhero'
              type='text'
              placeholder='Find your hero'
              className='form-control'
              autoComplete='off'
              value={superhero}
              onChange={handleInputChange}
            />

            <button
              type='submit'
              className='btn mt-1 btn-block btn-outline-primary'
            >
              Search...
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {heroesFilered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  )
}
