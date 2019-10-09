import RegexpOption from './regexp-option';
import RegexpVariant from './regexp-variant';
import RegexpResult from './regexp-result';
import RegexpTemplate from './regexp-template';
import RegexpParam from './regexp-param';
import RegexpVariantDefault from './regexp-variant-default';

export class Regexp {

  name: string;
  title: string;
  icon: string;
  description: string;
  reference: string;

  exp: string;
  output: string;
  editable: RegexpVariant;

  params: RegexpParam[] = [];
  options: RegexpOption[] = [];
  variants: RegexpVariant[] = [];
  examples: string[] = [];

  currentOptions: RegexpOption[] = [];
  currentVariant: RegexpVariant;

  constructor(template: RegexpTemplate) {
    try {
      this.name = template.name;
      this.title = template.title;
      this.icon = template.icon;
      this.description = template.description;
      this.reference = template.reference;

      this.exp = template.exp;

      if (template.params) {
        this.params = template.params;
      }

      if (template.options) {
        this.options = template.options;
      }

      if (template.examples) {
        this.examples = template.examples;
      }

      if (template.variants) {
        if (this.options && this.options.length > 0) {
          this.editable = RegexpVariantDefault;
          this.variants = [this.editable, ...template.variants];
        } else {
          this.variants = template.variants;
        }

        if (this.variants.length > 0) {
          const defaultVariant = this.variants.find(v => v.default);
          this.setVariant(defaultVariant || this.variants[0]);
          return;
        }
      }

      this.update();
    } catch (error) {
      throw new Error('Invalid RegexpTemplate input');
    }
  }
  /* LEGACY
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
  */

  setVariant(variant: RegexpVariant): void {
    this.currentVariant = variant;
    this.editable = this.currentVariant.name === RegexpVariantDefault.name ? RegexpVariantDefault : undefined;
    return this.update();
  }

  eval(input: string): RegexpResult {
    const regexp = new RegExp(this.output, 'gm');
    return regexp.test(input);
  }

  update(): void {
    this.output = this.exp;
    if (!this.editable && this.currentVariant) {
      this.output = this.currentVariant.exp;
      return;
    }
    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];
      this.output = this.replace(this.output, param.name, param.value);
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
      this.output = this.replace(this.output, option.name, exp);
    }
    this.output = this.replace(this.output);
    return;
  }

  private replace(input: string, key?: string, value?: string | number): string {
    if (!key || !value) {
      return input.replace(/{{.*}}/g, '');
    }
    return input.replace(`{{${key}}}`, value + '');
  }
}

export default Regexp;
