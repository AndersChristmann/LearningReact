import React from 'react';
import Joke from "./components/Joke";



function App() {
    return(
        <div>
            <Joke
                question={"Is this a joke?"}
                punchline={"Yes it is."}
            />
            <Joke
                question={"Is this a different joke?"}
                punchline={"Yes this is different."}
            />
            <Joke
                question={""}
                punchline={"This joke only has a punchline."}
            />
        </div>
    )
}

export default App;
