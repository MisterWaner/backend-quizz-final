// Generate a random id
export async function getNanoid() {
    const { nanoid } = await import('nanoid');
    return nanoid();
}
