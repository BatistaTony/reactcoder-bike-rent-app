import {
  BikeFilterContainer,
  FieldContainer,
  BikeFilterButton,
} from "./styles";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export interface IFilter {
  search: string;
  price: number;
  engine: string;
}

const BIKES_ENGINE = ["todos", "electrica", "mecanica"];

interface BikeFilterProps {
  filter: IFilter;
  handleSearch: () => void;
  handleChange: (event: React.ChangeEvent | SelectChangeEvent<string>) => void;
}

const BikeFilter = ({
  filter,
  handleChange,
  handleSearch,
}: BikeFilterProps) => {
  return (
    <BikeFilterContainer>
      <FieldContainer>
        <div className="field-icon">
          <BiSearchAlt2 />
        </div>
        <TextField
          placeholder="pesquise por nome"
          onChange={handleChange}
          name="search"
          value={filter.search}
          type="search"
        />
      </FieldContainer>
      <FieldContainer>
        <div className="field-icon">
          <BiSearchAlt2 />
        </div>
        <TextField
          placeholder="preço por hora"
          onChange={handleChange}
          type="number"
          name="price"
          value={filter.price}
        />
      </FieldContainer>
      <FieldContainer>
        <div className="field-icon">
          <BiSearchAlt2 />
        </div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Motor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.engine}
            label=""
            name="engine"
            onChange={handleChange}
          >
            {BIKES_ENGINE.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FieldContainer>

      <BikeFilterButton onClick={handleSearch}>Pesquisar</BikeFilterButton>
    </BikeFilterContainer>
  );
};

export default BikeFilter;
