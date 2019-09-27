import RegexpOption from './regexp-option';
import RegexpVariant from './regexp-variant';
import RegexpResult from './regexp-result';
import RegexpTemplate from './regexp-template';
import RegexpParam from './regexp-param';

export class Regexp {

    name: string;
    title: string;
    exp: string;
    processed: string;

    params: RegexpParam[];
    options: RegexpOption[];
    variants: RegexpVariant[];
    examples: string[];

    currentOptions: RegexpOption[] = [];
    currentVariant: RegexpVariant;

    constructor(template: RegexpTemplate) {
        console.log(template.options)
        try {
            this.name = template.name;
            this.title = template.title;
            this.exp = template.exp;

            if (template.params) {
                this.params = template.params;
            }

            if (template.options) {
                this.options = template.options;
            }

            if (template.variants) {
                this.variants = template.variants;
            }

            if (template.examples) {
                this.examples = template.examples;
            }

            this.update();
            console.log(`Regexp "${this.title}":`, );
        } catch (error) {
            throw new Error('Invalid RegexpTemplate input');
        }
    }

    setOption(option: RegexpOption, params?: RegexpParam): RegexpOption[] {
        let exists = false;
        for (let i = 0; i < this.currentOptions.length; i++) {
            const currentOption = this.currentOptions[i];
            if (option.name === currentOption.name) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            this.currentOptions.push(option);
        }
        this.update();
        return this.currentOptions;
    }

    setVariant(variant: RegexpVariant): RegexpOption[] {
        this.currentVariant = variant;
        return this.currentOptions;
    }

    eval(input: string): RegexpResult {
        const regexp = new RegExp(this.processed, 'gm');
        console.log(regexp);
        console.log(input + ' -> ' + regexp, regexp.exec(input));

        return;
    }

    private update(): void {
        this.processed = this.exp;
        for (let i = 0; i < this.params.length; i++) {
            const param = this.params[i];
            this.processed = this.replace(this.processed, param.name, param.value);
        }
        for (let i = 0; i < this.currentOptions.length; i++) {
            const option = this.currentOptions[i];
            let exp = option.exp;
            if (option.params && option.params.length > 0) {
                for (let j = 0; j < option.params.length; j++) {
                    const param = option.params[j];
                    exp = this.replace(exp, param.name, param.value);
                }
            }
            this.processed = this.replace(this.processed, option.name, exp);
        }
        this.processed = this.replace(this.processed);
    }

    private replace(input: string, key?: string, value?: string | number): string {
        if (!key || !value) {
            return input.replace(/{{.*}}/g, '');
        }
        return input.replace(`{{${key}}}`, value+'');
    }
}

export default Regexp;