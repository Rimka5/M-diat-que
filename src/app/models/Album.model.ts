export class Album{
    constructor(
        public id: number,
        public nom: string,
        public artiste: string,
        public annee: number,
        public img: string,
        public details: string
    ){}
}