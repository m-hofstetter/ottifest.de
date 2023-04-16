import React, {MouseEventHandler, PropsWithChildren} from 'react';

interface ButtonComponentProps extends PropsWithChildren{
    disabled?: boolean;
    onClick?: MouseEventHandler;
}

function ButtonComponent(props: ButtonComponentProps) {

    return (
        <button type="button"
                className="btn btn-outline-primary"
                onClick={props.onClick}
                disabled={props.disabled}>
            {props.children}
        </button>
    );

};


export default ButtonComponent;