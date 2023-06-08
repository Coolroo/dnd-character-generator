import { NextRequest, NextResponse } from "next/server";
import {Configuration, OpenAIApi} from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


export async function GET(request: NextRequest){
    const { searchParams } = new URL(request.url);
    const systemMessage = searchParams.get('systemMessage');
    const userMessage = searchParams.get('userMessage');

    if(!systemMessage || !userMessage){
        return NextResponse.json({error: 'Missing systemMessage or userMessage'}, {
            status: 400
        })
    }

    const res = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: systemMessage
            }
        ]
    });

    if(res.status !== 200){
        return NextResponse.json({error: 'OpenAI API Error'}, {
            status: 500
        });
    }
    return NextResponse.json(res.data.choices[0].message?.content, {
        status: 200
    });
}