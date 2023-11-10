"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.updatePet = exports.createPet = exports.getPetById = exports.getAllPets = void 0;
const Pet_1 = __importDefault(require("../../models/Pet"));
const getAllPets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pets = yield Pet_1.default.find();
        res.status(200).json(pets);
    }
    catch (error) { // You can use `any` here to bypass the type checking
        res.status(500).json({ message: error.message });
    }
});
exports.getAllPets = getAllPets;
const getPetById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pet = yield Pet_1.default.findById(req.params.id);
        if (pet) {
            res.status(200).json(pet);
        }
        else {
            res.status(404).json({ message: 'Pet not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getPetById = getPetById;
const createPet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pet = new Pet_1.default({
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        ownerName: req.body.ownerName,
        // Você precisa incluir 'healthRecords' aqui se for obrigatório
    });
    try {
        const newPet = yield pet.save();
        res.status(201).json(newPet);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createPet = createPet;
const updatePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pet = yield Pet_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (pet) {
            res.status(200).json(pet);
        }
        else {
            res.status(404).json({ message: 'Pet not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updatePet = updatePet;
const deletePet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pet = yield Pet_1.default.findByIdAndDelete(req.params.id);
        if (pet) {
            res.status(200).json({ message: 'Pet successfully deleted' });
        }
        else {
            res.status(404).json({ message: 'Pet not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deletePet = deletePet;
