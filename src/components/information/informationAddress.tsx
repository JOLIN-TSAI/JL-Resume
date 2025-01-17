import IntroductionBox from "@/components/information/introductionBox";
import useWeatherData from "@/hooks/useWeatherData";
import WeatherTable from "@/components/weather/weatherTable";

export default function InformationExperience() {
	const { weatherData, loading, error } = useWeatherData("新北市");

	if (loading) return <p>正在載入中...</p>;
	if (error) return <p>發生錯誤: {error}</p>;

	return (
		<>
			<IntroductionBox sizeWidth={360} sizeHeight={360}>
				<div className="w-100 h-100 d-flex flex-column my-2 gap-3 justify-content-between">
					<div style={{ width: "100%", height: "40%" }}>
						<WeatherTable weatherData={weatherData} />
					</div>
					<div
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							gap: "10px",
						}}>
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
