import { React, useContext } from "react";
import "./RecenterButton.css";

import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { MyLocation } from "@mui/icons-material";
import { MapContext } from "../context/MapContext";
import { boundingExtent } from "ol/extent";
import { fromLonLat } from "ol/proj";

const RecenterButton = () => {
    const mapRef = useContext(MapContext);

    const recenterMap = () => {
        if (mapRef.current) {
            const extent = boundingExtent([fromLonLat([-76.17, 41.76])]);
            mapRef.current.ol.getView().fit(extent, {
                duration: 3000,
                maxZoom: 5.5,
            });
        }
    };
    return (
        <Paper className="recenter-button">
            <IconButton onClick={recenterMap}>
                <MyLocation />
            </IconButton>
        </Paper>
    );
};

export default RecenterButton;