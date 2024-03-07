/**
 * The SearchInput component in TypeScript React allows users to input search queries and submit them
 * through a button click.
 * @param  - The code you provided is a React functional component called `SearchInput`. It takes a
 * prop `submit` which is a function that accepts a string parameter and returns void. Inside the
 * component, there is a button and an input field for searching. When the button is clicked, it calls
 * the `submit
 * @returns The `SearchInput` component is being returned. It is a functional component that renders a
 * wrapper `div` containing an `input` element for search input and a `button` element for submitting
 * the search value. The `submit` function passed as a prop is called when the button is clicked with
 * the current value of the input field. The component uses local state to manage the value of the
 * input
 */
import { FC, useState } from 'react';
import styles from './SearchInput.module.scss';

type SearchInputProps = {
    submit: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ submit }) => {
    const [value, setValue] = useState<string>('');
    return (
        <div className={styles.wrapper}>
            <button onClick={() => submit(value)} className={styles.button} />
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={styles.input}
                type='search'
                placeholder='Поиск'
            />
        </div>
    );
};
