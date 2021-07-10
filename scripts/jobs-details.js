var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

$(document).ready(function() {
    $.getJSON("data/jobs.json", function(data) {
        
        var jobs = [];
        $.each(data, function(index, value) {
            jobs.push(value)
        })

        console.log('hello')
    
        var jobId = getUrlParameter('jobId');


        var table = document.createElement("table")
        var tableHeader = document.createElement("th")

        for(let job of jobs) {
            if(job['id'] == jobId) {
                
                var headerMain = document.createElement('p')
                headerMain.innerHTML = "Role : " + job['title']

                var headerCompany = document.createElement('p')
                headerCompany.innerHTML = "Company : " + job['company']

                var headerLocation = document.createElement('p')
                headerLocation.innerHTML = "Location : "+job['location']

                var headerCategory = document.createElement('p')
                headerCategory.innerHTML = "Category : "+job['category']

                var headerSalary = document.createElement('p')
                headerSalary.innerHTML = "Salary : "+job['salary']

                var headerAboutCompany = document.createElement('p')
                headerAboutCompany.innerHTML = "About company : "+job['about-company']

                var headerDetails = document.createElement('p')
                headerDetails.innerHTML = "Details : "+job['details']

                var headerDescription = document.createElement('p')
                headerDescription.innerHTML = "Description : "+job['description']

                var applyButton = document.createElement('button')
                applyButton.textContent = 'Apply for this job'
                applyButton.style.color = 'red'
                // applyButton.style.backgroundColor = "white"
                applyButton.addEventListener('click', applyJob)

                tableHeader.appendChild(headerMain)
                tableHeader.appendChild(headerCompany)
                tableHeader.appendChild(headerLocation)
                tableHeader.appendChild(headerSalary)
                tableHeader.appendChild(headerCategory)
                tableHeader.appendChild(headerDetails)
                tableHeader.appendChild(headerDescription)
                tableHeader.appendChild(headerAboutCompany)
                tableHeader.appendChild(applyButton)

                var tableRow = table.insertRow(-1)
                tableRow.appendChild(tableHeader)

            }
        }

        function applyJob() {
            location.href = "apply-job.html"
        }
        
        
       
        var pTag = document.createElement('p')
        pTag.innerHTML = jobId

        var divContainer = document.getElementById("show-jobs-details")
        divContainer.innerHTML = "";
        divContainer.appendChild(table)
        console.log('hello')

    }).fail(function() {
        console.log("error while retrieving the jobs from server")
    })
});