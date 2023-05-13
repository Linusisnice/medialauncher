import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ActionIcon } from "@mantine/core";
import { TbSettings } from 'react-icons/tb';


export const Settings = () => {

  const [opened, { open, close }] = useDisclosure(false);

  return(
      <>
        <ActionIcon color="dark" variant="filled" size={'xl'} radius={'md'} onClick={open}>
            <TbSettings size={'2rem'} />
        </ActionIcon>
          <Drawer opened={opened} onClose={close} title="Settings" position="right" overlayProps={{ opacity: 0.5, blur: 4 }} size={'lg'} >
            Settings drawer
          </Drawer>
      </>
          )
}


