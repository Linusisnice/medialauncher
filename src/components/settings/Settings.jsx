import { Drawer, Button, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TbSettings } from 'react-icons/tb';
import { useState } from 'react';
import { Slider, RangeSlider } from '@mantine/core';
export const Settings = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState(40);
  const [rangeValue, setRangeValue] = useState<[0, 100]>([20, 80]);
  return (
    
    <>
      <ActionIcon color="dark" variant="filled" size={'xl'} radius={'md'} onClick={open}>
        <TbSettings size={'2rem'} />
      </ActionIcon>
      <Drawer
        opened={opened}
        onClose={close}
        title="Settings"
        position="right"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        size={'lg'}
      >
        <Slider value={value} onChange={setValue} />
        <RangeSlider value={rangeValue} onChange={setRangeValue} />
        <Button radius="xl" margin ="20 "variant="outline" fullWidth>
          Button 1
        </Button>
        <Button radius="xl" variant="outline" fullWidth>
          Button 2
        </Button>
      </Drawer>
    </>
  );
  
};
