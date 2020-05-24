import React from 'react';
import { Consumer } from '../service-context';

const withService = () => (Wrapped) => {
    return (props) => { 
        return (
            <Consumer>
                {
                    (value) => {
                        return <Wrapped {...props} service={value} />
                    }
                }
            </Consumer>
        );
    }
}

export {
    withService
}

