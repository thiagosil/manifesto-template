import React from "react"
import styled from "@emotion/styled"

const Container = styled.section`
  text-align: center;
`

const Assine = () => (
  <Container id="assine">
    <h1>Assine</h1>

    <div>
      <form method="post" action="https://getform.io/f/83ab3867-aacc-466b-88d2-ae790a98a4d4">
        <label>
          Nome
    <input type="text" name="name" id="name" />
        </label>
        <label>
          Sobrenome
    <input type="text" name="last_name" id="last_name" />
        </label>
        <label>
          Email
    <input type="email" name="email" id="email" />
        </label>
        <button type="submit">Assinar</button>
      </form>
    </div>
  </Container>
)

export default Assine
