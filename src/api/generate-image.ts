
import Replicate from "replicate";

// This function will be called from the frontend
export const generateImage = async (prompt: string, size: number = 512) => {
  try {
    if (!prompt) {
      throw new Error("Prompt is required");
    }
    
    // Initialize Replicate client
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN || 'r8_FxaK4lgpBF47Mk3m3PkdSyf3UGpu8jK1Sa9XY',
    });
    
    // Call the Flux Schnell model
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: prompt,
          // Additional parameters can be added here
        }
      }
    );
    
    return { imageUrl: output[0] };
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}
