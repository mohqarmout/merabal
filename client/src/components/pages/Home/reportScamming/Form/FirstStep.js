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
        if (!val.isOwnerLocal) val.isOwnerLocal = 'N/A';
        submittedValues(val);
        handleNext();
      }
    });
  };

  render() {
    const {
      stepOneValues: { victimName, idNumber, ideaAboutScammer, extraInfo },
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

        <FormAnt.Item label='ID Number'>
          {getFieldDecorator('idNumber', {
            rules: [
              {
                required: true,
                message: 'Please Enter a correct ID '
              }
            ],
            initialValue: idNumber
          })(<Input placeholder='Please Enter your ID' />)}
        </FormAnt.Item>

        <FormAnt.Item label='Do have an idea about the scammer' hasFeedback>
          {getFieldDecorator('ideaAboutScammer', {
            rules: [{ required: true, message: 'Please select the an Item' }],
            initialValue: ideaAboutScammer
          })(
            <Select placeholder='What was the building used for'>
              <Option value='yes and I am suer'>yes and I am suer</Option>
              <Option value='maybe, I might know'>maybe, I might know</Option>
              <Option value='N/A'>I don&apos;t know</Option>
            </Select>
          )}
        </FormAnt.Item>

        <FormAnt.Item
          className={styles.item}
          label={
            <span>
              Additional information might help
              <span style={{ color: '#888' }}> (Optional)</span>
            </span>
          }
        >
          {getFieldDecorator('extraInfo', {
            rules: [
              {
                required: false
              }
            ],
            initialValue: extraInfo || undefined
          })(
            <TextArea
              rows={3}
              placeholder='extra information you think it will be helpful'
            />
          )}
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
