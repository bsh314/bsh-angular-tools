import RegexpTemplate from '../interfaces/regexp-template';

export const PasswordTemplate: RegexpTemplate = {
    exp: "^{{letters}}{{capitalLetters}}{{numbers}}{{special}}.{{{length}},}$",
    name: 'password',
    title: 'Password',
    params: [
        {
            name: 'length',
            title: 'Length',
            type: 'number',
            value: 6
        }
    ],
    options: [
        {
            exp: '(?=.*[A-Za-z])',
            name: 'letters',
            title: 'At least one letter'
        },
        {
            exp: '(?=(.*[A-Z]{{{length}},}))',
            name: 'capitalLetters',
            title: 'At least one capital letter',
            params: [
                {
                    name: 'length',
                    title: 'Length',
                    type: 'number',
                    value: 1
                }
            ]
        },
        {
            exp: '(?=(.*[\\d]{{{length}},}))',
            name: 'numbers',
            title: 'At least one number',
            params: [
                {
                    name: 'length',
                    title: 'Length',
                    type: 'number',
                    value: 1
                }
            ]
        },
        {
            exp: '(?=(.*?[^\\w\\s]{{{length}},}))',
            name: 'special',
            title: 'At least one special character',
            params: [
                {
                    name: 'length',
                    title: 'Length',
                    type: 'number',
                    value: 1
                }
            ]
        }
    ],
    examples: [
        'password',
        'Password',
        'password0',
        'Password0',
        'password#0',
        'Password#0',
        'longpasswordddd',
        'Longpasswordddd'
    ]
}

export default PasswordTemplate;