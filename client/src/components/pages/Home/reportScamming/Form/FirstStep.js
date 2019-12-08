import React from 'react';
import { Form as FormAnt, Radio, Select, Input, Button } from 'antd';
import PropTypes, { number } from 'prop-types';

import styles from './form.module.css';

const { Option } = Select;

const { TextArea } = Input;

class FirstStep extends React.Component {
  validateInput = e => {
    const {
      submittedValues,
      handleNext,
      form: { validateFields }
    } = this.props;

    e.preventDefault();

    validateFields((err, values) => {
      const val = { ...values };
      if (!err) {
        submittedValues(val);
        handleNext();
      }
    });
  };

  render() {
    const {
      stepOneValues: { victimName, age, address, phoneNumber },
      form: { getFieldDecorator }
    } = this.props;

    return (
      <FormAnt onSubmit={this.validateInput} layout='vertical'>
        <FormAnt.Item label='Name'>
          {getFieldDecorator('victimName', {
            rules: [
              {
                type: 'string',
                required: true,
                message: 'Please Enter your name'
              }
            ],
            initialValue: victimName
          })(
            <Input placeholder='Enter your name to verify your information' />
          )}
        </FormAnt.Item>

        <FormAnt.Item label='Your Age'>
          {getFieldDecorator('age', {
            rules: [
              {
                required: true,
                message: 'age is a required filed'
              }
            ],
            initialValue: age
          })(<Input placeholder='Must be older than 16' />)}
        </FormAnt.Item>

        <FormAnt.Item
          label={
            <span>
              Would provide us your address
              <span style={{ color: '#888' }}> (Optional)</span>
            </span>
          }
        >
          {getFieldDecorator('address', {
            initialValue: address
          })(<Input placeholder='It will be helpful to send you our staff' />)}
        </FormAnt.Item>

        <FormAnt.Item className={styles.item} label='Enter your phone number'>
          {getFieldDecorator('phoneNumber', {
            rules: [
              {
                required: true
              }
            ],
            initialValue: phoneNumber
          })(<Input placeholder='At least ten digits pheo phone number' />)}
        </FormAnt.Item>

        <FormAnt.Item className='next'>
          <Button type='primary' htmlType='submit' size='large'>
            Next
          </Button>
        </FormAnt.Item>
      </FormAnt>
    );
  }
}

FirstStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  stepOneValues: PropTypes.objectOf(PropTypes.any).isRequired
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(FirstStep);

export default WrappedStep;
