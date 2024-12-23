import { useContext } from "react"
import { MealPlanContext } from "../contexts/PlanContext"

export const useMealPlanner = () => {
    const {mealPlan, setMealPlan} = useContext(MealPlanContext);

    const isInMealPlan = (id) =>  mealPlan.includes(id);

    const addToPlan = (id) => {
        setMealPlan([...mealPlan, id]);
    }

    const removeFromPlan = (id) => {
        const removed = mealPlan.filter(function(item) {
            return item !== id;
        })
        
        setMealPlan(removed);
    }
    return { isInMealPlan, addToPlan, removeFromPlan }
}