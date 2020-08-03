import React from 'react';
import { useParams } from 'react-router-dom';

export const User = () => {
    const { userId, name } = useParams();
    return (
        <>
            User details - With Params <br/>
            User <b>{userId}</b>
            <br />
            Name <b>{name}</b>
        </>
    )
}