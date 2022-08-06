import styled from "styled-components"

import CardPosition from "../src/components/layout/Card"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H3 from "../src/components/typography/H3"
import H4 from "../src/components/typography/H4"

const FormContainer = styled.div`
margin-top: 60px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 20px
`
const Text = styled.p`
    text-align: center;
`

function LoginPage () {
    return (
        <CardPosition>
            <H2>Dashboard Kit</H2>
            <H1>Log In to Dashboard Kit</H1>
            <H4> Enter your email and password below</H4>
            <Form>
                <H3>EMAIL</H3>
                <input placeholder="Email address" type="email" />
                <H3>PASSWORD</H3>
                <input placeholder="Password" type="password"/>
                <button>Log In</button>
            </Form>
            <Text>Don't have an account? <a href="#">Sign up</a></Text>
        </CardPosition>
    )
}

export default LoginPage