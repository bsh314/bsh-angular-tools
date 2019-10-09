import RegexpParam from './regexp-param';

export interface RegexpOption {
    name: string;
    title: string;
    exp: string;
    params?: RegexpParam[];
    enabled?: boolean;
}

export default RegexpOption;
