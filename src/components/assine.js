import React from 'react'
import styled from '@emotion/styled'
import SectionContainer from './section-container'

const FormContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

const FormRow = styled.div`
  display: flex;
  margin-top: 1rem;
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    text-align: left;
  }
`

const FormColumn = styled.div`
  display: block;

  & + & {
    margin-left: 1rem;
  }
`

const SignButton = styled.button``

const Assine = () => (
  <SectionContainer id="assine">
    <h1>Assine</h1>

    <FormContainer>
      <form
        method="post"
        action="https://getform.io/f/83ab3867-aacc-466b-88d2-ae790a98a4d4"
      >
        <FormRow>
          <FormColumn>
            <FormField>
              <label>Nome</label>
              <input type="text" name="name" id="name" />
            </FormField>
          </FormColumn>
          <FormColumn>
            <FormField>
              <label>Sobrenome</label>
              <input type="text" name="last_name" id="last_name" />
            </FormField>
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormField>
            <label>Email</label>
            <input type="email" name="email" id="email" />
          </FormField>
        </FormRow>

        <FormRow>
          <SignButton type="submit">Assinar</SignButton>
        </FormRow>
      </form>
    </FormContainer>
  </SectionContainer>
)

export default Assine
