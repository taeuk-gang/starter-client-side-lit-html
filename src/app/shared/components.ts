
function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
export const Components = strEnum([
    'app-component',
    'not-found-component',
    'navbar-component',
    'home-component',
    'about-component'
]);
export type Components = keyof typeof Components;