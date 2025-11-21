export const ZipCodeHaveEightNumbers = (zipCode: string): boolean => {
    return String(zipCode).length == 8;
}
