import PocketBase from 'pocketbase';

const API_URL = 'http://localhost:8090'

export const pb = new PocketBase('http://127.0.0.1:8090');


export function imageUrl(data: any, fileName: string | undefined): string {
    if (!data) return '';
    return `${API_URL}/api/files/${data.collectionId}/${data.id}/${fileName}`;
}
