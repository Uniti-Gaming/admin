import styles from './InputData.module.scss';


type InputProps = {
    labelCaption: string;
    inputValue?: string;
    inputType?: 'text';
}

const InputData = ({labelCaption, inputValue, inputType}: InputProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inputData}>
                <label className={styles.inputLabel}>{labelCaption}</label>
                <input className={styles.inputInput} type={inputType} value={inputValue}/>
            </div>
        </div>
    );
};

export default InputData;