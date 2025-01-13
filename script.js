
        const gridContainer = document.getElementById('grid');
        const daysInJanuary = 19;
        const daysInFebruary = 28;
        const daysInMarch = 28;

        let totalDays = daysInJanuary + daysInFebruary + daysInMarch;

    

        // Create 75 grid items with checkboxes
        for (let i = 0; i < totalDays; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            if (i < daysInJanuary) {
                // January days: 13 to 31
                gridItem.innerHTML = `
                    <input class="checkbox" type="checkbox" data-index="${i}">
                    <p class="date"><b>${i + 13}</b></p>
                    <p class="month">jan</p>
                `;
            } else if (i < daysInJanuary + daysInFebruary) {
                // February days: 1 to 28
                gridItem.innerHTML = `
                    <input class="checkbox" type="checkbox" data-index="${i}">
                    <p class="date"><b>${i - daysInJanuary + 1}</b></p>
                    <p class="month">feb</p>
                `;
            } else {
                // March days: 1 to 26
                gridItem.innerHTML = `
                    <input class="checkbox" type="checkbox" data-index="${i}">
                    <p class="date"><b>${i - daysInJanuary - daysInFebruary + 1}</b></p>
                    <p class="month">mars</p>
                `;
            }

            gridContainer.appendChild(gridItem);
        }

        // Get all the checkboxes
        const checkboxes = document.querySelectorAll('.checkbox');

        // On page load, restore checkbox states from localStorage
        window.onload = function() {
            checkboxes.forEach(checkbox => {
                const index = checkbox.getAttribute('data-index');
                const savedState = localStorage.getItem(`checkboxState-${index}`);
                if (savedState === 'checked') {
                    checkbox.checked = true;
                } else {
                    checkbox.checked = false;
                }
            });
        };

        // Save the checkbox state to localStorage whenever it changes
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() { //'change' listens if the checkbox is being checked (looks all the time no matter what bcuz of the for loop)
                const index = checkbox.getAttribute('data-index');
                if (checkbox.checked) {
                    localStorage.setItem(`checkboxState-${index}`, 'checked');
                } else {
                    localStorage.setItem(`checkboxState-${index}`, 'unchecked');
                }
            });
        });

        checkboxes.forEach(checkbox => {
          const index = checkbox.getAttribute('data-index');
          let state = localStorage.getItem(`checkboxState-${index}`);
            console.log(state);
        });

