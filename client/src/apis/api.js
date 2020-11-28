const BASE_API = "http://localhost:4000"

export default {

    getEstagios: async() => {
        try {
            const req = await fetch(`${BASE_API}/get-estagios`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const json = await req.json()
            return json
        } catch (error) {
            console.log(error);
        }

    }

}