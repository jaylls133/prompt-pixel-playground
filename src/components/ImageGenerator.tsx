import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Settings, Download, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateImage } from "@/api/generate-image";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageSize, setImageSize] = useState([512]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setGeneratedImage(null);
    
    try {
      // Use the direct function instead of fetching from an API endpoint
      const result = await generateImage(prompt, imageSize[0]);
      
      setGeneratedImage(result.imageUrl);
      
      // Show success toast
      toast({
        title: "Image generated successfully!",
        description: "Your credits have been updated.",
      });
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Failed to generate image",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async () => {
    if (!generatedImage) return;
    
    try {
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `dreamcraft-ai-${Date.now()}.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Image downloaded!",
        description: "The image has been saved to your device.",
      });
    } catch (error) {
      console.error("Error downloading image:", error);
      toast({
        title: "Download failed",
        description: "Could not download the image",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="bg-white rounded-xl shadow-lg">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="prompt" className="text-lg font-medium">
                  What would you like to create?
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe the image you want to generate in detail..."
                  className="mt-2 h-32 resize-none"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex justify-between items-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowOptions(!showOptions)}
                  className="flex items-center gap-2"
                >
                  <Settings size={16} />
                  {showOptions ? "Hide options" : "Show options"}
                </Button>
                
                <Button
                  type="submit"
                  className="bg-purple hover:bg-purple-dark text-white"
                  disabled={isGenerating || !prompt.trim()}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : "Generate Image"}
                </Button>
              </div>
              
              {showOptions && (
                <div className="mt-4 space-y-6 border-t pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="image-size" className="font-medium">
                      Image Size: {imageSize[0]} x {imageSize[0]} px
                    </Label>
                    <Slider
                      id="image-size"
                      min={256}
                      max={1024}
                      step={128}
                      value={imageSize}
                      onValueChange={setImageSize}
                    />
                  </div>
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
      
      {/* Result Preview */}
      {(isGenerating || generatedImage) && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Result</h2>
          <div className="bg-gray-50 rounded-xl border overflow-hidden shadow-md">
            {isGenerating ? (
              <div className="h-96 flex items-center justify-center bg-gray-100">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="w-16 h-16 border-4 border-purple border-t-transparent rounded-full animate-spin"></div>
                  <p className="mt-4 text-gray-500">Creating your masterpiece...</p>
                </div>
              </div>
            ) : generatedImage ? (
              <div className="relative">
                <img
                  src={generatedImage}
                  alt="Generated image"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end space-x-2 p-4">
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black"
                      onClick={handleDownload}
                    >
                      <Download size={16} className="mr-1" /> Download
                    </Button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
