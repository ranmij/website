const destinations = [
    // region 1
    {img : "assets/img/regions/1/agno_umbrella_rocks.jpg", heading : "Agno Umbrella Rocks", paragraph : "In the province of Pangasinan, there is another quiet, sleepy little town named Agno. Umbrella Rocks are large boulders that are mushroom-shaped and take their name due to their appearance. They are very popular with the locals, and like most places around this region; it was bereft of foreign tourists. he place was packed with locals. There were numerous families camping along the beach, enjoying barbeques and family time.", region : ""},
    {img : "assets/img/regions/1/calle_crisollogo.jpg", heading : "Calle Crisollogo", paragraph : "Calle Crisologo owes its name to the illustrious Ilocano poet, writer, and playwright Governor Marcelino “Mena” Crisologo. Previously, the street was called Calle de Escolta de Vigan, whose residents were mostly families who profited from the galleon trade that included Ilocos as a key port. When Governor Crisologo died in 1927, the street was renamed Calle Crisologo in his honor.", region : ""},
    {img : "assets/img/regions/1/grape_farm.jpg", heading : "Grape Farm", paragraph : "Grapes has long been grown in La Union, but it wasn’t until photos and articles of Bauang, La Union Grape Farms have gone viral that this local secret was revealed to the world. For Many Filipinos this is surprising since we thought that grapes can only be grown in places with cold weather. La Union’s Grape Farm is believed to be started by Avelino Lomboy who owns Lomboy Grape Farm. He started planting in the 70’s as a hobby and since then, it has grown into a large business. He shared his knowledge in viticulture to other families in Bauang and eventually, family-owned grape farms mushroomed in La Union.", region : ""},
    {img : "assets/img/regions/1/kapupuraw.png", heading : "Kapurpurawan", paragraph : "Every visitor heading to Ilocos Norte for a holiday drop off to Burgos town only to see the Kapurpurawan Rock Formation up close and personal. One will grow to enjoy the location because of its panoramic view, which is one of the best backdrop for photos. It's impressive geological forms and natural features function over a variety of geological cycles.", region : ""},
    {img : "assets/img/regions/1/windmills.jpg", heading : "Windmills", paragraph : "Bangui Wind Farm is a wind farm in the Philippines, in Bangui, Ilocos Norte. Over the years, these windmills have developed into a global tourist attraction that, like the famous Don Quixote, has inevitably attracted and anticipated millions of visitors.", region : ""},
    // region 2
    {img : "assets/img/regions/2/Batanes, Diura Fishing Village.jpg", heading : "Diura Fishing Village", paragraph : "Located in Mahatao, Batanes, Diura Fishing Village allows you to get a glimpse of how locals live in Batanes by showing how the Ivatan fish the traditional way. The village itself is inhabited by an association of fishermen called the Mataw. Here, they practice Arayu, a traditional way of fishing, and Kapayvanuvanua, an ancient fishing ceremony.", region : ""},
    {img : "assets/img/regions/2/Cagayan, Cape Engaño Lighthouse.png", heading : "Cape Engaño Lighthouse", paragraph : "The Cape Engaño Lighthouse is a historic lighthouse in Palaui Island in the town of Santa Ana, Cagayan. It is over a hundred years old. The lighthouse is an example of Spanish architecture. It stands on a hill overlooking the seascape, and visitors can view the Dos Hermanas or Two Sisters Island nearby on top of the lighthouse.", region : ""},
    {img : "assets/img/regions/2/Isabela, Balay na Santiago.jpg", heading : "Balay na Santiago", paragraph : "This museum houses Santiago City’s collection of artifacts, relics, dresses and antique furniture showing the culture and traditions that are typical in this region of northern Luzon.  Some of the interesting displays are bulul statues (carved wooden idols),  wooden and clay jars and a replica of a traditional Ifugao house.  ", region : ""},
    {img : "assets/img/regions/2/Neuva Vizcaya, Imugan Falls.png", heading : "Imugan Falls", paragraph : "Imugan Falls is a 35-foot single layer cascade along Imugan River which is located in the village of the same name (Imugan). Its cold water emanates from a spring atop Mount Imugan dropping to a shallow basin before flowing downstream. ", region : ""},
    {img : "assets/img/regions/2/Quirino, Governor_s Rapids.jpg", heading : "Governor's Rapids", paragraph : "For the adventure seeker, and simple tourist alike. The governor’s rapids in the town of Maddela which is a part of a tributary of the Cagayan River. It features astonishingly clear water which rightfully earned it the award of being amongst the cleanest inland bodies of water in the totality of the Cagayan Valley.", region : ""},
    // region 3
    {img : "assets/img/regions/3/Aurora, Bulawan Falls.jpg", heading : "Bulawan Falls", paragraph : "Acclaimed as The Cleanest Inland Body of Water- Regional Category, Bulawan Falls rises one hundred meters from the ground standing majestically on the wilderness of Brgy. Paleg. The impressive rock walling along the bank of the river adds to its awe-inspiring beauty. Added attraction is the towering tree that showers crystallized water believed to be a miraculous. With the construction of the different facilities in the area, it is fast becoming a tourist destination in the province.", region : ""},
    {img : "assets/img/regions/3/Bataan, Las Casas Filipinas De Acuzar.png", heading : "Las Casas Filipinas De Acuzar", paragraph : "In 2003 Jose “Gerry” Acuzar started his project Las Casas Filipinas de Acuzar which aims to rebuild Spanish-colonial era heritage houses to preserve the history of the old Philippines. The 400 hectares of land in Bagac, Bataan became the new home of 27 carefully selected houses which are all based on its historical, architectural and cultural value, ensuring that each establishment carries significant importance towards Philippine’s history.", region : ""},
    {img : "assets/img/regions/3/Bataan, Philippine-Japan Friendship Tower.png", heading : "Philippine-Japan Friendship Tower", paragraph : "This tower in the town of Bagac is a clear symbol of positive transformation. Former adversaries during Word War II reconciled and eventually became close allies. The Risho Kosei Kai Group built the monument tower in 1975. It is a reminder that Japan , now a pacifist country , vows never to engage in war again.", region : ""},
    {img : "assets/img/regions/3/Pampanga, MT. Pinatubo.png", heading : "MT. Pinatubo", paragraph : "Often called the “beautiful disaster”, you’ll stand in awe once you see the popular Pampanga travel destination Mt. Pinatubo. To see the magnificent crystal clear waters of Crater Lake, you will have to ride the 4×4 or an ATV. The ride will be a rocky one but once you see the view, all the bumps you’ve gone through are worth it! What makes this trip even better is that you can interact with one of the oldest indigenous tribes in the Philippines, the Aetas, and experience their culture.", region : ""},
    {img : "assets/img/regions/3/Tarlac, Monsaterio de Tarlac.jpg", heading : "Monsaterio de Tarlac", paragraph : "The Monasterio de Tarlac is a Latin Rite Catholic monastery on top of Mount Resurrection, part of the Zambales Mountain Range on the island of Luzon in the Philippines. It is part of the Mount Resurrection Eco Park in Barangay Lubigan, San José, Tarlac.", region : ""},
    // region 5
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    // region 6
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    // region 7
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    // region 8
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    // region 9
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    // region 10
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    // region 11
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : "", region : ""},
    {img : "", heading : "", paragraph : ""},
];

