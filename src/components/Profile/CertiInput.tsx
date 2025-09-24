import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { Button, TextInput } from "@mantine/core";
import { fields } from "../../Data/PostJob";
import { MonthPickerInput } from "@mantine/dates";
import { useSet } from "@mantine/hooks";

const CertiInput = (props: any) => {
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  const select = fields;
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="title" withAsterisk placeholder="Enter title" />
        <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          maxDate={new Date()}
          type="default"
          label="Issue date"
          placeholder="Pick date"
          value={issueDate}
          onChange={(date) => setIssueDate(date as Date | null)}
        />
        <TextInput label="Certificate ID" withAsterisk placeholder="Enter ID" />
      </div>
      <div className="flex gap-5">
        <Button
          onClick={() => props.setEdit(false)}
          color="brightSun.4"
          variant="outline"
        >
          Save
        </Button>
        <Button
          color="red.8"
          onClick={() => props.setEdit(false)}
          variant="light"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
