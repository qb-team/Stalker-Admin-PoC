export class Organization {
    public organization: string;
    constructor(
        public o: string
    ) {this.organization = o;}

    getOrg()
    {
        return this.organization;
    }
}