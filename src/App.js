import './App.css';
import Countdown from "react-countdown";
import {Center, Group, Stack, Text, Button, MantineProvider} from "@mantine/core"
import {useState} from "react";
import image from "./assets/outline.svg"
import {useMediaQuery} from "@mantine/hooks";

const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
        // Render a completed state
        return <span>#####</span>;
    } else {
        // Render a countdown
        return <span> {days} Tagen, {hours} Stunden, {minutes} Minuten und {seconds} Sekunden </span>;
    }
};


function App() {
    const smallButtons = useMediaQuery('(max-width: 550px)');

    const [voted, setVoted] = useState(false)

    return <MantineProvider
        theme={{
            globalStyles: (theme) => ({
                body: {
                    fontSize: '20pt',
                    [theme.fn.smallerThan('lg')]: {
                        fontSize: '14pt',
                    }
                }
            }),
        }}
    >

        <Center style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "60%",
        }}

        >
            <Stack align="center">
                <Text align="center"> Das <Text component="span" align="center" sx={(theme) => ({
                    fontSize: '150px',
                    marginBottom: '-100px',
                    [theme.fn.smallerThan('lg')]: {
                        fontSize: '80pt',
                    },
                    [theme.fn.smallerThan('sm')]: {
                        fontSize: '26pt',
                    },
                    [theme.fn.smallerThan('xs')]: {
                        fontSize: '14pt',
                    }
                })
                } weight={700} variant="gradient"
                                                gradient={{from: 'indigo', to: 'cyan', deg: 45}}>Ottifest 2023</Text> steht an.
                </Text>
                <Text align="center">In <Countdown renderer={renderer} date={"July, 8 2023 20:00:00"}/> ist es so
                    weit.</Text>
                <Text align="center">Welche Köstlichkeit servieren wir diesmal? Du entscheidest!</Text>

                {voted
                    ?
                    <Text align="center">Vielen Dank für deine Teilnahme an der Abstimmung! Wir sehen uns am 8. Juli im
                        Ottihaus! {voted}</Text>
                    :
                    <Group>
                        <Button variant={"gradient"} gradient={{from: 'indigo', to: 'cyan', deg: 45}} size={smallButtons? "sm" : "xl"}
                                onClick={() => setVoted(true)}>
                            Döner
                        </Button>
                        <Button variant={"gradient"} gradient={{from: 'indigo', to: 'cyan', deg: 45}} size={smallButtons? "sm" : "xl"}
                                onClick={() => setVoted(true)}>
                            Currywurst
                        </Button>
                        <Button variant={"gradient"} gradient={{from: 'indigo', to: 'cyan', deg: 45}} size={smallButtons? "sm" : "xl"}
                                onClick={() => setVoted(true)}>
                            Burger
                        </Button>
                    </Group>

                }

            </Stack>


        </Center>
    </MantineProvider>
}

export default App;
