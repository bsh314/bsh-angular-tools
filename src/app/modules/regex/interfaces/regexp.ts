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

    options: RegexpOption[];
    variants: RegexpVariant[];

    currentOptions: RegexpOption[] = [];
    currentVariant: RegexpVariant;

    constructor(template: RegexpTemplate) {
        console.log(template.options)
        try {
            this.name = template.name;
            this.title = template.title;
            this.exp = template.exp;

            if (template.options) {
                this.options = template.options;
            }

            if (template.variants) {
                this.variants = template.variants;
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
        console.log(this.processed);
        return;
    }

    private update(): void {
        this.processed = this.exp;
        for (let i = 0; i < this.currentOptions.length; i++) {
            const option = this.currentOptions[i];
            this.processed = this.replace(this.processed, option.name, option.exp);
        }
        this.processed = this.replace(this.processed);
    }
    private replaceParam(input: string, key?: string, value?: string): string {
        return input.replace(`{{${key}Param}}`, value);
    }

    private replace(input: string, key?: string, value?: string): string {
        if (!key || !value) {
            return input.replace(/{{.*}}/g, '');
        }
        return input.replace(`{{${key}}}`, value);
    }
}

export default Regexp;