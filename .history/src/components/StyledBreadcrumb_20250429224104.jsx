// components/StyledBreadcrumb.js
import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const StyledBreadcrumb = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  height: theme.spacing(3),
  color: theme.palette.grey[800],
  fontWeight: theme.typography.fontWeightRegular,
  '&:hover, &:focus': {
    backgroundColor: theme.palette.grey[300],
  },
  '&:active': {
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.grey[400],
  },
}));

export default StyledBreadcrumb;
