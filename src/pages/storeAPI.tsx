export function getData(url: string) : Promise<T> {

    fetch(url)
    .then((response) => response.json())
    .then(response => console.log('storeAPI hi',response))
}