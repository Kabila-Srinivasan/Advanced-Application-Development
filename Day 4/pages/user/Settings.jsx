
import { Box, Flex } from "@chakra-ui/react";
import { Persona, Form, FormLayout, Field, SubmitButton } from "@saas-ui/react";
import Pwd from "./Pwd";

const UserSettings = () => {
  const {
    password,
    confirmPassword,
    isMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = Pwd();

  const handleSubmit = (event) => {
    console.log(event);
    // Handle form submission here
  };

  return (
    <>
      <Box padding="8">
        <Flex alignItems="start" marginBlock="4">
          <Persona
            name="Velda Kiara"
            secondaryLabel="Pro Plan"
            size="lg"
            letterSpacing="0.78px"
          />
        </Flex>

        <Form
          onSubmit={handleSubmit}
          defaultValues={{
            firstName: "Velda",
            lastName: "Kiara",
            email: "velda@gmail.com",
          }}
        >
          <FormLayout>
            <Field
              backgroundColor="white"
              textColor="black"
              name="firstName"
              label="First Name"
              width="20.5em"
              rules={{ required: true }}
            />
            <Field
              backgroundColor="white"
              textColor="black"
              name="lastName"
              label="Last Name"
              width="20.5em"
              rules={{ required: true }}
            />
            <Field
              backgroundColor="white"
              textColor="black"
              name="email"
              label="Email"
              type="email"
              rules={{ required: true }}
              width="20.5em"
            />
            <Field
              fontFamily="mono"
              backgroundColor="white"
              textColor="black"
              type="password"
              name="password"
              label=" New Password"
              value={password}
              width="18em"
              rules={{ required: true }}
              onChange={handlePasswordChange}
            />
            <Field
              fontFamily="mono"
              backgroundColor="white"
              textColor="black"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              width="18em"
              rules={{ required: true }}
              onChange={handleConfirmPasswordChange}
            />
            {!isMatch && <p className="highlight">Passwords do not match</p>}
            <SubmitButton marginBlockStart="10px" disableIfInvalid>
              Save
            </SubmitButton>
          </FormLayout>
        </Form>
      </Box>
    </>
  );
};

export default UserSettings;