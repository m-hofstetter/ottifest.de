import React, {PropsWithChildren, useEffect, useState} from 'react';
import {DayCountdownService} from "../services/DayCountdownService";

interface CountdownComponentProps extends PropsWithChildren{
    targetDate: Date
}

function CountdownComponent(props: CountdownComponentProps) {

    const [daysLeft, setDaysLeft] = useState<number>(DayCountdownService(props.targetDate));

    useEffect(() => {
        console.log('asdf')
        const intervalId = setInterval(() => {
            setDaysLeft(
                DayCountdownService(props.targetDate)
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, [props.targetDate]);

    if (daysLeft > 1) {
        return <div className={'d-flex align-items-center'}>
            <div>Noch</div>
            <h1 className={'mx-2 mb-0'}>{daysLeft}</h1>
            <div>Tage</div>
        </div>
    }
    if (daysLeft === 1) {
        return <h1>Morgen!</h1>
    }
    if (daysLeft === 0) {
        return <h1>Heute</h1>
    }
    return <div>Vielen Dank für ein schönes Fest!</div>

};


export default CountdownComponent;