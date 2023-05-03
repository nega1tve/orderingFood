import DUMMY_MEALS from './dummy-meals'
import styles from './MealList.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function MealsList() {

    const mealList = DUMMY_MEALS.map(meal =>
        <MealItem key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}/>)

    return <section className={styles.meals}>
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>
    </section>
}

export default MealsList