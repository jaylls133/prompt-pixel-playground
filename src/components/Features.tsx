
import { Camera, GalleryHorizontal, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      name: "Easy to Use",
      description:
        "Simply type your prompt and our AI will generate an image in seconds. No technical skills required.",
      icon: Camera,
    },
    {
      name: "Image Gallery",
      description:
        "All your generated images are saved in your personal gallery for easy access and sharing.",
      icon: GalleryHorizontal,
    },
    {
      name: "Advanced Settings",
      description:
        "Fine-tune your results with advanced settings like style, composition, and lighting.",
      icon: Settings,
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-purple font-semibold">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transform your imagination into reality
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered platform makes it easy to create stunning visuals from simple text prompts.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Ready to create amazing images?</h3>
          <div className="mt-6">
            <a
              href="/dashboard"
              className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple hover:bg-purple-dark"
            >
              Start creating now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
