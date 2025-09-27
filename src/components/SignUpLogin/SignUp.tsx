import {
  Anchor,
  Button,
  Checkbox,
  CheckIcon,
  Group,
  PasswordInput,
  Radio,
  rem,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const from = {
  name:"",
  email:"",
  password:"",
  confirmPassword:"",
  accountType:"APPLICANT",
}

const SignUp = () => {
  const [value, setValue] = useState("react");
  const [data,setData]=useState(from)
  const handleChange=(event:any)=>{
    console.log(event.target)
  }
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput value={data.name} onChange={handleChange} withAsterisk label="Full Name" placeholder="Your Name" />
      <TextInput value={data.email}
        withAsterisk
        onChange={handleChange}
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        placeholder="Your email"
      />
      <PasswordInput value={data.password}
        withAsterisk
        onChange={handleChange}
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Password"
        placeholder="Password"
      />
      <PasswordInput value={data.confirmPassword}
        withAsterisk
        onChange={handleChange}
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Confirm Password"
        placeholder="Confirm Password"
      />
      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>Terms & Conditions</Anchor>
          </>
        }
      />
      <Button autoContrast variant="filled">
        SignUp
      </Button>
      <div className="mx-auto">
        Have an account?
        <Link to="/login" className="text-bright-sun-400 hover:underline">
          Login
        </Link>{" "}
      </div>
    </div>
  );
};

export default SignUp;
