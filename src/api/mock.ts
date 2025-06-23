import MockAdapter from 'axios-mock-adapter';
import apiClient from './apiClient';

export const setupMockApi = () => {
  const mock = new MockAdapter(apiClient);
  mock.onPost('/api/clients/registration/').reply(config => {
    return [
      200,
      {
        message: 'Client registered successfully!',
        clientId: 'fake-client-id-12345',
      },
    ];
  });

  mock.onPost('/api/token/').reply(config => {
    return [
      200,
      {
        access: 'fake-access-token-12345',
        refresh: 'fake-refresh-token-67890',
      },
    ];
  });

  mock.onPost('/api/token/refresh/').reply(config => {
    return [
      200,
      {
        access: 'new-fake-access-token-99999',
      },
    ];
  });

  mock.onPost('/api/password/reset/').reply(config => {
    const requestData = JSON.parse(config.data);
    console.log('Mocked password reset request:', requestData);

    return [
      200,
      {
        message: 'Password reset email sent successfully!',
      },
    ];
  });

  mock.onPost(new RegExp('/api/password/reset/confirm/')).reply(config => {
    const requestData = JSON.parse(config.data);
    console.log('Mocked password reset confirm request:', requestData);

    return [
      200,
      {
        message: 'Password has been reset successfully!',
      },
    ];
  });

  mock.onPost(new RegExp('/api/users/change-password/')).reply(config => {
    const requestData = JSON.parse(config.data);
    console.log('Mocked change password request:', requestData);

    return [
      200,
      {
        message: 'Password changed successfully!',
      },
    ];
  });

  mock.onPost(new RegExp('/api/users/change-password/')).reply(config => {
    const requestData = JSON.parse(config.data);
    console.log('Mocked change password request:', requestData);

    if (requestData.current_password === 'test1234') {
      return [
        200,
        {
          message: 'Password changed successfully!',
        },
      ];
    } else {
      return [
        400,
        {
          current_password: ['Current password is incorrect.'],
        },
      ];
    }
  });

  mock.onPost(new RegExp('/api/users/email/change/')).reply(config => {
    const requestData = JSON.parse(config.data);
    console.log('Mocked change email request:', requestData);

    if (requestData.new_email?.includes('@')) {
      return [200, { message: 'Email change request submitted! Please confirm via OTP.' }];
    } else {
      return [400, { new_email: ['Invalid email address.'] }];
    }
  });

  mock.onPost(new RegExp('/api/users/email/change/confirm/')).reply(config => {
    const requestData = JSON.parse(config.data);
    console.log('Mocked confirm email change request:', requestData);

    if (requestData.otp === '123456') {
      return [200, { message: 'Email change confirmed!' }];
    } else {
      return [400, { otp: ['Invalid OTP, please try again.'] }];
    }
  });
};
