import { useEffect, useState } from "react"


const useRandomDadJokes = () => {
    const [joke, setJoke] = useState('');
    const [newJoke, setNewJoke] = useState(0);

    const generateJoke = (event) => {
        event.preventDefault();
        setNewJoke(newJoke + 1);
    }

    useEffect(()=>{
        const fetchJoke = async () => {
            const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
            const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '069c3cc0dfmsh5ecc76f47d66dedp1ec696jsnd16896fe03e7',
              'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
            }
              };
              return (
                await fetch(url,options).then(res => res.json()).then(data => {
                //   console.log(data.body[0].setup + " " +  data.body[0].punchline);
                  setJoke(data.body[0].setup + " " +  data.body[0].punchline);
                })
              )
          }
          
          fetchJoke();
    },[newJoke])
  return [joke, generateJoke];
}

export default useRandomDadJokes