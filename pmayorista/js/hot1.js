const contenedor1=document.querySelector(".doc1")
const doc1=document.querySelector(".doc1")
const descargarDoc1=document.querySelector(".descargarDoc1")
const cerrarDoc1=document.querySelector(".cerrarDoc1")
document.addEventListener("DOMContentLoaded", function () {
    const inputOracle = document.getElementById("Oracle");
    const verOracleBtn = document.querySelector(".verOracle");

    inputOracle.addEventListener("change", handleFileSelect);

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
            readExcelFile(file);
        }
    }

    function readExcelFile(file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const numericRows = filterNumericRows(jsonData);
            renderHandsontable(numericRows);
        };
        reader.readAsArrayBuffer(file);
    }

    function filterNumericRows(data) {
        return data.filter(row => !isNaN(row[0]));
    }

    function renderHandsontable(data) {
        const container = document.createElement("div");
        container.id = "handsontable-container1";
        contenedor1.appendChild(container);

        const hot = new Handsontable(container, {
            data: data,
            colHeaders: true,
            rowHeaders: true,
            contextMenu: true,
            columnSorting: true,
            licenseKey: "non-commercial-and-evaluation",
        });

        verOracleBtn.addEventListener("click", function () {
            hot.render();
            doc1.style.opacity="1";
            doc1.style.zIndex="5";
        });
        descargarDoc1.addEventListener('click', function () {
            // Obtener los datos del Handsontable
            const datos2 = hot.getData();
        
            // Verificar si hay datos
            if (datos2) {
                // Crear un nuevo libro de Excel (Workbook)
                const nuevoWorkbook = XLSX.utils.book_new();
                
                // Crear una hoja de cálculo sin títulos
                const nuevaHoja = XLSX.utils.aoa_to_sheet(datos2);
        
                // Agregar la hoja al libro de Excel
                XLSX.utils.book_append_sheet(nuevoWorkbook, nuevaHoja, "Datos Modificados");
        
                // Descargar el archivo Excel
                XLSX.writeFile(nuevoWorkbook, "DatosOracle.xlsx");
            }
        });       
    }
    cerrarDoc1.addEventListener("click",function()
        {
            doc1.style.opacity="0";
            setTimeout(() => {
                doc1.style.zIndex="0";
              }, 1000);
        }) 
});

