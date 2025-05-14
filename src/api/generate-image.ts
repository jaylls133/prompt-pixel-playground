
import Replicate from "replicate";

export async function POST(request: Request) {
  try {
    // Get the prompt from the request body
    const { prompt, size = 512 } = await request.json();

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "Prompt is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Initialize the Replicate API client
    // In a real application, you would get this from an environment variable
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN || 'r8_KIIhk5FVcmriCilgYiHBn7awN4reXyy3jz68N',
    });

    // Generate the image using Flux Schnell model
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: prompt,
          // Add any other parameters for the Flux Schnell model here
        }
      }
    );

    // In a real application, you would:
    // 1. Store the image in your database
    // 2. Reduce user's credits
    // 3. Return the image URL

    // For now, we'll just return the generated image
    return new Response(
      JSON.stringify({ imageUrl: output[0] }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    
    return new Response(
      JSON.stringify({
        error: "Failed to generate image. Please try again later."
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
