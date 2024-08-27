const workHours = document.getElementById("work__hours");
const previousWorkHours = document.getElementById("previousWorkHours");
const playHours = document.getElementById("play__hours");
const previousPlayHours = document.getElementById("previousPlayHours");
const studyHours = document.getElementById("study__hours");
const previousStudyHours = document.getElementById("previousStudyHours");
const exerciseHours = document.getElementById("exercise__hours");
const previousExerciseHours = document.getElementById("previousExerciseHours");
const socialHours = document.getElementById("social__hours");
const previousSocialHours = document.getElementById("previousSocialHours");
const selfCareHours = document.getElementById("selfCare__hours");
const previousSelfCareHours = document.getElementById("previousSelfCareHours");

const hrs = "hrs";

const dailyData = (data) => {
	data.forEach((element) => {
		const title = element.title;
		const current = element.timeframes.daily.current;
		const previous = element.timeframes.daily.previous;
		if (title === "Work") {
			workHours.innerText = `${current}${hrs}`;
			previousWorkHours.innerText = `${previous}${hrs}`;
		} else if (title === "Play") {
			playHours.innerText = `${current}${hrs}`;
			previousPlayHours.innerText = `${previous}${hrs}`;
		} else if (title === "Study") {
			studyHours.innerText = `${current}${hrs}`;
			previousStudyHours.innerText = `${previous}${hrs}`;
		} else if (title === "Exercise") {
			exerciseHours.innerText = `${current}${hrs}`;
			previousExerciseHours.innerText = `${previous}${hrs}`;
		} else if (title === "Social") {
			socialHours.innerText = `${current}${hrs}`;
			previousSocialHours.innerText = `${previous}${hrs}`;
		} else {
			selfCareHours.innerText = `${current}${hrs}`;
			previousSelfCareHours.innerText = `${previous}${hrs}`;
		}
	});
};

const weeklyData = (data) => {
	data.forEach((element) => {
		const title = element.title;
		const current = element.timeframes.weekly.current;
		const previous = element.timeframes.weekly.previous;
		if (title === "Work") {
			workHours.innerText = `${current}${hrs}`;
			previousWorkHours.innerText = `${previous}${hrs}`;
		} else if (title === "Play") {
			playHours.innerText = `${current}${hrs}`;
			previousPlayHours.innerText = `${previous}${hrs}`;
		} else if (title === "Study") {
			studyHours.innerText = `${current}${hrs}`;
			previousStudyHours.innerText = `${previous}${hrs}`;
		} else if (title === "Exercise") {
			exerciseHours.innerText = `${current}${hrs}`;
			previousExerciseHours.innerText = `${previous}${hrs}`;
		} else if (title === "Social") {
			socialHours.innerText = `${current}${hrs}`;
			previousSocialHours.innerText = `${previous}${hrs}`;
		} else {
			selfCareHours.innerText = `${current}${hrs}`;
			previousSelfCareHours.innerText = `${previous}${hrs}`;
		}
	});
};

const monthlyData = (data) => {
	data.forEach((element) => {
		const title = element.title;
		const current = element.timeframes.monthly.current;
		const previous = element.timeframes.monthly.previous;
		if (title === "Work") {
			workHours.innerText = `${current}${hrs}`;
			previousWorkHours.innerText = `${previous}${hrs}`;
		} else if (title === "Play") {
			playHours.innerText = `${current}${hrs}`;
			previousPlayHours.innerText = `${previous}${hrs}`;
		} else if (title === "Study") {
			studyHours.innerText = `${current}${hrs}`;
			previousStudyHours.innerText = `${previous}${hrs}`;
		} else if (title === "Exercise") {
			exerciseHours.innerText = `${current}${hrs}`;
			previousExerciseHours.innerText = `${previous}${hrs}`;
		} else if (title === "Social") {
			socialHours.innerText = `${current}${hrs}`;
			previousSocialHours.innerText = `${previous}${hrs}`;
		} else {
			selfCareHours.innerText = `${current}${hrs}`;
			previousSelfCareHours.innerText = `${previous}${hrs}`;
		}
	});
};

const handleDailyData = async () => {
	const fetchData = "../data.json";
	const response = await fetch(fetchData);
	try {
		if (!response.ok) {
			alert("Something went wrong. Please try again.");
			return;
		}
		const data = await response.json();
		dailyData(data);
	} catch (error) {
		console.log(error);
	}
};

const handleWeeklyData = async () => {
	const fetchData = "../data.json";
	const response = await fetch(fetchData);
	try {
		if (!response.ok) {
			alert("Something went wrong. Please try again.");
			return;
		}
		const data = await response.json();
		weeklyData(data);
	} catch (error) {
		console.log(error);
	}
};

const handleMonthlyData = async () => {
	const fetchData = "../data.json";
	const response = await fetch(fetchData);
	try {
		if (!response.ok) {
			alert("Something went wrong. Please try again.");
			return;
		}
		const data = await response.json();
		monthlyData(data);
	} catch (error) {
		console.log(error);
	}
};

const dailyButton = document.getElementById("dailyButton");
const weeklyButton = document.getElementById("weeklyButton");
const monthlyButton = document.getElementById("monthlyButton");

dailyButton.addEventListener("click", handleDailyData);
weeklyButton.addEventListener("click", handleWeeklyData);
monthlyButton.addEventListener("click", handleMonthlyData);
