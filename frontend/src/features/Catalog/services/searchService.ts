import { HttpInstance } from '../../../app/httpRequest';

export async function SearchCatalogByInfoString(info: string) {
    return await HttpInstance.get(`items?q=${info}`);
}

export async function SearchCatalogById(id: string) {
    return await HttpInstance.get(`items/${id}`);
}
