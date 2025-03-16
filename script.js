// Part 2: DOM Manipulation & Error Handling Practice

// Step 1: Create a proper array structure with objects
const zooAnimals = [
    { id: 'elephant1', name: 'Dumbo', species: 'Elephant' },
    { id: 'tiger1', name: 'Raja', species: 'Tiger' }
];

// Step 2: Implement an error-safe function to display animals
const displayAnimal = (animalData) => {
    try {
        // Select the container section
        const animalSection = document.querySelector('#animalSection');
        if (!animalSection) {
            throw new Error('Animal section not found in DOM');
        }

        // Create the animal card container
        const animalElement = document.createElement('div');
        animalElement.className = 'animal-card';
        animalElement.id = animalData.id;

        // Create and append name heading
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = animalData.name;

        // Create and append species paragraph
        const speciesPara = document.createElement('p');
        speciesPara.textContent = `Species: ${animalData.species}`;

        // Append elements to animal card
        animalElement.appendChild(nameHeading);
        animalElement.appendChild(speciesPara);
        animalSection.appendChild(animalElement);
        
        // Console log for debugging purposes (rubric requirement)
        console.log(`Displayed animal: ${animalData.name}`);
    } catch (error) {
        console.error('Error displaying animal:', error);
        displayError(error.message);
    }
};

// Step 3: Implement error-safe array manipulation function
const loadAnimals = () => {
    try {
        if (!Array.isArray(zooAnimals) || zooAnimals.length === 0) {
            throw new Error('Animal data is missing or not an array');
        }

        // Use an array method (forEach) to iterate through animals
        zooAnimals.forEach(animal => displayAnimal(animal));
    } catch (error) {
        console.error('Error loading animals:', error);
        displayError(error.message);
    }
};

// Step 4: Error display function using DOM manipulation
const displayError = (message) => {
    try {
        const errorSection = document.querySelector('#errorSection');
        if (!errorSection) {
            throw new Error('Error section not found');
        }

        // Create a new error message element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;

        // Clear any existing errors and append the new one
        errorSection.textContent = '';
        errorSection.appendChild(errorDiv);
    } catch (err) {
        console.error('Error displaying error message:', err);
    }
};

// Step 5: Attach event listener to button
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#loadAnimals").addEventListener("click", loadAnimals);
});
