import React, { createContext, useState } from "react";

export const MealPlanContext = createContext();

const PlanContext = ({children}) => {
    const [ mealPlan, setMealPlan ] = useState([]);


    return(
        <MealPlanContext.Provider value={{mealPlan, setMealPlan}}>
            {children}
        </MealPlanContext.Provider>
    )
}

export default PlanContext;