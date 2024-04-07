const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function generateCalendar() {
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();

  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
  }

  for (let i = 1; i <= endDate; i++) {
    let className =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? ' class="today"'
        : "";
    datesHtml += `<li${className}>${i}</li>`;
  }

  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive">${i - end + 1}</li>`;
  }

  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;
}
let content = document.querySelector(".content .info")


function contentGenerator(month){
    let contentHtml = ""
    if (month === 0) {
        contentHtml += `<li><b>1st</b> - New Year's Day: Marks the beginning of the Gregorian calendar year, celebrated globally with various customs and traditions.</li>`
        contentHtml += `<li><b>4th</b> - World Braille Day: Honors the birthday of Louis Braille, inventor of the Braille system, which enables people with visual impairments to read and write.</li>`
        contentHtml += `<li><b>6th</b> - Epiphany: Christian holiday commemorating the visit of the Magi to the infant Jesus, symbolizing the revelation of Christ to the Gentiles.</li>`
        contentHtml += `<li><b>15th</b> - Martin Luther King Jr. Day (USA): Honors the civil rights leader Martin Luther King Jr., known for his nonviolent activism in the American civil rights movement.</li>`
        contentHtml += `<li><b>17th</b> - Benjamin Franklin's Birthday: Celebrates the birth of Benjamin Franklin, one of the Founding Fathers of the United States and a polymath known for his contributions to science and politics.</li>`
        contentHtml += `<li><b>20th</b> - Inauguration Day (USA): Marks the swearing-in of the President of the United States, held every four years on January 20th following a presidential election.</li>`
        contentHtml += `<li><b>21st</b> - World Religion Day: Observed to promote interfaith understanding and harmony, emphasizing the commonalities between different religions.</li>`
        contentHtml += `<li><b>23rd</b> - National Handwriting Day: Promotes the importance of handwriting and encourages the practice of writing by hand, fostering creativity and cognitive skills.</li>`
        contentHtml += `<li><b>26th</b> - Republic Day of India: Celebrates the adoption of the Constitution of India in 1950, marking the country's transition to a republic.</li>`
        contentHtml += `<li><b>27th</b> - International Holocaust Remembrance Day: Honors the victims of the Holocaust during World War II and reaffirms a commitment to prevent genocide.</li>`
    }
    else if(month === 1){
        contentHtml += `<li><b>1st</b> - National Freedom Day (USA): Commemorates the signing of the 13th Amendment to the U.S. Constitution, which abolished slavery, in 1865.</li>`
        contentHtml += `<li><b>2nd</b> - World Wetlands Day: Raises awareness about the importance of wetlands for humanity and the planet's health.</li>`
        contentHtml += `<li><b>6th</b> - Waitangi Day (New Zealand): Celebrates the signing of the Treaty of Waitangi in 1840, considered the founding document of New Zealand.</li>`
        contentHtml += `<li><b>11th</b>- International Day of Women and Girls in Science: Promotes gender equality in science and technology fields.</li>`
        contentHtml += `<li><b>12th</b> - Darwin Day: Honors the birthday of Charles Darwin, the father of evolutionary theory, and celebrates scientific exploration and discovery.</li>`
        contentHtml += `<li><b>20th</b> - World Day of Social Justice: Raises awareness about social justice issues around the world and promotes efforts to tackle them.</li>`
        contentHtml += `<li><b>28th</b> - Rare Disease Day: Raises awareness about rare diseases and their impact on patients' lives and families.</li>`
        contentHtml += `<li><b>29th (Leap Year)</b> - Rare Leap Day: Occurs every four years and adds an extra day to the calendar to synchronize it with the solar year.</li>`
        contentHtml += `<li></li>`
        contentHtml += `<li></li>`
    }
    else if(month === 2){
        contentHtml += `<li><b>1st</b> - Zero Discrimination Day: Promotes equality and inclusion globally, particularly in healthcare.</li>`
        contentHtml += `<li><b>3rd</b> - World Wildlife Day: Raises awareness about the conservation of wildlife and their habitats.</li>`
        contentHtml += `<li><b>8th</b> - International Women's Day: Celebrates the social, economic, cultural, and political achievements of women.</li>`
        contentHtml += `<li><b>14th</b>- Pi Day: Celebrates the mathematical constant π (pi) and its significance in geometry and mathematics.</li>`
        contentHtml += `<li><b>15th</b> - Ides of March: Infamous for the assassination of Julius Caesar in 44 BC, marking a turning point in Roman history.</li>`
        contentHtml += `<li><b>20th</b> - International Day of Happiness: Promotes the pursuit of happiness as a fundamental human goal.</li>`
        contentHtml += `<li><b>21st</b> - World Poetry Day: Celebrates the art of poetry and its role in preserving languages and cultural heritage.</li>`
        contentHtml += `<li><b>22nd</b> - World Water Day: Raises awareness about the importance of freshwater and advocating for the sustainable management of water resources.</li>`
        contentHtml += `<li><b>24th</b> - World Tuberculosis Day: Raises awareness about the global epidemic of tuberculosis and efforts to eliminate the disease.</li>`
        contentHtml += `<li></li>`
    }
    else if(month === 3){
      contentHtml += `<li><b>1st</b> - April Fools' Day: A day of pranks and hoaxes observed in many countries on April 1st each year.</li>`
      contentHtml += `<li><b>7th</b> - World Health Day: Celebrated to raise awareness about global health issues and promote healthier living.</li>`
      contentHtml += `<li><b>14th</b> - Baisakhi: A Sikh festival marking the harvest season and the founding of the Khalsa community in 1699.</li>`
      contentHtml += `<li><b>22nd</b> - Earth Day: A day dedicated to environmental protection and raising awareness about environmental issues.</li>`          
      contentHtml += `<li><b>23rd</b> - St. George's Day (England): Commemorates Saint George, the patron saint of England, known for his legendary defeat of a dragon.</li>`
      contentHtml += `<li><b>26th</b> - Chernobyl Disaster: Nuclear reactor meltdown in 1986, resulting in one of the worst nuclear disasters in history.</li>`
      contentHtml += `<li><b>26th</b> - World Intellectual Property Day: Raises awareness of the role of intellectual property rights in encouraging innovation and creativity.</li>`
      contentHtml += `<li><b>30th</b> - Walpurgis Night: Celebrated in parts of Europe, marking the eve of the feast day of Saint Walpurga.</li>`
      contentHtml += `<li></li>`
      contentHtml += `<li></li>`
    }      
    else if(month === 4){
      contentHtml += `<li><b>1st</b> - International Workers' Day (May Day): Honors the labor movement and workers' rights.</li>`
      contentHtml += `<li><b>4th</b> - Star Wars Day: Celebrated by fans of the Star Wars franchise with the phrase "May the Fourth be with you."</li>`
      contentHtml += `<li><b>5th</b> - Cinco de Mayo: Commemorates the Mexican Army's victory over the French Empire at the Battle of Puebla in 1862.</li>`
      contentHtml += `<li><b>8th</b> - VE Day (Victory in Europe Day): Marks the end of World War II in Europe, commemorating the unconditional surrender of Nazi Germany.</li>`
      contentHtml += `<li><b>9th</b> - Europe Day: Celebrates peace and unity in Europe.</li>`
      contentHtml += `<li><b>12th</b> - Florence Nightingale's birthday: Honors the founder of modern nursing and her contributions to healthcare.</li>`
      contentHtml += `<li><b>20th</b> - Charles Lindbergh completes the first solo nonstop transatlantic flight in 1927, from New York to Paris.</li>`
      contentHtml += `<li><b>20th</b> - World Bee Day: Raises awareness about the importance of bees and other pollinators for the ecosystem.</li>`
      contentHtml += `<li></li>`
      contentHtml += `<li></li>`
    }
    else if(month === 5){
      contentHtml += `<li><b>1st</b> - International Children's Day: Celebrated globally to honor children and promote their well-being.</li>`
      contentHtml += `<li><b>4th</b> - Tiananmen Square Massacre: Occurred in 1989 when Chinese troops violently suppressed pro-democracy protests in Beijing.</li>`
      contentHtml += `<li><b>5th</b> - World Environment Day: Raises awareness and encourages action for the protection of the environment.</li>`
      contentHtml += `<li><b>6th</b> - D-Day: Allied forces launched the Normandy invasion during World War II in 1944, a turning point in the war against Nazi Germany.</li>`
      contentHtml += `<li><b>12th</b> - Anne Frank's Birthday: Anne Frank, known for her diary documenting the Holocaust, was born in 1929.</li>`
      contentHtml += `<li><b>14th</b> - World Blood Donor Day: Recognizes the importance of voluntary blood donation for saving lives.</li>`
      contentHtml += `<li><b>18th</b> - Juneteenth: Celebrates the emancipation of enslaved African Americans in the United States on June 19, 1865.</li>`
      contentHtml += `<li><b>20th</b> - World Refugee Day: Raises awareness about the plight of refugees worldwide and honors their resilience.</li>`
      contentHtml += `<li><b>21st</b> - International Day of Yoga: Promotes physical, mental, and spiritual well-being through yoga practice.</li>`
      contentHtml += `<li><b>28th</b> - Stonewall Riots Anniversary: Marking the start of the modern LGBTQ+ rights movement in 1969, following a police raid at the Stonewall Inn in New York City.</li>`
    }
    else if(month === 6){
      contentHtml += `<li><b>1st</b> - Canada Day: Celebrates the anniversary of the Constitution Act, 1867, which united three colonies into a single country called Canada.</li>`
      contentHtml += `<li><b>4th</b> - Independence Day (USA): Commemorates the adoption of the Declaration of Independence in 1776, marking the United States' independence from Great Britain.</li>`
      contentHtml += `<li><b>14th</b> - Bastille Day (France): Celebrates the Storming of the Bastille on July 14, 1789, a turning point in the French Revolution.</li>`
      contentHtml += `<li><b>20th</b> - Colombia Independence Day: Marks Colombia's declaration of independence from Spanish rule in 1810.</li>`
      contentHtml += `<li><b>20th</b>- Apollo 11 Moon Landing: Anniversary of the first manned moon landing in 1969, when Neil Armstrong and Buzz Aldrin set foot on the lunar surface.</li>`
      contentHtml += `<li><b>20th</b> - International Friendship Day: Promotes friendship and camaraderie among people, celebrated globally.</li>`
      contentHtml += `<li><b>25th</b> - DNA Day: Commemorates the completion of the Human Genome Project in 2003 and the discovery of the double helix structure of DNA by James Watson and Francis Crick in 1953.</li>`
      contentHtml += `<li><b>30th</b> - International Day of Friendship: Promotes friendship between peoples, countries, cultures, and individuals to inspire peace efforts and build bridges between communities.</li>`
      contentHtml += `<li></li>`
      contentHtml += `<li></li>`
    }
    else if(month === 7){
      contentHtml += `<li><b>1st</b> - Swiss National Day: Celebrates the founding of the Swiss Confederation in 1291.</li>`
      contentHtml += `<li><b>6th</b> - Hiroshima Day: Commemorates the dropping of the atomic bomb on Hiroshima in 1945, marking a devastating moment in human history.</li>`
      contentHtml += `<li><b>15th</b> - Indian Independence Day: Marks India's independence from British rule in 1947.</li>`
      contentHtml += `<li><b>15th</b> - Voting Rights Act signed into law in 1965, prohibiting racial discrimination in voting.</li>`
      contentHtml += `<li><b>26th</b> - Women's Equality Day (USA): Commemorates the passage of the 19th Amendment to the US Constitution, granting women the right to vote.</li>`
      contentHtml += `<li><b>29th</b> - Hurricane Katrina makes landfall in 2005, causing catastrophic damage along the Gulf Coast of the United States.</li>`
      contentHtml += `<li></li>`
      contentHtml += `<li></li>`
      contentHtml += `<li></li>`
      contentHtml += `<li></li>`
    }
    else if(month === 8){
      contentHtml += `<li><b>1st</b> - World War II Begins: Germany invades Poland in 1939, marking the start of World War II.</li>`
      contentHtml += `<li><b>2nd</b> - V-J Day: Japan formally surrenders, effectively ending World War II in 1945.</li>`
      contentHtml += `<li><b>8th</b> - International Literacy Day: Promotes literacy as a foundation for lifelong learning and development.</li>`
      contentHtml += `<li><b>11th</b> - 9/11 Attacks: Terrorist attacks on the World Trade Center and the Pentagon in 2001, leading to significant changes in global security measures.</li>`
      contentHtml += `<li><b>15th</b> - International Day of Democracy: Raises awareness about the importance of democracy and promotes its principles worldwide.</li>`
      contentHtml += `<li><b>21s</b>t - International Day of Peace: Aims to strengthen the ideals of peace among all nations and peoples.</li>`
      contentHtml += `<li><b>23rd</b> - First Day of Fall (Northern Hemisphere) / First Day of Spring (Southern Hemisphere): Marks the autumnal equinox in the Northern Hemisphere and the vernal equinox in the Southern Hemisphere.</li>`
      contentHtml += `<li><b>24th</b> - Pioneering Space Flight: SpaceX announces its first private passenger to fly around the Moon in 2018, signaling advancements in commercial space travel.</li>`
      contentHtml += `<li><b>28th</b> - Kyoto Protocol: An international treaty aimed at reducing greenhouse gas emissions, entered into force in 2005.</li>`
      contentHtml += `<li><b>30th</b> - International Translation Day: Celebrates the work of language professionals and promotes translation as a critical skill in fostering understanding among cultures.</li>`
    }
    else if(month === 9){
      contentHtml += `<li><b>1st</b> - International Coffee Day: Celebrates coffee and its cultural significance worldwide.</li>`
      contentHtml += `<li><b>4th</b> - Sputnik 1 launched by the Soviet Union in 1957, becoming the first artificial Earth satellite.</li>`
      contentHtml += `<li><b>12th</b> - Indigenous Peoples' Day (USA): Honors Indigenous cultures and heritage.</li>`
      contentHtml += `<li><b>14th</b> - Publication of the first draft of the human genome sequence by the Human Genome Project and Celera Genomics, laying the foundation for advances in personalized medicine and genetics research.</li>`
      contentHtml += `<li><b>16th</b> - Nelson Mandela awarded the Nobel Peace Prize in 1993 for his efforts to end apartheid in South Africa.</li>`
      contentHtml += `<li><b>24th</b> - United Nations Day: Commemorates the founding of the United Nations in 1945.</li>`
      contentHtml += `<li><b>29th</b> - Hurricane Katrina makes landfall in 2005, causing catastrophic damage along the Gulf Coast of the United States.</li>`
      contentHtml += `<li><b>31st</b> - Halloween: Celebrated with costumes, trick-or-treating, and spooky decorations in many countries.</li>`
      contentHtml += `<li></li>`
      contentHtml += `<li></li>`
    }
    else if(month === 10){
      contentHtml += `<li><b>1st</b> - World Vegan Day: Raises awareness about the benefits of veganism for animals, health, and the environment.</li>`
      contentHtml += `<li><b>9th</b> - Fall of the Berlin Wall: Symbolizes the end of the Cold War and the reunification of Germany in 1989.</li>`
      contentHtml += `<li><b>11th</b> - Remembrance Day (Commonwealth nations): Honors military personnel who died in the line of duty during World War I and other conflicts.</li>`
      contentHtml += `<li><b>14th</b> - World Diabetes Day: Raises awareness about diabetes and promotes access to care and prevention measures.</li>`
      contentHtml += `<li><b>20th</b> - Universal Children's Day: Promotes international togetherness and awareness among children, observed by the United Nations.</li>`
      contentHtml += `<li><b>22nd</b> - Assassination of John F. Kennedy: Marks the assassination of the 35th President of the United States in 1963, a significant event in American history.</li>`
      contentHtml += `<li><b>26th</b> - Thanksgiving Day (USA): A national holiday for giving thanks, typically celebrated with family gatherings and feasts.</li>`
      contentHtml += `<li><b>30th</b> - St. Andrew's Day (Scotland): Celebrates the patron saint of Scotland with traditional Scottish festivities and events.</li>`
      contentHtml += `<li><b>30th</b> - Independence Day (Barbados): Commemorates Barbados' independence from the United Kingdom in 1966, celebrated with cultural events and ceremonies.</li>`
      contentHtml += `<li></li>`
    }
    else if(month === 11){
      contentHtml += `<li><b>1st</b> - World AIDS Day: Raises awareness about HIV/AIDS, commemorating those who have died from the disease and supporting those living with HIV.</li>`
      contentHtml += `<li><b>7th</b> - Pearl Harbor Remembrance Day: Honors the lives lost in the Japanese attack on Pearl Harbor, Hawaii, in 1941, which led to the United States entering World War II.</li>`
      contentHtml += `<li><b>10th</b> - Human Rights Day: Promotes awareness and recognition of the Universal Declaration of Human Rights, adopted by the United Nations General Assembly in 1948.</li>`
      contentHtml += `<li><b>15th</b> - Bill of Rights Day: Commemorates the ratification of the Bill of Rights, the first ten amendments to the United States Constitution, in 1791.</li>`
      contentHtml += `<li><b>17th</b> - Wright Brothers Day: Celebrates the achievements of Orville and Wilbur Wright, who successfully flew the first powered aircraft in 1903, leading to the era of modern aviation.</li>`
      contentHtml += `<li><b>21st</b> - Winter Solstice: Marks the shortest day and longest night of the year in the Northern Hemisphere, with various cultural and religious celebrations.</li>`
      contentHtml += `<li><b>25th</b> - Christmas Day: Celebrates the birth of Jesus Christ in Christian tradition, marked by religious observances, gift-giving, and festive gatherings.</li>`
      contentHtml += `<li><b>26th</b> - Kwanzaa Begins: A week-long celebration honoring African heritage and culture, observed by millions of people worldwide, particularly in the African American community.</li>`
      contentHtml += `<li><b>31st</b> - New Year's Eve: Marks the last day of the year in the Gregorian calendar, celebrated with parties, fireworks, and countdowns to midnight.</li>`
      contentHtml += `<li></li>`
    }

    content.innerHTML = contentHtml;
}

contentGenerator(month);

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    contentGenerator(month);
    generateCalendar();
  });
});

generateCalendar();
