import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const ImageGrid = ({ images, onImageClick }) => {
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}?start=80&end=90&autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playbackRate=2`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <Card key={image.id} className="overflow-hidden relative group">
          <div className="relative">
            {index === 0 && image.youtubeUrl ? (
              <iframe
                src={getYouTubeEmbedUrl(image.youtubeUrl)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 object-cover pointer-events-none"
              ></iframe>
            ) : (
              <>
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
              </>
            )}
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => onImageClick(image)}
            >
              <span className="text-white font-semibold">View Details</span>
            </div>
            <div className="absolute top-2 right-2 flex space-x-1">
              <Button variant="ghost" size="icon" className="bg-black bg-opacity-30 hover:bg-opacity-50">
                <ThumbsUp className="h-4 w-4 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-black bg-opacity-30 hover:bg-opacity-50">
                <ThumbsDown className="h-4 w-4 text-white" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-black bg-opacity-30">
              <p className="text-sm font-medium text-white text-center">{image.code}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ImageGrid;
