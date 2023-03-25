import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    console.log(res.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h2>Generate an Image using OpenAI API</h2>
      <input
        className="app-input"
        placeholder="Type something to generate an image"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate an image</button>
    </div>
  );
}

export default App;
