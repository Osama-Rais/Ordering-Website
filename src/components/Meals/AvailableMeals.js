import classes from './MealsSummary.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/Mealtem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Panadol',
      description: 'For Headache',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Febrol',
      description: 'For Fever',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Exort',
      description: 'For BloodPressure',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Celebex',
      description: 'For Joint Pain',
      price: 18.99,
    },
  ];

  


const AvailableMeals = () =>{

    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id}  name={meal.name} description={meal.description} price={meal.price}/>);
    return <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>

};
export default AvailableMeals;