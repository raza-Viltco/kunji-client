import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ArgumentScale, Animation } from "@devexpress/dx-react-chart";
import { curveCatmullRom, line } from "d3-shape";
import { scalePoint } from "d3-scale";

import { energyConsumption as data } from "./dashboardGraphData";

const PREFIX = "Demo";

const classes = {
  title: `${PREFIX}-title`,
  chart: `${PREFIX}-chart`,
};

const Line = (props) => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

const StyledDiv = styled("div")(() => ({
  [`&.${classes.title}`]: {
    textAlign: "center",
    width: "100%",
    marginBottom: "10px",
  },
}));

const Text = ({ text }) => {
  const [mainText, subText] = text.split("\\n");
  return (
    <StyledDiv className={classes.title}>
      <Typography component="h3" variant="h5">
        {mainText}
      </Typography>
      <Typography variant="subtitle1">{subText}</Typography>
    </StyledDiv>
  );
};

const Root = (props) => (
  <Legend.Root
    {...props}
    sx={{ display: "flex", margin: "auto", flexDirection: "row" }}
  />
);
const Label = (props) => (
  <Legend.Label {...props} sx={{ mb: 1, whiteSpace: "nowrap" }} />
);
const Item = (props) => (
  <Legend.Item {...props} sx={{ flexDirection: "column-reverse" }} />
);

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: "30px",
  },
}));

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper className="mt-4">
        <StyledChart data={chartData} className={classes.chart}>
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="
            DHA"
            valueField="hydro"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Paragon"
            valueField="oil"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Bahria"
            valueField="gas"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Garisson"
            valueField="coal"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Model Town"
            valueField="nuclear"
            argumentField="country"
            seriesComponent={Line}
          />
          <Legend
            position="bottom"
            rootComponent={Root}
            itemComponent={Item}
            labelComponent={Label}
          />
          <Title
            text="Society Managemet"
            textComponent={Text}
          />
          <Animation />
        </StyledChart>
      </Paper>
    );
  }
}
