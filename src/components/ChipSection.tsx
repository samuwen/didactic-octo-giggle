import React from "react";
import { Chip, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Tag {
  name: string;
  ordinal?: number;
}

const useStyles = makeStyles({
  chipz: {
    marginBottom: "1rem",
  },
});

const ChipSection = (props: { tags: Tag[] }) => {
  const tags = props.tags;
  const handleChipClick = (_: React.MouseEvent, index: number) => {
    console.log(tags[index].name);
  };
  const classes = useStyles();

  return (
    <Container className={classes.chipz}>
      <div>
        {tags.map((t, i) => {
          return (
            <Chip
              variant="outlined"
              label={t.name}
              onClick={(evt) => handleChipClick(evt, i)}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ChipSection;
