import { Button, IButtonProps } from "native-base";
import React from "react";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps{
    children: ReactNode
}

export default function Botao({children, ...rest}: ButtonProps){
    return(
        <Button
        width="100%"
        backgroundColor="blue.800"
        marginTop={10}
        borderRadius="lg"
        {...rest}
        >
            {children}
        </Button>
    );
};