import { createCanvas } from "canvas";

async function generateProfilePicture(username, themeColor) {
	try {
		const canvas = createCanvas(200, 200);
		const context = canvas.getContext("2d");

		// Fill the background
		context.fillStyle = themeColor;
		context.fillRect(0, 0, canvas.width, canvas.height);

		// Add text to center
		//  Extract initals from user like below
		const initials = username.substring(0, 2).toUpperCase();
		context.fillStyle = "white";
		context.font = "42px Arial";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText(initials, canvas.width / 2, canvas.height / 2);

		// Convert to data url and return it
		const dataUrl = canvas.toDataURL("image/jpeg");
		return dataUrl;
	} catch (error) {
		console.error("Error in generateProfilePicture:", error);
		throw error;
	}
}

export default generateProfilePicture;
