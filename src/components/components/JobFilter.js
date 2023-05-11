import React, { useState } from 'react';
import "../../../src/components/stylesheets/AvailableJobs.css"
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  FormGroup,
  Divider,
} from '@material-ui/core';

const Filter = () => {
  const [location, setLocation] = useState({
    onsite: false,
    remote: false,
  });

  const [jobType, setJobType] = useState({
    internship: false,
    fta: false,
  });

  const handleLocationChange = (event) => {
    setLocation({ ...location, [event.target.name]: event.target.checked });
  };

  const handleJobTypeChange = (event) => {
    setJobType({ ...jobType, [event.target.name]: event.target.checked });
  };

  return (
    <div className='filter'>

      <Typography variant="h6" id = "filter-head">Location</Typography>
      <Divider />
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={location.onsite}
                onChange={handleLocationChange}
                name="onsite"
                color="primary"
              />
            }
            label="Onsite"
          />
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={location.remote}
                onChange={handleLocationChange}
                name="remote"
                color="primary"
              />
            }
            label="Remote"
          />
        </FormGroup>
      </FormControl>
      <br />
      <Typography variant="h6" id = "filter-head">Job Type</Typography>
      <Divider />
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={jobType.internship}
                onChange={handleJobTypeChange}
                name="internship"
                color="primary"
              />
            }
            label="Internship"
          />
          <FormControlLabel
            control={
              <Checkbox id = "filter-head"
                checked={jobType.fta}
                onChange={handleJobTypeChange}
                name="fta"
                color="primary"
              />
            }
            label="Full-Time" 
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
