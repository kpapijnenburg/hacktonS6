import React from 'react';
import { Chart } from 'react-google-charts';
import DataAdapter from '../util/DataAdapter';

const ResearchChart = () => {
    const adapter = new DataAdapter()
    const tweets = adapter.loadAsJson()

    const ratings = tweets.map(item => item.sentiment)

    let neutral = 0;
    let positive = 0;
    let negative = 0;

    ratings.forEach(x => {
        if (x === "Neutral") neutral += 1;
        else if (x === "Positive") positive += 1;
        else if (x === "Negative") negative += 1;
    })

    const data = [
        ["Sentimental", "Total", { role: "style" }],
        ["Positive", positive, "blue"],
        ["Neutral", neutral, "green"],
        ["Negative", negative, "red"],
    ];

    return (
        <div className={"d-flex flex-column vw-100"}>
            <p className={"lead"}>Onderzoeksresultaten</p>
            <Chart
                chartType="ColumnChart"
                data={data}
                width="75%"
                height="400px"
                options={{
                    title: 'Aantal tweets per sentiment',
                    hAxis: {
                        title: 'Sentiment soort'
                    },
                    vAxis: {
                        title: 'Count'
                    },
                    legend: 'none'
                }}
            />
        </div>
    )
}

export default ResearchChart;