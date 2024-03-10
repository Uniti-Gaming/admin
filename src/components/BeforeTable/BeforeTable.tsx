/**
 * The BeforeTable component is a TypeScript React component that renders a title, children elements,
 * and a SearchInput component based on the provided props.
 * @param  - The `BeforeTable` component accepts the following props:
 * @returns The `BeforeTable` component is being returned. It is a functional component that takes
 * `search`, `title`, and `children` as props. Inside the component, it renders a wrapper `div` with a
 * title, children elements, and a `SearchInput` component if the `search` prop is provided.
 */
import { FC } from 'react';
import { SearchInput } from '@components';
import styles from './BeforeTable.module.scss';

type BeforeTableProps = {
    search?: (value: string) => void;
    title?: string;
    children?: JSX.Element | JSX.Element[];
}

const BeforeTable: FC<BeforeTableProps> = ({ search, title, children }) => {
    return (
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {children}
            {search && <SearchInput submit={search} />}
        </div>
    );
};

export default BeforeTable;