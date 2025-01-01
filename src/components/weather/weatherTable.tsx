import { weatherImageMapping } from "./weatherImageMapping";

interface WeatherData {
	locationName: string;
	weatherElement: {
		elementName: string;
		time: {
			parameter: {
				parameterName: string;
			};
		}[];
	}[];
}

interface WeatherTableProps {
	weatherData: WeatherData | null;
}
export default function WeatherTable({ weatherData }: WeatherTableProps) {
	if (!weatherData) return <p>沒有天氣資料</p>;

	// 提取天氣相關資訊
	const getWeatherParameter = (elementName: string): string =>
		weatherData.weatherElement.find((el) => el.elementName === elementName)
			?.time[0]?.parameter.parameterName || "";

	const weatherWx = getWeatherParameter("Wx");
	const pop = getWeatherParameter("PoP");
	const minTemp = getWeatherParameter("MinT");
	const maxTemp = getWeatherParameter("MaxT");
	const weatherImage = weatherImageMapping[weatherWx] || "/loading.png";

	return (
		<div>
			<div className="d-flex flex-row justify-content-between">
				<h3 style={{ margin: "10px", padding: "0" }}>居住地</h3>
				<div
					style={{
						textAlign: "center",
					}}>
					<img
						src={weatherImage}
						alt={weatherWx}
						style={{ width: "50px", height: "50px" }}
					/>
				</div>
			</div>
			<table
				style={{
					borderCollapse: "collapse",
					width: "100%",
					textAlign: "center",
					border: "1px solid #ddd",
				}}>
				<thead>
					<tr>
						<th>地點</th>
						<th>天氣</th>
						<th>降雨機率</th>
						<th>最低溫</th>
						<th>最高溫</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td
							style={{
								border: "1px solid #ddd",
								padding: "8px",
							}}>
							{weatherData.locationName}
						</td>
						<td
							style={{
								border: "1px solid #ddd",
								padding: "8px",
							}}>
							{weatherWx}
						</td>
						<td
							style={{
								border: "1px solid #ddd",
								padding: "8px",
							}}>
							{pop}%
						</td>
						<td
							style={{
								border: "1px solid #ddd",
								padding: "8px",
							}}>
							{minTemp}°C
						</td>
						<td
							style={{
								border: "1px solid #ddd",
								padding: "8px",
							}}>
							{maxTemp}°C
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
