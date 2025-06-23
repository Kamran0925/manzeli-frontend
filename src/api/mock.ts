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

  mock.onGet(new RegExp('/api/platform-admin/subscription-plans/')).reply(() => {
    console.log('Mocked get subscription plans request');

    return [
      200,
      [
        {
          id: 1,
          name: 'Monthly Basic',
          price: '10',
          billing_cycle: '010',
          memo: 'Basic monthly plan',
          created_at: '2025-06-01T10:00:00Z',
          updated_at: '2025-06-10T12:00:00Z',
        },
        {
          id: 2,
          name: 'Monthly Pro',
          price: '20',
          billing_cycle: '010',
          memo: 'Pro monthly plan',
          created_at: '2025-06-01T11:00:00Z',
          updated_at: '2025-06-10T13:00:00Z',
        },
        {
          id: 3,
          name: 'Monthly Enterprise',
          price: '30',
          billing_cycle: '010',
          memo: 'Enterprise monthly plan',
          created_at: '2025-06-01T12:00:00Z',
          updated_at: '2025-06-10T14:00:00Z',
        },
        {
          id: 4,
          name: 'Quarterly Basic',
          price: '25',
          billing_cycle: '020',
          memo: 'Basic quarterly plan',
          created_at: '2025-06-01T10:00:00Z',
          updated_at: '2025-06-10T12:00:00Z',
        },
        {
          id: 5,
          name: 'Quarterly Pro',
          price: '50',
          billing_cycle: '020',
          memo: 'Pro quarterly plan',
          created_at: '2025-06-01T11:00:00Z',
          updated_at: '2025-06-10T13:00:00Z',
        },
        {
          id: 6,
          name: 'Quarterly Enterprise',
          price: '75',
          billing_cycle: '020',
          memo: 'Enterprise quarterly plan',
          created_at: '2025-06-01T12:00:00Z',
          updated_at: '2025-06-10T14:00:00Z',
        },
        {
          id: 7,
          name: 'Yearly Basic',
          price: '100',
          billing_cycle: '030',
          memo: 'Basic yearly plan',
          created_at: '2025-06-01T10:00:00Z',
          updated_at: '2025-06-10T12:00:00Z',
        },
        {
          id: 8,
          name: 'Yearly Pro',
          price: '200',
          billing_cycle: '030',
          memo: 'Pro yearly plan',
          created_at: '2025-06-01T11:00:00Z',
          updated_at: '2025-06-10T13:00:00Z',
        },
        {
          id: 9,
          name: 'Yearly Enterprise',
          price: '300',
          billing_cycle: '030',
          memo: 'Enterprise yearly plan',
          created_at: '2025-06-01T12:00:00Z',
          updated_at: '2025-06-10T14:00:00Z',
        },
      ],
    ];
  });
};
