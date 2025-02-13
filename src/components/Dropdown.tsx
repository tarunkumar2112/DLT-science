import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">DLT Science</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="DLT Science"
          onChange={handleChange}
        >
          <MenuItem value={10}>DLT Science</MenuItem>
          <MenuItem value={20}>DLT Science</MenuItem>
          <MenuItem value={30}>DLT Science</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
