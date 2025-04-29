import { Breadcrumbs } from "@mui/material"

const ProductUpload = () =>{

    return (
        <>
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

        </div>
    )
}

export default ProductUpload;