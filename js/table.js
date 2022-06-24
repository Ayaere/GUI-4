//prevent submission of the form so the page does not reload, but the validation works.
window.addEventListener('load', function() {
    document.getElementById('tablegen').addEventListener('submit', function(e) {
        e.preventDefault();
    })
});

  //jQuery validation
  //adding swap validation
$(function() {
  $("form[name='tablegen']").validate({
    errorElement: "div",
    errorClass: "form-error",
    rules: {
      lowerBound1: {
        required: true,
        lessThan: upperBound1 && 51,
        greaterThan: -51
      },
      upperBound1: {
        required: true,
        greaterThan: lowerBound1 && -51,
        lessThan: 51
      },
      lowerBound2: {
        required: true,
        lessThan: upperBound2 && 51,
        greaterThan: -51
      },
      upperBound2: {
        required: true,
        greaterThan: lowerBound2 && -51,
        lessThan: 51
      }
    },
    //error messages
    messages: {
      lowerBound1: {
        required: "Please enter a lower bound",
        lessThan: "Please enter a value less than your upper bound and less than or equal to 50",
        greaterThan: "Please enter a value greater than or equal to -50"
      },
      upperBound1: {
        required: "Please enter an upper bound",
        greaterThan: "Please enter a value greater than your lower bound greater than or equal -50",
        lessThan: "Please enter a value less than or equal to 50"
      },
      lowerBound2: {
        required: "Please enter a lower bound",
        lessThan: "Please enter a value less than your upper bound and less than 50",
        greaterThan: "Please enter a value greater than or equal to -50"
      },
      upperBound2: {
        required: "Please enter an upper bound",
        greaterThan: "Please enter a value greater than your lower bound greater than or equal -50",
        lessThan: "Please enter a value less than or equal to 50"
      }
    },
    submitHandler:function(form) {
      form.submit();
    }
  });
});

//getting the input from the button
document.getElementById('generate').addEventListener('click', generateTable);
function generateTable() {
    $('#multTable tr').remove();
    var tMin = document.querySelectorAll('input')[0].value;  //top min value
    var tMax = document.querySelectorAll('input')[1].value;  //top max value
    var bMin = document.querySelectorAll('input')[2].value;  //bottom min value
    var bMax = document.querySelectorAll('input')[3].value;  //bottom max value

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement('table');
    const tblBody = document.createElement('tbody');
    const tblhead = document.createElement('thead');

    tbl.classList.add('table', 'table-sm', 'align-middle', 'table-bordered', 'table-striped-columns');
    tblhead.classList.add('table-dark', 'table-borderless');
    for (let row = bMin - 1; row <= bMax; row++) {
        const irow = document.createElement('tr');
        //generating the columns
        for (let col = tMin - 1; col <= tMax; col++) {
            const cell = document.createElement('td');
            if (row == bMin - 1) {
                cell.classList.add('table-dark');
                const cellText = document.createTextNode(col);
                cell.appendChild(cellText);
                irow.appendChild(cell);
            } else if (col == tMin - 1) {
                cell.classList.add('table-dark');
                const cellText = document.createTextNode(row);
                cell.appendChild(cellText);
                irow.appendChild(cell);
            } else {
                const cellText = document.createTextNode((col * row));
                cell.appendChild(cellText);
                irow.appendChild(cell);
            }
    }
    tblBody.appendChild(irow);
}
tbl.appendChild(tblBody);
document.getElementById('multTable').appendChild(tbl);
}
