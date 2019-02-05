import { Rule } from "./Rule";

export class Field{
    private name: string;
    private required: boolean;
    private rules: Array<Rule>
    private rulesActivated: Array<number>
    
    public hide: boolean;
    
    construct(){}

    getRulesActivated(): Array<number> {
        return this.rulesActivated;
    }

    setRules( index: number ): void
    {
        this.rulesActivated.push(index);
    }

    public getName (): string
    {
        return this.name;
    }

    public getRequired(): boolean
    {
        return this.required
    }

    public getRule ( index ): Rule
    {
        return this.rules[index];
    }

    public getRules(): Array<Rule>
    {
        return this.rules;
    }

    public setName ( name: string): void
    {
        this.name = name;
    }

    public setRequired ( required: boolean ): void{
        this.required = required
    }

    public addRule( rule: Rule): void
    {
        this.rules.push(rule)
    }

    public removeRule( index: number ): void
    {
        this.rules.slice(index, index+1)
    }
}