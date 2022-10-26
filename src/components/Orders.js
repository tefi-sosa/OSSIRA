import { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './Orders.module.css'
import { TailSpin } from 'react-loading-icons'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const url = `http://localhost:4040`

  let userId = localStorage.getItem('userId') 
  let number = 0

  useEffect(() => {
    axios
        .get(`${url}/orders/${userId}`)
        .then((res) => {
          // console.log(res.data)
          let decodedData = []
          res.data.forEach(element => {
            // console.log(JSON.parse(element.order_info))
            decodedData.push(JSON.parse(element.order_info))
          });
          setOrders(decodedData)
          // console.log(decodedData)
          setLoading(false)
        })
  }, [])

  return (
    <div>
      <h4>ORDER HISTORY</h4>
      <div>
      {!loading ? ((orders.length === 0) ? (<p>You have no orders history</p>
        ) : (
          orders.map((order) => {
            let total = order[0].total
            number++
            // console.log(total)
            return (
              <div className={classes.order_container}>
                  <div className={classes.orders_number}>
                    <h5>{`ORDER # ${number}`}</h5>
                    <h5>{`TOTAL: $${total}`}</h5>                  
                  </div>
                  <hr/>
                {order.map((shoe) => {
                  return (
                    <div className={classes.order_product}>
                      <img className={classes.img} src={shoe.image} alt=''></img>
                      <h4>{shoe.title}</h4>
                      <h4>${shoe.price}</h4>
                      <h4>x{shoe.quantity}</h4>                  
                    </div>
                      )
                  })
                }
              </div>
            )
        })))
        : (
          <div>
            <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
            <p>Loading...</p>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Orders