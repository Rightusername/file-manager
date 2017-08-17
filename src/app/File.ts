export class File{
    type: String;
    ext: String = "FILE";
    name: String;
    content: String;
    favorite: Boolean = false;

    
    constructor(name, content, type){
        this.name = name;
        this.content = content;
        this.type = type;
        this.getExt();
    }

    toggleFavorite(){
        this.favorite = !this.favorite;
    }

    getExt(){
        if(this.name.match(/\.[^.]+$/igm) != null){
            this.ext = this.name.match(/\.[^.]+$/)[0].substr(1);
        }
    }


}