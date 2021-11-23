

$(document).ready(function() {


    $('#imp-sub-btn').click(function() {

        if (validateImpactForm()) {

            var data = $('#addImpact').serialize();

            var myobj = splitFormDatas(data);

            $("#addImpact").trigger("reset");

            console.log(myobj);


            //postValue(myobj);
        }

    });

    $('#bugadd-Id').click(function() {

        if (validateBugForm()) {

            var data = $('#bugaddForm').serialize();

            var myobj = splitFormDatas(data);

            $("#bugaddForm").trigger("reset");

            isertBugRow(myobj);

            //console.log(bugTableValue);

        }
    });

    $('#run-btn-add').click(function() {

        if (validateRunForm()) {

            var data = $('#testRunAddForm').serialize();

            var myobj = splitFormDatas(data);

            $("#testRunAddForm").trigger("reset");

            insertRunRow(myobj);

            var stringvalue = JSON.stringify(myobj);

            console.log(stringvalue);
            
           
            postTestValue(stringvalue);

        }

    });


    function postTestValue(myObj){

        $.ajax({
            url:'',
            data: myObj,
            dataType: "json",
            contentType: "application/json",
            type:'POST',
            
        });
    }


    $('#buil-start-btn').click(function() {

        if (validateBuildForm()) {

            var data = $('#buildaddForm').serialize();

            var myobj = splitFormDatas(data);

            $("#buildaddForm").trigger("reset");

            console.log(myobj);
        }
    });

});



function splitFormDatas(formData) {

    var splitArray = formData.split('&');

    var myObj = {};

    for (let index = 0; index < splitArray.length; index++) {

        let str = splitArray[index].split('=');

        myObj[str[0]] = str[1]

    }

    return myObj;
}

function validateBugForm() {

    let bName = bugForm.bugName;

    let bugTName = bugForm.bugTagName;

    let bugAName = bugForm.bugAssinee;

    if (bName.value.length <= 0) {

        bName.focus();
        return false;

    } else if (bugTName.value.length <= 0) {

        bugTName.focus();
        return false;

    } else if (bugAName.value.length <= 0) {

        bugAName.focus();
        return false;

    } else {
        return true;
    }

}

function validateBuildForm() {

    let buildDependency = buildaddForm.dependencyModule;

    if (buildDependency.value.length <= 0) {

        buildDependency.focus();
        return false;

    } else {
        return true;
    }

}

function selectServerRatio(){
    var serverSelection = testRunForm.serverSelection;

    if(serverSelection.value === 'local')
    {
        serverLocalValue();
    }
    else
    {
        serverPreValue();    
    }
}

function serverLocalValue()
{
    const tableBody = document.getElementById('selectserver');
    let option = '<option class="la-name">projects.localzoho.com</option><option class="la-name">projectsautomation.localzoho.com</option><option class="la-name">projectapi.localzoho.com</option>';
    tableBody.innerHTML = option;
}

function serverPreValue()
{
    const tableBody = document.getElementById('selectserver');
    let option = '<option class="la-name">preprojects.zoho.com</option>';
    tableBody.innerHTML = option;
}

function validateRunForm() {

    let builName = testRunForm.buildName;

    let teName = testRunForm.testerName;

    let moName = testRunForm.moduleName;

    let serverNamevalue = testRunForm.serverName;

    if (builName.value.length <= 0) {

        builName.focus();
        return false;

    } 
    else if (serverNamevalue.value === null){
        
        serverNamevalue.focus();
        return false;

    }else if (teName.value.length <= 0) {

        teName.focus();
        return false;

    } else if (moName.value.length <= 0) {

        moName.focus();
        return false;

    } else {
        return true;
    }

}

function validateImpactForm() {

    let changeName = impactAddForm.changeset;

    let branchName = impactAddForm.branch;

    let buildUrlName = impactAddForm.buildUrl;

    if (changeName.value.length <= 0) {

        changeName.focus();
        return false;

    } else if (branchName.value.length <= 0) {

        branchName.focus();
        return false;

    } else if (buildUrlName.value.length <= 0) {

        buildUrlName.focus();
        return false;

    } else {
        return true;
    }
}

// function addTestRun() {

//     const runForm = document.getElementById('testRunAddForm');

//     if (runForm) {
//         runForm.addEventListener("submit", addTestRunForm);
//         // runForm.reset();
//     }

//     function addTestRunForm(e) {

//         e.preventDefault();

//         const data = new FormData(e.target);

//         const obj = Object.fromEntries(data.entries());

//         console.log({ obj });

//         return obj;

//     }
// }

// function addBug() {

//     const bugForm = document.getElementById('bugaddForm');

//     if (bugForm) {
//         bugForm.addEventListener("submit", addBugForm);
//         bugForm.reset();
//     }

//     function addBugForm(event) {

//         event.preventDefault();

//         const data = new FormData(event.target);

//         const value = Object.fromEntries(data.entries());

//         console.log({ value });

//         return value;

//     }

// }

// function addBuild() {

//     const buildForm = document.getElementById('buildaddForm');

//     if (buildForm) {
//         buildForm.addEventListener("submit", addBuildForm);
//         buildForm.reset();
//     }

//     function addBuildForm(event) {

//         event.preventDefault();

//         const data = new FormData(event.target);

//         const obj = Object.fromEntries(data.entries());

//         obj.buildType = data.getAll("buildType");

//         obj.reportNeed = data.getAll("reportNeed");

//         obj.sdDeploy = data.getAll("sdDeploy");

//         console.log({ obj });

//         return obj;

//     }
// }
