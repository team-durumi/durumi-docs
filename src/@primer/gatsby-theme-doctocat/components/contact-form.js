import React, {useState} from 'react'
import {TextInput,ButtonPrimary,Flash,Grid,Box,BaseStyles} from '@primer/components'

function ContactForm() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [status,setStatus] = useState('')

  const encode = (data) => {
    const formData = new FormData()
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    })
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact-durumi", name, email, message }
    fetch("/", {
      method: "POST",
      body: encode(data)
    })
      .then(() => setStatus("감사합니다. 24시간 이내로 연락드리겠습니다."))
      .catch(error => setStatus("엇 문제가 있어서 연락받을 수가 없습니다. 죄송합니다."))
    e.preventDefault()
  }

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  return (
    <BaseStyles>
      <form name="contact-durumi" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        { status &&
        <Flash p={4} my={4} scheme="green">{status}</Flash>
        }
        <input type="hidden" name="form-name" value="contact-durumi" />
        <input type="hidden" name="bot-field" />
        <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
          <Box>
            <TextInput variant="large" aria-label="name" name="name" placeholder="성명" value={name} onChange={handleChange} />
          </Box>
          <Box>
            <TextInput variant="large" aria-label="email" name="email" placeholder="연락받을 이메일" value={email} onChange={handleChange} ml={6} />
          </Box>
        </Grid>
        <p>
          <TextInput as="textarea" width="100%" rows={8} variant="large" aria-label="message" name="message" placeholder="문의 내용" value={message} onChange={handleChange} />
        </p>
        <p>
          <ButtonPrimary>보내기</ButtonPrimary>
        </p>
      </form>
    </BaseStyles>
  )
}

export default ContactForm
