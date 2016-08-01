export class OrganizationModel {
    
    id: string;
    name: string;
    description: string;
    enabled: boolean;

    constructor(name:string, description: string) {        
        this.name = name;
        this.description = description;
    }
    
}
