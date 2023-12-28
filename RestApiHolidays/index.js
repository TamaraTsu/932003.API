function getHolidays() {
    var year = document.getElementById('year').value;

    var url = `https://calendarific.com/api/v2/holidays?api_key=natLOYbNJ0NOib60KQJVzOftqw70vJca&country=CN&year=${year}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayHolidays(data.response.holidays);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayHolidays(holidays) {
    var holidayList = document.getElementById('holidayList');
    holidayList.innerHTML = '';

    if (holidays.length === 0) {
        holidayList.innerHTML = '<p>No holidays found.</p>';
        return;
    }

    const ul = document.createElement('ul');

    holidays.forEach(holiday => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${holiday.name}</strong> - ${holiday.date.iso}<br>${holiday.description}`;
        ul.appendChild(li);
    });

    holidayList.appendChild(ul);
}
