import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ImagePopup = ({ image, isOpen, onClose, onSearchSimilar }) => {
  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{image.code}</DialogTitle>
          <DialogDescription>Video details and related information</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img src={image.gifUrl} alt={image.code} className="w-full h-auto" />
          <p className="mt-2 text-sm">{image.description}</p>
          {/* Add more details about the video here */}
        </div>
        <DialogFooter>
          <Button onClick={() => onSearchSimilar(image)}>Search Similar Images</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;