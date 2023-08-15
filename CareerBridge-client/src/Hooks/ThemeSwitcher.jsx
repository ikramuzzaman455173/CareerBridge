import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./UseDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

	const toggleDarkMode = (checked) => {
		setTheme(checked ? "dark" : "light"); // Assuming you have "dark" and "light" theme values
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				// style={{ marginBottom: "0rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={20}
				moonColor="#ffdb3d" // Custom color for moon icon (light mode)
				sunColor="#f39c12"  // Custom color for sun icon (dark mode)
			/>
		</>
	);
}