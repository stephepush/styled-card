import React from "react";
import styled from "styled-components";
import { device } from "./device";
import Card from "./Card";

const Section = styled.section`
    display: grid;
    grid-template-rows: 5rem auto;
`;

const Header = styled.header`
    background: red;
    grid-row-start: 1;
    grid-row-end: 2;
`;

const Main = styled.main`
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`;


function Page() {
    return(
        <Section>
            <Header>This is the header sucka</Header>
            <Main>
                <Card />
                <Card />
                <Card />
            </Main>
        </Section>
    )
}

export default Page;