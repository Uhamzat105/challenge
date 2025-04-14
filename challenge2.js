function convertLength(value,fromUnit,toUnit) {
    const unitsInmeters = {
        meter: 1,
        kilometer: 1000,
        mile: 1609.34,
        foot: 0.3048,
        inch: 0.0254
    };
    if (!unitsInmeters[fromUnit] || !unitsInmeters[toUnit]) {
        return "Invalid unit";
    }
    const valueInMeters = value * unitsInmeters[fromUnit];
    const convertValue = valueInMeters / unitsInmeters[toUnit];
    return convertValue;
    }
    console.log(convertlength(10, 'meter','foot'));
