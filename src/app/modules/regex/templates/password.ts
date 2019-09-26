import RegexpTemplate from '../interfaces/regexp-template';

export const PasswordTemplate: RegexpTemplate = {
    exp: "^{{oneLetter}}{{oneNumber}}[A-Za-z\\d]{8,}$",
    name: 'password',
    title: 'Password',
    options: [
        {
            exp: '(?=.*[A-Za-z])',
            name: 'oneLetter',
            title: 'At least one letter'
        },
        {
            exp: '(?=.*\d)',
            name: 'oneNumber',
            title: 'At least one number'
        }
    ]
}

export default PasswordTemplate;