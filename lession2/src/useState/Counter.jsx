import { useState } from "react"
import styles from './Count.module.css'
function Counter(){
    const [count,setCount] = useState(0);

    const increment = () =>{
        setCount(count  + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }
    const reset = () =>{
        setCount(0)
    }

    return(
        <>
            <div className={styles.countContainer}>
                <h3 className={styles.title}>Counter</h3>
                <p className={styles.countDisplay}>{count}</p>
                <button className={styles.countButton} onClick={increment}>Increment</button>
                <button className={styles.countButton} onClick={decrement}>Decrement</button>
                <button className={styles.countButton} onClick={reset}>Reset</button>
            </div>
            

        </>
    )
}

export default Counter