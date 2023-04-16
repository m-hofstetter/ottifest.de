import React, {useEffect, useState} from 'react';
import ButtonComponent from "./ButtonComponent";

interface PollComponentProps {
}

function PollComponent(props: PollComponentProps) {

    const [visitedBefore, setVisitedBefore] = useState(false);

    useEffect(() => {
        const hasVisitedBefore = localStorage.getItem('visitedBefore') === 'true';
        if (hasVisitedBefore) {
            setVisitedBefore(true);
        }
    }, []);

    function setVariable() {
        localStorage.setItem('visitedBefore', 'true');
        setVisitedBefore(true)
    }

    return (
        <div className={
            'd-flex flex-column flex-sm-row ' +
            'justify-content-center gap-2 ' +
            'mx-2 mx-sm-0'}>
            <ButtonComponent disabled={visitedBefore} onClick={setVariable}>
                Currywurst {String(visitedBefore)}
            </ButtonComponent>
            <ButtonComponent disabled={visitedBefore} onClick={setVariable}>
                Burger {String(visitedBefore)}
            </ButtonComponent>
            <ButtonComponent disabled={visitedBefore} onClick={setVariable}>
                {String(visitedBefore)}
            </ButtonComponent>
        </div>
    );
};


export default PollComponent;