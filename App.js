export default function App() {
    const jokeElements = jokesData.map((joke,index) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} key={index}/>
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
       
