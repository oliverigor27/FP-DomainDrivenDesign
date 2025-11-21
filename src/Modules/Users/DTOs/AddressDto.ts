import * as z from 'zod';

export const AddressSchema = z.object({
    ZipCode: z.string().max(8),
    Street: z.string().max(125),
    City: z.string().max(125),
    State: z.string().max(125)
})