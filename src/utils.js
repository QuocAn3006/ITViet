export const isJsonString = data => {
	try {
		JSON.parse(data);
	} catch (error) {
		return false;
	}
	return true;
};

export const convertPrice = price => {
	try {
		const result = price?.toLocaleString().replaceAll(',', '.');
		return `${result}`;
	} catch (error) {
		return null;
	}
};

export const getBase64 = file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});