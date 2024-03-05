
type HeadingProps = {
    title: string,
    size: number
}

const Heading = ({title, size}: HeadingProps) => {
    const TagName = `h${size}` as keyof React.JSX.IntrinsicElements;

    return (
        <TagName>{title}</TagName>
    );
};

export default Heading;
