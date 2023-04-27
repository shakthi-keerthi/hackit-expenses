const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type:'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets:[
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'crimson',
                boredrWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: ' rgb(6, 186, 222)',
                boredrWidth: 2
            },

        ]
    },
    options: {
        responsive: true 
    }
})

// show or hide sidebar
const menuBtn = document.querySelector('#menubtn');
const closeBtn = document.querySelector('#closebtn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', ()=> {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', ()=> {
    sidebar.style.display = 'none';
})


//change theme
const themeBtn = document.querySelector('.themebtn');
themeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('darktheme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');

})

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

