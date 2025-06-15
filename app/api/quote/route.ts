import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const quoteResponseSchema = {
  type: Type.ARRAY,
  "minItems": 1,
  "maxItems": 16,
  items: {
    type: Type.OBJECT,
    properties: {
      quote: {
        type: Type.STRING,
      },
      type: {
        type: Type.STRING,
      },
      author: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
          },
          picture: {
            type: Type.STRING,
          }
        },
        required: [
          "name",
        ]
      },
    },
    required: ["quote", "type", "author"]
  },
}


export async function POST(req: Request) {
  const { prompt: contents } = await req.json();

  if(!contents){
   return new NextResponse(JSON.stringify({ error: 'Prompt is required' }), { status: 400 });
  }
  
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents,
      config: {
        responseMimeType: "application/json",
        responseSchema: quoteResponseSchema
      }
    });

    console.log(response);

    return NextResponse.json(response);
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ error: 'Erreur interne', details: err }),
      { status: 500 }
    );
  }
}

