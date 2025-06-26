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

  const properties = [
    {
      id: 1,
      name: 'Sunset Villa',
      type: '010',
      type_name: 'Residential',
      contract_type: '010',
      contract_type_name: 'Investment',
      local_authority_id: 'LA001',
      street: '123 Ocean Drive',
      city: 'Miami',
      country: 'USA',
      latitude: 25.7617,
      longitude: -80.1918,
      gps_coordinates: [25.7617, -80.1918],
      units: 3,
      created_at: '2024-12-01T12:00:00Z',
      amenities: [
        { id: 1, name: 'Pool' },
        { id: 2, name: 'Gym' },
      ],
      images: [],
    },
    {
      id: 2,
      name: 'Tech Park Tower',
      type: '020',
      type_name: 'Commercial',
      contract_type: '020',
      contract_type_name: 'Management',
      local_authority_id: 'LA002',
      street: '456 Innovation Blvd',
      city: 'San Francisco',
      country: 'USA',
      latitude: 37.7749,
      longitude: -122.4194,
      gps_coordinates: [37.7749, -122.4194],
      units: 10,
      created_at: '2024-11-21T15:30:00Z',
      amenities: [{ id: 3, name: 'Parking' }],
      images: [],
    },
    {
      id: 3,
      name: 'Green Gardens',
      type: '010',
      type_name: 'Residential',
      contract_type: '030',
      contract_type_name: 'Self',
      local_authority_id: 'LA003',
      street: '789 Eco Lane',
      city: 'Portland',
      country: 'USA',
      latitude: 45.5051,
      longitude: -122.675,
      gps_coordinates: [45.5051, -122.675],
      units: 2,
      created_at: '2024-10-10T08:45:00Z',
      amenities: [{ id: 4, name: 'Garden' }],
      images: [],
    },
    {
      id: 4,
      name: 'Skyline Offices',
      type: '020',
      type_name: 'Commercial',
      contract_type: '010',
      contract_type_name: 'Investment',
      local_authority_id: 'LA004',
      street: '321 Metro Ave',
      city: 'Chicago',
      country: 'USA',
      latitude: 41.8781,
      longitude: -87.6298,
      gps_coordinates: [41.8781, -87.6298],
      units: 5,
      created_at: '2024-09-05T14:00:00Z',
      amenities: [{ id: 5, name: 'Elevator' }],
      images: [],
    },
    {
      id: 5,
      name: 'Lakeside Retreat',
      type: '010',
      type_name: 'Residential',
      contract_type: '020',
      contract_type_name: 'Management',
      local_authority_id: 'LA005',
      street: '654 Lakeview Road',
      city: 'Austin',
      country: 'USA',
      latitude: 30.2672,
      longitude: -97.7431,
      gps_coordinates: [30.2672, -97.7431],
      units: 4,
      created_at: '2024-08-15T09:30:00Z',
      amenities: [{ id: 6, name: 'WiFi' }],
      images: [],
    },
  ];

  mock.onGet('/api/property-management/properties/').reply(() => {
    return [200, properties];
  });

  mock.onGet(/\/api\/property-management\/properties\/\d+\//).reply(config => {
    const id = config.url?.split('/').filter(Boolean).pop();
    const property = properties.find(p => p.id === Number(id));
    if (property) {
      return [200, property];
    } else {
      return [404, { message: 'Property not found' }];
    }
  });

  mock.onPost('/api/property-management/properties/').reply(config => {
    const newProperty = JSON.parse(config.data);
    const newId = properties.length + 1;

    const gps_coordinates = newProperty.gps_coordinates || [
      newProperty.latitude,
      newProperty.longitude,
    ];

    const createdProperty = {
      ...newProperty,
      id: newId,
      gps_coordinates,
      created_at: new Date().toISOString(),
    };

    properties.push(createdProperty);

    return [201, createdProperty];
  });

  mock.onDelete(/\/api\/property-management\/properties\/\d+\//).reply(config => {
    const id = config.url?.split('/').filter(Boolean).pop();
    const index = properties.findIndex(p => p.id === Number(id));
    if (index !== -1) {
      properties.splice(index, 1);
      return [204];
    } else {
      return [404, { message: 'Property not found' }];
    }
  });
};
