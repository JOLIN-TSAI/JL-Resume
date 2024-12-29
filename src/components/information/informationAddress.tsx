import IntroductionBox from "@/components/information/introductionBox";
import useWeatherData from "@/hooks/useWeatherData";

export default function InformationExperience() {
	const { weatherData, loading, error } = useWeatherData("新北市");

	if (loading) return <p>正在載入中...</p>;
	if (error) return <p>發生錯誤: {error}</p>;

	return (
		<>
			<IntroductionBox size={360}>
				<div className="w-100 h-100 d-flex flex-column gap-3 my-3">
					{weatherData && (
						<>
							<table
								style={{
									borderCollapse: "collapse",
									width: "100%",
									textAlign: "center",
									textWrap: "nowrap",
									border: "1px solid #ddd",
								}}>
								<thead>
									<tr>
										<th
											style={{
												border: "1px solid #ddd",
											}}>
											地點
										</th>
										<th
											style={{
												border: "1px solid #ddd",
											}}>
											天氣狀況
										</th>
										<th
											style={{
												border: "1px solid #ddd",
											}}>
											降雨機率
										</th>
										<th
											style={{
												border: "1px solid #ddd",
											}}>
											最低溫
										</th>
										<th
											style={{
												border: "1px solid #ddd",
											}}>
											最高溫
										</th>
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
											{
												weatherData.weatherElement.find(
													(el) =>
														el.elementName === "Wx"
												)?.time[0]?.parameter
													?.parameterName
											}
										</td>
										<td
											style={{
												border: "1px solid #ddd",
												padding: "8px",
											}}>
											{
												weatherData.weatherElement.find(
													(el) =>
														el.elementName === "PoP"
												)?.time[0]?.parameter
													?.parameterName
											}
											%
										</td>
										<td
											style={{
												border: "1px solid #ddd",
												padding: "8px",
											}}>
											{
												weatherData.weatherElement.find(
													(el) =>
														el.elementName ===
														"MinT"
												)?.time[0]?.parameter
													?.parameterName
											}
											°C
										</td>
										<td
											style={{
												border: "1px solid #ddd",
												padding: "8px",
											}}>
											{
												weatherData.weatherElement.find(
													(el) =>
														el.elementName ===
														"MaxT"
												)?.time[0]?.parameter
													?.parameterName
											}
											°C
										</td>
									</tr>
								</tbody>
							</table>
						</>
					)}

					<div
						style={{
							width: "330px",
							height: "230px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							gap: "10px",
						}}>
						<h5 style={{ margin: 0 }}>居住地：</h5>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57864.80508679641!2d121.35550261178153!3d24.981409779524483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681dab28ac1213%3A0xe8fe6da38f79b65f!2z5paw5YyX5biC5qi55p6X5Y2A!5e0!3m2!1szh-TW!2stw!4v1735473413954!5m2!1szh-TW!2stw"
							width="100%"
							height="100%"
							style={{ border: "0", borderRadius: "20px" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</IntroductionBox>
		</>
	);
}
