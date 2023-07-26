const {Configuration, OpenAIApi} = require("openai");

//openAI에서 불러온 configuration으로 openai 객체 만든다
const configuration = new Configuration({
    apiKey : "Your API Key",
});

const openai = new OpenAIApi(configuration);

//message받을 func생성
//message를 받고, API 사용해서 response 생성
export async function sendMessageToOpenAI(messages){
    const response = await openai.createCompletion({  
        model: "text-davinci-003",
        prompt : messages,
        temperature: 0.9,
        max_tokens: 256,
        top_p:1,
        frequency_penalty:0,
        presence_penalty:0,
    }
    )

    return response.data.choices[0].text;
    //여기서 choices는 chatbot에서 message이다
}