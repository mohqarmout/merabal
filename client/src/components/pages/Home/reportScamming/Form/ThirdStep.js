import React from "react";
import { Form as FormAnt, Checkbox, Input, Button, notification } from "antd";
import PropTypes from "prop-types";

import styles from "./form.module.css";
const { TextArea } = Input;
const ThirdStep = props => {
  const {
    submittedValues,
    handleBack,
    handleConfirm,
    stepThreeValues: { extraInfo, shareData },
    form: { getFieldDecorator, validateFields, getFieldsValue },
    enterLoading,
    loading
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    const openNotificationWithIcon = (type, message) => {
      notification[type]({
        message,
        duration: 3
      });
    };

    validateFields((err, values) => {
      if (!err) {
        if (values.shareData === false)
          openNotificationWithIcon(
            "info",
            "Please agree to share this data to continue"
          );
        else {
          enterLoading();
          handleConfirm(values);
        }
      }
    });
  };

  const storeValues = () => {
    const values = getFieldsValue();
    submittedValues(values);
    handleBack();
  };

  return (
    <FormAnt onSubmit={handleSubmit} layout="vertical">
      <>
        <FormAnt.Item
          className={styles.item}
          label={
            <span>
              Additional information might help
              <span style={{ color: "#888" }}> (Optional)</span>
            </span>
          }
        >
          {getFieldDecorator("extraInfo", {
            rules: [
              {
                required: false
              }
            ],
            initialValue: extraInfo || undefined
          })(
            <TextArea
              rows={3}
              placeholder="extra information you think it will be helpful"
            />
          )}
        </FormAnt.Item>

        <FormAnt.Item>
          {getFieldDecorator("shareData", {
            rules: [
              {
                required: true,
                message: "You must agree to share your data with us"
              }
            ],
            initialValue: shareData,
            valuePropName: "checked"
          })(
            <Checkbox required>
              I consent to share Infroamtion with Magic touch team and their
              local community partners
            </Checkbox>
          )}
        </FormAnt.Item>

        <FormAnt.Item>
          <Button
            htmlType="submit"
            className={`prevButton ${styles.white} ${styles["ml-0"]}`}
            onClick={storeValues}
            size="large"
          >
            Previous
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
            className="nextButton"
            size="large"
            loading={loading}
          >
            Submit
          </Button>
        </FormAnt.Item>
      </>
    </FormAnt>
  );
};

ThirdStep.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  submittedValues: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  enterLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  stepThreeValues: PropTypes.objectOf(PropTypes.any).isRequired
};

const WrappedStep = FormAnt.create({ name: "validate_other" })(ThirdStep);

export default WrappedStep;
