import { createCanvas } from "canvas";

async function generateProfilePicture(themeColor, username) {
	try {
		const canvas = createCanvas(200, 200);
		const ctx = canvas.getContext("2d");

		console.log("Generating image...");
		// Set background color
		ctx.fillStyle = themeColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Set text properties
		ctx.font = "40px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		// Display user's first two initials
		const initials = username.substring(0, 2).toUpperCase();
		ctx.fillText(initials, canvas.width / 2, canvas.height / 2);

		// Convert the canvas to a data URL (JPEG format)
		const dataUrl = canvas.toDataURL("image/jpeg");

		console.log("Image generated successfully!");
		return dataUrl;
	} catch (error) {
		console.error("Error in generateProfilePicture:", error);
		throw error;
	}
}

export default generateProfilePicture;
