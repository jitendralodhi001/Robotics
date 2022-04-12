import * as React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'
import dateFormat from 'dateformat';
import { useDispatch, useSelector } from 'react-redux';
import { count_val } from '../redux/action'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const DATA = data.data
export default function RecipeReviewCard() {
  const dispatch = useDispatch()
  // const rdx_data = useSelector(state => state.robots)
  const cartitems = useSelector(state => state.cartItem)
  const robo_material = useSelector(state => state.material)
  // console.log(rdx_data)
  console.log(cartitems)
  console.log(robo_material)

  const { id } = useParams()
  const { count } = useParams()
 

  const selected_robot = DATA[id]

  return (
    <>
      {cartitems.map((items) => {
        return (
          <>
              
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar style={{width:'80%',height:'100px'}}><img src = {items.image}></img></Avatar>
              
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>Name : {items.name}</Typography>
              <Typography noWrap> Material : {items.material}</Typography>
              <Typography noWrap> price : Rs: <italic>  {items.price} </italic>/</Typography>

            </Grid>
          </Grid>
        </StyledPaper>
      </Box>
      </>
        )
      })}

      {cartitems.length<=0 ? <Stack sx={{ width: '100%' , width:"80%" , margin:"auto", marginTop:'50px'}} spacing={2}>
                        <Alert severity="error">No Item in cart....! </Alert>
                    </Stack> :''}

    </>
  );

}
