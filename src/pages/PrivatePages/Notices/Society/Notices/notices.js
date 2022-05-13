import { React, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

import Card from "../../../../../components/Card";
import Input from "../../../../../components/Form/Input";
import Button from "../../../../../components/Button";
import noticesContainer from "../../../../../container/Notices/NoticesContainer";
import TextArea from "../../../../../components/Form/textArea";
import InputError from "../../../../../components/Form/InputError";

import "./notices.css";

const NoticeForm = ({ selectResidentData, setResidentDrop, initialValues }) => {
  const [selected, setSelected] = useState([]);
  const [user, setUser] = useState({
    notice_title: "",
    notice_detail: "",
    residents: [],
  });
  const [error, setError] = useState({
    notice_title_Error: "",
    notice_detail_Error: "",
    residents_Error: "",
    form_Error: "",
  });

  const handleChange = (e) => {
    // console.log(e?.target?.id);
    // console.log(e.target.value);

    if (e?.target?.id === "notice_title") {
      if (e?.target?.value === "" || e?.target?.value === null) {
        setError({ ...error, notice_title_Error: "Title is required" });
      } else {
        setError({ ...error, notice_title_Error: "" });
      }
      setUser({ ...user, notice_title: e.target.value });
    } else if (e?.target?.id === "notice_detail") {
      if (e?.target?.value === "" || e?.target?.value === null) {
        setError({ ...error, notice_detail_Error: "Details are required" });
      } else {
        setError({ ...error, notice_detail_Error: "" });
      }
      setUser({ ...user, notice_detail: e.target.value });
    } else {
      if (e.length === 0) {
        setError({ ...error, residents_Error: "Resident is required" });
      } else {
        setError({ ...error, residents_Error: "" });
      }
      setUser({ ...user, residents: e });
    }
  };

  const handleNotices = (e) => {
    console.log("clicked");

    if (
      user.notice_title !== "" &&
      user.notice_detail !== "" &&
      e.length !== 0
    ) {
      console.log("data here");

      setUser({ notice_title: "", notice_detail: "", residents: "" });
      setError({ error, form_Error: "" });
    } else {
      setError({ error, form_Error: "Fill all fields" });
    }
  };

  const residentsOption = [];
  for (let i = 0; i < selectResidentData.length; i++) {
    const Obj = { value: "", label: "" };
    const newData = selectResidentData[i].resedent;
    Obj.value = newData.id;
    Obj.label = newData.name;
    residentsOption.push(Obj);
  }

  return (
    <Card>
      <h4>Notice</h4>

      <div className="row">
        <div className="col-md-12">
          <Input
            className="bootstyle"
            label="Notice Title"
            margin="normal"
            placeholder="Title"
            id="notice_title"
            name="notice_title"
            value={user.notice_title}
            onChange={handleChange}
          />
          {error?.notice_title_Error && (
            <InputError>{error?.notice_title_Error}</InputError>
          )}
        </div>
        <div className="col-sm-12 mt-3">
          <TextArea
            placeholder="Description"
            name="notice_detail"
            id="notice_detail"
            value={user.notice_detail}
            onChange={handleChange}
          />
          {error?.notice_detail_Error && (
            <InputError>{error?.notice_detail_Error}</InputError>
          )}
        </div>
        <div className="col-md-12 mt-3">
          {/* <pre>{JSON.stringify(selected)}</pre> */}

          <MultiSelect
            className="bootstyle"
            // id="residents"
            // name="residents"
            options={setResidentDrop}
            value={user.residents}
            onChange={handleChange}
            disableSearch={true}
            labelledBy="Select Resident"
          />
          {error.residents_Error && (
            <InputError>{error.residents_Error}</InputError>
          )}
        </div>
      </div>
      {error.form_Error && <InputError>{error.form_Error}</InputError>}

      <div className="row">
        <div className="col-sm-9"></div>
        <div className="col-sm-3">
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 20 }}
            // isLoading={stateLoading}
            size="small"
            click={handleNotices}
          >
            Send Notice
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default noticesContainer(NoticeForm);
