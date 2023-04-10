// index.js

window.addEventListener("gamepadconnected", (event) => {
    const gamepad = event.gamepad;
    const numGamepads = navigator.getGamepads().length;
  
    console.log(`Gamepad connected!`);
    
});

// AppView.js

import { Container, SimpleGrid } from "@mantine/core";
import { ProvLink } from "./ProvLink";
import data from '../providers.json'


export const AppView = () => {

    const renderProvLinks = data.map((x, index) => {
        return (
            <ProvLink key={index} displayName={x.displayName} url={x.urlPath} />
        )
    })

    return (
        <Container h={'100%'} fluid >
            <SimpleGrid cols={5}>
                {renderProvLinks}
            </SimpleGrid>
        </Container>
    )
}
