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
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}fontSize="12px">Button 1</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}>Button 2</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}>Button 3</Button>
              <Button size="100px" radius="xl" style={{ margin: 8, borderWidth: 2, borderColor: 'transparent' }}>Button 4</Button>
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
