import RegexpTemplate from '../interfaces/regexp-template';

export const PasswordTemplate: RegexpTemplate = {
    exp: "^{{letters}}{{capitalLetters}}{{numbers}}{{special}}.{{{length}},{{maxLength}}}$",
    name: 'password',
    title: 'Password',
    icon: 'pi pi-key',
    description: 'Password RegExp generator with multiple rules and pre-defined variants.',
    reference: 'https://stackoverflow.com/questions/48345922/reference-password-validation',
    params: [
        {
            name: 'length',
            title: 'Length',
            type: 'number',
            value: 6
        },
        {
            name: 'maxLength',
            title: 'Max Length',
            type: 'number',
            value: 32
        }
    ],
    variants: [
        {
            exp: '^[\\d]{4,4}$',
            name: 'pin',
            title: 'PIN'
        },
        {
            exp: '^.{6,}$',
            name: 'weak',
            title: 'Weak'
        },
        {
            exp: '^(?=.*[A-Za-z])(?=(.*[\\d]{1,})).{6,}$',
            name: 'medium',
            title: 'Medium',
            default: true,
        },
        {
            exp: '^(?=.*[A-Za-z])(?=(.*[A-Z]{1,}))(?=(.*[\\d]{1,})).{8,}$',
            name: 'strong',
            title: 'Strong',
        }
    ],
    options: [
        {
            exp: '(?=.*[A-Za-z])',
            name: 'letters',
            title: 'At least one letter'
        },
        {
            exp: '(?=(.*[A-Z]{{{length}},{{maxLength}}}))',
            name: 'capitalLetters',
            title: 'At least one capital letter',
            params: [
                {
                    name: 'length',
                    title: 'Length',
                    type: 'number',
                    value: 1
                },
                {
                    name: 'maxLength',
                    title: 'Max Length',
                    type: 'number',
                    value: 32
                }
            ]
        },
        {
            exp: '(?=(.*[\\d]{{{length}},{{maxLength}}}))',
            name: 'numbers',
            title: 'At least one number',
            params: [
                {
                    name: 'length',
                    title: 'Length',
                    type: 'number',
                    value: 1
                },
                {
                    name: 'maxLength',
                    title: 'Max Length',
                    type: 'number',
                    value: 32
                }
            ]
        },
        {
            exp: '(?=(.*?[^\\w\\s]{{{length}},{{maxLength}}}))',
            name: 'special',
            title: 'At least one special character',
            params: [
                {
                    name: 'length',
                    title: 'Length',
                    type: 'number',
                    value: 1
                },
                {
                    name: 'maxLength',
                    title: 'Max Length',
                    type: 'number',
                    value: 32
                }
            ]
        }
    ],
    examples: [
        '123',
        '1234',
        'kitty',
        '1Kitty',
        '1Ki77y',
        'susan',
        'Susan53',
        '.Susan53',
        'jellyfish',
        'jelly22fish',
        'jelly22fi$h',
        'smellycat',
        'sm3llycat',
        '$m3llycat',
        'allblacks',
        'a11Blacks',
        'a11Black$',
        'usher',
        '!usher',
        '!ush3r',
        'ebay44',
        'ebay.44',
        '&ebay.44',
        'deltagamma',
        'deltagamm@',
        'd3ltagamm@',
        'ilovemypiano',
        '!LoveMyPiano',
        '!Lov3MyPiano',
        'Sterling',
        'SterlingGmal2015',
        'SterlingGmail20.15',
        'BankLogin',
        'BankLogin13',
        'BankLogin!3',
    ]
}

export default PasswordTemplate;