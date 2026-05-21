import React, { use } from 'react';
import { AuthContext } from '../Contests/AuthContect/AuthContext';

const UseAuth = () => {

    const autInfo = use(AuthContext);

    return autInfo;
};

export default UseAuth;