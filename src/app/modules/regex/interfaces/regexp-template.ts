import RegexpOption from './regexp-option';
import RegexpVariant from './regexp-variant';
import RegexpParam from './regexp-param';

export interface RegexpTemplate {
    name: string;
    title: string;
    exp: string;
    params?: RegexpParam[];
    options?: RegexpOption[];
    variants?: RegexpVariant[];
}

export default RegexpTemplate;