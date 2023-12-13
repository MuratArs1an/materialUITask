import * as React from "react";
import Title from "./Title";
import {ResponsiveContainer } from "recharts";
import { PieChart } from '@mui/x-charts/PieChart';
import { Grid, Typography } from "@mui/material";

export default function Chart(props) {
    return (
        <React.Fragment>
            <Grid item xs={12} md={4} lg={4}>
                <Title>{props.text}</Title>
                <Typography>{props.rate}</Typography>
            </Grid>
            <ResponsiveContainer>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 10 },
                                { id: 1, value: 15 },
                                { id: 2, value: 20 },
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />
            </ResponsiveContainer>
        </React.Fragment>
    );
}
