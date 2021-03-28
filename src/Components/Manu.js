import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';



const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>


     <Button onClick = {
            handleClick
        }
        style = {
            {
                boxShadow: "none",
                backgroundColor: "#E0E3E6",
                width: "120px",
                padding: "5px 8px"
            }
        } > Show 
        <ArrowDropDownIcon > </ArrowDropDownIcon> 
        </Button>

    
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}

      
       
        < MenuItem onClick = {
            handleClose
        } >
        <FormControlLabel control = {
        <GreenCheckbox
            checked = {
                true
            }
            onChange = {
                () => alert("hello")
            }
            name = "checkedB"
            color = "primary" 
             />
        }
        label = "Primary but not se" />
        </MenuItem>

         < MenuItem onClick = {
            handleClose
        } >
       
        <FormControlLabel control = {
           <GreenCheckbox
            checked = {true}
            onChange = {
                () => alert("hello")
                  }
            name = "checkedB"
            color = "secondary" />
        }
        label = "Primary" />
        </MenuItem> 
        
        < MenuItem onClick = {
            handleClose
        } >
        <FormControlLabel control = { 
        <GreenCheckbox
            checked = {
                true
            }
            onChange = {
                () => alert("hello")
            }
            name = "checkedB"
            color = "secondary" />
        }
        label = "Primary" />
        </MenuItem>
      </Menu>
    </div>
  );
}
