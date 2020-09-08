export class Client {
    constructor(
        public name: string,
        public lastName: string,
        public document: string,
        public rol: 'administrador' | 'conductor' | 'recolector',
        public state: boolean,
        public email: string,
        public _id?: string
    ) { }
}