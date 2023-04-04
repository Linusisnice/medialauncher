import { MantineProvider, Text, useMantineColorScheme, ColorSchemeProvider, Button } from '@mantine/core';
import { useState } from 'react';

export default function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = () => {
    if (colorScheme === 'light') {
      setColorScheme('dark');
    } else if (colorScheme === 'dark') {
      setColorScheme('light');
    }
  };
  const openYoutubePopup = () => {
    const width = Math.round(window.innerWidth * 0.9);
    const height = Math.round(window.innerHeight * 0.9);
    const left = Math.round((window.innerWidth - width) / 2);
    const top = Math.round((window.innerHeight - height) / 2);

    window.open('https://www.youtube.com/', '', `width=${width}, height=${height}, left=${left}, top=${top}`);
  };
  const openNetflixPopup = () => {
    const width = Math.round(window.innerWidth * 0.9);
    const height = Math.round(window.innerHeight * 0.9);
    const left = Math.round((window.innerWidth - width) / 2);
    const top = Math.round((window.innerHeight - height) / 2);

    window.open('https://www.netflix.com/', '', `width=${width}, height=${height}, left=${left}, top=${top}`);
  };
  const openHbomaxPopup = () => {
    const width = Math.round(window.innerWidth * 0.9);
    const height = Math.round(window.innerHeight * 0.9);
    const left = Math.round((window.innerWidth - width) / 2);
    const top = Math.round((window.innerHeight - height) / 2);

    window.open('https://www.hbomax.com/', '', `width=${width}, height=${height}, left=${left}, top=${top}`);
  };  
  const openDisneyplusPopup = () => {
    const width = Math.round(window.innerWidth * 0.9);
    const height = Math.round(window.innerHeight * 0.9);
    const left = Math.round((window.innerWidth - width) / 2);
    const top = Math.round((window.innerHeight - height) / 2);

    window.open('https://www.disneyplus.com/', '', `width=${width}, height=${height}, left=${left}, top=${top}`);
  };
  const openSettingsPopup = () => {
    const width = Math.round(window.innerWidth * 0.9);
    const height = Math.round(window.innerHeight * 0.9);
    const left = Math.round((window.innerWidth - width) / 2);
    const top = Math.round((window.innerHeight - height) / 2);

    window.open('/src/settings.jsx', '', `width=${width}, height=${height}, left=${left}, top=${top}`);
  };
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text size="lg" weight={700} style={{ marginBottom: 32 }}>MediaLauncher</Text>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }} onClick={openYoutubePopup}>Youtube</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }} onClick={openNetflixPopup}>Netflix</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }} onClick={openHbomaxPopup}>Hbo max</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}onClick={openDisneyplusPopup}>Disney Plus</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}>Button 5</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}>Button 6</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}>Button 7</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}>Button 8</Button>
            </div>
            <div style={{ marginTop: 32 }}>
              <Button size="lg" radius="xl" onClick={() => toggleColorScheme()} style={{ borderWidth: 2, borderColor: 'transparent' }}>
                Change Theme
              </Button>
            </div>
          </div>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
