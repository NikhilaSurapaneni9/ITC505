function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (temperature * 9 / 5) + 32;
        document.getElementById('result').textContent = `${temperature}°C is equal to ${result.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        result = (temperature - 32) * 5 / 9;
        document.getElementById('result').textContent = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
    }
}

document.getElementById('convert-btn').addEventListener('click', convertTemperature);

var x = document.lastModified;
document.getElementById('lastModified').textContent = x;
