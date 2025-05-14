
import Navbar from "@/components/Navbar";
import ImageGenerator from "@/components/ImageGenerator";
import ImageGallery from "@/components/ImageGallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">AI Image Studio</h1>
          <p className="mt-2 text-lg text-gray-600">
            Transform your ideas into stunning visuals
          </p>
        </div>
        
        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="gallery">Your Gallery</TabsTrigger>
          </TabsList>
          
          <div className="mt-8">
            <TabsContent value="create" className="mt-0">
              <ImageGenerator />
            </TabsContent>
            
            <TabsContent value="gallery" className="mt-0">
              <ImageGallery />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      {/* Simple footer */}
      <footer className="mt-20 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 DreamCraft AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
