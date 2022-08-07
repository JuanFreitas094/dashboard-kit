import styled from "styled-components"

import LoginCard from "../src/components/layout/LoginCard"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import H5 from "../src/components/typography/H5"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

import Link from "next/link"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 20px
`
const Text = styled.p`
    text-align: center;
    color: ${props => props.theme.grey};
`

const StyledImg = styled.img`
    width: 42px;
    heigth: 42px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-bottom: 10px;
`

const StyledPassword =styled.div`
    display: flex;
`

function LoginPage () {
    return (
        <LoginCard>
            <StyledImg src="/icon.png" alt="image" />
            <H2>Dashboard Kit</H2>
            <H1>Log In to Dashboard Kit</H1>
            <H4> Enter your email and password below</H4>
            <Form>
                <Input label="EMAIL" placeholder="Email address"type="email" />                
                <StyledPassword>
                    <Input label="PASSWORD" placeholder="Password" type="password" showPass={true}/>
                    <a href="#"><H5>Forgot password?</H5></a>
                </StyledPassword>
                <Link href="/overview"><Button>Log In</Button></Link>
            </Form>
            <Text>Don't have an account? <a href="#">Sign up</a></Text>
        </LoginCard>
    )
}

export default LoginPage