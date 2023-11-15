const contenedor2=document.querySelector(".doc2")
const doc2=document.querySelector(".doc2")
const descargarDoc2=document.querySelector(".descargarDoc2")
const cerrarDoc2=document.querySelector(".cerrarDoc2")
document.addEventListener("DOMContentLoaded", function () {
    const inputStock = document.getElementById("Stock");
    const verStockBtn = document.querySelector(".verStock");

    inputStock.addEventListener("change", handleFileSelect);

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
        container.id = "handsontable-container2";
        contenedor2.appendChild(container);

        const hot = new Handsontable(container, {
            data: data,
            colHeaders: true,
            rowHeaders: true,
            contextMenu: true,
            columnSorting: true,
            licenseKey: "non-commercial-and-evaluation",
        });

        verStockBtn.addEventListener("click", function () {
            hot.render();
            doc2.style.opacity="1";
            doc2.style.zIndex="5";
        });
        descargarDoc2.addEventListener('click', function () {
            // Obtener los datos del Handsontable
            const datos3 = hot.getData();
        
            // Verificar si hay datos
            if (datos3) {
                // Crear un nuevo libro de Excel (Workbook)
                const nuevoWorkbook = XLSX.utils.book_new();
                
                // Crear una hoja de cálculo sin títulos
                const nuevaHoja = XLSX.utils.aoa_to_sheet(datos3);
        
                // Agregar la hoja al libro de Excel
                XLSX.utils.book_append_sheet(nuevoWorkbook, nuevaHoja, "Datos Modificados");
        
                // Descargar el archivo Excel
                XLSX.writeFile(nuevoWorkbook, "DatosStock.xlsx");
            }
        });       
    }

    cerrarDoc2.addEventListener("click",function()
        {
            doc2.style.opacity="0";
            setTimeout(() => {
                doc2.style.zIndex="0";
              }, 1000);
        }) 
});