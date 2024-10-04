# 🌍 Leaflet Map Location Fetcher

This project demonstrates how to use the [Leaflet](https://leafletjs.com/) library to fetch the user's location when they click on a map. It also utilizes the [Nominatim API](https://nominatim.org/) from OpenStreetMap to retrieve detailed information (such as the address and place name) based on the latitude and longitude of the clicked location.

## 🚀 Features

- **Interactive Map**: Uses Leaflet to display an interactive map where users can click on any location.
- **Location Fetching**: Captures the latitude and longitude of the clicked point on the map.
- **Reverse Geocoding**: Fetches location details (like the address) using the Nominatim reverse geocoding API.
  
## 🛠️ Technologies Used

- **React**: Frontend framework used for building the user interface.
- **Leaflet**: JavaScript library for displaying interactive maps.
- **Nominatim API**: Open-source geocoding API to fetch detailed location information.
- **Redux**: Used for managing state and storing the fetched location data.

## 📦 Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/leaflet-location-fetcher.git
    cd leaflet-location-fetcher
    ```

2. **Install dependencies:**

   Ensure that you have [Node.js](https://nodejs.org/) installed, then run:

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

4. **Open the app in your browser**:

   Once the development server starts, the app will automatically open at `http://localhost:3000`.

## 🌟 How it Works

1. **Map Interaction**:  
   The map is displayed using Leaflet. When the user clicks on a location, the latitude and longitude of the clicked point are captured via the click event.

2. **Fetching Location Data**:  
   After the user clicks on the map, a request is sent to the Nominatim API for reverse geocoding. The following API call is made:

    ```javascript
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
    ```

   This request retrieves details such as the address and place information for the clicked coordinates.

3. **Displaying Data**:  
   The fetched location data is stored in Redux and can be shown to the user via a Popup component in Leaflet. This allows users to see the address and place name of the clicked location in real-time.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sayand-ak/react-leaflet).

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Made with ❤️ by [Your Name](https://github.com/sayand-ak)
