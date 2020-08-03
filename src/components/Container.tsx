import React, { ReactNode } from 'react';

interface ContainerProps {
    content: ReactNode;
}
export default function Container({ content }: ContainerProps): JSX.Element {
    return (
        <div>
            {content}
        </div>
    );
}
