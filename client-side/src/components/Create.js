import React, { useState } from 'react' 


const Create = () => {

  const [user, setUser] = useState({
    emp_name: "", date_of_birth: "", designation: ""
  })

  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })

  }

  const PostData = async (e) => {
    e.preventDefault();

    const { emp_name, date_of_birth, designation } = user

    const res = await fetch('/create_Emp', {

      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emp_name, date_of_birth, designation
      })
    })

    const data = await res.json()

    if (data.status === 400 || !data) {
      window.alert('invalid data')
      console.log('invalid data')
    } else {
      window.alert('perfect data')
      console.log('perfect data')
     
    }
  }


  return (
    <>
      <section className='create_Emp'>
        <div className='container mt-5'>
          <div className='create-content'>
            <div className='emp-form'>
              <h2 className='form-title'>Create-emp-form</h2>


              <form method="POST" className='create_Emp' id='create_Emp'>

                <div className='form-group p-2'>
                  <label htmlFor=''></label>
                  <input type='emp_name' name='emp_name' id='emp_name' autoComplete='off'
                    value={user.emp_name}
                    onChange={handleInputs}
                    placeholder='enter name'
                  />

                </div>

                <div className='form-group p-2'>
                  <label htmlFor='date_of_birth'></label>
                  <input type='date_of_birth' name='date_of_birth' id='date_of_birth' autoComplete='off'
                    value={user.date_of_birth}
                    onChange={handleInputs}
                    placeholder='enter date_of_birth'
                  />
                </div>


                <div className='form-group p-2'>
                  <label htmlFor='designation'></label>

                  <select type='designation' name='designation' id='designation' autoComplete='off'
                    value={user.designation}
                    onChange={handleInputs}

                    placeholder='designation'>
    
                  </select>
                </div>

                <div className='form-group form-button p-2'>
                  <input type='submit' name='empform' id='emp form' className='form-submit'
                    value='Submit' onClick={PostData}
                  />
                </div>

              </form>
            </div>
          </div>

         <div>
              </div>

        </div>
      </section>
    </>
  )
}

export default Create

