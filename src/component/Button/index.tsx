import React from 'react';
import Button from '../Button';

interface ButtonContainerProps {
    className: string;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ className }:any) => {
    return (
        <div className={className}>
            <Button
                className={`${className}Button`}
                name="Login"
                label="Log in"
            />
            <Button
                className={`${className}Button`}
                name="SignUp"
                label="Sign Up"
            />
        </div>
    );
};

export default ButtonContainer;
