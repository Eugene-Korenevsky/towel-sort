module.exports = function towelSort(matrix) {
    if (matrix != null && matrix.length > 0) {
        let arr = [];
        for (let i = 0; i < matrix.length; i++) {
            if ((i + 1) % 2 == 0) {
                for (let b = matrix[i].length - 1; b >= 0; b--) {
                    arr.push(matrix[i][b]);
                }
            } else {
                for (let b = 0; b < matrix[i].length; b++) {
                    arr.push(matrix[i][b]);
                }
            }
        }
        return arr;
    } else return [];
}