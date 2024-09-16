import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const Filters = ({ onKNeighborsChange, onStrengthChange }) => {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="k-neighbors">K-Neighbors: {kNeighbors}</Label>
        <Slider
          id="k-neighbors"
          min={1}
          max={200}
          step={1}
          defaultValue={[50]}
          onValueChange={(value) => onKNeighborsChange(value[0])}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="strength">Strength: {strength}</Label>
        <Slider
          id="strength"
          min={1}
          max={10}
          step={1}
          defaultValue={[5]}
          onValueChange={(value) => onStrengthChange(value[0])}
        />
      </div>
    </div>
  );
};

export default Filters;