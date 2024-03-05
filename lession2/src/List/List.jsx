
import PropTypes from 'prop-types'
import styles from './List.module.css'
function List(props){
    

    // fruits.sort((a,b) => a.name.localeCompare(b.name)) // alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) // reverse alphabetical
    // fruits.sort((a,b) => a.calo - b.calo) // numberic
    // fruits.sort((a,b) => b.calo - a.calo) // reverse numberic
    
    // const localFruits = fruits.filter(fruit => fruit.calo <10)
    const itemList = props.items;
    const listItems = itemList.map((item) => <li key={item.id}>{item.name} with {item.calo} calo.</li>);
    return(
        <>
            <div>
                <h3 className={styles.category}>{props.category}</h3>
                <ol className={styles.listItem}>{listItems}</ol>
            </div>
        </>
        
    );
}

List.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,calo:PropTypes.number})),
    category:PropTypes.string
}
List.defaultProps = {
    items:[],
    category:"category"
}
export default List