import { Router } from 'express';
const router = Router();

// Import any controllers or middleware you might use
import { getAllPets, getPetById, createPet, updatePet, deletePet } from './controllers/petController';

// Middleware that is specific to this router
// router.use(yourMiddleware);

// Get all pets
router.get('/', getAllPets);

// Get a single pet by ID
router.get('/:id', getPetById);

// Post a new pet
router.post('/', createPet);

// Update a pet by ID
router.put('/:id', updatePet);

// Delete a pet by ID
router.delete('/:id', deletePet);

// Export the router
export default router;
