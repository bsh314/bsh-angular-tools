import { PasswordTemplate } from './password';
import { Regexp } from '../interfaces/regexp';

export const RegExpList: Regexp[] = [
    PasswordTemplate,

].map(t => new Regexp(t));

export default RegExpList;