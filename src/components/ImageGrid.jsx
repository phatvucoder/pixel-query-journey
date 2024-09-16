import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <Card key={image.id} className="overflow-hidden">
          <div className="relative group">
            <img
              src={image.staticUrl}
              alt={image.code}
              className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src={image.gifUrl}
              alt={image.code}
              className="w-full h-48 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => onImageClick(image)}
            >
              <span className="text-white font-semibold">View Details</span>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-medium mb-2">{image.code}</p>
            <div className="flex justify-between">
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsDown className="h-4 w-4 mr-1" />
                Dislike
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ImageGrid;