🌡️ Temperature Converter App
A simple, responsive web application that allows users to convert temperature values between Celsius, Fahrenheit, and Kelvin. Built using HTML, CSS, and JavaScript.

📋 Features
Convert temperatures between:

Celsius (°C)

Fahrenheit (°F)

Kelvin (K)

Dynamic unit selection that prevents converting from and to the same unit.

Real-time results with error handling for invalid inputs.

Clean and responsive design for all screen sizes.

🛠️ Technologies Used
HTML5 – Structure and markup

CSS3 – Styling and layout

JavaScript (Vanilla) – Conversion logic and interactivity

🧠 How It Works
🧩 Conversion Logic
Conversions are based on standard temperature formulas:

C → F : (°C × 9/5) + 32

C → K : °C + 273.15

F → C : (°F − 32) × 5/9

F → K : ((°F − 32) × 5/9) + 273.15

K → C : K − 273.15

K → F : ((K − 273.15) × 9/5) + 32

🔄 Unit Restriction
When a user selects a unit in the "From" dropdown, that same unit becomes disabled in the "To" dropdown to avoid redundant conversions (like Celsius to Celsius).

🧼 Clear Button
The CLR button resets:

Temperature input

Result field

Selected units

Unit labels