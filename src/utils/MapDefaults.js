export const getCenter = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;
    if (ratio < 1) return mobilecenter;
    return desktopcenter;
};

export const getZoom = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = width / height;
    if (ratio < 2 / 3) return 4; // Smaller devices
    if (ratio < 4 / 3) return 4.5; // Medium devices
    return 5.7; // Larger devices (default)
};
