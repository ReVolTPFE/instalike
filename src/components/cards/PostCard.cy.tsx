import React from 'react'
import PostCard from './PostCard'

describe('<PostCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PostCard />)
  })
})