const formatDuration = (duration: number) => {
    const splited = duration.toFixed(2).toString().split(".");
    const minutes = splited[0].padStart(2, "0")
    const seconds = splited[1].padStart(2, "0")
    return `${minutes}:${seconds}`;
}

const secondsToMinutes = (secondsDuration: number) => {
    const minutes = Math.floor(secondsDuration / 60);
    const seconds = Math.floor(secondsDuration % 60);
    const result = parseFloat(`${minutes}.${seconds.toString().padStart(2, "0")}`);
    return result;
}

export { formatDuration, secondsToMinutes }