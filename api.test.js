const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com/posts/1';

test('Validar que el endpoint responde con status 200', async() => {
    
    const response = await axios.get(URL);

    expect(response.status).toBe(200);

});

test('Validar que el post tiene el ID correcto', async() => {

    const response = await axios.get(URL);

    expect(response.data.id).toBe(1);
    expect(response.data.title).toBeDefined();

});