import React from "react";

import useFightForm from "../../CustomHooks";

const FightForm = () => {

    const signup = () => {
        // Callback can render scorecard?
        console.log(`Fight Card:
               Judge: ${inputs.judge} 
               Fighter1: ${inputs.fighter1} 
               Fighter2: ${inputs.fighter2}
               Number of Rounds: ${inputs.numberOfRounds}`);
      }
      const {inputs, handleInputChange, handleSubmit} = useFightForm(signup);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="judge">Judge</label>
                <input
                    type="text"
                    name="judge"
                    onChange={handleInputChange}
                    value={inputs.judge}
                    required/>
            </div>
            <div>
                <label htmlFor="fighter1">Fighter 1</label>
                <input
                    type="text"
                    name="fighter1"
                    onChange={handleInputChange}
                    value={inputs.fighter1}
                    required/>
            </div>
            <div>
                <label htmlFor="fighter2">Fighter 2</label>
                <input
                    type="text"
                    name="fighter2"
                    onChange={handleInputChange}
                    value={inputs.fighter2}
                    required/>
            </div>
            <div>
                <label htmlFor="numberOfRounds">Number of Rounds</label>
                <select
                    type="select"
                    name="numberOfRounds"
                    onChange={handleInputChange}
                    value={inputs.numberOfRounds}
                    required>
                        <option value="">--Number of Rounds--</option>
                        <option value="4">4</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                    </select>
                                </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}
export default FightForm;