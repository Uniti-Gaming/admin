import {IGameData} from '@/assets/interfaces/IGame.ts';

interface Props {
    index: number;
    item: IGameData;
}

const TableItem = ({index, item}: Props) => {
    return (
        <>
            <tr>
                <td>{index + 1}</td>   {/* +1  сдвиг!*/}
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.action}</td>
            </tr>
        </>
    );
};

export default TableItem;