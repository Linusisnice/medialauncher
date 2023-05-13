import { MantineProvider, Text, useMantineColorScheme, ColorSchemeProvider, Button } from '@mantine/core';
import { useState } from 'react';
import { AppWrap } from './components/AppWrap';
import { Notifications } from '@mantine/notifications'
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
        <Notifications/>
        <AppWrap/>
        {}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
