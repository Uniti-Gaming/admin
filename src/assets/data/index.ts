import {
    IUser,
    IGameData,
    IOperator,
    IPlan,
    IPromo,
} from '@interfaces';

import usersData from './fakeUsers.json';
import gamesData from './fakeGames.json';
import operatorsData from './fakeOperators.json';
import plansData from './fakePlans.json';
import promosData from './fakePromos.json';

const typedUsersData = usersData as IUser[];
const typedGamesData = gamesData as IGameData[];
const typedOperatorsData = operatorsData as IOperator[];
const typedPlansData = plansData as IPlan[];
const typedPromosData = promosData as IPromo[];

export {default as text} from './text.json';
export {typedUsersData as usersData};
export {typedGamesData as gamesData};
export {typedOperatorsData as operatorsData};
export {typedPlansData as plansData};
export {typedPromosData as promosData};
