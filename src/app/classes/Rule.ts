import { Argument } from "./Argument";

export class Rule {
    private name: string;
    private arguments: Array<Argument>
    
    constructor ( name: string, args: Array<Argument> )
    {
        this.setName(name);
        this.setArguments(args);
    }

    public getName(): string
    {
        return this.name;
    }

    public getArguments(): Array<Argument>
    {
        return this.arguments
    }

    public getArgument ( index: number ): Argument
    {
        return this.arguments[index];
    }

    public setName ( name: string ): void
    {
        this.name = name
    }

    public addArgument ( argument: Argument ): void
    {
        this.arguments.push(argument);
    }

    public removeArgument ( index: number ): void
    {
        this.arguments.slice( index, index+1 )
    }
    
    public setArguments( args: Array<Argument> ): void
    {
        this.arguments = args;
    }

    public removeArguments (): void
    {
        this.arguments = [];
    }
}