export class Argument {
    constructor(
        private name: string,
        private value: any,
        private type: string
    ){}

    public getName(): string
    {
        return this.name;
    }

    public getValue(): any
    {
        return this.value;
    }

    public getType (): string
    {
        return this.type;
    }

    public setName ( name: string ): void
    {
        this.name = name;
    }

    public setValue ( value: any ): void
    {
        this.value = value;
    }

    public setType ( type: string ): void
    {
        this.type = type;
    }
}