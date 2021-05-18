let info = {
    "hourly": [
        {
            "dt": 1620014400,
            "temp": 80.82,
            "feels_like": 78.91,
            "pressure": 1000,
            "humidity": 16,
            "dew_point": 30.67,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 17.05,
            "wind_deg": 220,
            "wind_gust": 26.87,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
    ]
};



createHourly(info);
function createHourly(weather) {
    const ARTICLE = document.createElement("article");
    const ITEM = document.createElement("div");
    ITEM.textContent = `Hello ${info.hourly.feels_like}`;
    ARTICLE.appendChild(ITEM);
    main.appendChild(ARTICLE);


}


