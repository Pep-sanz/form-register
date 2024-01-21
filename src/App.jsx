import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import { FormErrorMessage } from "@chakra-ui/react";
import * as yup from "yup";
function App() {
  const registerUsers = () => {
    alert("kamu berhasil melakukan registrasi");
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: registerUsers,
    validationSchema: yup.object().shape({
      userName: yup.string().required("masukan 3-15 karakter").min(3).max(15),
      email: yup.string().required("email wajib di isi").email(),
      password: yup
        .string()
        .required()
        // eslint-disable-next-line no-useless-escape
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,  "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"),
    }),
  });

  const handleGetValue = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <div className="container">
      <Container className="container-register">
        <Heading mb={10}>Register Users</Heading>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Stack>
              <FormControl isInvalid={formik.errors.userName} >
                <FormLabel>User Name</FormLabel>
                <Input onChange={handleGetValue} type="text" name="userName" />
                <FormErrorMessage>{formik.errors.userName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email}>
                <FormLabel>Email</FormLabel>
                <Input onChange={handleGetValue} type="email" name="email" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.password}>
                <FormLabel>Password</FormLabel>
                <Input onChange={handleGetValue} type="password" name="password" />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <Button type="submit" mt={10}>
                register
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default App;
