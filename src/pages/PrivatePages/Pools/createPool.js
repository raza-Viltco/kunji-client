import React from "react";
import { Formik, Form } from "formik";

import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import TextArea from "../../../components/Form/textArea";
import Dropdown from "../../../components/Form/Dropdown";
import createPollContainer from "../../../container/Poll/CreatePollContainer";

const CreatePool = ({ initialValues, createPollHandler }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={createPollHandler}>
      {(props) => (
        <Form>
          {console.log(props)}
          <div
            className="col-sm-12 p-5"
            style={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="col-sm-12">
                  <label className="px-2">
                    <b>Your Question</b>
                  </label>
                  <TextArea
                    className="bootstyle"
                    rows="9"
                    placeholder="Terms and Conditions"
                    id="question"
                    name="question"
                    value={props.values.question}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  ></TextArea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="col-sm-12">
                  <label className="px-2">
                    <b>Option 1</b>
                  </label>
                  <Input
                    className="bootstyle"
                    label="Notice Title"
                    margin="normal"
                    placeholder="option"
                    name="options[0]"
                    id="options[0]"
                    value={props.values.options[0]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </div>
                <div className="col-sm-12 mt-2">
                  <label className="px-2">
                    <b>Option 2</b>
                  </label>
                  <Input
                    className="bootstyle"
                    label="Notice Title"
                    margin="normal"
                    placeholder="option"
                    name="options[1]"
                    id="options[1]"
                    value={props.values.options[1]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </div>
                <div className="col-sm-12 mt-2">
                  <label className="px-2">
                    <b>Option 3</b>
                  </label>
                  <Input
                    className="bootstyle"
                    label="Notice Title"
                    margin="normal"
                    placeholder="option"
                    name="options[2]"
                    id="options[2]"
                    value={props.values.options[2]}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </div>

                <div className="col-sm-12 mt-2">
                  <label className="px-2">
                    <b>Validity</b>
                  </label>
                  <Dropdown
                    className="bootstyle"
                    name="valid_days"
                    id="valid_days"
                    value={props.values.valid_days}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                  >
                    <option>Select validity</option>
                    <option value={7}>7</option>
                    <option value={15}>15</option>
                    <option value={30}>30</option>
                  </Dropdown>
                </div>

                <div className="row">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-4"></div>
                  <div className="col-sm-4">
                    <div className="col-sm-12 mt-2">
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                        size="small"
                      >
                        Create Poll
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default createPollContainer(CreatePool);
