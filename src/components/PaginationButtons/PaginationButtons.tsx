/**
 * The PaginationButtons component in TypeScript React renders pagination buttons based on the total
 * number of pages, current page, and allows for page change through a callback function.
 * @returns The PaginationButtons component is being returned. It is a functional component that
 * displays pagination buttons based on the totalPages, currentPage, and onChangePage props provided to
 * it. The component handles the logic to generate the page numbers and render the appropriate buttons
 * for navigating through the pages.
 */
import { FC } from 'react';
import classNames from 'classnames';
import styles from './PaginationButtons.module.scss';

type PaginationButtonsProps = {
    totalPages: number;
    currentPage: number;
    onChangePage: (page: number) => void;
  }

const PaginationButtons: FC<PaginationButtonsProps> = ({ totalPages, currentPage, onChangePage }) => {

    if(totalPages < 2) {
        return null;
    }

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className={styles.wrapper}>
            <button
                className={classNames(
                    styles.button,
                    styles.previous,
                    {[styles.disabled]: currentPage === 1},
                )}
                onClick={() => onChangePage(currentPage - 1)}
            >
                Предыдущее
            </button>
            {currentPage > 3 && (
                <>
                    <button onClick={() => onChangePage(1)} className={styles.button}>1</button>
                    <span className={styles.dots}>...</span>
                </>
            )}
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onChangePage(page)}
                    className={classNames(styles.button, { [styles.current]: page === currentPage })}
                >
                    {page}
                </button>
            ))}
            <button
                className={classNames(
                    styles.button,
                    styles.next,
                    {[styles.disabled]: currentPage === totalPages},
                )}
                onClick={() => onChangePage(currentPage + 1)}
            >
                Дальше
            </button>
        </div>
    );
};

export default PaginationButtons;