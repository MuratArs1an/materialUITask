import React, { useContext } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Grid, Typography } from "@mui/material";
import Title from "./Title";
import TaskContext from "./TaskContext";

const Chart = (props) => {
    const { completedTask, totalTask, ongoingTask, nextTask } = useContext(TaskContext);

    // Use the values based on the chart type
    let value, label, color;
    if (props.text === "Completed Projects") {
        value = completedTask;
        label = "Completed";
        color = "#82ca9d"; // Green color for Completed
    } else if (props.text === "Ongoing Projects") {
        value = ongoingTask;
        label = "Ongoing";
        color = "#ffc658"; // Yellow color for Ongoing
    } else if (props.text === "Next Projects") {
        value = nextTask;
        label = "Next";
        color = "#8884d8"; // Purple color for Next
    }

    return (
        <React.Fragment>
            <Grid item xs={12} md={8} lg={8}>
                <Title>{props.text}</Title>
                <Typography>{value}</Typography>
            </Grid>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie
                        data={[{ name: label, value }, { name: "Total", value: totalTask - value }]}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                    >
                        {/* Customize colors for each segment */}
                        <Cell key={label} fill={color} />
                        <Cell key="Total" fill="#d8d8d8" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
};

export default Chart;
