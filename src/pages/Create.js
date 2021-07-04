import React, { useEffect, useState } from 'react'

import '../styles/Create.scss'

function Create() {
  const [fields, setfields] = useState()
  const [repeter, setrepeter] = useState(false)

  useEffect(() => {
    fetch(`https://localhost/api/get_form.php`)
      .then(e => e.json())
      .then(deta => {
        setfields([deta.data.fields[0]]);
        // console.log(deta)
      })
  }, [])
  // console.log(fields)
  return (
    <main className='create'>
      <h2>Create Page</h2>
      {
        fields &&
        <form action="">
          {fields[0].id && <label htmlFor={`id`}> {fields[0].id.title}
            <input type={fields[0].id.type} aria-required={fields[0].id.required} name='id' />
          </label>}
          {fields[0].user_name && <label htmlFor={`user_name`}> {fields[0].user_name.title}
            <input type={fields[0].user_name.type} pattern='[a-z]{3,20}' placeholder="Full Name" aria-required={fields[0].user_name.required} name='user_name' />
          </label>}
          {fields[0].user_email && <label htmlFor={`user_email`}> {fields[0].user_email.title}
            <input type={fields[0].user_email.type} placeholder="email" aria-required={fields[0].user_email.required} name='email' />
          </label>}
          {fields[0].details && <label htmlFor={`details`}> {fields[0].details.title}
            <input type={fields[0].details.type} placeholder="details" aria-required={fields[0].details.required} name='details' />
          </label>}
          {fields[0].user_gender && <><label htmlFor={`user_gender`}>{fields[0].user_gender.title}</label> <select name="user_gender" id="user_gender">{fields[0].user_gender.options.map(d => (
            <option key={d.key} value={d.key}>{d.label}</option>
          ))}</select></>}
          {fields[0].user_hobby && <>
            <fieldset style={{ borderRadius: '15px', padding: '20px', marginTop: '20px' }}>

              <legend style={{ borderRadius: '30px', fontStyle: 'italic', fontWeight: '600' }}>{fields[0].user_hobby.title} <span style={{ padding: '10px', borderRadius: '7px', border: '1px solid #d9d9d9' }} onClick={() => setrepeter(true)}>add</span></legend>
              {repeter ?
                <>{
                  fields[0].user_hobby.repeater_fields.work_place && <><label htmlFor={`work_place`}>{fields[0].user_hobby.repeater_fields.work_place.title}</label>
                    <input style={{
                      width: '60%',
                      marginTop: '15px',
                      padding: '10px 20px',
                      outline: 'none',
                      border: '2px solid #d9d9d9',
                      borderRadius: '20px'
                    }} type={fields[0].user_hobby.repeater_fields.work_place.type} name={fields[0].user_hobby.repeater_fields.work_place.title} aria-required={fields[0].user_hobby.repeater_fields.work_place.required} placeholder={fields[0].user_hobby.repeater_fields.work_place.title} /></>
                }
                  {
                    fields[0].user_hobby.repeater_fields.designation && <><label htmlFor={`designation`}>{fields[0].user_hobby.repeater_fields.designation.title}</label>
                      <input style={{
                        width: '60%',
                        marginTop: '15px',
                        padding: '10px 20px',
                        outline: 'none',
                        border: '2px solid #d9d9d9',
                        borderRadius: '20px'
                      }} type={fields[0].user_hobby.repeater_fields.designation.type} name={fields[0].user_hobby.repeater_fields.designation.title} aria-required={fields[0].user_hobby.repeater_fields.designation.required} placeholder={fields[0].user_hobby.repeater_fields.designation.title} /></>
                  }</> : null}
            </fieldset>
          </>}
          <br /><button className='submit'>Submit</button>
        </form>
      }
    </main>
  )
}

export default Create
