export interface IWeather {
id: number;
name: string;
main: {
    temp: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
};
sys: {
    country: string;
    sunrise: number;
    sunset: number;
};
wind: {
    speed: number;
};
weather: {
    main: string;
};
}