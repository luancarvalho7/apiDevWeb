// PetRoutes.ts
import { Router } from 'express';
import cors from 'cors';
import { getAllPets, getPetById, createPet, updatePet, deletePet } from './controllers/petController';

const router = Router();

router.use(cors());

router.get('/', getAllPets);
router.get('/:id', getPetById);
router.post('/', createPet);
router.put('/:id', updatePet);
router.delete('/:id', deletePet);

export default router;
