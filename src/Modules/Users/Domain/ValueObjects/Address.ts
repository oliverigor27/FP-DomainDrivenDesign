import { ValueObject } from "../../../SeedWork/ValueObject.js";

export type Adderss = ValueObject<{
    zipcode: string,
    street: string,
    city: string,
    state: string
}>