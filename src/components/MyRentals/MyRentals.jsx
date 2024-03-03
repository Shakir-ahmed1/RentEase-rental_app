import {Grid, Skeleton, Typography} from "@mui/material"
import { useEffect, useContext } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getMyHouses } from "../../actions/rentals"
import RentMy from './RentMy'
import DataContext from "../../context/DataContext"
import MyRentalForm from "./MyRentsForm"
import MyRentMap from "./MyRentMap"

const MyRentals = () => {
  const { user} = useContext(DataContext)

  const dispatch = useDispatch()  
  useEffect(() => {
    dispatch(getMyHouses())
  },[])
  const myRent = useSelector((state) => state?.rentals?.getMyRentals)
  console.log('here is my rental in the component', myRent)
  return (
    <>
    {user && <MyRentalForm />}
      <Typography variant="h5" style={{fontWeight:'bold', textAlign:'center', fontFamily:'fantasy', letterSpacing:'2px', fontSize:'26px'}}>
        My Rentals
      </Typography>
      {!myRent?.length ? (
        <div style={{ display: "flex", justifyContent: "center", flexWrap:'wrap',gap:'30px' }}>
          <div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton variant="rectangular" width={300} height={300} style={{marginBottom:'50px'}}/>
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton variant="rectangular" width={300} height={300} />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton variant="rectangular" width={300} height={300} />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton variant="rectangular" width={300} height={300} />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton variant="rectangular" width={300} height={300} />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton variant="rectangular" width={300} height={300} />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton variant="rectangular" width={300} height={300} />
          </div>
          <div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton variant="rectangular" width={300} height={300} />
          </div>
        </div>
      ) : (
        <Grid container spacing={3} padding={"10px"} style={{marginTop:'10px'}}>
          {myRent?.map((rental, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
              <RentMy rental={rental} />
            </Grid>
          ))}
        </Grid>
      )}
      <MyRentMap myRent={myRent}/>
    </>
  )
}

export default MyRentals