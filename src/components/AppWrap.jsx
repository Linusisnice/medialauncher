import { AppShell, Header, Title } from "@mantine/core";
import { AppView } from "./AppView";
import { GamepadController } from "../util/gamepad";


export const AppWrap = () => {

    return (
        <AppShell header={<AppHeader/>} >
            <GamepadController/>
            <AppView/>  
        </AppShell>
    )

}


const AppHeader = () => {

    return (
        <Header height={80} p={'lg'} sx={{display: 'flex', alignItems: 'center'}}>
            <Title order={1}>MediaPortal</Title>
        </Header>
    )
}