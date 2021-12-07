import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) =>{

    const [isEditing, setIsEditing] = useState(false);
    const onEnteredExpenseDataHandler = (enteredExpense) =>{
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onSaveExpense(expenseData);
        setIsEditing(false);
        
    }

    const startEditiingHandler = () =>{
        setIsEditing(true);
    }
    const stopEditiingHandler = () =>{
        setIsEditing(false);
    }


    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditiingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditiingHandler} onEnteredExpenseData = {onEnteredExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense;