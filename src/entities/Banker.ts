import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { Person } from "./utils/Person";
import { Client } from "./Client";

//Add comment

//MORE COMMENTS FROM FEATURE BRANCH 1
//MORE COMMENTS FROM FEATURE BRANCH 2
//MORE COMMENTS FROM FEATURE BRANCH 3
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
