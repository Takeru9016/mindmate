import openai from "./chatgpt";

const query = async (prompt: string, model: string, temperature: number, frequency_penalty: number, presence_penalty: number) => {
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty,
        presence_penalty,
    }).then(res => res.data.choices[0].text)
        .catch((err) => `MindMate was unable to find an answer for that! (Error: ${err.message})`);

    return res;
}

export default query;