export class Serie{
    num: number;
    name:string;
    seasons:number;
    channel : string;
    description:string;
    link:string;
    imgLink:string;
    
    constructor(_num:number, _name:string, _seasons:number, _channel:string, _description:string, _link:string, _imgLink:string){
        this.name = _name;
        this.seasons = _seasons;
        this.channel = _channel;
        this.num = _num;
        this.description = _description;
        this.link = _link;
        this.imgLink = _imgLink;
    }

}