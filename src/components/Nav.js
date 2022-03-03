import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <NavContainer bg={show}>
            <img
                className='nav-logo'
                src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
                alt='netflix logo'
            />

            <img
                className='nav-avatar'
                src='https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589'
                alt='netflix avatar'
            />
        </NavContainer>
    );
}

const NavContainer = styled.div`
    /* border: 5px solid green; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    min-height: 50px;
    background: ${({ bg }) => (bg ? "#111" : "")};
    padding: 40px;
    z-index: 1;
    transition: all 0.2s ease-in-out;

    .nav-logo {
        position: fixed;
        left: 20px;
        width: 100px;
        object-fit: contain;
    }
    .nav-avatar {
        position: fixed;
        right: 35px;
        width: 50px;
        object-fit: contain;
    }
`;

export default Nav;
