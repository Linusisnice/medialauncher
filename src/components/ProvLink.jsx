import { Button, Text } from "@mantine/core";

export const ProvLink = (props) => {

    return(

        <Button color={'teal'} size='xl' radius={'lg'} onClick={()=> window.open(props.url, "_blank")}
         >
            <Text>{props.displayName}</Text>
        </Button>
    )
}


