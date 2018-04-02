
let filename = "";
let url = 'http://localhost:5001';
//let url='http://10.160.64.50/AdminBoardAPI/api/AdminBoard/DownloadFiles?filePath=D:\\ELEKTRA\\AdminBoardAPI\\PrintSampleFiles\\';
fetch(url)
    .then(function (response) {
        response.headers.forEach((val, key) => {
            if (key === "content-disposition")
                filename = val.substring(val.indexOf("filename=") + 9);
        })

        return response.blob();

    })
    .then(function (response) {
        console.log(response);
        var blob = new Blob([response], { type: "application/pdf" });
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.style = "display:none";
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }, 100)
    });





