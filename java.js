
const timezones = [
  { country: "Afghanistan - Kabul", timezone: "Asia/Kabul" },
  { country: "Pakistan - Karachi", timezone: "Asia/Karachi" },
  { country: "India - Kolkata", timezone: "Asia/Kolkata" },
  { country: "Bangladesh - Dhaka", timezone: "Asia/Dhaka" },
  { country: "Nepal - Kathmandu", timezone: "Asia/Kathmandu" },
  { country: "China - Shanghai", timezone: "Asia/Shanghai" },
  { country: "Japan - Tokyo", timezone: "Asia/Tokyo" },
  { country: "South Korea - Seoul", timezone: "Asia/Seoul" },
  { country: "Thailand - Bangkok", timezone: "Asia/Bangkok" },
  { country: "Vietnam - Ho Chi Minh", timezone: "Asia/Ho_Chi_Minh" },
  { country: "Singapore", timezone: "Asia/Singapore" },
  { country: "Malaysia - Kuala Lumpur", timezone: "Asia/Kuala_Lumpur" },
  { country: "Indonesia - Jakarta", timezone: "Asia/Jakarta" },
  { country: "Philippines - Manila", timezone: "Asia/Manila" },
  { country: "Hong Kong", timezone: "Asia/Hong_Kong" },
  { country: "Taiwan - Taipei", timezone: "Asia/Taipei" },
  { country: "United Arab Emirates - Dubai", timezone: "Asia/Dubai" },
  { country: "Saudi Arabia - Riyadh", timezone: "Asia/Riyadh" },
  { country: "Qatar - Doha", timezone: "Asia/Qatar" },
  { country: "Iran - Tehran", timezone: "Asia/Tehran" },
  { country: "Turkey - Istanbul", timezone: "Europe/Istanbul" },
  { country: "Israel - Jerusalem", timezone: "Asia/Jerusalem" },
  { country: "Jordan - Amman", timezone: "Asia/Amman" },
  { country: "Iraq - Baghdad", timezone: "Asia/Baghdad" },
  { country: "Sri Lanka - Colombo", timezone: "Asia/Colombo" },
  { country: "Kazakhstan - Almaty", timezone: "Asia/Almaty" },
  { country: "Uzbekistan - Tashkent", timezone: "Asia/Tashkent" },
  { country: "Georgia - Tbilisi", timezone: "Asia/Tbilisi" },

  
  { country: "United Kingdom - London", timezone: "Europe/London" },
  { country: "France - Paris", timezone: "Europe/Paris" },
  { country: "Germany - Berlin", timezone: "Europe/Berlin" },
  { country: "Italy - Rome", timezone: "Europe/Rome" },
  { country: "Spain - Madrid", timezone: "Europe/Madrid" },
  { country: "Portugal - Lisbon", timezone: "Europe/Lisbon" },
  { country: "Netherlands - Amsterdam", timezone: "Europe/Amsterdam" },
  { country: "Belgium - Brussels", timezone: "Europe/Brussels" },
  { country: "Switzerland - Zurich", timezone: "Europe/Zurich" },
  { country: "Austria - Vienna", timezone: "Europe/Vienna" },
  { country: "Greece - Athens", timezone: "Europe/Athens" },
  { country: "Norway - Oslo", timezone: "Europe/Oslo" },
  { country: "Sweden - Stockholm", timezone: "Europe/Stockholm" },
  { country: "Denmark - Copenhagen", timezone: "Europe/Copenhagen" },
  { country: "Finland - Helsinki", timezone: "Europe/Helsinki" },
  { country: "Poland - Warsaw", timezone: "Europe/Warsaw" },
  { country: "Czechia - Prague", timezone: "Europe/Prague" },
  { country: "Hungary - Budapest", timezone: "Europe/Budapest" },
  { country: "Romania - Bucharest", timezone: "Europe/Bucharest" },
  { country: "Ukraine - Kyiv", timezone: "Europe/Kyiv" },
  { country: "Russia - Moscow", timezone: "Europe/Moscow" },
  { country: "Ireland - Dublin", timezone: "Europe/Dublin" },

  { country: "USA - New York", timezone: "America/New_York" },
  { country: "USA - Chicago", timezone: "America/Chicago" },
  { country: "USA - Denver", timezone: "America/Denver" },
  { country: "USA - Los Angeles", timezone: "America/Los_Angeles" },
  { country: "USA - Anchorage", timezone: "America/Anchorage" },
  { country: "USA - Honolulu", timezone: "Pacific/Honolulu" },
  { country: "Canada - Toronto", timezone: "America/Toronto" },
  { country: "Canada - Vancouver", timezone: "America/Vancouver" },
  { country: "Canada - Winnipeg", timezone: "America/Winnipeg" },
  { country: "Mexico - Mexico City", timezone: "America/Mexico_City" },
  { country: "Jamaica - Kingston", timezone: "America/Jamaica" },
  { country: "Costa Rica - San Jose", timezone: "America/Costa_Rica" },
  { country: "Panama - Panama City", timezone: "America/Panama" },

  { country: "Brazil - Sao Paulo", timezone: "America/Sao_Paulo" },
  { country: "Argentina - Buenos Aires", timezone: "America/Argentina/Buenos_Aires" },
  { country: "Chile - Santiago", timezone: "America/Santiago" },
  { country: "Colombia - Bogota", timezone: "America/Bogota" },
  { country: "Peru - Lima", timezone: "America/Lima" },
  { country: "Venezuela - Caracas", timezone: "America/Caracas" },
  { country: "Ecuador - Guayaquil", timezone: "America/Guayaquil" },
  { country: "Uruguay - Montevideo", timezone: "America/Montevideo" },

  { country: "Egypt - Cairo", timezone: "Africa/Cairo" },
  { country: "South Africa - Johannesburg", timezone: "Africa/Johannesburg" },
  { country: "Nigeria - Lagos", timezone: "Africa/Lagos" },
  { country: "Kenya - Nairobi", timezone: "Africa/Nairobi" },
  { country: "Ethiopia - Addis Ababa", timezone: "Africa/Addis_Ababa" },
  { country: "Morocco - Casablanca", timezone: "Africa/Casablanca" },
  { country: "Algeria - Algiers", timezone: "Africa/Algiers" },
  { country: "Ghana - Accra", timezone: "Africa/Accra" },
  { country: "Tanzania - Dar es Salaam", timezone: "Africa/Dar_es_Salaam" },
  { country: "Senegal - Dakar", timezone: "Africa/Dakar" },
  { country: "Tunisia - Tunis", timezone: "Africa/Tunis" },
  { country: "Uganda - Kampala", timezone: "Africa/Kampala" },

  
  { country: "Australia - Sydney", timezone: "Australia/Sydney" },
  { country: "Australia - Melbourne", timezone: "Australia/Melbourne" },
  { country: "Australia - Brisbane", timezone: "Australia/Brisbane" },
  { country: "Australia - Perth", timezone: "Australia/Perth" },
  { country: "New Zealand - Auckland", timezone: "Pacific/Auckland" },
  { country: "Fiji - Suva", timezone: "Pacific/Fiji" },
  { country: "Papua New Guinea - Port Moresby", timezone: "Pacific/Port_Moresby" },
  { country: "Samoa - Apia", timezone: "Pacific/Apia" },
  { country: "Guam", timezone: "Pacific/Guam" },

  { country: "Iceland - Reykjavik", timezone: "Atlantic/Reykjavik" },
  { country: "Azores - Ponta Delgada", timezone: "Atlantic/Azores" },
  { country: "Canary Islands - Tenerife", timezone: "Atlantic/Canary" },
  { country: "Greenland - Nuuk", timezone: "America/Nuuk" }
];

