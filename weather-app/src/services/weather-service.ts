import { HttpClient } from '@aurelia/fetch-client';

export class WeatherService {

    private http: HttpClient = new HttpClient();
    //private apiKey = '8e737b9385a8e4071a989a3aee956e85';
    //private baseUrl = 'https://api.openweathermap.org/data/2.5/';

    async getWeatherByCity(city: string): Promise<any> {
        const response = await this.http.fetch('http://localhost:3001/api/data');
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('City was not found');
        }
    }
}