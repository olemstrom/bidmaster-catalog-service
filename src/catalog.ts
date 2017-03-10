import { publish } from './queue'

export const store: { [key: string]: Catalog.Item } = {};

export namespace Catalog {
    export interface Item {
        id: string;
        name: string;
    }

    export const add = (item: Item): Promise<any> => {
        store[item.id] = item;
        return publish('catalog.add', { item });
    };

    export const get = (id: string): Item => {
        return store[id] || null;
}
}
