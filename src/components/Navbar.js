import React from 'react'
import styled from 'styled-components'
import { useLoginContext } from '../context/LoginContext'

const Navbar = () => {
    const {loggedIn, setLoggedIn} = useLoginContext();
    const logout = () => {
        setLoggedIn(false);
    }
  return (
    <NavDiv>
        <div>
            <h2 style={{ color: "white" }}>SPA Project</h2>
        </div>
        <RightDiv>
            <Button>Download</Button>
            <Button onClick={logout}> {loggedIn? "Logout" : "Login"} </Button>
        </RightDiv>
    </NavDiv>
  )
}

export default Navbar

const NavDiv = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${ props => props.theme.colors.primary};
    padding: 15px 15px;
`
const RightDiv = styled.div`
    display:flex;
    gap: 50px;
`
const Button = styled.button`
    width: 80px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bolder;
    background-color: ${ props => props.theme.colors.secondary }
`
