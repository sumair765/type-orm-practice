import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	JoinColumn,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./Client";

export enum TransactionTypes {
	DEPOSIT = "deposit",
	WITHDRAW = "widthdraw",
}

// Addubg a comment to transactions.ts
// Addubg a comment to transactions.ts 2
// Addubg a comment to transactions.ts 3
// Addubg a comment to transactions.ts 4

@Entity("transactions")
export class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "enum",
		enum: TransactionTypes,
	})
	type: string;

	@Column({
		type: "numeric",
	})
	amount: number;

	@ManyToOne(() => Client, (client) => client.transactions, {
		onDelete: "CASCADE",
	})
	@JoinColumn({
		name: "client_id",
	})
	client: Client;
}
