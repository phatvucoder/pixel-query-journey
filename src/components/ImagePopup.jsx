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

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{image.code}</DialogTitle>
          <DialogDescription>Video details and related information</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {image.youtubeUrl ? (
            <iframe
              src={getYouTubeEmbedUrl(image.youtubeUrl)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64"
            ></iframe>
          ) : (
            <img src={image.gifUrl} alt={image.code} className="w-full h-auto" />
          )}
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
