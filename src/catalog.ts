export const store: { [key: string]: Catalog.Item } = {};

export namespace Catalog {
    export interface Item {
        id: string;
        name: string;
    }

    export const add = (item: Item): void => {
        store[item.id] = item;
    };

    export const get = (id: string): Item => {
        return store[id] || null;
}
}
