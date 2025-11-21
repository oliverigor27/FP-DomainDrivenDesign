import { BaseEntity } from "../../../SeedWork/BaseEntity.js"
import { Adderss } from "../ValueObjects/Address.js";

export type User = BaseEntity<{
    Username: string,
    Email: string, 
    Password: string,
    PhoneNumber: number,
    Address: Adderss
}>;
