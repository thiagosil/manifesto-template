import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1rem;
  padding-top: 20px;
  max-width: 860px;
  text-align: center;
`

const SocialShare = () => (
  <Container id="social-share">
    <h1>Compartilhe</h1>

    <div>
      <p>Facebook</p>
      <p>Twitter</p>
      <p>Whatsapp</p>
    </div>
  </Container>
)

export default SocialShare
