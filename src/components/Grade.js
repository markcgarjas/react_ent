import React, {useState} from "react";
import {Button, FormControl} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const Grade = () => {

  const [state, setState] = useState({
    value: 0, firstGradeAverage: 0, secondGradeAverage: 0, thirdGradeAverage: 0, fourthGradeAverage: 0, gradePoints: 0,
  });

  const handleChange = (event) => {
    const {value, name} = event.target;
    const numberValue = parseFloat(value, 10);
    setState(prevState => ({...prevState, [name]: numberValue}));
  };

  const handleClick = () => {
    const {firstGradeAverage, secondGradeAverage, thirdGradeAverage, fourthGradeAverage} = state;
    setState(prevState => ({
      ...prevState, value: firstGradeAverage + secondGradeAverage + thirdGradeAverage + fourthGradeAverage
    }));
  };

  return (<div className="App">
    <h1>Grade Calculator</h1>
    <FormControl>
      <TextField
        name="firstGradeAverage"
        label="First Grade"
        type="number"
        helperText="Average grade for first year"
        onChange={handleChange}
        required
      />
      <TextField
        name="secondGradeAverage"
        label="Second Grade"
        type="number"
        helperText="Average grade for second year"
        onChange={handleChange}
        required
      />
      <TextField
        name="thirdGradeAverage"
        label="Third Grade"
        type="number"
        helperText="Average grade for third year"
        onChange={handleChange}
        required
      />
      <TextField
        name="fourthGradeAverage"
        label="Fourth Grade"
        type="number"
        helperText="Average grade for fourth year"
        onChange={handleChange}
        required
      />
      <Button variant="outlined" onClick={handleClick}>Submit</Button>
      <br></br>
      <TextField
        label="Total Average"
        type="number"
        helperText="Total average for four years"
        value={(state.value / 4).toFixed(2)}
      />
    </FormControl>
  </div>)
}

export default Grade;