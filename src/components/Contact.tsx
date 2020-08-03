import React from 'react';

interface ContactProps {
    email: string;
    mobile: string;
}
export const Contact = ({ email, mobile }: ContactProps) => (
    <>
        Contact me - With Props<br />
        Email: {email} <br />
        Mobile: {mobile}
    </>
)
