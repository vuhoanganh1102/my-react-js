import styles from './Button.module.css'

function Button(){
    
    // let count = 0;
    // const handleClick = () =>{
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!!`)
    //     }
    // }
    const testCall = () => console.log("check")
    // const doubleClick = (e) => e.target.textContent = "OUCH 🙄" ;
    // const handleClick2 =(name)=> console.log(`${name} stop clicking me`)
    return(
        <>
            <button onClick={()=>testCall()} className={styles.button}>Click me 😃😄</button>
        </>
    )
}

export default Button