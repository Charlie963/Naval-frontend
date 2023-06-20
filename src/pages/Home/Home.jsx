import { Button,Link } from 'antd';
import React from 'react';
import { Navigate } from 'react-router-dom';




const Home = () => {

  const signup = () => {
    Navigate("/signup");
  }
  return (
    <>
    <div className='border'>
    <div className='homepage_layout'>
      
    <p className='para'>
      <div className='topic'>
      <h2>Indian Naval Hydrography Veterans<br/> 
        Unity in Service</h2>
      </div>
      
    </p>
    <div className='login_homepage'>
          <h1>Welcome Friends & Alumini<br/></h1>
    </div>   
          
    </div>

    <div className='foreword_wrapper'>
    
    <p className='foreword'>
      <div>
      <img src="https://hydrobharat.gov.in/wp-content/uploads/2021/10/CH-Photo-1.png" className='Skjha' />
      </div>
      <div foreword_para>
      <br/>
      The ever-expanding nature and the immense global potential of hydrography is now being
increasingly utilised to further the maritime diplomacy role of our Navy. The growth of the
hydrography cadre, in particular, has been made possible only through the small initial steps that
were taken many years ago, by our ‘now’ veterans, which have now become giant strides for our
Navy as well as our nation. It is indeed inspiring for the young men (and soon, women too), who
continue to strive to follow your footsteps, and even create milestones of their own.
Our veterans have done their best and they are the reason for us to enjoy the fruits of their
labour, vision and foresight. It is therefore our duty to do our bit, through this humble endeavour, to
provide a ‘one-stop-shop’ source of contact details of our naval hydrographic veterans community. <br/><br/>
I am sure you would realise that maintaining an up-to-date directory of all veterans is not an easy task.
Therefore, I would like to place on record the efforts put in by Compilation Team consisting of NHO
staff and veterans, who went beyond their professional taskings, in painstakingly updating and
meticulously compiling the second edition of ‘Coordinates’. I am sanguine that this edition would
assist us to better reach out to our veteran community and also linkup with some lost connects.
While words alone can never be enough to express our gratitude, I would like to humbly
convey to all our veterans – those who have left us, and those who continue to guide us in our
endeavours –<br/> a big <strong>‘Thank You’</strong> for your service.<br/> Jai Hind.<br/>
      </div>
      
    </p>

    <p className='sign'>Adhir Arora<br />
    Vice Admiral <br/>
    Chief of Hydrograpic Department
    </p>
    </div>

    <div className='homepage_downout'>
    <Button
          type="primary"
          htmlType="submit"
          href='/signup'
          className="homepage_signup"
           >
      Signup
    </Button> 
                
    <h1>Get in touch<br/></h1>
          
      </div> 
   

    </div>
    </>
   
  )
}

export default Home;