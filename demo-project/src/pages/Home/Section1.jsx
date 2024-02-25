import React from 'react'
import "./Section1.css"
import image1 from '../../assets/imgs/h-1-img-1.jpg'
import image2 from '../../assets/imgs/h-1-img-2.jpg'
import image3 from '../../assets/imgs/h-1-img-3.jpg'

const Section1 = () => {
  return (
    <>
        <div class="book-table">

<h3>What Happens Here</h3>
<h1>COFFEE BUILD YOUR BASE.</h1>

<form action="#">
    <select name="Person" id="Persons">
        <option value="1person">1 Person</option>
        <option value="2person">2 Person</option>
        <option value="3person">3 Person</option>
        <option value="4person">4 Person</option>
        <option value="5person">5 Person</option>
        <option value="6person">6 Person</option>
        <option value="7person">7 Person</option>
        <option value="8person">8 Person</option>
        <option value="9person">9 Person</option>
        <option value="10person">10 Person</option>
    </select>
    <span>For</span>
    <input type="date" class="date"/>
    <span>At</span>
    <input type="time" class="time"/>
    <input type="button" class="button btn" value="BOOK A TABLE"/>
</form>

<div class="cards">
    <div class="card">
        <div className='imgBox'><img src={image1} alt=""/></div>
        <div className='textBox'>
        <h1><span>01</span> BEAUTIFUL PLACE</h1>
        <p>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle</p>
        <button>Read more <span>→</span></button>
        </div>
    </div>
    <div class="card">
    <div className='imgBox'><img src={image2} alt=""/></div>
        <div className='textBox'>
        <h1><span>02</span> FEEL THE COFFEE</h1>
        <p>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle</p>
        <button>Read more <span>→</span></button>
        </div>
    </div>
    <div class="card">
    <div className='imgBox'><img src={image3} alt=""/></div>
    <div className='textBox'>
        <h1><span>03</span> FULL TASTE</h1>
        <p>Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle</p>
        <button>Read more <span>→</span></button>
        </div>
    </div>
</div>

</div>
    </>  
  )
}

export default Section1