jQuery(function() {
    for (let i = 0; i < destinations.length; i++) {
        if (destinations[i]['img']) {
            let content_box = document.createElement("div");
            let heading = document.createElement("h1");
            let paragraph = document.createElement("p");
            let img = document.createElement("img");
            let read = document.createElement("a");
            let desc = document.createElement("div");
            $(desc).addClass("desc");
            $(img).attr("src", destinations[i]["img"]);
            $(content_box).addClass("content-box p-3");
            $(heading).addClass("display-6 my-3");
            read.innerHTML = "Read more"
            let heading_text = document.createTextNode(destinations[i]["heading"]);
            let paragraph_text = document.createTextNode((destinations[i]["paragraph"]) ? destinations[i]["paragraph"]:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ut perspiciatis natus laudantium quo voluptatem deserunt dicta consequuntur iste dignissimos odit aut mollitia distinctio cumque quos, placeat quia, ratione aliquam. Beatae quo, esse recusandae dolorum adipisci error, dicta mollitia corporis quam excepturi molestiae reprehenderit earum iste amet voluptatibus laboriosam suscipit!");
            paragraph.appendChild(paragraph_text);
            heading.appendChild(heading_text);
            content_box.appendChild(img)
            desc.appendChild(heading)
            desc.appendChild(paragraph)
            desc.appendChild(read);
            content_box.appendChild(desc);
            $("#contents").append(content_box)
        }
    }
});