import { Buildable } from './buildable';

export class ObjectBuilder<T extends Buildable> {

    type: any;

    constructor(type: { new (): T; }) {
        this.type = type;
    }

    build(): T {
        // do stuff to return new instance of T.
        return new this.type();
    }

}