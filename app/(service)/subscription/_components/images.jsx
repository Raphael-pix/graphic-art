import React from 'react';

const ImageGallery = () => {
  const images = [
    '/assets/images/image-1.jpg',
    '/assets/images/image-3.jpg',
    '/assets/images/image-2.jpg',
  ];

  return (
    <div className="py-12 px-4">
      <div className=" mx-auto">
        <div className="max-lg:overflow-x-auto hidden-scrollbar">
          <div className="flex space-x-6 pb-4 md:gap-6 md:overflow-visible">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 max-h-[70vh] w-[40vw] rounded-lg overflow-hidden"
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;