import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1rem;
  padding-top: 20px;
  max-width: 860px;
  text-align: center;
`

const WhoWeAre = () => (
  <Container id="who-we-are">
    <h1>Quem somos</h1>

    <div>
      <p>Pessoas com ideias na cabeça querendo ajudar a mudar o brasil</p>
    </div>
  </Container>
)

export default WhoWeAre
