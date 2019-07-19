export class IdentiteRetour {
    public static fromJson(json: Object): IdentiteRetour {
        return new IdentiteRetour(
            json['app'],
            json['name'],
            json['description'],
            json['version'],
        );
    }
    constructor(public app: string,
        public name: string,
        public description: string,
        public version: string,
    ) { }
}