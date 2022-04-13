import * as React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'
import dateFormat from 'dateformat';
import { useDispatch, useSelector } from 'react-redux';
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
  const cartitems = useSelector(state => state.cartItem)
  // const robo_material = useSelector(state => state.material)
  const same_type_robot = useSelector(state => state.sameRobot)

  const { id } = useParams()
  let count = 0;
  const selected_robot = DATA[id]
  const [total , setTotal]=React.useState(0)

  // var totalamount = data.map((items) => items.count * items.price )
  // console.log(totalamount)
  


  // logic for carts items 
  const data = [...cartitems.reduce((mp, o) => {
    if (!mp.has(o.material)) mp.set(o.material, { ...o, count: 0 });
    mp.get(o.material).count++;
    return mp;
  }, new Map).values()];
  console.log(data)

  return (
    <>
      {console.log(same_type_robot)}

      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs zeroMinWidth>
              <Typography style={{color:'black'}} noWrap>YOUR CART ITEMS </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>

      {data.map((items) => {
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
                    <Avatar style={{ width: '80%', height: '100px' }}><img src={items.image}></img></Avatar>

                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>Name : {items.name} <span style={{color:"blue"}}>  *  {items.count} </span></Typography>
                    <Typography noWrap> Material : {items.material}</Typography>
                    <Typography noWrap> price : Rs: <italic> {items.price}</italic>/-</Typography>
                    <Typography noWrap> Item Total : Rs: <italic>  {items.price * items.count} </italic>/</Typography>
                         
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>
          </>
        )
      })}
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>Total Price : </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>

      {cartitems.length <= 0 ? <Stack sx={{ width: '100%', width: "80%", margin: "auto", marginTop: '50px' }} spacing={2}>
        <Alert severity="error">No Item in cart....! </Alert>
      </Stack> : ''}

    </>
  );

}
