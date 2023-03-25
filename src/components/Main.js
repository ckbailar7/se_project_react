import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/App.css";

function Main() {
  return (
    <main className="main">
      <WeatherCard day={true} type={"Sunny-Fog"} />
      <ItemCard />
    </main>
  );
}

export default Main;
