
export class AuthService{
    private baseURL: string = "http://localhost:3000/api/auth";

    async login(email:string, password:string){
        try {
            const response = await fetch(`${this.baseURL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({email, password})
            });
            const user = await response.json();
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }

    }

    async register(first_name:string, last_name: string, email:string, birthdate:string, password:string, username:string){
        try {
            const response = await fetch(`${this.baseURL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({first_name, last_name, email, birthdate, password, username})
            });
            const newUser = await response.json();
            return newUser;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async isAuth(){
        try {
            const response = await fetch(`${this.baseURL}/verify-token`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const user = await response.json();
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }    
}