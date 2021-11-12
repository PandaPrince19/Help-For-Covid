import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

// Styles
import "./CreateEditHospital.css";

//Assets
import { Autocomplete } from "@material-ui/lab";

const CreateEditHospital = ({ isCreate }) => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    state: "",
    tags: [],
    withoutOx: { remaining: 0, max: 0 },
    withOx: { remaining: 0, max: 0 },
    icuWithoutVents: { remaining: 0, max: 0 },
    icuWithVents: { remaining: 0, max: 0 },
  });

  const [hospType, setHospType] = useState("Private");

  const {
    name,
    city,
    state,
    tags,
    withoutOx,
    withOx,
    icuWithoutVents,
    icuWithVents,
  } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });
  };

  return (
    <form className="createEditHospital" onSubmit={handleSubmit}>
      <h1>{isCreate ? "Create" : "Edit"} Hospital</h1>

      <div className="createEditHospital__fields">
        <TextField
          id="name"
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="city"
          name="city"
          label="City"
          type="text"
          value={city}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          id="state"
          name="state"
          label="State"
          type="text"
          value={state}
          onChange={handleChange}
          style={{ width: "100%" }}
        />

        <FormControl>
          <InputLabel>Hospital Type</InputLabel>
          <Select
            value={hospType}
            onChange={(e) => setHospType(e.target.value)}
          >
            <MenuItem value={"Private"}>Private</MenuItem>
            <MenuItem value={"Government"}>Government</MenuItem>
          </Select>
        </FormControl>
      </div>

      <br />
      <h3>Beds Without Oxygen</h3>
      <div className="createEditHospital__fields">
        <TextField
          id="withoutOxRem"
          label="Remaining "
          type="number"
          value={withoutOx.remaining}
          onChange={(e) =>
            setForm({
              ...form,
              withoutOx: { ...withoutOx, remaining: e.target.value },
            })
          }
          style={{ width: "100%" }}
        />
        <TextField
          id="withoutOxMax"
          label="Maximum "
          type="number"
          value={withoutOx.max}
          onChange={(e) =>
            setForm({
              ...form,
              withoutOx: { ...withoutOx, max: e.target.value },
            })
          }
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <h3>Beds With Oxygen</h3>
      <div className="createEditHospital__fields">
        <TextField
          id="withoutOxRem"
          label="Remaining "
          type="number"
          value={withOx.remaining}
          onChange={(e) =>
            setForm({
              ...form,
              withOx: { ...withOx, remaining: e.target.value },
            })
          }
          style={{ width: "100%" }}
        />
        <TextField
          id="withOxMax"
          label="Maximum "
          type="number"
          value={withOx.max}
          onChange={(e) =>
            setForm({
              ...form,
              withOx: { ...withOx, max: e.target.value },
            })
          }
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <h3>ICU Without Ventilator</h3>
      <div className="createEditHospital__fields">
        <TextField
          id="withoutOxRem"
          label="Remaining "
          type="number"
          value={icuWithoutVents.remaining}
          onChange={(e) =>
            setForm({
              ...form,
              icuWithoutVents: {
                ...icuWithoutVents,
                remaining: e.target.value,
              },
            })
          }
          style={{ width: "100%" }}
        />
        <TextField
          id="withOxMax"
          label="Maximum "
          type="number"
          value={icuWithoutVents.max}
          onChange={(e) =>
            setForm({
              ...form,
              icuWithoutVents: { ...icuWithoutVents, max: e.target.value },
            })
          }
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <h3>ICU With Ventilator</h3>
      <div className="createEditHospital__fields">
        <TextField
          id="withoutOxRem"
          label="Remaining "
          type="number"
          value={icuWithVents.remaining}
          onChange={(e) =>
            setForm({
              ...form,
              icuWithVents: {
                ...icuWithVents,
                remaining: e.target.value,
              },
            })
          }
          style={{ width: "100%" }}
        />
        <TextField
          id="withOxMax"
          label="Maximum "
          type="number"
          value={icuWithVents.max}
          onChange={(e) =>
            setForm({
              ...form,
              icuWithVents: { ...icuWithVents, max: e.target.value },
            })
          }
          style={{ width: "100%" }}
        />
      </div>

      <button type="submit" className="btn btn-warning">
        Submit
      </button>
    </form>
  );
};

export default CreateEditHospital;
