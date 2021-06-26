import { HttpInstance } from '../../../app/httpRequest';

export function SearchCatalogByInfoString(info: string) {
    return HttpInstance.get(`items?q=${encodeURIComponent(info)}`);
}

export function SearchCatalogById(id: string) {
    return HttpInstance.get(`items/${id}`);
}

export const FormatCurrency = (value: any) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    }).format(value);
}
