import { FC } from 'react';

import styles from './Table.module.scss';
import classNames from 'classnames';

type CellProps = {
    cell: React.ReactNode | string;
    TagName?: 'td' | 'th';
    colSpan?: number;
    extraClass?: string;
}

export type RowProps = {
    row: CellProps[];
    TagName?: 'td' | 'th';
}


const Cell: FC<CellProps> = ({ TagName = 'td', cell, colSpan = 1, extraClass }) => {
    return (
        <TagName className={classNames(styles.cell, extraClass)} colSpan={colSpan}>
            {cell}
        </TagName>
    );
};


const Row: FC<RowProps> = ({ row, TagName = 'td' }) => {
    return (
        <tr className={styles.row}>
            {row.map((elem, index) => (
                <Cell
                    key={index}
                    {...elem}
                    TagName={elem.TagName ? elem.TagName : TagName}
                />
            ))}
        </tr>
    );
};

export default Row;