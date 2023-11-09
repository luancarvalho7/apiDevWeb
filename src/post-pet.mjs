import fetch from 'node-fetch'; // Import 'node-fetch' as an ES module

const apiUrl = 'http://localhost:3000/pets'; // Replace with your API endpoint

// Create a new pet object based on your schema
const newPet = {
  name: 'Buddy',
  age: 3,
  breed: 'Labrador',
  ownerName: 'John Doe',
  healthRecords: [
    {
      visitDate: new Date('2023-11-09'),
      notes: 'Annual checkup',
      veterinarian: 'Dr. Smith',
    },
  ],
};

// Send a POST request to create the new pet
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newPet),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Response:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