const timzonelist = document.getElementById('timezone-list')
const favoritetimezonelist = document.getElementById('favoritetimezonelist')

let favoritetimezones = [

]

 function showCurrenttime(){
   const now = new Date();

   document.getElementById('currenttime').innerHTML = 
   now.toLocaleString("en-US" , {
      dateStyle : "full" , 
      timeStyle : "medium"
   }) ;
 }

showCurrenttime();
setInterval(showCurrenttime, 1000);


 function getdatetime(timezone){ 

    const date = new Date().toLocaleString("en-US" , {
      timeZone : timezone , 
      hour12 : true
    });

    return date;


 }


function loadtimezonelist(list = timezones){

   timzonelist.innerHTML = "";
   list.forEach((item , index) => {
      const orginalindex= timezones.indexOf(item);
      const row = document.createElement('tr')
      row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.country}</td>
      <td>${item.timezone}</td>
      <td>
         ${isexittimezone(orginalindex) ? `<span>exist</span>` : `
      <button class="addbtn" onclick = "addfavoritelist(${orginalindex})">Add</button>
        ` }
      </td>

      `
       timzonelist.appendChild(row)
   })
      
}

function addfavoritelist(index){
   const item = timezones[index];

   console.log("clicked add:" , index , item);
   const alreadyexists = favoritetimezones.some((fav) => {
      return fav.timezone === item.timezone;
   })
   
   if(!alreadyexists){
      favoritetimezones.push(item)
   }

   loadfavoritetimezonelist()
   loadtimezonelist(timezones);
}

function isexittimezone(index) {
    const result = favoritetimezones.some((fav) => {
        return fav.timezone === timezones[index].timezone;
    });

    return result;
}

function search(searchtext){
    const filterlist = timezones.filter((item) => {
    return item.country.toLowerCase().includes(searchtext.toLowerCase())
    })

    loadtimezonelist(filterlist)
}

function removefavoritelist(index){
    favoritetimezones.splice(index , 1)
    loadfavoritetimezonelist()
    timzonelist.innerHTML = "";
    loadtimezonelist(timezones);
}

function loadfavoritetimezonelist(){
   favoritetimezonelist.innerHTML = "";

   if(favoritetimezones.length === 0){
   const row = document.createElement('li');  
   row.innerHTML = "<div>no favorite time zones</div>"
    favoritetimezonelist.appendChild(row) 
   }
   else{
    favoritetimezones.forEach((item , index) => {
   const row = document.createElement('li');
   row.innerHTML = `
   ${item.country} 
   <span class ="time">${getdatetime(item.timezone)}</span>
   <button class="removebtn" onclick = "removefavoritelist(${index})">Remove</button>
   `
    favoritetimezonelist.appendChild(row)
   });

   }


  
}






 setInterval(() => {
    loadfavoritetimezonelist();
 } , 1000);
  

 loadtimezonelist(timezones)
 loadfavoritetimezonelist()