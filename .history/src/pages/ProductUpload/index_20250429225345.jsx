import { Breadcrumbs } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledBreadcrumb from '../../components/StyledBreadcrumb';

const ProductUpload = () =>{

    return (
        <div className="right-content w-100">
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
                    deleteIcon={< ExpandMoreIcon/>}
                />
                <StyledBreadcrumb
                    label="Product Upload"
                    deleteIcon={<ExpandMoreIcon/>}
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
                        <div className="form-group">
                            <h6>Title</h6>
                            <textarea rows={5} cols={10} />
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