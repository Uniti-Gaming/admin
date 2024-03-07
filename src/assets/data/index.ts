import { IUser } from '@interfaces';
import usersData from './fakeUsers.json';

const typedUsersData = usersData as IUser[];

export { default as text } from './text.json';
export {typedUsersData as usersData};
