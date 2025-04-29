import Reac, {useState} from 'react'

function Count() {

    const [count, setCount] = useState(0)
    console.log(count)
    const increment = () => {
        console.log('se ejecuta')
        setCount(count +1)
        console.log(count)
    }

  return (
    <>
        <button onClick={() => increment()}> +1</button>
        <h1>Score: {count}</h1>
    </>
  )
}

export default Count