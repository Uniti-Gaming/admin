import { IUser, IGameData } from '@interfaces';
import usersData from './fakeUsers.json';
import gamesData from './fakeGames.json';

const typedUsersData = usersData as IUser[];
const typedGamesData = gamesData as IGameData[];

export { default as text } from './text.json';
export { typedUsersData as usersData };
export { typedGamesData as gamesData };
