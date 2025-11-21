import * as z from 'zod';
import { AddressSchema } from './AddressDto.js';

export const UserDto = z.object({
    Username: z.string().max(65),
    Email: z.email(),
    Password: z.string().max(32),
    PhoneNumber: z.string().max(11),
    Address: AddressSchema
});
