interface IEmail {
    email: string;
    verified: boolean;
}

interface IPhone {
    number: string;
    verified: boolean;
}

interface ITariff {
    name: string;
    start_date: string;
    end_date: string;
}

interface IBalance {
    main: number;
    tickets: number;
    coins: number;
}

export interface IUser {
    id: number;
    name: string;
    email: IEmail;
    phone: IPhone;
    tariff: ITariff;
    balance: IBalance;
    language: string;
    status: 'active' | 'blocked';
    registration_date: string;
    comment: string;
    data: string;
}