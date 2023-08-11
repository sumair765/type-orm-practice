import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { Person } from "./utils/Person";
import { Client } from "./Client";

//Add comment
@Entity("banker")
export class Banker extends Person {
	@Column({
		unique: true,
		length: 10,
	})
	employee_number: string;

	@ManyToMany(() => Client)
	@JoinTable({
		name: "Bankers_clients",
		joinColumn: {
			name: "banker",
			referencedColumnName: "id",
		},
		inverseJoinColumn: {
			name: "client",
			referencedColumnName: "id",
		},
	})
	clients: Client[];
}
