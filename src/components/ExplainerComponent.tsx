import React, {PropsWithChildren, useEffect, useState} from 'react';
import ButtonComponent from "./ButtonComponent";

interface ExplainerComponentProps extends PropsWithChildren{
    className: string
}

function ExplainerComponent(props: ExplainerComponentProps) {

    return (
        <div className={
            'd-flex flex-column flex-sm-row ' +
            'justify-content-center gap-2 ' +
            'mx-2 mx-sm-0 ' +
            'mb-3'}>
            Das Ottifest 2023 steht an und ihr dürft abstimmen, was es dieses Mal zu essen gibt
        </div>
    );
};


export default ExplainerComponent;