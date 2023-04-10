import { Notification, Text } from "@mantine/core"
import { useState } from "react"
import { notifications } from "@mantine/notifications"
export const GamepadController = () => {
    const [gamepadDetails, setGamepadDetails] = useState(null)

    window.addEventListener('gamepadconnected', (e) => connectGamepad(e))
    window.addEventListener('gamepaddisconnected', (e) => disconnectGamepad(e))

    function connectGamepad(e) {
        const gamepadName = e.gamepad.id.split('(')[0].trim();
        setGamepadDetails(gamepadName);
        notifications.show({
          title: 'New Gamepad Connected',
          message: gamepadName,
          style: {
            position: 'fixed',
            top: '10px',
            right: '10px'
          }
        });
      }
      

    function disconnectGamepad(e) {
        setGamepadDetails(null)
    }

    
}
