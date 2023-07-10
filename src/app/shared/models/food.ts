export class Food{
    // constructor(id:number){ id?:number bununla constructor olan yerle aynı işlevi yapar
    //     this.id= id
    // }
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean=false;
    imageUrl!:string
    origins!:string[];
    cookTime!:string;
    
    

}