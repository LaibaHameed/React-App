import React from 'react'
import "./Reservation.css"
import headImg from "../../assets/imgs/reservation.jpg"
import sideImg from "../../assets/imgs/Reservation-N-4.jpg"

const Reservation = () => {
  return (
    <>
      <section class="head-img">
        <img class="header-img" src={headImg} alt="" srcset="" />
      </section>

      <h1 class="reservation">RESERVATION FORM</h1>
      <div class="hr"></div>
      <p class="paragraph">
        <small>
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in
          mei. Mei an pericula euripidis,  hinc partem ei est. Eos ei nisl graecis, vix aperiri
          nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei mea.
        </small>
      </p>

      <div class="r-parent-box">
      <div class="child-box1">
        <form action="#" className='r-form'>
            <div class="form-div">
              <input type="text" name="" id="" placeholder="Name*" required className='input'/>
              <input type="number" name="" id="" placeholder="Phone*" required/>
            </div>
            <div class="form-div">
              <input type="number" name="" id="" placeholder="Seats*" required className='input'/>
              <input type="date" name="" id="" placeholder="Phone*" required/>
            </div>
            <div class="form-div">
              <input type="text" name="" id="" placeholder="Time*" required className='input'/>
              <input type="email" name="" id="" placeholder="Email*" required/>
            </div>
            <textarea rows="10" name="" required placeholder="Notes*" className='r-notes'/>
            <button>SUBMIT</button>
        </form>
      </div>
      <div class="child-box2">
        <img src={sideImg} alt=""/>
      </div>
      </div>
    </>
  )
}

export default Reservation