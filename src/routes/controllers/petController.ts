import { Request, Response } from 'express';
import Pet from '../../models/Pet';

export const getAllPets = async (req: Request, res: Response) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error: any) { // You can use `any` here to bypass the type checking
    res.status(500).json({ message: error.message });
  }
};

export const getPetById = async (req: Request, res: Response) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (pet) {
      res.status(200).json(pet);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createPet = async (req: Request, res: Response) => {
  const pet = new Pet({
    // ...req.body // Spread the body data into the new pet object
    name: req.body.name,
    age: req.body.age,
    type: req.body.type,
    // Add other pet attributes here
  });

  try {
    const newPet = await pet.save();
    res.status(201).json(newPet);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePet = async (req: Request, res: Response) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (pet) {
      res.status(200).json(pet);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePet = async (req: Request, res: Response) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (pet) {
      res.status(200).json({ message: 'Pet successfully deleted' });
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
