import { Drawer, Button, ActionIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { TbSettings } from 'react-icons/tb';

export const Settings = () => {
  const [opened, { open, close }] = useDisclosure(false);

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
