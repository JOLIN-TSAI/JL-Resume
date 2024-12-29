import { useState, useEffect } from "react";

// 定義 API 返回數據的類型
interface WeatherTime {
	parameter: {
		parameterName: string;
	};
}

interface WeatherElement {
	elementName: string;
	time: WeatherTime[];
}

interface Location {
	locationName: string;
	weatherElement: WeatherElement[];
}

interface ApiResponse {
	records: {
		location: Location[];
	};
}

export default function useWeatherData(location: string) {
	const [weatherData, setWeatherData] = useState<Location | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchWeatherData = async () => {
			const API_URL =
				"https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001";
			const params = new URLSearchParams({
				Authorization: "CWA-D98E6E7D-C079-42C4-90C8-83DB63AC145B",
				format: "JSON",
				locationName: location,
				sort: "time",
			});

			try {
				setLoading(true);
				const response = await fetch(`${API_URL}?${params.toString()}`);
				if (!response.ok) {
					throw new Error("無法取得天氣資料");
				}
				const data: ApiResponse = await response.json();

				const locationData = data.records.location[0];
				setWeatherData(locationData);
				setError("");
			} catch (error) {
				setError((error as Error).message || "未知的錯誤");
				setWeatherData(null);
			} finally {
				setLoading(false);
			}
		};

		fetchWeatherData();
		const intervalId = setInterval(fetchWeatherData, 30 * 60 * 1000);
		return () => clearInterval(intervalId);
	}, [location]);

	return { weatherData, loading, error };
}
