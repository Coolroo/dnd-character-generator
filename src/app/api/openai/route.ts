import { NextRequest, NextResponse } from "next/server";
import {Configuration, OpenAIApi} from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


export async function GET(request: NextRequest){
    const { searchParams } = new URL(request.url);
    const prompt = searchParams.get('prompt');

    if(!prompt){
        return NextResponse.json({error: 'Missing prompt'}, {
            status: 400
        })
    }

    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt
    })

    if(res.status !== 200){
        return NextResponse.json({error: res.statusText}, {
            status: res.status
        });
    }
    return NextResponse.json(res.data.choices[0].text, {
        status: 200
    });
}