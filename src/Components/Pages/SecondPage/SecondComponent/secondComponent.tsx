import React, { useState } from "react";
import { Box, FormControlLabel, Checkbox } from "@mui/material";
import "./secondComponent.css"

function SecondComponent() {
  const [customerServiceChecked, setCustomerServiceChecked] = useState([true, false]);
  const [customerServiceExpanded, setCustomerServiceExpanded] = useState(true);

  const [designChecked, setDesignChecked] = useState([true, false, false]);
  const [designExpanded, setDesignExpanded] = useState(true);

  const handleCustomerServiceParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerServiceChecked([event.target.checked, event.target.checked]);
    setCustomerServiceExpanded(event.target.checked);
  };

  const handleCustomerServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerServiceChecked([event.target.checked, customerServiceChecked[1]]);
  };

  const handleCustomerSuccessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerServiceChecked([customerServiceChecked[0], event.target.checked]);
  };

  const customerServiceChildren = (
    <Box sx={{ display: customerServiceExpanded ? "flex" : "none", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={customerServiceChecked[0]} onChange={handleCustomerServiceChange} />}
      />
      <FormControlLabel
        label="Customer Success"
        control={<Checkbox checked={customerServiceChecked[1]} onChange={handleCustomerSuccessChange} />}
      />
    </Box>
  );

  const handleDesignParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setDesignChecked([isChecked, isChecked, isChecked]);
    setDesignExpanded(isChecked);
  };

  const handleWebDesignChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setDesignChecked([isChecked, designChecked[1], designChecked[2]]);
  };

  const handleProductDesignChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setDesignChecked([designChecked[0], isChecked, designChecked[2]]);
  };

  const handleGraphicDesignChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setDesignChecked([designChecked[0], designChecked[1], isChecked]);
  };

  const designChildren = (
    <Box sx={{ display: designExpanded ? "flex" : "none", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Web Design"
        control={<Checkbox checked={designChecked[0]} onChange={handleWebDesignChange} />}
      />
      <FormControlLabel
        label="Product Design"
        control={<Checkbox checked={designChecked[1]} onChange={handleProductDesignChange} />}
      />
      <FormControlLabel
        label="Graphic Design"
        control={<Checkbox checked={designChecked[2]} onChange={handleGraphicDesignChange} />}
      />
    </Box>
  );

  const isDesignIndeterminate = !designChecked.every((checked) => checked) && designChecked.some((checked) => checked);

  return (
    <Box className="second_component_box" >
       <div>
        <FormControlLabel
          label="Customer Service"
          control={
            <Checkbox
              checked={customerServiceChecked[0] && customerServiceChecked[1]}
              indeterminate={customerServiceChecked[0] !== customerServiceChecked[1]}
              onChange={handleCustomerServiceParentChange}
            />
          }
        />
        {customerServiceChildren}
      </div>
      <br />
      <div>
        <FormControlLabel
          label="Design"
          control={
            <Checkbox
              checked={designChecked[0] && designChecked[1] && designChecked[2]}
              indeterminate={isDesignIndeterminate}
              onChange={handleDesignParentChange}
            />
          }
        />
        {designChildren}
      </div>
    </Box>
  );
}

export default SecondComponent;
