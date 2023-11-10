"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// PetRoutes.ts
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const petController_1 = require("./controllers/petController");
const router = (0, express_1.Router)();
router.use((0, cors_1.default)());
router.get('/', petController_1.getAllPets);
router.get('/:id', petController_1.getPetById);
router.post('/', petController_1.createPet);
router.put('/:id', petController_1.updatePet);
router.delete('/:id', petController_1.deletePet);
exports.default = router;
