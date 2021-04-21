export interface Account {
	id: number;
	name: string;
	email: string;
	phone: string;
	password: string;
	balance: number;
}

export interface Comment {
	id: number;
	email: string;
	content: string;
}