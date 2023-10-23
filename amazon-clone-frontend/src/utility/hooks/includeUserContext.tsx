import { useContext } from 'react';
import { AuthContext } from '../context/AuthenticationContext';

const includeUserContext = () => {
    return useContext(AuthContext);
}

export default includeUserContext;
