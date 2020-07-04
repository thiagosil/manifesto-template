import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem 1rem;
  padding-top: 20px;
  max-width: 860px;
`

const Form = styled.form``

const InputContainer = styled.div`
  label {
    flex: none;
    display: block;
    width: 125px;
    font-weight: bold;
    font-size: 1em;
  }
`

const FirstInputContainer = styled.div`
  display: flex;

  label {
    font-weight: bold;
    font-size: 1em;
    margin-left: 10px;
    display: inline-block;
    width: 125px;
    text-align: right;
  }

  input {
    margin-left: 10px;
    font-size: 1em;
  }
`

const Assine = () => (
  <Container id="assine">
    <h1>Assine</h1>

    <div>
      <Form
        method="post"
        action="https://getform.io/f/83ab3867-aacc-466b-88d2-ae790a98a4d4"
      >
        <FirstInputContainer>
          <label>Nome</label>
          <input type="text" name="name" id="name" />

          <label>Sobrenome</label>
          <input type="text" name="last_name" id="last_name" />
        </FirstInputContainer>

        <InputContainer>
          <label>Email</label>
          <input type="email" name="email" id="email" />
          <button type="submit">Assinar</button>
        </InputContainer>
      </Form>
    </div>
  </Container>
)

export default Assine
