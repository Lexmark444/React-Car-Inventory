let token ='61ccb93a27c6045e187f82c726ea33bb01df8962d90a7ef5'

// if you want to use brandon's site... remove token, use https://plankton-app-46k8b.ondigitalocean.app/api/contacts

export const server_calls = {
    get:async () => {
        const response = await fetch('https://exuberant-somber-dormouse.glitch.me/api/cars',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-token',
                'x-access-token' : `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://exuberant-somber-dormouse.glitch.me/api/cars',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,   
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://exuberant-somber-dormouse.glitch.me/api/cars/${id}`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://exuberant-somber-dormouse.glitch.me/api/cars/${id}`,
        {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'x-access-token',
                'x-access-token' : `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data on the server')
        }

        return;
    }
}