import React, {useState, useEffect} from 'react';
import styles from './Card.module.css';
import TinderCard from 'react-tinder-card';
import axios from '../../axios';


 const Card = () => {
     const [people, setPeople] = useState([]);

     useEffect(()=>{
         const fetchData = async()=>{
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
     },[])

     const swiped = (direction,nameToDelete)=>{
        console.log(`removing ${nameToDelete}`);
        //setLastDirection(direction);
     };

     const outOfFrame =(name)=>{
         console.log(`${name} left the screen`);
     };

    return (
        <div className={styles.tinderCards}>
            <div className={styles.tinderCards_cardContainer}>
                {people.map((person)=>(
                   <TinderCard
                   className={styles.swipe}
                   key={person.name}
                   preventSwipe ={["up","down"]}
                   onSwipe={(dir)=>swiped(dir,person.name)} 
                   onCardLeftScreen={()=>outOfFrame(person.name)}
                   >
                    <div 
                    className={styles.card}
                    style={{backgroundImage:`url(${person.imageUrl})`}}>
                       <h3>{person.name}</h3> 
                    </div>
                   </TinderCard>
                ))}
            </div>
        </div>
    )
} 

export default Card
