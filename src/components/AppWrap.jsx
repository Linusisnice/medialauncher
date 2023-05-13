import { AppShell, Header, Title, Group } from "@mantine/core";
import { AppView } from "./AppView";
import { GamepadController } from "../util/gamepad";
import { Settings } from "./settings/settings";


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
        <Header height={80} p={'lg'} >
            <Group position="apart">
                <Title order={1}>MediaPortal</Title>
                <Settings/>
            </Group>
        </Header>
    )
}