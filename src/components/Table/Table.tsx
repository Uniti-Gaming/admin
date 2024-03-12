import { FC } from 'react';

import Row, { RowProps } from '@/components/Table/Row';

import styles from './Table.module.scss';

type TableProps = {
    children?: React.ReactNode | React.ReactNode[];
};

type TbodyProps = {
    children: JSX.Element | JSX.Element[];
}

const Thead: FC<RowProps> = (props) => {
    return <thead className={styles.thead}><Row {...props} TagName='th' /></thead>;
};

const Tbody: FC<TbodyProps> = ({ children }) => {
    return (
        <tbody className={styles.tbody}>{children}</tbody>
    );
};

const Table: FC<TableProps> = ({ children }) => {
    return (
        <table className={styles.table}>{children}</table>
    );
};

export { Table, Thead, Tbody };
