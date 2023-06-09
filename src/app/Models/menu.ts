

    
    export class Menu {
        id?: number;
        date?: string | Date;
       name ?:string;
       price?:string
    }
    
    
    
    
    
    
    
    
    
    
    
    export interface Country {
        name?: string;
        code?: string;
    }
    
    export interface Representative {
        name?: string;
        image?: string;
    }
    
    export interface Menu {
        id?: number;
        name?: string;
        country?: Country;
        company?: string;
        date?: string | Date;
        status?: string;
        activity?: number;
        representative?: Representative;
        verified?: boolean;
        balance?: number;
        value?: number;
    }