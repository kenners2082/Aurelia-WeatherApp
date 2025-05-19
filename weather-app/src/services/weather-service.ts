import { HttpClient } from '@aurelia/fetch-client';

export class WeatherService {

    private http: HttpClient = new HttpClient();


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
