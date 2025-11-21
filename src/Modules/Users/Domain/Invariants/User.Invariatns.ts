const emailPattern: RegExp = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const passwordPattern : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\:;"'<>,.?/_₹])(?!.*\s).{8,32}$/;

export const IsValidEmail = (email: string) : boolean =>  emailPattern.test(email);
export const IsValidPassWord = (password: string) : boolean => passwordPattern.test(password);
export const IsUserActive = (isActive: boolean) : boolean => isActive === true;
