import React from "react";
import { Form as FormAnt, Button, Input, Select } from "antd";

import PropTypes from "prop-types";

import styles from "./form.module.css";
const { Option } = Select;

const { TextArea } = Input;

const SecondStep = props => {
  const {
    submittedValues,
    handleNext,
    handleBack,
    stepTwoValues: { email, idNumber, problem, ideaAboutScammer },
    form: { getFieldDecorator, validateFields, getFieldsValue }
  } = props;

  // fires after submit ==> AKA next button
  const validateInput = e => {
    e.preventDefault();
    validateFields((err, values) => {
      const val = { ...values };
      if (!err) {
        submittedValues(val);
        handleNext();
      }
    });
  };
  // for prev button
  const storeValues = () => {
    const values = getFieldsValue();
    submittedValues(values);
    handleBack();
  };

  return (
    <FormAnt onSubmit={validateInput} layout="vertical">
      <FormAnt.Item label="ID Number">
        {getFieldDecorator("idNumber", {
          rules: [
            {
              required: true,
              message: "Please Enter a correct ID "
            }
          ],
          initialValue: idNumber
        })(<Input placeholder="Please Enter at least 10 digits" />)}
      </FormAnt.Item>

      <FormAnt.Item label="Email">
        {getFieldDecorator("email", {
          rules: [
            {
              required: true,
              message: "Please Enter a coorect Email",
              type: "email"
            }
          ],
          initialValue: email
        })(<Input placeholder="Please Enter your Email" />)}
      </FormAnt.Item>

      <FormAnt.Item className={styles.item} label="problem statement">
        {getFieldDecorator("problem", {
          rules: [
            {
              required: true,
              message: "Give us an idea how you got blackmailed"
            }
          ],
          initialValue: problem
        })(
          <TextArea
            rows={3}
            placeholder="tell us about your stuation to help you"
          />
        )}
      </FormAnt.Item>
      <FormAnt.Item label="Do have an idea about the scammer" hasFeedback>
        {getFieldDecorator("ideaAboutScammer", {
          rules: [{ required: true, message: "Please select the an Item" }],
          initialValue: ideaAboutScammer
        })(
          <Select placeholder="What was the building used for">
            <Option value="yes and I am suer">yes and I am suer</Option>
            <Option value="maybe, I might know">maybe, I might know</Option>
            <Option value="N/A">I don&apos;t know</Option>
          </Select>
        )}
      </FormAnt.Item>

      <FormAnt.Item>
        <Button
          className={`prevButton  ${styles.white} ${styles["ml-0"]}`}
          onClick={storeValues}
          size="large"
        >
          Previous
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={validateInput}
          className="nextButton"
        >
          Next
        </Button>
      </FormAnt.Item>
    </FormAnt>
  );
};

SecondStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  stepTwoValues: PropTypes.objectOf(PropTypes.any).isRequired
};

const WrappedStep = FormAnt.create({ name: "validate_other" })(SecondStep);

export default WrappedStep;
