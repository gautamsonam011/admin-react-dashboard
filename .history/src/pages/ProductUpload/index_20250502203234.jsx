import { Breadcrumbs } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledBreadcrumb from '../../components/StyledBreadcrumb';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import * as React from 'react';

const ProductUpload = () => {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="right-content w-100 upload-product">
      <div className="card shadow border-0 w-100 flex-row p-4">
        <h5 className="mb-0">Product Upload</h5>
        <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
          />
          <StyledBreadcrumb
            component="a"
            label="Products"
            href="#"
            deleteIcon={< ExpandMoreIcon />}
          />
          <StyledBreadcrumb
            label="Product Upload"
            deleteIcon={<ExpandMoreIcon />}
          />
        </Breadcrumbs>

      </div>
      <form className="form">
        <div className="row">
          <div className="col-sm-7">
            <div className="card p-4">
              <h5 >Basic Information</h5>
              <div className="form-group">
                <h6>Title</h6>
                <input type="text" />
              </div>
              <div className="form-group mb-4">
                <h6>Description</h6>
                <textarea rows={5} cols={10} />
              </div>
              <div className="form-group mb-4">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
                        Select Category
                      </Button>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
                        Select Brand
                      </Button>
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>Brand</em>
                          </MenuItem>
                          <MenuItem value={10}>Tata</MenuItem>
                          <MenuItem value={20}>Reliance</MenuItem>
                          <MenuItem value={30}>Guvi</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">

          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductUpload;