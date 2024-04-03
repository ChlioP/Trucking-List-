document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
        // URL of the JSON file
        var jsonUrl = "truckinglist.json";
        fetch(jsonUrl)
            .then(function(response) {
                // Check if the response is successful
                if (response.ok) {
                    // Parse the JSON response
                    return response.json();
                }
                // If response is not successful, throw an error
                throw new Error('Network response was not ok.');
            })
            .then(function(data) {
                // Process the JSON data and generate HTML table
                displayTruckingCompanies(data);
            })
            .catch(function(error) {
                // Display an error message if fetch fails
                alert('Error fetching JSON data: ' + error.message);
            });
    });

    // Function to generate and display the HTML table
    function displayTruckingCompanies(data) {
        // Access the table container element
        var tableContainer = document.getElementById('tableContainer');

        // Create a table element
        var table = document.createElement('table');

        // Create table header row
        var headerRow = table.insertRow();
        data.Mainline.Table.Header.Data.forEach(function(header) {
            var th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        data.Mainline.Table.Row.forEach(function(rowData) {
        var tr = table.insertRow();
        Object.keys(rowData).forEach(function(key) {
            var td = tr.insertCell();
            if (key === 'Hubs') {
                // Handle nested data for Hubs
                var hubs = rowData[key].Hub;
                var hubInfo = hubs.join('\n'); // Join array elements with newline
                td.textContent = hubInfo;
            } else {
                td.textContent = rowData[key];
            }
            });
        });

        // Create a new document and append the table to it
    var newWindow = window.open();
    newWindow.document.write('<html><head><title>Trucking Companies</title></head><body>');
    newWindow.document.write('<h1>Trucking Companies</h1>');
    newWindow.document.write(table.outerHTML);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    }
});
