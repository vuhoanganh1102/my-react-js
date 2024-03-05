
import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student/Student"
import UserGreeting from "./UserGreeting/UserGreeting"
import List from "./List/List"
import MyComponent from "./useState/MyComponent"
import Counter from "./useState/Counter"
function App() {
    const fruits =[{id:1,name:"apple",calo:10},
    {id:2,name:"orange",calo:11},
    {id:3,name:"banana",calo:9},
    {id:4,name:"coconut",calo:12},
    {id:5,name:"pineaple",calo:13}]
    const vegetables =[{id:1,name:"postatoes",calo:10},
    {id:2,name:"carrots",calo:11},
    {id:3,name:"corn",calo:9},
    {id:4,name:"broccoli",calo:12},
    {id:5,name:"celery",calo:13}]

    return(
        <>
            <Student name='Hoang Anh' age={30} isStudent={true}/>
            <Card />
            <Button />
            <UserGreeting isLoggedIn={true} username="BroCode"/>
            {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
            {vegetables.length > 0 &&<List items={vegetables} category="Vegetables"/> }
            <MyComponent />
            <Counter />
        </>
    )

}

export default App
