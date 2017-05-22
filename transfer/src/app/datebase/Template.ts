import { UUID } from 'angular2-uuid';

export class Template {
    constructor(public name: string,
                public record: number = 0,
                public time: number = 0,
                public uuid: any = UUID.UUID()) {}
}
