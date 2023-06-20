import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import * as React from "react";
import {
  Abc,
  Comment,
  FactCheck,
  OpenInBrowserRounded,
  Rule,
  Search,
  TipsAndUpdates,
  Today,
  WhereToVote,
  Work,
} from "@mui/icons-material";
import AnimationIcon from "@mui/icons-material/Animation";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { CalendarIcon, DateRangeIcon } from "@mui/x-date-pickers";

//line of business
const linesOfBusiness = [
  "--Select Line of Business--",
  "Automotive Industry",
  "Information Technology",
  "Goverment Institutions",
  "Insurance and Licensing",
  "Hotel, Travels & Accomodations",
];

//identification types
const identifcationTypes = [
  "--Select Identification Type--",
  "Self Identity",
  "Governent Identity",
  "Private Identity Found",
];

//relationship managers
const relationshipManagers = [
  "--Select Manager--",
  "Chief President",
  "President of the Company",
  "Board of Directors",
];

export default function Corporate({ children }) {
  return (
    <Box>
      <fieldset
        style={{
          height: "100%",
          width: "100%",
          background: "#ffffff",
          alignItems: "center",
        }}
      >
        <legend>Corporate Details</legend>
        <div>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="standard"
          >
            <InputLabel
              htmlFor="standard-adornment-amount"
              required
            >
              Company Name
            </InputLabel>
            <Input
              id="standard-adornment-company"
              startAdornment={
                <InputAdornment position="start">
                  <Work />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            fullWidth
            sx={{ m: 1 }}
          >
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Line of Business
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "line-of-buzz",
                id: "uncontrolled-native",
              }}
            >
              {linesOfBusiness.map((line) => (
                <option value={line}> {line}</option>
              ))}
            </NativeSelect>
          </FormControl>

          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-amount">
              Line of Business Info
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <Abc />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-amount">
              Nature of Business
            </InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <AnimationIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
          >
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Identification Type
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "identificationType",
                id: "uncontrolled-native",
              }}
            >
              {identifcationTypes.map((identifcationType) => (
                <option value={identifcationType}> {identifcationType}</option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>
        <div>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Registration No.
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <FormatListNumberedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Date of Registration
            </InputLabel>
            <Input
              type="date"
              placeholder={"DD/MM/YYYY"}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Registered At
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <WhereToVote />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Registration Office.
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <FactCheck />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Business Started Year.
            </InputLabel>
            <Input
              type="number"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Today />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              No of Employees / Members
            </InputLabel>
            <Input
              type="number"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Rule />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="standard"
          >
            <InputLabel
              htmlFor="standard-adornment-amount"
              required
            >
              Comments
            </InputLabel>
            <Input
              multiline
              rows={2}
              id="standard-adornment-company"
              startAdornment={
                <InputAdornment position="start">
                  <Comment />
                </InputAdornment>
              }
            />
          </FormControl>
          <div>
            <FormControl
              fullWidth
              sx={{ m: 1 }}
              variant="standard"
            >
              <InputLabel
                htmlFor="standard-adornment-amount"
                required
              >
                Website
              </InputLabel>
              <Input
                id="standard-adornment-company"
                startAdornment={
                  <InputAdornment position="start">
                    <OpenInBrowserRounded />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Opened By
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Relationship Manager
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "line-of-buzz",
                id: "uncontrolled-native",
              }}
            >
              {relationshipManagers.map((manager) => (
                <option value={manager}> {manager}</option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              Opened On
            </InputLabel>
            <Input
              type="date"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <CalendarIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ m: 1 }}
          >
            <InputLabel htmlFor="input-with-icon-adornment">
              TIN Number
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <TipsAndUpdates />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </fieldset>
    </Box>
  );
}
