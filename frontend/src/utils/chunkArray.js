const chunkArray = (arr) => {
    const chunkedArr = [];
    const maxRows = Math.max(Math.ceil(arr.length / 3));
    for (let i = 0; i < maxRows; i++) {
        const row = [];
        for (let j = i; j < arr.length; j += maxRows) {
            row.push(arr[j]);
        }
        chunkedArr.push(row);
    }
    return chunkedArr;
}

export default chunkArray;