
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import ImageGallery from "@/components/ImageGallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
          <p className="mt-2 text-lg text-gray-600">
            View and manage your account details
          </p>
        </div>
        
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="gallery">Your Images</TabsTrigger>
          </TabsList>
          
          <div className="mt-8">
            <TabsContent value="account" className="mt-0">
              <div className="max-w-2xl mx-auto">
                <ProfileCard />
              </div>
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

export default Profile;
