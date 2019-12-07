import React from 'react';
import { Form as FormAnt, Button, Upload, Icon, Input, Select } from 'antd';

import PropTypes from 'prop-types';

import styles from './form.module.css';

const { Option } = Select;

const { TextArea } = Input;

const years = [];
for (let year = 2019; year >= 2000; year -= 1) {
  years.push(year);
}

const SecondStep = props => {
  const {
    submittedValues,
    handleNext,
    handleBack,
    stepTwoValues: { emptyPeriod, extraInfo, preferredUse, thumbnail },
    form: { getFieldDecorator, validateFields, getFieldsValue },
  } = props;

  // fire after submit ==> AKA next button
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

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <FormAnt onSubmit={validateInput} layout="vertical">
      <FormAnt.Item
        className={styles.item}
        label={<span>Since when has it been empty?</span>}
      >
        {getFieldDecorator('emptyPeriod', {
          rules: [
            {
              required: true,
              message: 'Please specify how long it has been empty',
            },
          ],
          initialValue: emptyPeriod,
        })(
          <Select
            showSearch
            placeholder="Approximately. Feel free to take a guess."
          >
            {years.map(year => (
              <Option value={`${year} `} key={year}>
                {year}
              </Option>
            ))}
          </Select>,
        )}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            Other information ?
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('extraInfo', {
          rules: [{ required: false, message: 'Please add extra information' }],
          initialValue: extraInfo,
        })(
          <TextArea
            rows={3}
            placeholder="E.g. Broken window on first floor, corner street unit, compulsory purchased at some point, previously tried to contact owner."
          />,
        )}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            What would you like it to be used for?
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('preferredUse', {
          rules: [{ required: false, message: 'Please add the prefered use' }],
          initialValue: preferredUse,
        })(
          <TextArea
            rows={3}
            placeholder="E.g. health centre, meeting space, cafe."
          />,
        )}
      </FormAnt.Item>
      <FormAnt.Item
        className={styles.item}
        label={
          <span>
            Upload a picture of the building
            <span style={{ color: '#888' }}> (Optional)</span>
          </span>
        }
      >
        {getFieldDecorator('thumbnail', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
          initialValue: thumbnail,
        })(
          <Upload
            name="logo"
            accept="image/*"
            multiple={false}
            customRequest={() => {}}
            listType="picture"
          >
            <Button className={styles.white}>
              <Icon type="upload" /> Picture
            </Button>
          </Upload>,
        )}
      </FormAnt.Item>
      <FormAnt.Item>
        <Button
          className={`prevButton  ${styles.white} ${styles['ml-0']}`}
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
  stepTwoValues: PropTypes.objectOf(PropTypes.any).isRequired,
};

const WrappedStep = FormAnt.create({ name: 'validate_other' })(SecondStep);

export default WrappedStep;
