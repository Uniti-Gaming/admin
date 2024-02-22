import React from 'react';

type headingProps = {
    title: string,
    size: number,
}

const Heading = ({title, size}: headingProps) => {
    const TagName = `h${size}`;

    return (
        <TagName>{title}</TagName>
    );
};

export default Heading;
