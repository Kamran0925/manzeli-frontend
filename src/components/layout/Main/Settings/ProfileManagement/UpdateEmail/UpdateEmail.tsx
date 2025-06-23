import { Typography, Box } from '@mui/material';
import InputField from '../../../../../shared/InputField/InputField';
import classNames from 'classnames';
import {
  collectFormErrors,
  displayError,
  FormFieldState,
  validate,
} from '../../../../../../utils/validationHelpers';
import { useEffect, useState } from 'react';
import Error from '../../../../../shared/Error/Error';
import { changeEmail, ChangeEmailData } from '../../../../../../api/auth';
import styles from './UpdateEmail.module.css';

interface UpdateEmailProps {
  isSubmit: boolean;
  setIsSubmit: (value: boolean) => void;
  openModal: (value: number) => void;
  setPrimaryAction: (value: boolean) => void;
}

const initialFormState = {
  email: {
    value: '',
    errorMessage: '',
  },
  password: {
    value: '',
    errorMessage: '',
  },
};

const UpdateEmail: React.FC<UpdateEmailProps> = ({
  isSubmit,
  setIsSubmit,
  openModal,
  setPrimaryAction,
}) => {
  const [formState, setFormState] = useState<FormFieldState<string>>(initialFormState);
  const [error, setError] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const { value } = e.target;

    let errorMessage = validate(name, value).errorMessage;
    if (name === 'password' && errorMessage) {
      errorMessage = displayError('password', errorMessage);
    }
    setFormState({
      ...formState,
      [name]: {
        value,
        errorMessage,
      },
    });
  };

  const validateFields = () => {
    const emailError = validate('email', formState.email.value).errorMessage;
    let passwordError = validate('password', formState.password.value).errorMessage;

    if (passwordError) {
      passwordError = displayError('password', passwordError);
    }

    setFormState(prevState => ({
      email: {
        ...prevState.email,
        errorMessage: emailError,
      },
      password: {
        ...prevState.password,
        errorMessage: passwordError,
      },
    }));
  };

  useEffect(() => {
    const handleSubmit = async () => {
      if (isSubmit) {
        validateFields();

        if (collectFormErrors(formState).length > 0) {
          setPrimaryAction(true);
          return;
        }

        const data: ChangeEmailData = {
          new_email: formState.email.value,
          current_password: formState.password.value,
        };

        try {
          await changeEmail(data);
          openModal(1);
        } catch (error: any) {
          setError(Object.values(error?.response?.data || {}));
        }
      }
    };

    handleSubmit();
    setIsSubmit(false);
  }, [isSubmit]);

  useEffect(() => {
    if (collectFormErrors(formState).length === 0) {
      setPrimaryAction(false);
    }
  }, [formState.email.value, formState.password.value]);

  return (
    <Box className={styles.section}>
      <Typography variant="h4" className={styles.infoText}>
        Enter the new email address you want to use.
      </Typography>

      <Box>
        <Box className={styles.field}>
          <Typography className={styles.label}>New Email</Typography>
          <InputField
            name="email"
            type="email"
            placeholder="Enter new email address"
            value={formState.email.value}
            errorMessage=""
            handleChange={e => handleChange(e, 'email')}
            customStyle={{ margin: 0 }}
          />
        </Box>

        <Box className={classNames(styles.field, styles.spacing1)}>
          <Typography className={styles.label}>Password</Typography>
          <InputField
            type="password"
            name="password"
            placeholder="Your password"
            value={formState.password.value}
            errorMessage=""
            handleChange={e => handleChange(e, 'password')}
            customStyle={{ margin: 0 }}
          />
        </Box>

        {(collectFormErrors(formState).length || error.length) > 0 && (
          <Box sx={{ maxWidth: 554, width: '100%' }}>
            <Error messages={[...collectFormErrors(formState), ...error]} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UpdateEmail;
