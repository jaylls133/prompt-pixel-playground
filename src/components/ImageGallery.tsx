
import { Card } from "@/components/ui/card";

// Mock data for images
const mockImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    prompt: "Portrait of a woman in a digital art style",
    createdAt: "2025-05-10",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    prompt: "A drone flying over a mountain landscape",
    createdAt: "2025-05-09",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    prompt: "Computer code in a futuristic interface",
    createdAt: "2025-05-08",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    prompt: "Woman working on laptop in a modern setting",
    createdAt: "2025-05-07",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    prompt: "Futuristic computer setup with glowing screens",
    createdAt: "2025-05-06",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    prompt: "Business professional in an office environment",
    createdAt: "2025-05-05",
  },
];

const ImageGallery = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Your Image Gallery</h2>
      
      {mockImages.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-gray-500">You haven't generated any images yet.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockImages.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img
                  src={image.url}
                  alt={`Generated image ${image.id}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4">
                    <p className="text-white text-sm truncate">
                      {image.prompt}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-white/80 text-xs">
                        {image.createdAt}
                      </span>
                      <button className="text-white hover:text-purple-light text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
