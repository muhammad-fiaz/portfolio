// pages/api/fetch-chat.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { message } = req.body; // Get the message from the request body

  if (!message || message.trim() === '') {
    return res.status(400).json({ message: 'Message is required' });
  }

  // Fetch the Gemini API key from environment variables
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ message: 'API Key is missing or invalid.' });
  }

  // Initialize the GoogleGenerativeAI client with the API key
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    // Send the message to the Gemini API and get the response
    const result = await model.generateContent(message.trim());
    const botResponse = result.response.text(); // Extract the response text

    // Return the chatbot's response back to the client
    return res.status(200).json({ response: botResponse });
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .json({ message: 'Error communicating with Gemini API' });
  }
}
