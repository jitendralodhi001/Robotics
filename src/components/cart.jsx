import React, { useEffect, useState } from 'react';
import data from '../data.json'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { clear_cart } from '../redux/action';
import { cart_item_plus, cart_item_minus } from '../redux/action'



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
  const same_type_robot = useSelector(state => state.sameRobot)
  const robots = useSelector(state => state.robots)
  const [data, setData] = useState([])
  const [val, setVal] = useState('0')


  const getCount = () => {
    let count = 0
    let countData = [...cartitems.reduce((mp, o) => {
      if (!mp.has(o.material)) mp.set(o.material, { ...o, count: 0 });
      mp.get(o.material).count++;
      return mp;
    }, new Map).values()];
    return countData
  }

  useEffect(() => {
    const datas = getCount()
    setData(datas)
    console.log("effff", data)
  }, [val, cartitems])

  // console.log(data)
  // adding total price of all product in carts
  const addprice = data.map((items) => items.count * items.price)
  var totalamount = 0
  for (let i = 0; i < addprice.length; i++) {
    totalamount = totalamount + addprice[i]
  }
  var thai = new Intl.NumberFormat('th', { style: 'currency', currency: 'THB' }).format(totalamount).replace(/\b(\w*THB\w*)\b/, '฿ ')


  const Plus = (name) => {
    const filtered = cartitems.filter((items) => items.name == name)
    console.log(filtered[0].stock)
    var check_stock = robots.filter((item) => item.name === name)
    console.log(check_stock[0].stock)

    var buy_count = data.filter((item) => item.name == name)
    console.log(buy_count[0].count)
    if (check_stock[0].stock !== buy_count[0].count) {
      dispatch(cart_item_plus(filtered[0]))
      setVal(val + 1)
    }
    else {
      alert('out of stock ')
    }
  }

  const Minus = (name) => {
    const check = cartitems.filter((items) => items === name)
    if (check) {
      cartitems.shift()
      dispatch(cart_item_minus(cartitems))
      setVal(val + 1)
    }
  }
  // console.log("cartitems", cartitems)


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
            <Grid item xs zeroMinWidth>
              <Typography style={{ color: 'black' }} noWrap>YOUR CART ITEMS </Typography>
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
                    <Typography noWrap>Name : {items.name} <span style={{ color: "blue" }}>  *  {items.count} </span></Typography>
                    <Typography noWrap> Material : {items.material}</Typography>
                    <Typography noWrap> price : Rs: <italic> {new Intl.NumberFormat('th', { style: 'currency', currency: 'THB' }).format(items.price).replace(/\b(\w*THB\w*)\b/, '฿ ')}</italic>/-</Typography>
                    <Typography noWrap> Item Total : Rs: <italic> {new Intl.NumberFormat('th', { style: 'currency', currency: 'THB' }).format(items.price * items.count).replace(/\b(\w*THB\w*)\b/, '฿ ')}</italic>/-</Typography>
                    <Button variant="contained" onClick={() => { Minus(items.name) }}>-</Button>
                    <span style={{ margin: "3px 3px 3px 3px" }}> {items.count} </span>
                    <Button variant="contained" onClick={() => { Plus(items.name) }} >+ </Button>
                  </Grid>
                </Grid>
              </StyledPaper>
            </Box>
          </>
        )
      })}


      {cartitems.length < 0 ? '' : <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        ><Grid container wrap="nowrap" spacing={2}>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>Total Price : {thai}/- </Typography>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Button variant="outlined" onClick={() => dispatch(clear_cart())} color="error">Clear Cart</Button>
            </Grid>

          </Grid>
        </StyledPaper>
      </Box>}

      {data.length <= 0 ? <Stack sx={{ width: '100%', width: "80%", margin: "auto", marginTop: '50px' }} spacing={2}>
        <Alert severity="error">No Item in cart....! </Alert>
      </Stack> : ''}

    </>
  );

}
