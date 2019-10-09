import RegexpTemplate from '../interfaces/regexp-template';

export const EmailTemplate: RegexpTemplate = {
    exp: '^([!#-\'*+/-9=?A-Z^-~-]+(\.[!#-\'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-\'*+/-9=?A-Z^-~-]+(\.[!#-\'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])$',
    name: 'email',
    title: 'Email',
    icon: 'pi pi-envelope',
    description: 'RFC 5322 standart email validation Regular expression',
    reference: 'https://tools.ietf.org/html/rfc5322#section-3.4',
    examples: [
        'mysite.ourearth.com',
        'mysite@.com.my',
        '@you.me.net',
        'mysite@.org.org',
        '.mysite@mysite.org',
        'mysite()*@gmail.com',
        'mysite..1234@yahoo.com',
        'simple@example.com',
        'very.common@example.com',
        'disposable.style.email.with+symbol@example.com',
        'other.email-with-hyphen@example.com',
        'fully-qualified-domain@example.com',
    ]
}

export default EmailTemplate;