
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ProfileInfo {
  name: string;
  email: string;
  joinDate: string;
  credits: number;
  imagesGenerated: number;
  subscription: string;
}

// Mock profile data
const profileData: ProfileInfo = {
  name: "Jane Smith",
  email: "jane.smith@example.com",
  joinDate: "May 1, 2025",
  credits: 25,
  imagesGenerated: 47,
  subscription: "Free tier",
};

const ProfileCard = () => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Account Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-purple rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {profileData.name.charAt(0)}
            </div>
          </div>
          
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.email}</p>
          </div>
        </div>
        
        <Separator />
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Member Since</p>
            <p className="font-medium">{profileData.joinDate}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Subscription</p>
            <p className="font-medium">{profileData.subscription}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Available Credits</p>
            <p className="font-medium">{profileData.credits}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Images Generated</p>
            <p className="font-medium">{profileData.imagesGenerated}</p>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h3 className="font-semibold">Subscription</h3>
          
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Free Tier</p>
                <p className="text-sm text-gray-500">5 free images per day</p>
              </div>
              <Button variant="outline" className="border-purple text-purple">Current Plan</Button>
            </div>
          </div>
          
          <div className="bg-white border border-purple rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Premium</p>
                <p className="text-sm text-gray-500">Unlimited images, priority processing</p>
              </div>
              <Button className="bg-purple text-white hover:bg-purple-dark">
                Upgrade $19.99/mo
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
