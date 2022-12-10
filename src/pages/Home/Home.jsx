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
      <h2>Indian Naval Hydrographic Department</h2>
      </div>
      
    </p>
    <div className='login_homepage'>
          <h1>Welcome Friends & Alumini<br/></h1>
    </div>   
          
    </div>

    <div className='foreword_wrapper'>
    
    <p className='foreword'>
      <div>
      <img src="https://3.imimg.com/data3/UL/ED/MY-10065237/0-500x500.jpg" className='Skjha' />
      </div>
      <div foreword_para>
      I firmly believe that the greatest asset of
      any department and specially so in the Armed
      Forces is their human resources. An institute
      is only as good as its people, both serving and
      the alumni. Over the years Indian Navy has
      trained a large number of officers and sailors
      in the Hydrographic Department who have
      done yeoman's service to the branch and they
      continue to excel in their second innings
      bringing laurels to the department.

      The long outstanding need to reconnect with the veterans of our small
      community was finally fulfilled with the 60th anniversary of the National
      Hydrographic Office this year. Carrying forward the initiative, the office has made
      an earnest endeavor to reach out to the veterans and compile this directory
      “Coordinates” which shall hopefully strengthen our bonds and ensure greater
      communication amongst the fraternity.
      May our community grow in strength and continue to carve a niche for
      themselves as professionals in their chosen field post retirement. This small
      endeavor will hopefully go a long way in ensuring we reach out to each other for
      fruitful interaction. Suggestions for improvement and inclusion of more veterans
      in this compilation may be forwarded. I compliment my team at NHO who have in
      a very short period painstakingly complied this directory.<br/>
      </div>
      
    </p>

    <p className='sign'>Sk Jha <br />
    Vice Admiral <br/>
    Chief of Hydragrapic Department
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