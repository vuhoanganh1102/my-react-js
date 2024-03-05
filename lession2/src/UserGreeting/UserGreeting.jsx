
import PropTypes from 'prop-types'
import styles from './UserGreeting.module.css'
function UserGreeting(props){
    const welcomeMessage = <h2 className={styles.welcomeMessage}>Welcome {props.username}</h2>
    const loginPromt = <h2 className={styles.loginPrompt}>Please log in to continue</h2>
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }
    return(
        props.isLoggedIn ? welcomeMessage : loginPromt
    )
}


UserGreeting.propTypes={
    isLoggedIn:PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps={
    isLoggedIn: false,
    username: ""
}
export default UserGreeting