// Pet.ts
import mongoose, { Schema, Document } from 'mongoose';

// Interface to define the type for a Pet Document
export interface IPet extends Document {
  name: string;
  age: number;
  breed: string;
  ownerName: string;
  healthRecords: Array<{
    visitDate: Date;
    notes: string;
    veterinarian: string;
  }>;
}

// Create a Schema corresponding to the document interface.
const PetSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  ownerName: { type: String, required: true },
  healthRecords: [
    {
      visitDate: { type: Date, required: true },
      notes: { type: String, required: true },
      veterinarian: { type: String, required: true },
    },
  ],
});

// Create a Model.
const Pet = mongoose.model<IPet>('Pet', PetSchema);

export default Pet;
