import React, { Component } from 'react';
import { Steps, notification } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import styles from './form.module.css';

const { Step } = Steps;

const steps = [
  'Personal Information',
  'Extra Information',
  'Additional information',
];

class Form extends Component {
  state = {
    current: 0,
    stepOneValues: {
      victimName: '',
      age: '',
      address: '',
      phoneNumber: '',
    },
    stepTwoValues: {
      email: '',
      idNumber: '',
      problem: '',
      ideaAboutScammer: '',
    },
    stepThreeValues: {
      extraInfo: '',
      receiveNotifications: false,
      shareData: false,
    },
    loading: false,
    iconLoading: false,
  };

  //? for the therd step
  enterLoading = () => {
    this.setState({ loading: true });
  };

  getStepOneValues = values => {
    const { stepOneValues } = this.state;
    this.setState({
      stepOneValues: {
        ...stepOneValues,
        ...values,
      },
    });
  };

  getStepTwoValues = values => {
    const { stepTwoValues } = this.state;
    this.setState({
      stepTwoValues: {
        ...stepTwoValues,
        ...values,
      },
    });
  };

  getStepThreeValues = values => {
    const { stepThreeValues } = this.state;
    this.setState({
      stepThreeValues: {
        ...stepThreeValues,
        ...values,
      },
    });
  };

  //? ThirdStep
  handleConfirm = values => {
    const { stepThreeValues } = this.state;
    this.setState(
      {
        stepThreeValues: {
          ...stepThreeValues,
          ...values,
        },
      },
      () => this.sendData(),
    );
  };

  //? handle submit
  sendData = async () => {
    //? antD
    const { redirectToView } = this.props;
    const openNotificationWithIcon = (type, message) => {
      console.log(type, message);
      notification[type]({
        message,
        duration: 3,
      });
    };

    const {
      stepOneValues,
      stepTwoValues,
      stepThreeValues: { extraInfo },
    } = this.state;

    const formData = {
      ...stepOneValues,
      ...stepTwoValues,
      extraInfo,
    };

    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'string')
        formData[key] = formData[key].trim();
      if (formData[key] === '') delete formData[key];
    });

    try {
      const { status } = await axios.post('/api/v1/enter-victim', formData);
      if (status === 201) {
        openNotificationWithIcon('success', 'Great !! We have got you covered');
        redirectToView();
      }
    } catch ({ response }) {
      this.setState({ loading: false });

      response.status === 409
        ? openNotificationWithIcon('info', 'This info already exist')
        : openNotificationWithIcon(
            'error',
            'Something went wrong! Please try again',
          );
    }
  };

  getStep = () => {
    const {
      stepOneValues,
      stepTwoValues,
      stepThreeValues,
      loading,
      current,
    } = this.state;

    switch (current) {
      case 0:
        return (
          <FirstStep
            stepOneValues={stepOneValues}
            submittedValues={this.getStepOneValues}
            handleNext={() => this.next()}
          />
        );
      case 1:
        return (
          <SecondStep
            stepTwoValues={stepTwoValues}
            submittedValues={this.getStepTwoValues}
            handleNext={() => this.next()}
            handleBack={() => this.prev()}
          />
        );
      case 2:
        return (
          <ThirdStep
            stepThreeValues={stepThreeValues}
            submittedValues={this.getStepThreeValues}
            handleBack={() => this.prev()}
            handleConfirm={this.handleConfirm}
            enterLoading={this.enterLoading}
            loading={loading}
          />
        );
      default:
        return <FirstStep />;
    }
  };

  //? antd
  next() {
    let { current } = { ...this.state };
    current += 1;
    this.setState({ current });
  }

  //? antd
  prev() {
    let { current } = { ...this.state };
    current -= 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className={styles.form}>
        <Steps current={current} className={styles.steps}>
          {steps.map(item => (
            <Step key={item} />
          ))}
        </Steps>
        <div className="steps-content">{this.getStep()}</div>
      </div>
    );
  }
}

Form.propTypes = {
  redirectToView: PropTypes.func.isRequired,
};

export default Form;
