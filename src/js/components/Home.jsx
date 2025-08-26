import React,{useState} from "react";



//create your first component
const Home = () => {
	const [activeLight,setActiveLight]=useState("red");


	return (
<div className="traffic-light">
	< div className="container">
		<><div className={`red light ${activeLight === "red" ? "active" : ""}`}
			onClick={() => setActiveLight("red")}>
		</div>
		<div className={`yellow light ${activeLight === "yellow" ? "active" : ""}`}
			onClick={() => setActiveLight("yellow")}>
			</div>
			<div className={`green light ${activeLight === "green" ? "active" : ""}`}
			onClick={() => setActiveLight("green")}>
			</div></>
	</div>		
</div>

	)     
};

export default Home;