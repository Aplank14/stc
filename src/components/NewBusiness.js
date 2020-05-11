import React from 'react'
import {Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'

export default function NewBusiness() {
  const {register, handleSubmit, errors} = useForm()
  const history = useHistory()

  const onSubmit = data => {
    if (data.business !== '') {
      history.push(`/business/${data.business}`)
    } else if (data.location !== '') {
      history.push(`/city/${data.location}`)
    }
    console.log(errors)
  }


  return (
    <div>
      <Container>
        <h1 align="center" className="titleMargin">
          Submit a Business
        </h1>

        <div>
          Fill out the form below to get a business added to our website. Our mission is
          to get every local option added. Submissions will be reviewed and posted to
          website within 24 hours of submission.
        </div>

        <Row>
        <Form inline onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                type="text"
                placeholder="Business Name"
                className="mr-sm-2"
                name="business"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              {/** TODO: This needs to be fixed */}
              <Form.Group 
              as={Col} 
              name="Type"
              controlId="exampleForm.SelectCustom"
              >

              <Form.Label>Type</Form.Label>
              <Form.Control as="select" value="Choose...">
                <option>Restaurant</option>
                <option>Service</option>
                <option>Other</option>
              </Form.Control>
              </Form.Group>


              <FormControl
                type="text"
                placeholder="Category"
                className="mr-sm-2"
                name="Category"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Subcategory"
                className="mr-sm-2"
                name="Subcategory"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Owner"
                className="mr-sm-2"
                name="Template"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Year Started"
                className="mr-sm-2"
                name="Start_Year"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Address"
                className="mr-sm-2"
                name="Address"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="City"
                className="mr-sm-2"
                name="City"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="State"
                className="mr-sm-2"
                name="State"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Zipcode"
                className="mr-sm-2"
                name="Zipcode"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Phone"
                className="mr-sm-2"
                name="Phone"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Website"
                className="mr-sm-2"
                name="Website"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Facebook"
                className="mr-sm-2"
                name="Facebook"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Email"
                className="mr-sm-2"
                name="Email"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Menu"
                className="mr-sm-2"
                name="Menu"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Takeout"
                className="mr-sm-2"
                name="Takeout"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Delivery"
                className="mr-sm-2"
                name="Template"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Reservations"
                className="mr-sm-2"
                name="Template"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Parking"
                className="mr-sm-2"
                name="Parking"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <FormControl
                type="text"
                placeholder="Business Description"
                className="mr-sm-2"
                name="Business_Description"
                ref={register({required: false, maxLength: 100})}
              />
              <br />
              <br />

              <FormControl
                type="text"
                placeholder="Monday Open"
                className="mr-sm-2"
                name="Monday_Start"
                ref={register({required: false, maxLength: 100})}
              />

              <FormControl
                type="text"
                placeholder="Monday Close"
                className="mr-sm-2"
                name="Monday_Close"
                ref={register({required: false, maxLength: 100})}
              />
              <br />

              <br />
              <Button type="submit" variant="outline-dark">
                Submit
              </Button>{' '}
            </Form>
          
        </Row>
      </Container>
    </div>
  )
}
