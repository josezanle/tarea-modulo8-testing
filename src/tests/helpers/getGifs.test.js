const { getGifs } = require("../../helpers/getGifs");

describe('pruebas con GetGifs Fetch', () => {

    test('debe traer 10 elementos', async() => {
        const gifs = await getGifs('one punch');

        expect(gifs.length).toBe(10);
    });

    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
    
});
