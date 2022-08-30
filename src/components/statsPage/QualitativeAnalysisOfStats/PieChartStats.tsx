
import {
    PieChart
} from "react-minimal-pie-chart"
import { PieChartDataProps } from "../../../typesDef"






export const PieChartStats = ({
    PieChartData,
}:PieChartDataProps) => {
    return <div>
        <PieChart
            style={{
                width:"180px",
                height:"180px"
            }}
            animate={true}
            animationDuration={1000}
            data={PieChartData}
            labelStyle={{
                fontSize: "5px",
                fill: "#000"
            }}
            labelPosition={60}

        />
    </div>
}