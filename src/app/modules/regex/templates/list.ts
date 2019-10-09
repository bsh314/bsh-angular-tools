import { PasswordTemplate } from './password';
import { EmailTemplate } from './email';
import { Regexp } from '../interfaces/regexp';

export const RegExpList: Regexp[] = [
    PasswordTemplate,
    EmailTemplate,
].map(t => new Regexp(t));

export default RegExpList;